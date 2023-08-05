import React from "react";

import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Education = ({ next }) => {
  return (
    <Box mt={2}>
      <div className="mb-6 flex gap-2">
        <button className="flex items-center gap-2 font-semibold text-darkOrange">
          Education{" "}
        </button>

        <button
          onClick={() => next()}
          className="flex items-center gap-2 font-semibold text-textGray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          Personal Information{" "}
        </button>

        <button
          onClick={() => next()}
          className="flex items-center gap-2 font-semibold text-textGray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          Summary{" "}
        </button>

        <button
          onClick={() => next()}
          className="flex items-center gap-2 font-semibold text-textGray"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          Skills{" "}
        </button>
      </div>

      <form action="#">
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Level of Education</label>
          <select
            className="py-3 bg-white pl-2 text-textGray"
            name="email"
            id="email"
          >
            <option value="" selected>
              Bachelor&apos;s Degree
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Field Study</label>
          <select
            className="py-3 bg-white pl-2 text-textGray"
            name="email"
            id="email"
          >
            <option value="" selected>
              Digital Music Technology
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">School Name</label>
          <input type="text" className="py-3 bg-white pl-2 text-textGray" />
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Country</label>
          <select
            className="py-3 bg-white pl-2 text-textGray"
            name="email"
            id="email"
          >
            <option value="" selected>
              United Kingdom
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">City, Country</label>
          <select
            className="py-3 bg-white pl-2 text-textGray"
            name="email"
            id="email"
          >
            <option value="" selected>
              Lorem ipsum dolor sit amet
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Time Period</label>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="time" id="" />{" "}
            <span className="text-textGray">Currently enrolled</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="email">From</label>
          <div className="grid grid-cols-2 gap-2">
            <select className="py-3 bg-white pl-2 text-textGray rounded-md">
              <option value="" selected>
                September
              </option>
            </select>

            <select className="py-3 bg-white pl-2 text-textGray rounded-md">
              <option value="" selected>
                2014
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">To</label>
          <div className="grid grid-cols-2 gap-2">
            <select className="py-3 bg-white pl-2 text-textGray rounded-md">
              <option value="" selected>
                September
              </option>
            </select>

            <select className="py-3 bg-white pl-2 text-textGray rounded-md">
              <option value="" selected>
                2014
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-darkOrange px-8 py-3 rounded-full mt-4 text-white text-sm font-semibold"
          onClick={() => next()}
        >
          Continue
        </button>
      </form>
    </Box>
  );
};

export default Education;
