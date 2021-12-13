import React,{useState} from "react";
import { Header } from "./Header";
import {authentication,database} from '../Config/Config';
import { Todos } from "./Todos";
import { Modal } from "./Modal";

export const Home = ({currentUser, todos, deleteTodo,editTodoValue,editModal,updateTodoHandler}) =>{

    const [todo, setTodo]=useState('');
    const [date, setDate]=useState('');
    const [status, setStatus]=useState('Incomplete');
    const [todoError, setTodoError]=useState('');
    
    
    const handleTodoSubmit=(e)=>{
        e.preventDefault();
        authentication.onAuthStateChanged(user=>{
            //console.log(user)
            /*To see if user is signed in or not for performing operation*/
            if(user){
                database.collection('todos of '+ user.uid).add({
                    Todo: todo,
                    expectedDate: date,
                    currentStatus: status 
                   
                }).then(setTodo('')).catch(error=>setTodoError(error.message))
            }
            else{
                console.log('User is not signed in to add the todo to database');
            }
        })
    }


    return(
        <div className='wrapper'>
        
            <Header currentUser={currentUser}/>
            <br></br>
            <br></br>
          <div className='container'>
            <form autoComplete='off' className='form-group'
            onSubmit={handleTodoSubmit}>
             
            {currentUser&&<>
              <input type="date" className='form-control' required
                onChange={(e)=>setDate(e.target.value)}
                value={date}
              />
              <br></br>
               <input type="text" placeholder="Enter TODO's"
                className='form-control' required
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
              />
              <br></br>
              <div style={{width: 100+'%',
              display: 'flex',justifyContent: 'flex-end'}}>
                <button type="submit" className='btn btn-success'
                  style={{width: 100+'%'}}>
                   ADD
                </button>
              </div>
            </>}

             
            {!currentUser&&<>

              <input type="date" className='form-control' required disabled
              />
              <br></br>
              <input type="text" placeholder="Enter TODO's"
                className='form-control' required disabled/>
              <br></br>
              <div style={{width: 100+'%',
                display: 'flex',justifyContent: 'flex-end'}}>
                <button type="submit" className='btn btn-success'
                disabled style={{width: 100+'%'}}>
                   ADD
                </button>
              </div>
              <div className='error-msg'>
                Please register your account or login to use application
              </div>
            </>}
            </form>
          
            {todoError&&<div className='error-msg'>{todoError}</div>}
         
            <Todos 
            todos={todos} 
            deleteTodo={deleteTodo} 
            editModal={editModal}/>
 
            </div>
           
             {editTodoValue&&
            <Modal 
             editTodoValue={editTodoValue}
             editModal={editModal} 
             updateTodoHandler={updateTodoHandler}
            />}
        </div>
    )
}