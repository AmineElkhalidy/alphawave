import React from "react";

import { ReactComponent as Close } from "../assets/svgs/close.svg";
import { ReactComponent as Clock } from "../assets/svgs/clock.svg";
import { Tabs, Tab, Box, TextField, Typography, Button } from "@mui/material";

const OnSiteJobs = () => {
  return (
    <Box mt={2}>
      <form action="#">
        <div className="flex flex-col gap-1 mb-3">
          <div>
            <label className="font-semibold" htmlFor="email">
              Employment type
            </label>
            <br />
            <span className="text-sm text-textGray">
              Pick one or multiple options
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-md flex gap-2 py-3 pl-3 items-center">
              <input type="checkbox" name="employment-type" id="" />{" "}
              <span className="font-medium">Full Time</span>
            </div>

            <div className="bg-white rounded-md flex gap-2 py-3 pl-3 items-center">
              <input type="checkbox" name="employment type" id="" />{" "}
              <span className="font-medium">Full Time</span>
            </div>

            <div className="bg-white rounded-md flex gap-2 py-3 pl-3 items-center">
              <input type="checkbox" name="employment type" id="" />{" "}
              <span className="font-medium">On demand</span>
            </div>

            <div className="bg-white rounded-md flex gap-2 py-3 pl-3 items-center">
              <input type="checkbox" name="employment type" id="" />{" "}
              <span className="font-medium">Negotiable</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <div className="">
            <label className="font-semibold" htmlFor="email">
              Working schedule
            </label>
            <br />
            <span className="text-sm text-textGray">
              You can pick multiple work schedules
            </span>
          </div>
          <select className="py-3 bg-white pl-2 text-textGray rounded-md">
            <option value="" selected>
              98623278362378
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <div className="">
            <label className="font-semibold" htmlFor="email">
              Salary
            </label>
            <br />
            <span className="text-sm text-textGray">
              Choose how you prefer to pay for this job.
            </span>
          </div>
          <div className="flex gap-2">
            <div className="w-32 h-28 bg-white rounded-md">
              <div className="w-full h-full relative">
                <input
                  className="absolute top-2 left-2"
                  type="radio"
                  name="rate"
                  id=""
                />
                <div className="h-full flex flex-col justify-center items-center">
                  <Clock />
                  <span className="text-textGray">Hourly</span>
                </div>
              </div>
            </div>
            <div className="w-32 h-28 bg-white rounded-md">
              <div className="w-full h-full relative">
                <input
                  className="absolute top-2 left-2"
                  type="radio"
                  name="rate"
                  id=""
                />
                <div className="h-full flex flex-col justify-center items-center">
                  <Clock />
                  <span className="text-textGray">Custom</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label className="font-semibold" htmlFor="email">
            Hourly Rate
          </label>
          <input className="py-3 bg-white pl-2 text-textGray rounded-md outline-none" />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <div>
            <label className="font-semibold" htmlFor="email">
              Hiring multiple candidates?
            </label>
            <br />
            <span className="text-sm text-textGray">
              This will be displayed on job page for candidates to see.
            </span>
          </div>

          <div className="bg-white rounded-md flex gap-2 py-3 pl-3 items-center">
            <input type="checkbox" name="employment-type" id="" />{" "}
            <span className="font-medium text-sm">
              Yes, I am hiring multiple candidates
            </span>
          </div>
        </div>

        <div>
          <input type="checkbox" />{" "}
          <span className="text-sm text-darkBlue">Salary is negotiable</span>
        </div>

        <button
          type="submit"
          className="bg-darkOrange px-8 py-3 rounded-full mt-4 text-white text-sm font-semibold"
        >
          Submit
        </button>
      </form>
    </Box>
  );
};

const RemoteJob = () => {
  return (
    <Box mt={2}>
      <form action="#">
        <div className="flex flex-col gap-1 mb-3">
          <div className="">
            <label className="font-semibold" htmlFor="email">
              Job Title
            </label>
            <br />
            <span className="text-sm text-textGray">
              A job title must describe one position only
            </span>
          </div>
          <input
            className="py-3 bg-white pl-2 text-textGray outline-none rounded-md"
            name="email"
            id="email"
            placeholder="e.g Kitchen Shop"
          />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <div className="">
            <label className="font-semibold" htmlFor="email">
              Job Description
            </label>
            <br />
            <span className="text-sm text-textGray">
              Provide a short description
            </span>
          </div>
          <textarea
            className="py-3 bg-white pl-2 text-textGray outline-none rounded-md"
            name="email"
            id="email"
            placeholder="e.g Kitchen Shop"
            rows={5}
          />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <div className="">
            <label className="font-semibold" htmlFor="email">
              Salary
            </label>
            <br />
            <span className="text-sm text-textGray">
              Choose how you prefer to pay for this job.
            </span>
          </div>
          <div className="flex gap-2">
            <div className="w-32 h-28 bg-white rounded-md">
              <div className="w-full h-full relative">
                <input
                  className="absolute top-2 left-2"
                  type="radio"
                  name="rate"
                  id=""
                />
                <div className="h-full flex flex-col justify-center items-center">
                  <Clock />
                  <span className="text-textGray">Hourly</span>
                </div>
              </div>
            </div>
            <div className="w-32 h-28 bg-white rounded-md">
              <div className="w-full h-full relative">
                <input
                  className="absolute top-2 left-2"
                  type="radio"
                  name="rate"
                  id=""
                />
                <div className="h-full flex flex-col justify-center items-center">
                  <Clock />
                  <span className="text-textGray">Custom</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label className="font-semibold" htmlFor="email">
            Hourly Rate
          </label>
          <input className="py-3 bg-white pl-2 text-textGray rounded-md outline-none" />
        </div>

        <div>
          <input type="checkbox" />{" "}
          <span className="text-sm text-darkBlue">Salary is negotiable</span>
        </div>

        <button
          type="submit"
          className="bg-darkOrange px-8 py-3 rounded-full mt-4 text-white text-sm font-semibold"
        >
          Submit
        </button>
      </form>
    </Box>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const NewJob = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-bgGray">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-darkBlue">New Job</h2>
        <button onClick={() => {}}>
          <Close />
        </button>
      </div>

      <Box sx={{ width: "100%" }} my={2}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="On Site Jobs" sx={{ width: "100%" }} />
          <Tab label="Remote Job" sx={{ width: "100%" }} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <OnSiteJobs />
          {/* <Button variant="contained" color="primary" fullWidth>
              Apply
            </Button> */}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <RemoteJob />
        </TabPanel>
      </Box>
    </div>
  );
};

export default NewJob;
