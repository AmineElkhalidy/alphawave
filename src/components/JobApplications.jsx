import React from "react";

import { ReactComponent as Close } from "../assets/svgs/close.svg";
import { ReactComponent as Email } from "../assets/svgs/email.svg";
import { ReactComponent as Check } from "../assets/svgs/check.svg";
import { ReactComponent as Sound } from "../assets/svgs/sound.svg";
import { ReactComponent as Calendar } from "../assets/svgs/jobsCalendar.svg";
import { ReactComponent as Files } from "../assets/svgs/jobsFiles.svg";
import BycycleYellow from "../assets/images/yellow-cycles.png";

const JobApplications = () => {
  return (
    <div className="w-full p-4 bg-bgGray">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-darkBlue">Job Applications</h2>
        <button onClick={() => {}}>
          <Close />
        </button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 "
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-darkBlue"
            >
              External
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 "
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-darkBlue"
            >
              Internal
            </label>
          </div>
        </div>

        <div>
          <select className="py-3 px-4 pr-9 block w-full text-sm bg-transparent text-darkOrange font-medium">
            <option selected>All Jobs</option>
            <option>IDK</option>
            <option>IDK</option>
            <option>IDK</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white p-3 shadow-sm rounded-md">
          <div className="flex gap-2">
            <div className="w-[90px] h-[90px] rounded-md overflow-hidden ">
              <img
                className="h-full w-full"
                src={BycycleYellow}
                alt="Yellow Bycycle"
              />
            </div>
            <div className="font-semibold">
              <h3 className="text-darkBlue">
                Product designer{" "}
                <span className="text-textGray text-xs font-semibold">
                  Easy Apply
                </span>
              </h3>
              <h4 className="text-darkBlue">(Unpaid)</h4>
              <h5 className="text-textGray text-sm">Twice</h5>
              <h5 className="text-textGray text-sm">New York City</h5>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 items-center justify-center">
              <Email />
              <div className="bg-darkOrange rounded-md py-3 px-10" />
              <p className="text-xs">Sort</p>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              <Check />
              <div className="bg-darkOrange rounded-md py-3 px-10" />
              <p className="text-xs">Confirmation</p>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              <Sound />
              <div className="bg-[#FFB800] rounded-md py-3 px-10" />
              <p className="text-xs">Action Needed</p>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              <Calendar />
              <div className="bg-[#FFF1ED] rounded-md py-3 px-10" />
              <p className="text-xs">Interview</p>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              <Files />
              <div className="bg-[#FFF1ED] rounded-md py-3 px-10" />
              <p className="text-xs">Offer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplications;
