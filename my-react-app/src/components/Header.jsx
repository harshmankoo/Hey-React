import  Card from "./Card"
import Greetings from "./Greetings"

const Header = () => {
    return(
        <>
    <h1>Hey This is a Header</h1>
   < Greetings name = "Harshdeep Singh" role ="MERN stack Developer" />

        <div></div>

    <Card />
        </>
        
    )
}
export default Header