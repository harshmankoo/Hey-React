import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate();

    return(
        <>============================================================
        <h1>HOME PAGE </h1>

<h2>ROUTING CONCEPTS HOW TO CONNECT DIFF PAGES AND WHEN WE CLICK HOWTO GO TO THE NEXT PAGE</h2>


        <button onClick={()=>navigate ("/about")}>GO TO ABOUT</button>
    <br />
    <br />
    <button onClick={()=> navigate ("/contact")}>GO TO CONTACT</button>
        </>
    )
}

export default Home;