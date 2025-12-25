import { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                 #
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                  applications.map((application, idx) => <JobApplicationRow
                  key={application._id}
                  idx={idx}
                  application={application}
                  ></JobApplicationRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
