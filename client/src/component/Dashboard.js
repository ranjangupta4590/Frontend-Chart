import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import DataBar from './DataBar';
import Addprofile from './Addprofile';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <div className='flex w-full h-[100vh]'>
      <Sidebar />
      <div className="  lg:ml-[19%] w-screen p-4 ">
        <Navbar />
        <DataBar />
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-5">
          <div className="min-w-[50%] ">
            <Chart />
          </div>
          <div className="min-w-[50%] ">
            <Addprofile />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard;