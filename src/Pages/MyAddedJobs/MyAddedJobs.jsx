import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { JobCard } from "../../Components/JobCard/JobCard";

const MyAddedJobs = () => {
  const { user } = use(AuthContext);
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://freelance-marketplace-api-server-ten.vercel.app/my-job?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Please wait .. Loading...</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 w-11/12 mx-auto">
        {job.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default MyAddedJobs;
