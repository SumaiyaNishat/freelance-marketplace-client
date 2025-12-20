import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { JobCard } from "../../Components/JobCard/JobCard";
import { toast } from "react-toastify";
import { FaCheck, FaTimes } from "react-icons/fa";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    fetch(`http://localhost:3000/my-tasks?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user.email]);

  const handleTaskAction = () => {
    fetch(`http://localhost:3000/my-tasks/${tasks._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== taskId));
        toast.success("Task updated successfully!");
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <div className="text-center mt-10">Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return <div className="text-center mt-10">No accepted tasks yet.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Accepted Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((job) => (
          <div key={job._id} className="card ">
            {" "}
            <div className="flex justify-end gap-5 mt-2 mr-2 pb-2">
              <button
                onClick={handleTaskAction}
                className="bg-green-500 text-white w-10 h-5 flex justify-center items-center  cursor-pointer"
              >
                <FaCheck />
              </button>

              <button
                onClick={handleTaskAction}
                className="bg-red-500 text-white w-10 h-5 flex justify-center items-center cursor-pointer"
              >
                <FaTimes /> 
              </button>
            </div>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
