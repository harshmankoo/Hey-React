import './Parent.css'
const Children =(props) =>{
    return (
        <>
        <div className="maindiv">
        {/* <h1>Name : {props.name}</h1>
        <h1>Role : { props.role}</h1> */}
        <h1>Carsname : {props.items}</h1>
        </div>
        </>
    )
}
export default Children