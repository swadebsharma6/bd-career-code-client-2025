
import HotJobCard from "../../Shared/HotJobCard";



const HotJobs = ({jobs}) => {

      

      return (
            <div>
                  <h2 className="text-3xl font-bold text-primary text-center my-6">Hots Jobs of the day</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                  {
                        jobs?.map(job => <HotJobCard
                        key={job._id}
                        job={job}
                        ></HotJobCard>)
                  }
            </div>
            </div>
      );
};

export default HotJobs;