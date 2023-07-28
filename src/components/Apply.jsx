import React from "react";

import { ReactComponent as Close } from "../assets/svgs/close.svg";
import { Tabs, Tab, Box, TextField, Typography, Button } from "@mui/material";

import ProfileImage from "../assets/images/profile-img.png";
import Education from "./cv/Education";
import PersonalInfo from "./cv/PersonalInfo";
import Summary from "./cv/Summary";
import Skills from "./cv/Skills";

// Steps
import { Steps, StepsProvider, useSteps } from "react-step-builder";

const EasyApplyTab = () => {
  return (
    <Box mt={2}>
      <div className="mb-6">
        <h2 className="mb-2 text-xl">Contact Info</h2>
        <div className="flex items-center gap-2">
          <img className="h-20" src={ProfileImage} alt="" />
          <div>
            <h3 className="font-semibold">Marco netto</h3>
            <h3 className="font-semibold">Sales Director</h3>
            <p className="text-sm">Gaspot, England, United Kingdom</p>
          </div>
        </div>
      </div>

      <form action="#">
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="email">Email*</label>
          <select
            className="py-3 bg-white pl-2 text-textGray"
            name="email"
            id="email"
          >
            <option value="" selected>
              ranautban007@gmail.com
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="email">Phone country code*</label>
          <select
            className="py-3 bg-white pl-2 text-textGray"
            name="email"
            id="email"
          >
            <option value="" selected>
              ranautban007@gmail.com
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="email">Phone*</label>
          <select
            className="py-3 bg-white pl-2 text-textGray"
            name="email"
            id="email"
          >
            <option value="" selected>
              98623278362378
            </option>
          </select>
        </div>

        <div className="">
          <p className="">Be sure to include an upload resume</p>
          <div className="mb-3">
            <label
              htmlFor="resume"
              className="inline-block test-sm px-8 py-2 rounded-full border border-darkBlue text-darkOrange"
            >
              Upload resume
            </label>
            <input
              id="resume"
              type="file"
              accept="image/png, image/jpeg"
              style={{ display: "none", visibility: "none" }}
            />
            <p className="text-textGray text-sm">DOC, DOCK, PDF (5 MB)</p>
          </div>
        </div>

        <div className="">
          <input type="checkbox" />{" "}
          <span className="text-sm font-semibold text-darkBlue">
            Follow The Work Shop Resourcing Ltd to stay updated.
          </span>
          <p className="text-sm text-textGray mt-2">
            We wil automatically save your answer and resume to pre-fill future
            application and improve your experience on LinkedIn. You can control
            this in your{" "}
            <span className="text-darkOrange">Application Settings</span>.{" "}
            <a className="text-blue-400 font-medium">Learn more</a>
          </p>
        </div>

        <button
          type="submit"
          className="bg-darkOrange px-8 py-3 rounded-full mt-4 text-white text-sm font-semibold"
        >
          Submit Application
        </button>
      </form>
    </Box>
  );
};

// Steps builder
function StepsBuilder() {
  const { next, prev } = useSteps();
  return (
    <Steps>
      <Education next={next} />
      <PersonalInfo next={next} />
      <Summary next={next} />
      <Skills />
    </Steps>
  );
}

const CreateCVTab = () => {
  return (
    <StepsProvider>
      <StepsBuilder />
    </StepsProvider>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const Apply = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-bgGray">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-darkBlue">
          Apply to The Work Shop Resourcing Ltd
        </h2>
        <button onClick={() => {}}>
          <Close />
        </button>
      </div>

      <Box sx={{ width: "100%" }} my={2}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Easy Apply" sx={{ width: "100%" }} />
          <Tab label="Create CV" sx={{ width: "100%" }} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <EasyApplyTab />
          {/* <Button variant="contained" color="primary" fullWidth>
            Apply
          </Button> */}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <CreateCVTab />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Apply;
