
import { useState } from "react"

function Counter() {
    const [count, setcount] = useState(0)
    const [name, setName] = useState("")
    const [show, setShow] = useState(true)
    const [showMassage, setshow] = useState(false)
    const [showData, setUsers] = useState([])
    const users = ["Dev", "Prem", "Raj"]
    const products = [
        { name: "Shoes", price: 800 },
        { name: "Shirt", price: 400 },
        { name: "Watch", price: 1200 },
        { name: "Cap", price: 200 }
    ];

    const handleChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted by " + name)
    }

    const addData = () => {
        setUsers([...showData, "New list"])
    }


    return (
        <>
            <h1>COUNTER :{count}</h1>
            <button onClick={() => (setcount(count + 1))}> Increment</button>
            <button onClick={() => (setcount(count - 1))}>Decrement</button><br />

            <br />
            ================================================================ 
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Your Name...." onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <h2>Hello from {name}</h2>
            =======================================================================
            <br />
            {show ? <h1>Hello World !!</h1> : null}
            <button onClick={() => (setShow(!show))}>TOGGLE</button>

            <br />
            <br />
            ===========================================================================
<br />

            {/* Task 1

Toggle text using button */}


            {showMassage ? <h1>Hey i am using a usestate for the toggle Message </h1>
                : null}

            <button onClick={() => (setshow(!showMassage))}>Click Here to Reveal the Info</button>
            <br />
=====================================================================================
<br />

{/*
Task 2

Show “No Data” if list empty
Otherwise show list */}


<button onClick={addData}>Show List</button>
{
showData.length===0 ?(<p>NO DATA FOUND IN THE LIST</p>) : (
    <ul>
        { showData.map((x,i)=>(
            <li key = {i}>{x}</li>
        ))}
    </ul>
)}

// ============================================================================================

{/* this task is about the accesing aarray value without useState */}

{/* i am here rendering the list */}
<ul>
    {
        users.map((x,i)=>(
            <li key = {i}> {x} </li>
        ))
    }
</ul>

<br />

<br />
===================================================================================================



    </>
    )
}

export default Counter;

