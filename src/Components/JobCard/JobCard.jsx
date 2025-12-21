import { Link } from "react-router";

export const JobCard = ({ job }) => {
  const { title, category, postedBy, summary, coverImage, _id } = job;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <figure className="h-48 md:h-56 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover p-2 hover:scale-105 transition-transform duration-300 rounded-lg"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg md:text-xl font-bold">{title}</h2>

        <div className="inline-block px-3 py-1 mb-1 rounded-full bg-blue-200 text-blue-600 lg:w-40  font-semibold text-sm">
          {category}
        </div>

        <div className="text-xs text-red-700 mb-2">Posted by: {postedBy}</div>

        <p className="text-sm text-gray-500 line-clamp-2">{summary}</p>

        <div className="card-actions justify-end mt-4">
          <Link
            to={`/jobDetails/${_id}`}
            className="btn w-full btn-sm text-white rounded-full bg-gradient-to-r from-indigo-500 to-blue-300 hover:from-blue-600 hover:to-indigo-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
