import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { useLoaderData } from 'react-router'
import { JobCard } from '../../Components/JobCard/JobCard';
import TopCategories from '../../Components/TopCategories/TopCategories';
import AboutSection from '../../Components/AboutSection/AboutSection';


const Home = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div className="space-y-10">
      <Banner />
      <div className='w-11/12 mx-auto'>
        <h1 className='text-center text-3xl font-bold text-blue-800 pb-4'>Latest Jobs</h1>
        <p className='text-center pb-15'>Brings you the most recent and trending job opportunities from top employers.
Explore new openings daily and<br/> apply easily to find the right job that matches your skills and career goals.</p>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 w-11/12 mx-auto'>
            {
              data.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
            </div>

      </div>
      <TopCategories></TopCategories>
            <AboutSection></AboutSection>
    </div>
  )
}

export default Home