import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { api } from "./api";
import Issue from "./Issue";

const IssueList = () => {
  console.log(api);
  const { data, loading, error, reFetch } = useFetch(`${api}`);
  console.log(data);

  const deleteIssue = async (id) => {
    const res = await axios.delete(`${api}/${id}`);
    reFetch();
  };
  return (
    <div>
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-2 gap-5">
          {loading
            ? "loading"
            : data.map((item) => (
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
              ))}
        </div>
      </div>
    </div>
  );
};

export default IssueList;
