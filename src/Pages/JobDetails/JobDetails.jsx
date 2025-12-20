import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const JobDetails = () => {
  const data = useLoaderData();
  const freelance = data;
  console.log(freelance);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);


    const handleAcceptJob = () => {
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...freelance,
        added_By: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Job accepted successfully!");
        navigate("/myAcceptedTasks");
      })
      .catch((err) => console.log(err));
  };
  


  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/freelance/${freelance._id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            console.log(freelance);
            navigate("/allJobs");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch(() => {
            console.log(err);
          });
      }
    });
  };
    
  return (
    <div className=" bg-blue-100">
      <div className="max-w-6xl mx-auto px-5 py-25">
        <div className="card bg-base-100 shadow-xl border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            <img
              src={freelance.coverImage}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{freelance.title}</h1>

              <div className="flex gap-3 flex-wrap">
                <span className="badge badge-outline badge-primary">
                  {freelance.category}
                </span>
                <span className="badge badge-outline badge-secondary">
                  Posted by: {freelance.postedBy}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {freelance.summary}
              </p>

              <div className="text-sm text-gray-500">
                Posted on: {new Date(freelance.postedAt).toLocaleDateString()}
              </div>

              <div className="pt-6 flex justify-center gap-4">
                <button
                  onClick={handleAcceptJob}
                  className="btn rounded-full bg-gradient-to-r from-indigo-500 to-blue-300 hover:from-blue-600 hover:to-indigo-500"
                >
                  Accept
                </button>

                <Link
                  to={`/updateJob/${freelance._id}`}
                  className="btn rounded-full bg-gradient-to-r from-indigo-500 to-blue-300 hover:from-blue-600 hover:to-indigo-500 text-white btn"
                >
                  {" "}
                  Update
                </Link>

                <Link
                  onClick={handleDelete}
                  className="btn rounded-full bg-gradient-to-r from-red-500 to-pink-300 hover:from-red-600 hover:to-pink-500 text-white btn">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
