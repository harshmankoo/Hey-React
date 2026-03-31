


function ControlledFormTask() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Remove error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(formData);
    console.log("Submitted:", formData);
  };

  return (
    <>
      <h1>CONTROLLED COMPONENTS GIVEN BY SIR</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            placeholder="please enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        {/* Email */}
        <div>
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Show submitted data */}
      {submitted && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </>
  );
}


// =========================================================================================================================================


import { useState } from "react";
function ControlledInput() {
  const [name, setname] = useState("")


  return (
    <>====================================================================================================
      <br /><h2>This is a simple controlled unit task</h2>
      <h2>controlled units</h2>
      <input type="text" value={name} onChange={(e) => setname(e.target.value)} />

      <p>you typed : {name}</p>

    </>
  )
}




// ========================================================================================================================
// here i am using simple controlled componebts using form \





const ControlledForm = () => {
  const [name, setname] = useState('');            //this usestate used for input field
  const [email, setemail] = useState('');         //this usestate used for input field
  const [password, setpassword] = useState('');  //this usestate used for input field

  const [skills, setSkills] = useState([])

  const handleskills = (event) => {
    const{  value,checked} = event.target
      if (checked) {
    // add skill
    setSkills([...skills, value]);
  } else {
    // remove skill
    setSkills(skills.filter((item) => item !== value));
  }
};


  
  

  return <>======================================================================================================
    <div>
      <br /><h1>Controlled Components Done Main Program</h1>

      {/* this component is for input field */}

      Name : <input type="text" value={name} placeholder="Please enter your name" onChange={(event) => setname(event.target.value)} />
      <br />
      Password : <input type="password" value={password} placeholder="please enter your password" onChange={(event) => setpassword(event.target.value)} />
      <br />
      Email : <input type="email" value={email} placeholder="please enter your emial" onChange={(event) => setemail(event.target.value)} />
      <br />

      <p> <button>submit</button>

        <button onClick={() => { setemail(''); setpassword(''); setname('') }}>clear</button></p>

    </div>
    <div>
      <h2>SELECT YOUR GENDER</h2>

      <input onChange={handleskills} type="checkbox" id="Male" value="Male"   checked={skills.includes("Male")} />
      <label htmlFor="Male">Male</label>
      <br />
      <input onChange={handleskills} type="checkbox" id="Female" value="Female"   checked={skills.includes("Female")} />
      <label htmlFor="Female">Female</label>
      <br />
      <input onChange={handleskills} type="checkbox" id="Other" value="Other"   checked={skills.includes("Other")} />
      <label htmlFor="Other">Other</label>
    </div>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    <h2> Name :{name}</h2>
    <h2> Pssword :{password}</h2>
    <h2> Email : {email}</h2>
    <p><h2>Skills :{skills.join(",")}</h2></p>

    =========================================================================================================/
  </>
}


export default ControlledForm;    //3rd form

export { ControlledInput };         //2nd form

export { ControlledFormTask };       //1st form