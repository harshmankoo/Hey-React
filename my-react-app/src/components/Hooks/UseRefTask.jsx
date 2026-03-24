import { useState, useEffect, useRef } from "react";

const FocusInput = () => {
    // Create a ref to store the input element
    const inputRef = useRef(null)

    const handleFocus = () => {
        // Access the actual DOM element with .current
        console.log("INPUT Element :", inputRef.current)

        inputRef.current.focus();
    }
    return (
        <>
            <input ref={inputRef} type="text" placeholder="focus input with use ref" />
            <button onClick={(handleFocus)}>Focus and select input</button>
        </>

    )
}




function UncontrolledInput(){
const nameRef = useRef(null);
const emailRef = useRef(null)

    return(<>
    <form onSubmit={handlesubmit}>
    <input ref={nameRef} type="text" placeholder="enter your name"  />
    
    <input ref={emailRef} type="email" placeholder="write ur emial here"/>
    
    <button type="submit">submit</button>
    </form>
    </>
    )
}
export default FocusInput;