import { Link } from "react-router";

export const JobCard = ({ job }) => {
  const { title, category, postedBy, summary, coverImage, _id } = job;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ">
      
     
      <figure className="h-50 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-55 h-full p-2 object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>

        <div className="text-blue-500 rounded-full mb-1 font-bold bg-blue-200 w-40 text-center">{category}</div>

        <div className="text-xs text-red-700 mb-2">Posted by: {postedBy}</div>

        <p className="text-sm text-gray-500 line-clamp-2 text-base-content/80">{summary}</p>

        <div className="card-actions justify-end mt-4">
          <Link
            to={`/jobDetails/${_id}`}
            className="btn rounded-full bg-gradient-to-r from-indigo-500 to-blue-300 hover:from-blue-600 hover:to-indigo-500 text-white btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
