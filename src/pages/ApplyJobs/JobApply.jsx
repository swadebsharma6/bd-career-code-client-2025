import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";
import lottieSignIn from "../../assets/lotties/login.json";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = useAuth();
  const { id: jobId } = useParams();

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("https://bd-career-code-server-2025.vercel.app/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Job Application Submitted",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={lottieSignIn} loop={true}></Lottie>
        </div>
        <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleApplyForm}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">
                <label className="label">LinkedIn link</label>

                <input
                  type="url"
                  name="linkedIn"
                  className="input"
                  placeholder="LinkedIn profile link"
                />
                <label className="label">Github link</label>

                <input
                  type="url"
                  name="github"
                  className="input"
                  placeholder="Github  link"
                />
                <label className="label">Resume Link</label>

                <input
                  type="url"
                  name="resume"
                  className="input"
                  placeholder="Resume Link"
                />

                <input
                  className="btn btn-soft btn-primary "
                  type="submit"
                  value="Apply"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
