import React from "react";

import { Box } from "@mui/material";

const Summary = ({ next, prev }) => {
  return (
    <Box mt={2}>
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => prev()}
          className="flex items-center gap-2 font-semibold text-textGray"
        >
          Education{" "}
        </button>

        <button
          onClick={() => prev()}
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
          className="flex items-center gap-2 font-semibold text-darkOrange"
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
        <div className="flex flex-col gap-1 mb-3">
          <label className="font-semibold" htmlFor="email">
            Add Summary
          </label>

          <textarea
            className="py-3 bg-white pl-2 text-textGray outline-none rounded-md"
            name="email"
            id="email"
            placeholder="Summary"
            rows={5}
          />
        </div>

        <button
          onClick={() => next()}
          type="submit"
          className="bg-darkOrange px-8 py-3 rounded-full mt-4 text-white text-sm font-semibold"
        >
          Continue
        </button>
      </form>
    </Box>
  );
};

export default Summary;
