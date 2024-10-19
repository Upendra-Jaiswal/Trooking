// export const login = (email,password)=async(dispatch)=>{

// try{
//     dispatch({type:LOGIN_REQUEST});
//     await axios
//     .post(
//       `${backendUrl}/api/signin`,
//       // `${backendUrl}/api/signin`,
//       // "http://localhost:3001/api/signin",
//       { email, password },

//       { withCredentials: true }
//     )
//     .then((response) => {
//       // Handle the response here
//       navigate("/");
//       dispatch({type:LOGIN_SUCCESS,payload:response.data});
//       localStorage.setItem("userInfodata",response.data);

//     })
//     .catch((error) => {
//       // Handle any errors here
//       console.error(error);
//     });

  

// }
// }