function Greetings(){
    function sayhello(){
        alert("Hello From the Parent")
    }
return(
    <div>
        <h1>Function Props Example</h1>
        <FunctionChildren clickMe={sayhello}/>
    </div>
)
}
export default Greetings