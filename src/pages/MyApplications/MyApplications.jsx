import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationState from "./ApplicationState";
import useAuth from "../../hooks/useAuth";
import useApplicationApi from "../../api/useApplicationApi";
// import { myApplicationPromise } from "../../api/applicationsApi";



const MyApplications = () => {
      const {user} = useAuth();
      const {myApplicationPromise} = useApplicationApi()

      //myApplications find user accessToken
      // console.log(user.accessToken)

     

  return (
    <div>
      <ApplicationState />

      <Suspense fallback={'loading your job application'}>
        <ApplicationList
        myApplicationPromise={myApplicationPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
