import { BsPinMapFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {

      const job = useLoaderData();
      const {
      _id,
    title,
    location,
    jobType,
    salaryRange,
    applicationDeadline,
    category,
    description,
    company,
    requirements,
    company_logo,
  } = job;

  return (
    <div className="min-h-175 hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <div className="card p-4">
                <div className="flex items-center">
                  <figure className="mr-2">
                    <img src={company_logo} className="w-14" alt="Shoes" />
                  </figure>
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold">{company}</h2>
                    <div className="flex items-center gap-4">
                      <p className="text-xs font-bold">{jobType}</p>
          
                      <p className="text-xs font-bold">DeadLine: {applicationDeadline}</p>
                    </div>
                    <p className="flex items-center gap-2 font-bold text-sm">
                      {" "}
                      <BsPinMapFill className="text-2xl text-primary" /> {location}
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{category}</div>
                  </h2>
                  <p>
                    {description}
                  </p>
                  <div className="card-actions ">
                      {
                            requirements.map((skill, idx) =>  <div key={idx} className="badge badge-outline">{skill}</div> )
                      }
                   
                    
                  </div>
                  <div className="flex items-center justify-between">
                      <h2 className="py-4"><span className="text-primary text-xl font-bold">${salaryRange.min} - {salaryRange.max}</span>/ M</h2>
          
                     <button className="btn btn-soft btn-primary">
                      <Link to={`/jobs/${_id}`}>Apply Now</Link>
                     </button>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
