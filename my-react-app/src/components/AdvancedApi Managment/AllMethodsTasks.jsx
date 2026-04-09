// axios task 1

import axios from "axios"

const getUsers = async () => {
    return (await axios.get("https://jsonplaceholder.typicode.com/users")).data;

};

getUsers().then((data) => {
    console.log(data);
});
export default getUsers;


import { useState } from "react";


function GetUserDataUsingAxios() {


    const [users, setusers] = useState([])

    const getUsers = async () => {                                                             //this function is getting a data frm api
        return (await axios.get("https://jsonplaceholder.typicode.com/users")).data;

    };




    return (<>
    </>)
}