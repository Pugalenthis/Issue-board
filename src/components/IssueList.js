import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { api } from "./Api";
import Issue from "./Issue";

const IssueList = () => {
  console.log(api);
  const { data, loading, error, reFetch } = useFetch(`${api}`);
  console.log(data);

  return (
    <div>
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-2 gap-5 gap-y-10">
          {loading ? (
            <div class="absolute inset-2/4 text-xl text-purple-500">
              Loading...
            </div>
          ) : (
            data.map((item) => (
              <Issue key={item.id} item={item} reFetch={reFetch} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default IssueList;
