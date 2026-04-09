// axios task 1

import { useEffect, useState } from "react";
import axios from "axios";

function GetUserDataUsingAxios() {


    const [users, setusers] = useState([])

    const getUsers = async () => {                                                             //this function is getting a data frm api
        return (await axios.get("https://jsonplaceholder.typicode.com/users")).data;

    };

    useEffect(() => {
        getUsers().then((data) => {
            setusers(data);
        });
    }, []);

    // useEffect(() => {
    //   functionCall().then(data => setState(data));                        //Always Remember this Pattern
    // }, []);


    return (<>
        <h1>axios task 1</h1><br />
        <h2>USERLIST</h2><br />
        {users.map((user) => (<p key={user.id}>{user.id}.{user.name}</p>))}
    </>)
}
export default GetUserDataUsingAxios;


// =======================================================================================================

// Socket.io task

// function UseSocketIo (){

//     useEffect(()=>{
//         const socket = io("http://localhost:3000")


//         //when connected
//         socket.on("connect" ,()=>{console.log("connected to the server")});

//         //send message
//         socket.emit("message", "hello server");

//         //recieve message
//         socket.on("reply",(data)=>{console.log("server says :", data)});


//           //Cleanup (important)
//     return () => {
//       socket.disconnect();

//     }

//     },[])

//     return(<>
//     <h1>OPEN CONSOLE ND SEE THE RESULT</h1>
//     </>)
// }

// export UseSocketIo();0