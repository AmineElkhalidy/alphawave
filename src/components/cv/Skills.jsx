import React from "react";

import { ReactComponent as Edit } from "../../assets/svgs/edit.svg";
import { ReactComponent as Delete } from "../../assets/svgs/remove.svg";

const Skills = ({ prev }) => {
  return (
    <div className="">
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
          Summary{" "}
        </button>

        <button
          onClick={() => prev()}
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
          Skills{" "}
        </button>
      </div>

      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-darkBlue">Skills</h2>
        <button className="text-textGray text-lg" onClick={() => {}}>
          +
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="bg-white rounded-md w-full flex justify-between items-center p-3">
          <span className="font-medium">IT Brize</span>

          <div className="flex gap-2">
            <button onClick={() => {}}>
              <Edit />
            </button>
            <button onClick={() => {}}>
              <Delete />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-md w-full flex justify-between items-center p-3">
          <span className="font-medium">IT Brize</span>

          <div className="flex gap-2">
            <button onClick={() => {}}>
              <Edit />
            </button>
            <button onClick={() => {}}>
              <Delete />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-md w-full flex justify-between items-center p-3">
          <span className="font-medium">IT Brize</span>

          <div className="flex gap-2">
            <button onClick={() => {}}>
              <Edit />
            </button>
            <button onClick={() => {}}>
              <Delete />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-md w-full flex justify-between items-center p-3">
          <span className="font-medium">IT Brize</span>

          <div className="flex gap-2">
            <button onClick={() => {}}>
              <Edit />
            </button>
            <button onClick={() => {}}>
              <Delete />
            </button>
          </div>
        </div>
      </div>

      <button className="bg-darkOrange px-8 py-3 rounded-full mt-4 text-white text-sm font-semibold">
        Submit
      </button>
    </div>
  );
};

export default Skills;
