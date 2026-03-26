// 🚀 YOUR PRACTICE TASK

// 👉 Build this:

// Create component:
// function Message() {
//   return <h2>This is original</h2>;
// }
// Create HOC:
// Add red color text
// Wrap and use it


import { Component } from "react";

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
export {WithEnhancedUser}

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
    return function (){
        return(
            <div style={{border : "3px solid red"}}>
                <title>HIGH ORDER COMPONENT</title>
<h1> Title : HoC</h1>
    
                <Component />
                <br />
            </div>

        )

    }
}


const MainBorderCLass = addingBorder(mainDiv)
export {MainBorderCLass }
// =========================================================================

// -----------------WithLoading--------------------------

// function usersData() {
//     return ( 
//         const users : [{ id: 1, name: 'Inder Singh', role: 'Senior Dev' },
//     { id: 2, name: 'Rahul Kumar', role: 'Developer' },
//     { id: 3, name: 'Priya Sharma', role: 'Designer' },
//         ]

//     )
    
// }