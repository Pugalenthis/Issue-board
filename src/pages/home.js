import React from "react";
import IssueList from "../components/IssueList";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <IssueList />
    </div>
  );
};

export default Home;
