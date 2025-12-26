import { useLoaderData, useParams } from "react-router";


const ViewApplications = () => {
      const {job_id} = useParams();
      const applications = useLoaderData();
      
      return (
            <div>
              <h2 className="text-2xl">{applications.length} Application for {job_id}</h2>    
            </div>
      );
};

export default ViewApplications;