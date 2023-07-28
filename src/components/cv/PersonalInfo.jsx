import React from "react";

import { Box } from "@mui/material";

const PersonalInfo = ({ next }) => {
  return (
    <Box mt={2}>
      <form action="#">
        <div className="flex flex-col gap-1 mb-4">
          <label className="font-semibold" htmlFor="email">
            Driver’s License
          </label>
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
          <label className="font-semibold" htmlFor="email">
            Eligible to Work in UK
          </label>
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
          <label className="font-semibold" htmlFor="email">
            Highest Level of Education
          </label>
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
          <label className="font-semibold" htmlFor="email">
            Industry
          </label>
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
          <label className="font-semibold" htmlFor="email">
            Total Years of experience
          </label>
          <input type="text" className="py-3 bg-white pl-2 text-textGray" />
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <select
            className="py-3 bg-white pl-2 text-textGray"
            name="email"
            id="email"
          >
            <option value="" selected>
              Director of sales
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label className="font-semibold" htmlFor="email">
            Company
          </label>
          <select
            className="py-3 bg-white pl-2 text-textGray"
            name="email"
            id="email"
          >
            <option value="" selected>
              IBZ
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label className="font-semibold" htmlFor="email">
            Country
          </label>
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
          <label className="font-semibold" htmlFor="email">
            City, Country
          </label>
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
          <label className="font-semibold" htmlFor="email">
            Time Period
          </label>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="time" id="" />{" "}
            <span className="text-textGray">Currently enrolled</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label className="font-semibold" htmlFor="email">
            From
          </label>
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
          <label className="font-semibold" htmlFor="email">
            To
          </label>
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

        <div className="flex flex-col gap-1 mb-3">
          <label className="font-semibold" htmlFor="email">
            Job Description
          </label>

          <textarea
            className="py-3 bg-white pl-2 text-textGray outline-none rounded-md"
            name="email"
            id="email"
            placeholder="e.g Kitchen Shop"
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

export default PersonalInfo;
