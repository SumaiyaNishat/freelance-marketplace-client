import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";



const JobDetails = () => {
  const data = useLoaderData()
  const freelance = data;
  console.log(freelance)
  const { user } = useContext(AuthContext);


  return (
   <div className=" bg-blue-100">
     <div className="max-w-6xl mx-auto px-5 py-25">
      <div className="card bg-base-100 shadow-xl border rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">

          <img
            src={freelance.coverImage} alt="" className="w-full h-full object-cover rounded-xl"/>

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

            <p className="text-gray-600 leading-relaxed">{freelance.summary}</p>

            <div className="text-sm text-gray-500">
              Posted on: {new Date(freelance.postedAt).toLocaleDateString()}
            </div>

            <div className="pt-6 flex justify-center gap-4">
              <button
                // onClick={handleAcceptJob}
                className="btn rounded-full bg-gradient-to-r from-indigo-500 to-blue-300 hover:from-blue-600 hover:to-indigo-500"
              >
                Accept Job
              </button>

              <Link
            to={`/updateJob/${freelance._id}`}
            className="btn rounded-full bg-gradient-to-r from-indigo-500 to-blue-300 hover:from-blue-600 hover:to-indigo-500 text-white btn"
          > Update</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default JobDetails;
