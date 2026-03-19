import { useState } from "react";
import "./BasicTodoList.css";

function BasicTodoList() {
    const [task, setTask] = useState("")
    const [showList, setList] = useState([])

    const handleList = (e) => {
        console.log(e.target.value)
        setTask(e.target.value)

    }

    // const handleSubmitList = () => {
    //     e.preventDefault();
    // }

    const addTasks = () => {
         if (task.trim() === "") {
        return; 
    }
        setList([...showList, task])
        setTask("");
    }

    // const deleteTask = (index)=> {

    // }
    
    const deleteTask = (index) => {
    const updatedList = showList.filter((deletethetask, i) => i !== index);
    setList(updatedList);
}

    return (
        <>

        <h1 className="headerline">“Your goals, your tasks.”</h1>
        <br />
        <br />
        <div className="todo-main-container">
                <h1 className="main-header">TO-DO-LIST 📓</h1>
                {/* <form onSubmit={handleSubmitList}> */}
                <input  className= "input1" type="text" placeholder="Enter Your Daily Task" onChange={handleList} value={task} />
                <button onClick={addTasks} className="addtaskbtn">Add Tasks</button>
                    <div className="task-list">Task List</div>

                {
               
                    showList.length === 0 ? ( <div className="listpara"><p>Here's the Task List is Empty</p> </div>) : (<ol>
                        {showList.map((x, i) => (
                            <li key={i}> {x}
                               <button className="deletebtn" onClick={() => deleteTask(i)}>Delete Task</button></li>
                        ))}
                    </ol>
                    
                    )
                  
                   
                }
                
                
                {/* </form> */}
            </div>
        </>

    )
}

export default BasicTodoList

