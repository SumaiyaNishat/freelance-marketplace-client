import React from "react";
import { useLoaderData } from "react-router";
import { JobCard } from "../../Components/JobCard/JobCard";

const AllJobs = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="bg-blue-100">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-blue-800 pt-5">All Jobs</h1>
        <p className="text-sky-800 pb-8">
          Explore a wide range of job opportunities across multiple industries
          and skill levels. Find projects
          <br /> that match your expertise and start working with trusted
          clients today.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-11/12 mx-auto">
        {data.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
