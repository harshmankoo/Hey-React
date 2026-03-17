
import  Card from "./Card"

 const Greetings = (props) => {
    return(
        <>
        <div>
            <h2>HEY MY NAME IS </h2>
             <h1>HARSHDEEP SINGH</h1>
                <h3>    Hello From  {props.name}</h3>
                  <h3>Role : {props.role}</h3>
        </div>
        
        {/* <card /> */}
        </>
    )
 }
 console.log(Greetings)
 export default Greetings