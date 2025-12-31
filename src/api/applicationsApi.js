// export const myApplicationPromise = (email,) =>{
//       return fetch(`http://localhost:3000/applications?email=${email}`, {
//             credentials: 'include'
//       })
//       .then(res => res.json())
// }

//Firebase accessToken
export const myApplicationPromise = (email, accessToken) =>{
      return fetch(`http://localhost:3000/applications?email=${email}`, {
            credentials: 'include',
            headers:{
                  authorization: `Bearer ${accessToken}`
            }
      })
      .then(res => res.json())
}