import React, { useEffect, useState } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobsPromise.then((data) => {
      setJobs(data);
    });
  }, [jobsPromise]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">
        Hot Jobs of the Day
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
