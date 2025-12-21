import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { JobCard } from "../../Components/JobCard/JobCard";
import { toast } from "react-toastify";
import { FaCheck, FaTimes } from "react-icons/fa";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await fetch(
        `https://freelance-marketplace-api-server-ten.vercel.app/my-tasks?added_By=${user.email}`
      );
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user?.email) fetchTasks();
  }, [user.email]);

  // MARK AS DONE
  const handleDone = async (taskId) => {
    try {
      await fetch(
        `https://freelance-marketplace-api-server-ten.vercel.app/my-tasks/${taskId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "done" }),
        }
      );
      toast.success("Task marked as done!");
      fetchTasks();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update task!");
    }
  };

  // CANCEL TASK
  const handleCancel = async (taskId) => {
    try {
      await fetch(
        `https://freelance-marketplace-api-server-ten.vercel.app/my-tasks/${taskId}`,
        { method: "DELETE" }
      );
      toast.success("Task canceled!");
      fetchTasks();
    } catch (err) {
      console.error(err);
      toast.error("Failed to cancel task!");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  if (tasks.length === 0)
    return <div className="text-center mt-10">No accepted tasks yet.</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Accepted Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div key={task._id} className="card">
            <div className="flex justify-end gap-5 mt-2 mr-2 pb-2">
              <button
                onClick={() => handleDone(task._id)}
                className="bg-green-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer rounded-full"
                title="Mark as Done"
              >
                <FaCheck />
              </button>

              <button
                onClick={() => handleCancel(task._id)}
                className="bg-red-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer rounded-full"
                title="Cancel Task"
              >
                <FaTimes />
              </button>
            </div>
            <JobCard job={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
