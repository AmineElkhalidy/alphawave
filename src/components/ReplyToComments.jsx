import React from "react";

import { Box, Drawer, TextField } from "@mui/material";

import { ReactComponent as Close } from "../assets/svgs/close.svg";
import { ReactComponent as Send } from "../assets/svgs/send.svg";
import ProfileImg from "../assets/images/profile-img.png";

const ReplyToComments = ({ open, onClose, setIsDrawerOpen }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width="500px" padding="2rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2 className="text-darkBlue text-xl font-semibold">Comments</h2>
          <button onClick={() => setIsDrawerOpen(false)}>
            <Close />
          </button>
        </Box>

        <Box marginTop="2rem">
          <form className="bg-gray-200 rounded-md w-full py-3 px-2">
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    className="h-12"
                    src={ProfileImg}
                    alt="Profile picture"
                  />
                  <div>
                    <h3 className="font-semibold">
                      Discussion title{" "}
                      <span className="font-normal text-textGray text-sm">
                        2:37 PM
                      </span>
                    </h3>
                    <p className="text-sm">Discussion description</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-bgGray flex rounded-md p-2 justify-between items-center mt-4">
              <input
                type="text"
                placeholder="Reply"
                className="bg-transparent text-sm w-full h-full outline-none"
              />
              <Send />
            </div>
          </form>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ReplyToComments;
