
import{ useRef } from "react";

function UNcontrolledForm (){
    const nameref = useRef();
    const emailref = useRef();

    function handleSubmit (e){
      e.preventDefault();

        console.log("Name",nameref.current.value)
        console.log("Emial",emailref.current.value)

    }
    return(
        <> <h2>UNCONTROLLED FORM</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="please enter your name" ref={nameref} /><br /><br />


        <input type="email" placeholder="Please Enter Your Emial" ref={emailref}/>
 
 <button type="Submit">Submit</button>
 </form>
        </>
    )
}

export default UNcontrolledForm;