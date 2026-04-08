// import { useState } from 'react';

// export default function DynamicJobForm() {
//   const [skills, setSkills] = useState(['']);

//   const addSkill = () => {
//     setSkills([...skills, '']);
//   };

//   const removeSkill = (index) => {
//     setSkills(skills.filter((_, i) => i !== index));
//   };

//   const updateSkill = (index, value) => {
//     const newSkills = [...skills];
//     newSkills[index] = value;
//     setSkills(newSkills);
//   };

//   return (
//     <div>
//       <h3>Skills</h3>

//       {skills.map((skill, index) => (
//         <div key={index}>
//           <input
//             value={skill}
//             onChange={(e) => updateSkill(index, e.target.value)}
//           />
//           <button onClick={() => removeSkill(index)}>X</button>
//         </div>
//       ))}

//       <button onClick={addSkill}>Add Skill</button>
//     </div>
//   );
// }


// 👉 One-line functionality:
// register() connects an input field to React Hook Form so it can track and manage its value.

// Why ...register() is used:
// Because register() returns multiple props (like name, onChange, ref), and ... (spread operator) automatically applies all of them to the input in one line.


// import React from "react";
import { useForm } from "react-hook-form";

function SimpleForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input 
        {...register("name")} 
        placeholder="Enter name" 
      />

      <br />

      <input 
        {...register("email")} 
        placeholder="Enter email" 
      />

      <br />

      <button type="submit">Submit</button>

    </form>
  );
}

export default SimpleForm;