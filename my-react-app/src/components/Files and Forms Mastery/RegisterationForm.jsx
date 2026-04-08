// import { useState } from 'react';

// export default function RegistrationForm() {
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());
//     setSubmittedData(data);
//   };

//   return (
//     <div>
//       <h3>Registration Form</h3>

//       <form onSubmit={handleSubmit}>
//         <input name="fullname" placeholder="Full Name" required />
//         <input type="email" name="email" placeholder="Email" required />
//         <button type="submit">Submit</button>
//       </form>

//       {submittedData && (
//         <pre>{JSON.stringify(submittedData, null, 2)}</pre>
//       )}
//     </div>
//   );
// }



import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 1. Create Zod Schema
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name")} placeholder="Enter name" />
      {errors.name && <p>{errors.name.message}</p>}

      <br />

      <input {...register("email")} placeholder="Enter email" />
      {errors.email && <p>{errors.email.message}</p>}

      <br />

      <button type="submit">Submit</button>

    </form>
  );
}

export default Form;