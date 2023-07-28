import React from "react";

import { Box } from "@mui/material";

const Summary = ({ next }) => {
  return (
    <Box mt={2}>
      <form action="#">
        <div className="flex flex-col gap-1 mb-3">
          <label className="font-semibold" htmlFor="email">
            Add Summary
          </label>

          <textarea
            className="py-3 bg-white pl-2 text-textGray outline-none rounded-md"
            name="email"
            id="email"
            placeholder="Summary"
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

export default Summary;
