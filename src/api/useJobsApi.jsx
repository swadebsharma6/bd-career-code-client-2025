import useAxiosSecure from "../hooks/useAxiosSecure";


const useJobsApi = () => {
      const axiosSecure = useAxiosSecure();

      const jobsRecruiterByPromise = email =>{

            return axiosSecure.get(`/jobs/applications?email=${email}`).then(res => res.data)
      }

      return {
            jobsRecruiterByPromise,
      };
};

export default useJobsApi;