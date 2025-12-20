import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const AddJob = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      name: e.target.title.value,
      postedBy: user?.displayName,
      category: e.target.category.value,
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
      userEmail: user?.email,
      postedAt: new Date(),
    };
    console.log(jobData);

    fetch("http://localhost:3000/freelance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Job successfully added!");
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to add job. Try again.");
      });
  };

  return (
    <div className="bg-blue-100 pt-20">
      <div className="card border border-gray-500 bg-base-100 w-full max-w-lg mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">Add New Job</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label font-medium">Title</label>
              <input
                type="text"
                name="title"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter job title"
              />
            </div>

            <div>
              <label className="label font-medium">Category</label>
              <select
                defaultValue={""}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphics Designing">Graphics Designing</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Mobile Apps">Mobile Apps</option>
                <option value="SEO">SEO</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="label font-medium">Summary</label>
              <textarea
                name="summary"
                required
                rows="4"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[150px]"
                placeholder="Write a short description of the job"
              ></textarea>
            </div>

            {/* Cover Image */}
            <div>
              <label className="label font-medium">Cover Image URL</label>
              <input
                type="url"
                name="coverImage"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="input w-full rounded-full bg-gray-100 dark:bg-gray-700"
              />
              <input
                type="email"
                value={user?.email}
                readOnly
                className="input w-full rounded-full bg-gray-100 dark:bg-gray-500"
              />
            </div>

            <button
              type="submit"
              className="btn w-full text-white mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-300 hover:from-blue-600 hover:to-indigo-500"
            >
              Add Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
