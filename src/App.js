import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import {authentication, database} from './Config/Config';
import { NotFound } from './Components/NotFound';
import Landing from './Components/Landing';


export class App extends Component {

  state={
    currentUser: null,
    todos:[],
    editTodoValue: null
  }
  
  componentDidMount(){
    authentication.onAuthStateChanged(user=>{
      if(user){
        database.collection('users').doc(user.uid).get().then(snapshot=>{
          this.setState({
            currentUser: snapshot.data().FullName
          })
        })
      }
      else{
        console.log('user is not signed in to retrive username')
      }
    })

    //Retriving the todo's from the current user
    authentication.onAuthStateChanged(user=>{
      if(user){
        const todoList=this.state.todos;
        //console.log(todoList);
        database.collection('todos of '+user.uid).onSnapshot(snapshot=>{
          let changes = snapshot.docChanges();
          changes.forEach(change=>{
            if(change.type==='added'){
              todoList.push({
                id: change.doc.id,
                Todo: change.doc.data().Todo,
                expectedDate: change.doc.data().expectedDate,
                currentStatus: change.doc.data().currentStatus
              })
            }

            //realtime deletion 
            if(change.type==='removed'){
              //console.log(change.type);
              for(var i=0; i<todoList.length; i++){
                if(todoList[i].id === change.doc.id){
                  todoList.splice(i,1);
                }
              }
            }
         
            this.setState({
              todos: todoList
            })
          })
        })
      }
      else{
        console.log('user is not signed in to retrive todos')
      }
    })  
    
  }
  //Deleting individual task w/r to id
  
  deleteTodo=(id)=>{
    // console.log(id);
    authentication.onAuthStateChanged(user=>{
      if(user){
        database.collection('todos of ' + user.uid).doc(id).delete();
      }
      else{
        console.log('user is not signed in to delete todos');
      }
    })
  }

  //updating todos in the modal box saving the data into object. The object is hold by editModal  
  editModal=(obj)=>{
    this.setState({
      editTodoValue: obj
    })
  }

    //RealTime Updation of Task through todo id in database
  updateTodoHandler=(editTodo,editDate,editStatus,id)=>{
    // console.log(editTodo, id);
    const todoList = this.state.todos;
    for(var i = 0; i<todoList.length; i++){
      if(todoList[i].id===id){
        todoList.splice(i,1,{id,Todo: editTodo,expectedDate:editDate,currentStatus:editStatus});

      }
      this.setState({
        todos: todoList
      })
    }
  }

  
  render(){
    //console.log(this.state.todos);
    return (
      <Router>
        <Switch>
          <Route path='/landing' component={Landing}/>
          <Route exact path='/home' component={()=>
          <Home
          currentUser={this.state.currentUser}
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          editTodoValue={this.state.editTodoValue}
          editModal={this.editModal}
          updateTodoHandler={this.updateTodoHandler}
          />}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path="*" component={Landing}/>
          <Route component={NotFound}/>
          
        </Switch>
      </Router>
      )
  }
}

export default App;
