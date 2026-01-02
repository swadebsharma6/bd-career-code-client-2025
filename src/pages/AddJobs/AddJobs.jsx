import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const AddJobs = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // process requirements
    const requirementsStr = newJob.requirements;
    const requirementsArray = requirementsStr
      .split(",")
      .map((req) => req.trim());
    newJob.requirements = requirementsArray;

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    // process status
    newJob.status = "active";

    console.log(newJob);

    //Save job to the database
    axios
      .post(`http://localhost:3000/jobs`, newJob)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Job Added on Db successfully",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="max-w-xl mx-auto my-5">
      <h2 className="text-2xl text-center my-4">
        Add A Jobs, this access only for Admin
      </h2>
      <form onSubmit={handleAddAJob}>
        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">
            Basic Job Related Information
          </legend>
          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full "
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input w-full "
            placeholder="Company name"
          />

          <label className="label">Company Location</label>
          <input
            type="text"
            name="location"
            className="input w-full "
            placeholder="Company Location"
          />
          <label className="label">Company_logo</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full "
            placeholder="Company_logo url"
          />
        </fieldset>
        {/* jobs types */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Job types</legend>
          <div className="filter">
            <input
              className="btn filter-reset "
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn "
              type="radio"
              name="jobType"
              value="On-Site"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn "
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>
        {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="job Category"
            name="category"
            className="select w-full"
          >
            <option disabled={true}>job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input
            type="date"
            name="applicationDeadline"
            className="input w-full "
            placeholder="applicationDeadline"
          />
        </fieldset>
        {/* Salary Range*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input w-full "
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input w-full "
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select A Currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Currency</option>
                <option>bdt</option>
                <option>usd</option>
                <option>eu</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Jobs description</legend>
          <textarea
            className="textarea w-full"
            name="description"
            placeholder="Job description"
          ></textarea>
        </fieldset>
        {/* Jobs requirement */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Jobs requirements</legend>
          <input
            type="text"
            className="input w-full"
            name="requirements"
            id=""
            placeholder="Job Requirement(separate by comma)"
          />
        </fieldset>
        {/* Jobs responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Jobs responsibilities</legend>
          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Job Requirement(separate by comma)"
          ></textarea>
        </fieldset>
        {/* Hr-Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">HR-Info</legend>
          <label className="label">HR_name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full "
            placeholder="hr_name"
          />
          <label className="label">HR_email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user?.email}
            className="input w-full "
            placeholder="hr_email"
          />
        </fieldset>

        <input
          type="submit"
          className="btn btn-soft btn-primary w-full"
          value="Add Job"
        />
      </form>
    </div>
  );
};

export default AddJobs;
