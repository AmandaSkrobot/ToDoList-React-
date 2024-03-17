import React, { useState } from "react";

import './CSS/ToDoItem.css'




function ToDoItem ({task, deleteTask, toggleCompleted} :any) {

 function handleChange(id:any) {


    toggleCompleted(task.id)


 }

    return (
        
        <div className="list-item-container">
           
            <div className="items-wrap">
                    <p className={task.completed? 'checked': ''}>{task.text}</p> 
                    
                    <div className="buttons">
                           
                            <input className='checkbox'type="checkbox" checked={task.completed } onChange ={handleChange}></input>
                        
                            <button className="delete-btn" onClick={()=>(deleteTask(task.id))}>X</button>
                                                
                    </div>

            </div>

            </div>

    ) 




}



export default ToDoItem;