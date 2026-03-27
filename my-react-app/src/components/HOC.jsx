// 🚀 YOUR PRACTICE TASK

// 👉 Build this:

// Create component:
// function Message() {
//   return <h2>This is original</h2>;
// }
// Create HOC:
// Add red color text
// Wrap and use it


import React, { Component, useState, useEffect } from "react";
import Button from "./Button";

function Message() {
    return (
        <h2>This is original </h2>
    )

}



// =============================
function withExtra(Component) {   //this is a hoc component 
    return function () {
        return (
            <>
                <br />==============================================================
                <h2 style={{ color: "red" }}>This is added and red Colored bY hOC </h2>
                <Component />
            </>
        );
    }
}


// =====================================

// here i have to wrap my component 

const WithEnhancedHello = withExtra(Message)


// ==========================================================================================





// Here i am using the HOc with the this.props.

function User({ name }) {
    return (
        <h2>Hello From prop = ({name})</h2>
    )
}

// =============================================
// here i am creating hoc

function UserMessage(Component) {
    return function (props) {
        return (
            <>
                ===================================================================
                <br />
                <h2 style={{ color: "white" }}>Hey Here am using the HIGH ORDER COMPONENT WITH PROPS</h2>
                <Component {...props} />
            </>
        )
    }

}

// ==================================================================

// here i am wraping the Component

const WithEnhancedUser = UserMessage(User)





export default WithEnhancedHello;
export { WithEnhancedUser }

// ===========================================================================================================================

// Higher Order Components (HOC) - Complete Tutorial


function mainDiv() {
    return (
        <div className="maindiv">
            <h2>Hey here i am using a Hoc for the border</h2>
            <br />
            <h1>NetSquare Softwares</h1></div>
    )

}


// =================Now Function with border

function addingBorder(Component) {
    return function () {
        return (
            <div style={{ border: "3px solid red" }}>
                <title>HIGH ORDER COMPONENT</title>
                <h1> Title : HoC</h1>

                <Component />
                <br />
            </div>

        )

    }
}


const MainBorderCLass = addingBorder(mainDiv)
export { MainBorderCLass }
// =========================================================================

// -----------------WithLoading--------------------------

function UserList() {

    const users = [
        { id: 1, name: 'Inder Singh', role: 'Senior Dev' },
        { id: 2, name: 'Rahul Kumar', role: 'Developer' },
        { id: 3, name: 'Priya Sharma', role: 'Designer' }
    ];


    return (
        <div>
            <h3>Users</h3>
            {users.map(user => (<p key={user.id}>{user.name}-{user.id}</p>))}
            <br />
            =============================================================================
        </div>
    )
}


// =====================

// wrapped function 

function MainUsers(Component) {                         // Component = UserList
    return function WithLoading({ ...props }) {
        const [isLoading, setisLoading] = useState(false)
        const handleClick = () => {
            setisLoading(true)

            setTimeout(() => {
                setisLoading(false)
            }, 2000);
        };
        if (isLoading) {
            return (<div>
                <p>Loading...</p>
            </div>
            )

        }
        return (
            <div><br />
                ==================================================================================<br />
                <button onClick={handleClick}>Load Users</button>

                <Component {...props} />
            </div>
        )
    };
}


// ===========

const ToViewUsers = MainUsers(UserList)

export { ToViewUsers }


// ===================================================================================================================

// Example: withLogger HOC

function Counter({ initialCount = 0 }) {
    const [count, setCount] = useState(10);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
}
// ================================

function WithLogger(Component, Name) {
    return function withlogger(props) {
        const [show, setshow] = useState(true)


        useEffect(() => {

            console.log(Name + "Component Mounted")
            return () => {
                console.log(Name + "Component Unmounted")
            }
        }, []);

        return (<div>  <button onClick={() => setshow(!show)}>
            {show ? "Hide Counter" : "Show Counter"}
        </button>
            {show && <Component {...props} />}
        </div>
        )

    }
}
// ===============================================================
const ShowCounter = WithLogger(Counter, "Counter")
// ===============================================================
export { ShowCounter }

// ====================================================================================================



// -------------------TOGGLE HOC--------------------


// function ContentBox() { 
//     return (
//         <div>
//             <h1>hey there i am using the Toggle hoc</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam illum, ratione incidunt officiis natus rem aspernatur consequatur debitis et eum magni eos fuga repellendus.</p>
//         </div>
//     )
    
// }

// function ForToggle(Component) {
//     return function Toggle(props) {
//         return (
//             <button onClick={() => {}}>
//                 Toggle
//             </button>
//         );
//     }
// }