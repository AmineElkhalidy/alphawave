import React from "react";

import { Box, Drawer, TextField } from "@mui/material";

import { ReactComponent as Close } from "../assets/svgs/close.svg";

const AddEvent = ({ open, onClose, setIsDrawerOpen }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width="500px" padding="2rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2 className="text-darkBlue text-xl font-semibold">Create Event</h2>
          <button onClick={() => setIsDrawerOpen(false)}>
            <Close />
          </button>
        </Box>

        <Box marginTop="1.5rem">
          <p className="text-textGray text-sm mb-3">
            This section contain the basic details of your event.
          </p>

          <form>
            <div className="space-y-2">
              <label className="font-medium text-darkBlue">Event Title</label>
              <TextField
                fullWidth
                placeholder="Lorem ipsum dolor sit amet consectetur. Nibh amet pellentesque risus amet feugiat consectetur quam mauris quis. "
              />
            </div>

            <Box display="flex" gap="1rem" my={2}>
              <div className="space-y-2">
                <label className="font-medium text-darkBlue">Date</label>
                <TextField fullWidth placeholder="April 25, 2019" />
              </div>

              <div className="space-y-2">
                <label className="font-medium text-darkBlue">Starting at</label>
                <TextField fullWidth placeholder="07:00 AM" />
              </div>
            </Box>

            <Box>
              <div className="space-y-2">
                <label className="font-medium text-darkBlue">
                  Price of the Ticket
                </label>
                <TextField fullWidth placeholder="4300" />
              </div>
            </Box>

            <Box my={2}>
              <div className="space-y-2">
                <label className="font-medium text-darkBlue">
                  Upload events photos
                </label>
                <div className="flex gap-2">
                  <div className="relative w-28 h-28 border border-gray-300 rounded-md bg-gray-200 flex justify-center items-center overflow-hidden">
                    <img src={""} alt="Event image" />
                  </div>

                  <div className="flex gap-2">
                    <label
                      htmlFor="product-images"
                      className="w-28 h-28 border border-gray-300 rounded-md bg-gray-200 flex flex-col justify-center items-center cursor-pointer text-sm gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      Upload
                    </label>
                    <input
                      id="product-images"
                      type="file"
                      accept="image/png, image/jpeg"
                      style={{ display: "none", visibility: "none" }}
                    />
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div className="space-y-2">
                <label className="font-medium text-darkBlue block">
                  Description
                </label>
                <TextField
                  multiline
                  fullWidth
                  placeholder="Lorem ipsum dolor sit amet consectetur. Nibh amet pellentesque risus amet feugiat consectetur quam mauris quis."
                />
              </div>
            </Box>

            <div className="mt-8">
              <button
                type="submit"
                className="py-2 px-6 rounded-full bg-darkOrange text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddEvent;
