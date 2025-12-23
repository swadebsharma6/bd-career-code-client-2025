
import Loading from "../../components/Shared/Loading";
import Banner from "./HomeComponents/Banner";
import HotJobs from "./HomeComponents/HotJobs";
import { useEffect, useState } from "react";


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
             <HotJobs jobs={jobs}></HotJobs>
            </div>
      );
};

export default Home;