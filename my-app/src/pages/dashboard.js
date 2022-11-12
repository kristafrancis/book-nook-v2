import React from "react";
import Layout from "../components/Layout/dashboard";

const Dashboard = () => {
  return (
    <Layout pageTitle="Dashboard">
      <link href="/dist/output.css" rel="stylesheet"></link>
      <div className="">
        <div className="w-[85%] mx-auto pb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* DYNAMICALLY CREATE CARDS HERE */}
          <div className="card bg-white rounded p-5 shadow-lg z-[5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <div className="bg-[#f3f3f3] p-4 text-base">2 comments</div>
          </div>
          <div className="card bg-white rounded-md p-5 shadow-lg z-[5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <div className="bg-[#f3f3f3] p-4 text-base">2 comments</div>
          </div>
          <div className="card bg-white rounded-md p-5 shadow-lg z-[5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <div className="bg-[#f3f3f3] p-4 text-base">2 comments</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
