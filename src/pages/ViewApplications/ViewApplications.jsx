import axios from "axios";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
//     console.log(e.target.value, app_id);

    axios
      .patch(`https://bd-career-code-server-2025.vercel.app/applications/${app_id}`, { status: e.target.value})
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Status updated successfully",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch(error => alert(error.message))
      
  };

  return (
    <div className="my-10">
      <h2 className="text-xl text-center my-4 font-bold">
        {applications.length} Application for{" "}
        <span className="text-xs text-primary">{job_id}</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Applicant Email</th>
              <th>JobId</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, idx) => (
              <tr key={application._id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{application.applicant}</td>
                <td>{application.jobId}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
