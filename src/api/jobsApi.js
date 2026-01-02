export const jobsRecruiterByPromise =( email, accessToken )=>{
      return fetch(`http://localhost:3000/jobs/applications?email=${email}`, {
            credentials: 'include',
            headers:{
                  authorization: `Bearer ${accessToken}`
            }
      })
      .then(res =>res.json())
}