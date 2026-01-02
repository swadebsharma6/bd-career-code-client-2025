
import Banner from "./HomeComponents/Banner";
import HotJobs from "./HomeComponents/HotJobs";
import { Suspense } from "react";


const Home = () => {
     const jobsPromise = fetch('https://bd-career-code-server-2025.vercel.app/jobs').then(res => res.json())

      return (
            <div>
             <Banner/>   
             <Suspense fallback={'Loading hot jobs'}>
                  <HotJobs jobsPromise={jobsPromise}></HotJobs>
             </Suspense>
            </div>
      );
};

export default Home;