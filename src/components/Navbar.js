import { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="h-16 bg-purple-400 flex justify-between items-center pr-5">
        <h1 className=" text-white font-extrabold text-2xl justify-self-start pl-5">
          ISSUE BOARD
        </h1>
        <Link
          to="/createIssue"
          type="button"
          className="  rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Create Issue
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
