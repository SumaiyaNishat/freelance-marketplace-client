import React from 'react'
import { useLoaderData, useNavigate } from "react-router";
import { toast } from 'react-toastify';


const UpdateJob = () => {
  const data = useLoaderData();
  const freelance = data;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedJob = {
      title: e.target.title.value,
      category: e.target.category.value,
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
    };
  
    fetch(`http://localhost:3000/freelance/${freelance._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Job updated successfully!");
        // navigate("/addJob");
      })
      .catch(() => {
        toast.error("Failed to update job");
      });
  };

  

  return (
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mt-20">
      <div className="card-body p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Job
        </h2>

        <form 
        onSubmit={handleSubmit}
         className="space-y-4">

          {/* Job Title */}
          <div>
            <label className="label font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              defaultValue={freelance.title}
              required
              className="input w-full rounded-full"
              placeholder="Enter job title"
            />
          </div>

          <div>
            <label className="label font-medium">Category</label>
            <select
              name="category"
              defaultValue={freelance.category}
              required
              className="select w-full rounded-full"
            >
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Designing">Graphics Designing</option>
              <option value="SEO">SEO</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="label font-medium">Summary</label>
            <textarea
              name="summary"
              defaultValue={freelance.summary}
              required
              rows="4"
              className="textarea w-full rounded-2xl h-[180px]"
              placeholder="Enter job summary"
            ></textarea>
          </div>

          <div>
            <label className="label font-medium">Cover Image URL</label>
            <input
              type="url"
              name="coverImage"
              defaultValue={freelance.coverImage}
              required
              className="input w-full rounded-full"
              placeholder="https://imgbb.com/image-url"
            />
          </div>

          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-700"
          >
            Update Job
          </button>

                   
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
