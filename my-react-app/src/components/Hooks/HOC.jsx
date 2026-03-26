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
    return (<h2>This is original </h2>
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