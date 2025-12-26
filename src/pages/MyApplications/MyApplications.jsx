import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationState from "./ApplicationState";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../api/applicationsApi";



const MyApplications = () => {
      const {user} = useAuth();

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
