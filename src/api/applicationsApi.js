// export const myApplicationPromise = (email,) =>{
//       return fetch(`https://bd-career-code-server-2025.vercel.app/applications?email=${email}`, {
//             credentials: 'include'
//       })
//       .then(res => res.json())
// }

//Firebase accessToken
export const myApplicationPromise = (email, accessToken) =>{
      return fetch(`https://bd-career-code-server-2025.vercel.app/applications?email=${email}`, {
            credentials: 'include',
            headers:{
                  authorization: `Bearer ${accessToken}`
            }
      })
      .then(res => res.json())
}