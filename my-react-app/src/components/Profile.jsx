const Profile = ()=>{
    const image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    const name  = "Harshdeep Singh" ;
    const role = "MERN Stack Intern";
    const company = " NetSquare Softwares";

    return(
           
           <div>
                <img src={image} alt=" Profile Picture" width="150" />
                <h1>Name :{name}</h1>
                <h2>Role :{role} </h2>
                <h2>Company :{company}</h2>

                
            </div>
            
    )

}
 
export default Profile;