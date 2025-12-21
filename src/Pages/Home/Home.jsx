import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import { JobCard } from "../../Components/JobCard/JobCard";
import TopCategories from "../../Components/TopCategories/TopCategories.jsx";
import AboutSection from "../../Components/AboutSection/AboutSection";

const Home = () => {
  const freelanceData = useLoaderData();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setLoading(true);
    setTimeout(() => {
      setData(freelanceData);
      setLoading(false);
    }, 200); 
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <Banner />
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-3xl font-bold text-blue-800 pb-4">
          Latest Jobs
        </h1>
        <p className="text-center pb-15">
          Brings you the most recent and trending job opportunities from top
          employers. Explore new openings daily and
          <br /> apply easily to find the right job that matches your skills and
          career goals.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-11/12 mx-auto">
          {freelanceData.map((job) => (
            <JobCard key={job._id} job={job}></JobCard>
          ))}
        </div>
      </div>
      <TopCategories />
      <AboutSection />
    </div>
  );
};

export default Home;
