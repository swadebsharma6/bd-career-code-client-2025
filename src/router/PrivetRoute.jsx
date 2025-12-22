import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Shared/Loading";


const PrivetRoute = ({children}) => {

      const {user, loading} = useContext(AuthContext);
      const location = useLocation();

      if(loading){
            return <Loading/>
      }

      if(!user){
            <Navigate to='/signin' state={location.pathname} replace></Navigate>
      }

      return children;
};

export default PrivetRoute;