import './Parent.css'
import Children from "./Children"
const Parent = () => {
    return (
        <> 
        <div className='Parentdiv'>
            <h1>PROPS EXAMPLE </h1> 
            <Children name="Inder" role="MERN Developer" />
            <br />
            <Children name="Gursimran" role="Frontend Developer" />
            <br />
            <Children name="Gurwinder" role="Graphics Designer" />
</div>
        </>
    )
}
export default Parent