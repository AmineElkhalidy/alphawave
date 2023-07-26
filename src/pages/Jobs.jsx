import React, { useState } from "react";

import { Modal, Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { ReactComponent as Loaction } from "../assets/svgs/location.svg";
import { ReactComponent as Close } from "../assets/svgs/close.svg";
import GoogleLogo from "../assets/images/google.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Jobs = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full flex">
      <Sidebar />

      {/* Content */}
      <div className="grow bg-bgGray p-6">
        <div className="flex justify-between items-center">
          <div>
            <label
              htmlFor="hs-trailing-button-add-on-with-icon"
              className="sr-only"
            >
              Label
            </label>
            <div className="flex rounded-md shadow-sm">
              <input
                type="text"
                id="hs-trailing-button-add-on-with-icon"
                name="hs-trailing-button-add-on-with-icon"
                className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm outline-none"
                placeholder="Search..."
              />
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md font-semibold bg-white"
              >
                <svg
                  className="h-4 w-4 text-textGray"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Loaction />
            <span className="font-semibold">London</span>
          </div>
        </div>

        <h2 className="text-darkOrange my-6 font-semibold text-[28px] ">
          Jobs
        </h2>

        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-3 space-y-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <img src={GoogleLogo} alt="Google" />

                  <div>
                    <h3 className="font-semibold text-xl">Google</h3>
                    <p className="text-textGray text-sm font-semibold">
                      Full Stack Developer
                    </p>
                    <div className="flex gap-4">
                      <p className="text-textGray text-sm font-semibold">
                        2 Days ago
                      </p>
                      <p className="text-textGray text-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-textGray inline-block mr-3"></span>
                        6 Applied
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <p className="font-semibold text-sm text-textGray">
                    Singapore
                  </p>
                  <button
                    onClick={handleOpen}
                    className="text-xs font-semibold text-blue-500"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img className="h-12" src={GoogleLogo} alt="Company picture" />
                <div>
                  <h3 className="font-medium text-textGray text-sm">Google</h3>
                  <p className="font-semibold">Backend developer</p>
                </div>
              </div>

              <button onClick={handleClose}>
                <Close />
              </button>
            </div>

            <div className="mt-6">
              <div>
                <h2 className="font-medium">Job title</h2>
                <p className="text-textGray">Kitchen Shop</p>
              </div>

              <div className="my-4">
                <h2 className="font-medium">Description</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Sed sit amet ac
                  consequat morbi nibh at. Purus magnis ac leo eget at mi
                  rhoncus. Aliquet sodales congue nulla euismod adipiscing
                  integer netus mauris. Lorem ipsum dolor sit amet consectetur.
                  Sed sit amet ac consequat morbi nibh at. Purus magnis ac leo
                  eget at mi rhoncus. Aliquet sodales congue nulla euismod
                  adipiscing integer netus mauris. Lorem ipsum dolor sit amet
                  consectetur. Sed sit amet ac consequat morbi nibh at. Purus
                  magnis ac leo eget at mi rhoncus. Aliquet sodales congue nulla
                  euismod adipiscing integer netus mauris. Faucibus et sed vel
                  mauris elementum gravida euismod tempus. Risus bibendum proin
                  non varius. Laoreet nulla odio nulla etiam integer tellus
                  <br />
                  luctus mauris. Vitae hac rhoncus ultricies accumsan varius
                  leo. Lorem ipsum dolor sit amet consectetur. Sed sit amet ac
                  consequat morbi nibh at. Purus magnis ac leo eget at mi
                  rhoncus. Aliquet sodales congue nulla euismod adipiscing
                  integer netus mauris. Lorem ipsum dolor sit amet consectetur.
                  Sed sit amet ac consequat morbi nibh at. Purus magnis ac leo
                  eget at mi rhoncus. Aliquet sodales congue nulla euismod
                  adipiscing integer netus mauris.
                </p>
              </div>

              <div>
                <h2 className="font-medium">Salary</h2>
                <p className="text-textGray">Negociable</p>
              </div>

              <div className="mt-4">
                <button className="px-10 py-2 bg-darkOrange text-white rounded-full">
                  Apply
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Jobs;
