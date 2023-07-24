import React from "react";

import { Box, Drawer, TextField } from "@mui/material";

import { ReactComponent as Close } from "../assets/svgs/close.svg";

const NewDiscussion = ({ open, onClose, setIsDrawerOpen }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width="500px" padding="2rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2 className="text-darkBlue text-xl font-semibold">
            Create New Discussion
          </h2>
          <button onClick={() => setIsDrawerOpen(false)}>
            <Close />
          </button>
        </Box>

        <Box marginTop="3rem">
          <form>
            <div className="space-y-2">
              <label className="font-medium text-darkBlue">
                Discussion Title
              </label>
              <TextField
                fullWidth
                placeholder="Lorem ipsum dolor sit amet consectetur. Nibh amet pellentesque risus amet feugiat consectetur quam mauris quis. "
              />
            </div>

            <Box mt={2}>
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

export default NewDiscussion;
