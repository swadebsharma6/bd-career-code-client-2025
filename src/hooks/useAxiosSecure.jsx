import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
      baseURL:'https://bd-career-code-server-2025.vercel.app'
})

const useAxiosSecure = () => {
 const {user, logOut} = useAuth();

 axiosInstance.interceptors.request.use(config =>{
      config.headers.authorization = `Bearer ${user.accessToken}`
      return config;
 })

 //response interceptor
 axiosInstance.interceptors.response.use(response =>{
      return response;
 }, error =>{
     
      if(error.status ===401 || error.status === 403){
            //  console.log('logout the user for 401',)

             logOut()
             .then(()=>{
                  alert('user signout successfully')
             })
             .catch(error =>{
                 alert(error.message)
             })
      }
      return Promise.reject(error);
 })

      return axiosInstance;
};

export default useAxiosSecure;