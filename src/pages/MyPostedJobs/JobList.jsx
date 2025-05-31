import React, { Suspense, use } from "react";
import { Link } from "react-router";

const JobList = ({ jobCreatedByPromise }) => {
  const jobs = use(jobCreatedByPromise);
  return (
    <div>
      <h3 className="text-4xl text-center">Jobs Created By You:{jobs.length}</h3>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job</th>
        <th>Deadline</th>
        <th>View Application</th>
      </tr>
    </thead>
    <tbody>
      {/* row  */}
      {
        jobs.map((job, index) => <tr key={job._id}>
        <th>{index + 1}</th>
        <td>{job.title}</td>
        <td>{job.deadline}</td>
        <td><Link to={`/applications/${job._id}`}>View details</Link></td>
      </tr> )
      }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default JobList;
