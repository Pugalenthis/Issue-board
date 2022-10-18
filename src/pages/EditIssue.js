import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../components/api";

import Navbar from "../components/navbar";

const EditIssue = () => {
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const [formData, setFormData] = useState({
    title: undefined,
    description: undefined,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${api}`, formData);
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <section class="text-gray-600 body-font relative">
        <form onSubmit={handleSubmit}>
          <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div class="lg:w-3/3 md:w-3/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  onChange={handleChange}
                  name="name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Description
                </label>
                <textarea
                  id="description"
                  onChange={handleChange}
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditIssue;
