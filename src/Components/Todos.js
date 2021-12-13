import React from "react";
import { IndividualTodo } from './IndividualTodo';
/*Individual Todo Deletion OR Updation*/
export const Todos = ({todos, deleteTodo, editModal}) => {
  
    return todos.map((individualTodo)=>(
        <IndividualTodo 
        individualTodo={individualTodo}
        key={individualTodo.id} 
        deleteTodo={deleteTodo}
        editModal={editModal}
        />
    ))
}