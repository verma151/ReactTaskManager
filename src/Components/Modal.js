import React,{useState} from "react";
import { Icon } from 'react-icons-kit'
import {xCircle} from 'react-icons-kit/feather/xCircle'
import { authentication, database } from '../Config/Config';


export const Modal = ({editTodoValue,editModal, updateTodoHandler}) => {

    const [editTodo,setEditTodo]=useState(editTodoValue.Todo);
    const [editDate,setEditDate]=useState(editTodoValue.expectedDate)
    const [editStatus,setEditStatus]=useState(editTodoValue.currentStatus)
    
    const handleClose=()=>{
        editModal(null)
    }

    //Updating the values in the modal dialog box
    const handleEditTodoSubmit=(e)=>{
        e.preventDefault();
        handleClose();
        /*Real time updation on the frontend*/
        updateTodoHandler(editTodo,editDate,editStatus,editTodoValue.id);
        authentication.onAuthStateChanged(user=>{
            if(user){
                database.collection('todos of ' + user.uid).doc(editTodoValue.id).update({
                    Todo: editTodo,
                    expectedDate:editDate,
                    currentStatus:editStatus
                })
            }
            else{
                console.log('user is not signedin to update todo')
            }
        })
    }

    return(
        <div className="modal-container">
            <div className='modal'>
            <div className='header'>
                        <div className='update-text'>
                        Update your todo
                        </div>
                        <div className='close-btn'
                        onClick={handleClose}>
                            <Icon size={28} icon={xCircle}
                                style={{color: 'rgb(165, 2, 2)'}}
                            />
                        </div>
            </div>
                <div className='container-fluid'>
                    <form autoComplete="off" className='form-group'
                   onSubmit={handleEditTodoSubmit}>
                        <input type="text" className='form-control'
                            required placeholder="Update your todo"
                            value={editTodo}
                            onChange={(e)=>setEditTodo(e.target.value)}
                        />
                        <br></br>
                        <input type="date" className='form-control'
                            required
                            value={editDate}
                            onChange={(e)=>setEditDate(e.target.value)}
                        />
                         <label>
                           Task Is Complete/Incomplete:
                        <select className='form-control' 
                            required
                            value={editStatus} 
                            onChange={(e)=>setEditStatus(e.target.value)}>
                            <option value="Incomplete">Incomplete</option>
                            <option value="Complete">Complete</option>
                        </select>

                        </label>

                        <br></br>
                        <button type="submit" className='btn btn-success btn-lg'>
                           UPDATE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}