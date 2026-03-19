import { useState } from "react";

function BasicTodoList() {
    const [task,setTask] = useState("")
    const [showList,setList] = useState([])

    const handleList = (e)=>{
        console.log(e.target.value)
        setTask(e.target.value)

    }

    // const handleSubmitList = () => {
    //     e.preventDefault();
    // }

    const addTasks = ()=>{
        setList ([...showList,task])
         setTask(""); 
    }

    return(
    <>
    {/* <form onSubmit={handleSubmitList}> */}
<input type="text" placeholder="Enter Your Daily Task" onChange={handleList}   value={task}  />
<button onClick={addTasks}>Add Tasks</button>
{
    showList.length===0 ?(<p>Please Add Task in the Todo List</p>) : (<ul>
        {showList.map ((x,i)=>(
            <li key={i}> {x}</li>
        ))}
        </ul>
    )
}
{/* </form> */}
    </>

    )
} 

export default BasicTodoList