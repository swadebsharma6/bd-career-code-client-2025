
import Banner from "./HomeComponents/Banner";
import HotJobs from "./HomeComponents/HotJobs";
import { Suspense, useEffect, useState } from "react";


const Home = () => {
      const [jobs, setJobs] = useState([]);
useEffect(()=>{
      fetch(`http://localhost:3000/jobs`)
      .then(res => res.json())
      .then(data =>{
            setJobs(data)
      })
}, [])

      return (
            <div>
             <Banner/>   
             <Suspense fallback={'Loading hot jobs'}>
                  <HotJobs jobs={jobs}></HotJobs>
             </Suspense>
            </div>
      );
};

export default Home;