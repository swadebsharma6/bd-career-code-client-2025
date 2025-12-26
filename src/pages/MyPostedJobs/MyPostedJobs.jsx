import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobList from "./MyPostedJobList";
import { jobsRecruiterByPromise } from "../../api/jobsApi";


const MyPostedJobs = () => {

      const {user} = useAuth();

      return (
            <div>
                 <h2 className="text-2xl text-center font-bold"> My posted jobs</h2>

                 <Suspense fallback={'Loading recruitment jobs'}>
                  <MyPostedJobList 
                  jobsRecruiterByPromise={jobsRecruiterByPromise(user?.email)}
                  ></MyPostedJobList>
                 </Suspense>
            </div>
      );
};

export default MyPostedJobs;