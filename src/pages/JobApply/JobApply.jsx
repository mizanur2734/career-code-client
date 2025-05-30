import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from 'sweetalert2'

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((result) => {
        console.log(result.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-6">
      <h3 className="text-4xl text-center mb-2">
        Apply for this job:<Link to={`/jobs/${jobId}`}>Details</Link>
      </h3>
      <div className="flex mx-auto  justify-center">
        <form onSubmit={handleFormSubmit} className="flex">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">LinkedIn Link</label>
            <input
              type="url"
              name="linkedIn"
              className="input"
              placeholder="LinkedIn Profile Link"
            />

            <label className="label">Github Link</label>
            <input
              type="url"
              name="github"
              className="input"
              placeholder="Github Link"
            />

            <label className="label">Resume Link</label>
            <input
              type="url"
              name="resume"
              className="input"
              placeholder="Resume Link"
            />
            <input type="submit" value="Apply" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
