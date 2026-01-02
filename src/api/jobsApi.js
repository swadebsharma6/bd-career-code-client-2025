export const jobsRecruiterByPromise =( email, accessToken )=>{
      return fetch(`https://bd-career-code-server-2025.vercel.app/jobs/applications?email=${email}`, {
            credentials: 'include',
            headers:{
                  authorization: `Bearer ${accessToken}`
            }
      })
      .then(res =>res.json())
}