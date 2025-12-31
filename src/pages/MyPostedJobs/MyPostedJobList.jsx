import { use } from "react";
import { Link } from "react-router";

const MyPostedJobList = ({ jobsRecruiterByPromise }) => {
  const jobs = use(jobsRecruiterByPromise);
 
  return (
    <div className="my-32">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>DeadLine</th>
              <th>Apply Count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.application_count}</td>
                <td>{job.applicationDeadline}</td>
                <td className="btn btn-sm btn-soft btn-primary">
                  <Link to={`/applications/${job._id}`}>View Application</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobList;
