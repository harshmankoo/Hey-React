
import { useState } from "react"

function Counter() {
    const [count, setcount] = useState(0)
    const [name, setName] = useState("")
    const[show,setShow]= useState(true)

    const handleChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted by " + name)
    }


//   let message;

//   if (show) {
//     message = <h1>Hello World !!</h1>;
//   } else {
//     message = null;
//   }

    return (
        <>
            <h1>COUNTER :{count}</h1>
            <button onClick={() => (setcount(count + 1))}> Increment</button>
            <button onClick={() => (setcount(count - 1))}>Decrement</button><br />

            <br />
{/* ================================================================ */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Your Name...." onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <h2>Hello from {name}</h2>
{/* ======================================================================= */}
            <br />
{show ? <h1>Hello World !!</h1> : null}
<button onClick={()=>(setShow(!show))}>TOGGLE</button>
{/* {message} */}

{/* =========================================================================== */}
        </>
    )
}

export default Counter;

