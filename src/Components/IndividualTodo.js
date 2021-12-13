import React from "react";
import {Icon} from 'react-icons-kit';
import {edit2} from 'react-icons-kit/feather/edit2';
import {trash} from 'react-icons-kit/feather/trash';


export const IndividualTodo = ({individualTodo, deleteTodo,editModal}) => {

    const handleDelete=()=>{
        deleteTodo(individualTodo.id);
    }

    const handleEditModal=()=>{
        editModal(individualTodo);
    }

        /*Display the Task*/   
        return (
            <div className='todo'>
            <div>
                <h6>{individualTodo.Todo}</h6>
            </div>
            <div className='actions-div'>
                <div>
                    <h6 className="status"><center>{individualTodo.expectedDate}</center></h6>
                </div>
            <div className="rounded-circle">
                <h5 className="status"><center>{individualTodo.currentStatus}</center></h5>
            </div>
            <div onClick={handleEditModal}>
                <Icon size={25} icon={edit2}/>
            </div>
                <div className='delete-btn' onClick={handleDelete}>
                    <Icon size={25} icon={trash}/>
                </div>
            </div>
        </div>
          )
    }