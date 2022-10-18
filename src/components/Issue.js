import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { api } from "./api";

const Issue = ({ item, reFetch }) => {
  const deleteIssue = async (id) => {
    const res = await axios.delete(`${api}/${id}`);
    reFetch();
  };

  return (
    <div key={item.id}>
      <div className="shadow-lg p-3">
        <div className="flex justify-between">
          <h3 class="tracking-wider text-indigo-500  font-medium title-font mb-2 text-xl ">
            {item.title}
          </h3>
          <div>
            <button className="text-sm mr-2 text-blue-400">
              <Link to={`/editIssue/${item.id}`}>Edit</Link>
            </button>
            <button
              onClick={() => deleteIssue(item.id)}
              className="text-sm text-red-400"
            >
              Delete
            </button>
          </div>
        </div>

        <div>{item.description}</div>
      </div>
    </div>
  );
};

export default Issue;
