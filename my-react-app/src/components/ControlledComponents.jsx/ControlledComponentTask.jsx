// import { useState } from "react";
// function ControlledFormTask() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',

//     })
//     const [errors, setErrors] = useState({})
//      const [submitted, setSubmitted] = useState(null);

//     const handlechange = (e) => {
//         const { name, value, type } = e.target;
//         setFormData(prev => ({
//             ...prev, [name]: type
//         }));

//         if (errors[name]) {
//             setErrors(prev => ({ ...prev, [name]: '' }))
//         }
//     };

//     const validate = () => {
//         const newErrors = {};
//         if (!formData.name.trim()) newErrors.name = 'Name is required';
//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = 'Email is invalid';
//         }

// // Handle submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = validate();

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setSubmitted(formData);
//     console.log('Submitted:', formData);
//   };    


//         return (
//             <>
//                 ========================================================================================================================

//                 <h1>CONTROLLED COMPONENTS</h1>
//                 <form onSubmit={handleSubmit}>
//                     {/* name */}
//                     <div> <h2>Name</h2>
//                         <input type="text" name="name" placeholder="please enter your name" onChange={handlechange} />  {errors.name && <span>{errors.name}</span>}
//                     </div>
//                     {/* email */}
//                     <div>
//                         <h2>Emai</h2>
//                         <input type="email" name="email" placeholder="your@emial.com" onChange={handlechange} /> {errors.email && <span>{errors.email}</span>}
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </>
//         )
//     }
// }
// export default ControlledFormTask;

// // import { useState } from "react";

// // function ControlledFormTask() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [submitted, setSubmitted] = useState(null);

// //   // Handle change
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));

// //     // Remove error when user types
// //     if (errors[name]) {
// //       setErrors(prev => ({ ...prev, [name]: '' }));
// //     }
// //   };

// //   // Validate
// //   const validate = () => {
// //     const newErrors = {};

// //     if (!formData.name.trim()) {
// //       newErrors.name = 'Name is required';
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required';
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = 'Email is invalid';
// //     }

// //     return newErrors;
// //   };

// //   // Handle submit
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const newErrors = validate();

// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors);
// //       return;
// //     }

// //     setSubmitted(formData);
// //     console.log("Submitted:", formData);
// //   };

// //   return (
// //     <>
// //       <h1>CONTROLLED COMPONENTS</h1>

// //       <form onSubmit={handleSubmit}>
        
// //         {/* Name */}
// //         <div>
// //           <h2>Name</h2>
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="please enter your name"
// //             value={formData.name}
// //             onChange={handleChange}
// //           />
// //           {errors.name && <span>{errors.name}</span>}
// //         </div>

// //         {/* Email */}
// //         <div>
// //           <h2>Email</h2>
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="your@email.com"
// //             value={formData.email}
// //             onChange={handleChange}
// //           />
// //           {errors.email && <span>{errors.email}</span>}
// //         </div>

// //         <button type="submit">Submit</button>
// //       </form>

// //       {/* Show submitted data */}
// //       {submitted && (
// //         <div>
// //           <h3>Submitted Data:</h3>
// //           <pre>{JSON.stringify(submitted, null, 2)}</pre>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default ControlledFormTask;



import { useState } from "react";
function ControlledInput (){
    const  [name, setname] = useState("")


    return (
        <><div><h2>This is a simple controlled unit task</h2>
            <h2>controlled units</h2>
            <input type="text" value={name} onChange={(e)=> setname(e.target.value)}  />
        
            <p>you typed : {name}</p>
        </div>
        </>
    )
}

export default ControlledInput;
