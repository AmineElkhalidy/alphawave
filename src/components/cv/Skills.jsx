import React from "react";

import { ReactComponent as Edit } from "../../assets/svgs/edit.svg";
import { ReactComponent as Delete } from "../../assets/svgs/remove.svg";

const Skills = () => {
  return (
    <div className="">
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
