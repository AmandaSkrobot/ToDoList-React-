import { useState } from "react";
import ToDoItem from "../ToDoItem";
import IconList from "../Assets/listicon.png"
import Reactlogo from "../Assets/logo.svg"
function ToDoList() {


        const [tasks, setTasks] = useState([
                
                {
                        id:0,
                        text: "First Task." ,                         
                        completed:false

                }, 

            {

                        id:1,
                        text:"Second Task",
                        completed:false


            }


        ]) ;

        const [text, setText] = useState('');



function addTask (text:string) {

if (text ==="") {

    return 

}
    const newTask = {

        id: Date.now(),

        text,
        completed: false
    };
     
    setTasks([...tasks, newTask])
    console.log(...tasks)
    setText('');
}

function deleteTask(id:number) {

   
    setTasks(tasks.filter(task =>  task.id !== id))

       
    
    
    


}


function toggleCompleted (id:number) {

    setTasks(tasks.map(task => {

                    if (task.id === id) {


                            return {...task, completed:!task.completed}

                    } else {

                            return task;

                    }


    }
        
        
        
        ))



}




    return(


            <div>

                        <div className="list-container">
                                   <div style={{display:'flex', margin:'20px 0 10px 0'}}>     
                                        <img style={{width:'90px', height:'100px'}}className="list-icon" src={IconList} alt="" />
                                        <h1 style={{textTransform:'uppercase'}}>To Do List</h1>

                                    </div>
                                    <div className="list-items">
                                            <div>
                                               <input  className="input" onChange={e=> setText(e.target.value) } value={text} placeholder="Add a task..." /> 
                                                <button onClick={()=> addTask(text) } className="btn-add" >Add</button>
                                                </div>
                                            <div className="item">

                                                <div>
                                                    {tasks.map(item => (

                                                        <ToDoItem
                                                        
                                                            key={item.id}
                                                            task={item}
                                                            deleteTask={deleteTask}
                                                            toggleCompleted = {toggleCompleted}
                                                         
                                                        />   


                                                    ))}

                                                </div>

                                                
                                            </div>

                                    </div>

                                                       

                        </div>

                        <footer style={{margin:'20px 0 0 0', fontSize:'14px', fontWeight: '400', color:'white'}}><span>Developed by <a href="https://github.com/AmandaSkrobot">Amanda Skrobot  </a> <span> made with </span> </span>
                        
                                                <p></p>           <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}}> <a href="https://react.dev/"> <img style={{width:'40px', height:'40px', backgroundColor:'#455564', borderRadius:'10px',  padding:'50x 0 0 0'}} src={Reactlogo} alt='React Logo' /> </a></div> 
                        </footer>   
            </div>



    )


}


export default ToDoList;