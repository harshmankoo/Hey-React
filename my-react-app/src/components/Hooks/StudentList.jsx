// // 👉 useEffect is a React Hook
// // 👉 It lets you run code after the component renders

// // 💡 Think of it like:

// // “Do something AFTER the UI is shown”


// // 🧾 Basic Syntax


// // useEffect(() => {
// //   // code (side effect)
// // }, []);
// // // -----------------------------------------------------

// // useEffect(() => {
// //   // 1. What to run
// // }, [dependencies]); // 2. When to run



// // import { useState,useEffect, } from "react";

// // function Useeffect(){
// //     const [count,setCount] = useState(0)
// //     useEffect(() => {
// //       console.log("use effect is running...")
// //       console.log("count is : ", count );
// //     }, [count])

// //     return (
// //         <div><h1>count : {count}</h1>
// //         <button onClick={()=>setCount(count +1)}> Increase</button></div>
// //     )

// // }

// // export default Useeffect;
// // ----------------------------------------------------------------------------------------

// // import { useState, useEffect } from "react";

// // function SimpleUserList() {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         setLoading(true);

// //         const response = await fetch(
// //           "https://jsonplaceholder.typicode.com/users"
// //         );

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch users");
// //         }

// //         const data = await response.json();
// //         setUsers(data);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   // Loading UI
// //   if (loading) {
// //     return <h2>⏳ Loading users...</h2>;
// //   }

// //   // Error UI
// //   if (error) {
// //     return <h2>❌ Error: {error}</h2>;
// //   }

// //   // Main UI
// //   return (
// //     <div>
// //       <h1>Users List</h1>

// //       {users.map((user) => (
// //         <div key={user.id}>
// //           <h3>{user.name}</h3>
// //           <p>{user.email}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default SimpleUserList;

// // ----------------------------------------------------

// import { useState,useEffect } from "react";


// const StudentList = () => {



// const styles = {
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   title: {
//     textAlign: 'center',
//     color: '#1F2937',
//     marginBottom: '10px',
//   },
//   subtitle: {
//     textAlign: 'center',
//     color: '#6B7280',
//     marginBottom: '30px',
//   },
//   loading: {
//     textAlign: 'center',
//     padding: '60px 20px',
//     color: '#3B82F6',
//   },
//   error: {
//     textAlign: 'center',
//     padding: '40px',
//     backgroundColor: '#FEE2E2',
//     borderRadius: '10px',
//     color: '#991B1B',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//     gap: '20px',
//   },
//   card: {
//     backgroundColor: 'white',
//     border: '1px solid #E5E7EB',
//     borderRadius: '12px',
//     padding: '20px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   },
//   cardHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '15px',
//     paddingBottom: '15px',
//     borderBottom: '2px solid #F3F4F6',
//   },
//   badge: {
//     backgroundColor: '#DBEAFE',
//     color: '#1E40AF',
//     padding: '4px 8px',
//     borderRadius: '4px',
//     fontSize: '12px',
//     fontWeight: 'bold',
//   },
//   cardBody: {
//     fontSize: '14px',
//     color: '#4B5563',
//   }
// }


// const [student ,setstudents] = useState([]);
// const [loading,setLoading] = useState(true);
// const [error ,setError] = useState(null);

// useEffect(() => {
//     setLoading(true);
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response =>{
//         console.log(':satellite_antenna: Response received');
//         if(!response.ok){
//             throw new Error ('failed to fecth data');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data recived :', data);
//         setstudents(data);
//         setLoading(false);
//     })
//     .catch(fault => {
//         console.log('Error',fault);
//         setError(fault);
//         setLoading(false);
//     });
// },[]);


//  if (loading) {
//     return (
//       <div style={styles.container}>
//         <div style={styles.loading}>
//           <h2>:hourglass_flowing_sand: Loading students...</h2>
//           <p>Fetching data from API</p>
//         </div>
//       </div>
//     );
//   }


//   if (error) {
//     return (
//       <div style={styles.container}>
//         <div style={styles.error}>
//           <h2>:x: Error!</h2>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }



//  return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>student Directory</h1>
//       <p style={styles.subtitle}>
//         :white_check_mark: Successfully loaded {student.length} student
//       </p>

//       <div style={styles.grid}>
//         {student.map(student => (
//           <div key={student.id} style={styles.card}>
//             <div style={styles.cardHeader}>
//               <h3>{student.name}</h3>
//               <span style={styles.badge}>ID: {student.id}</span>
//             </div>
//             <div style={styles.cardBody}>
//               <p><strong>Email:</strong> {student.email}</p>
//               <p><strong>Phone:</strong> {student.phone}</p>
//               <p><strong>Company:</strong> {student.company.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//   );



// }


// export default StudentList

// Create a component that demonstrates all 3 phases:

// ```jsx
// function LifecyclePractice({ productId }) {
//   // TODO:
//   // 1. On MOUNT: console.log "Component mounted"
//   // 2. On MOUNT: fetch product data
//   // 3. On MOUNT: start a timer
//   // 4. On UPDATE (productId change): fetch new product data
//   // 5. On UPDATE (productId change): log "Product ID changed to: X"
//   // 6. On UNMOUNT: clear the timer
//   // 7. On UNMOUNT: log "Component unmounted"

//   return <div>Product Details</div>;
// }
// ```

import { useState, useEffect, } from "react";

const LifecyclePractice = ({ productId }) => {
  const [data, setdata] = useState(null)
  const [count, setcount] = useState(0)
  // const [value, setvalue] = useState("")


  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log('Component Unmounted')
    }
  }, [])

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(setdata)

    console.log('Product Id Changed : ', productId)
  }, [productId])

  useEffect(() => {
    const timer = setInterval(() => {
      setcount(count => count + 1);
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])


  return (
    <>
      <h1>Product Id : {data?.id}</h1>
      <h1>Product Name : {data?.title}</h1>
      <p>Count : {count}</p>

    </>
  )
}

export default LifecyclePractice