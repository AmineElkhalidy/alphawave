import React from "react";
import Sidebar from "../components/Sidebar";

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ReactComponent as Loaction } from "../assets/svgs/location.svg";

import { topics } from "../data/data";

const Topics = () => {
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [rows, setRows] = React.useState(topics);

  const columns = [
    {
      field: "topics",
      headerName: "Topics",
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "users",
      headerName: "Users",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "datePosted",
      headerName: "Date Posted",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "reviews",
      headerName: "Reviews",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "comments",
      headerName: "Comments",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ratings",
      headerName: "Ratings",
      headerAlign: "center",
      align: "center",
    },
  ];
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
        <div className="flex justify-between items-center my-6">
          <h2 className="text-darkOrange font-semibold text-[28px] ">
            Discussion
          </h2>

          <button className="bg-darkOrange text-white font-semibold py-2.5 px-4 rounded-full">
            + New discussion
          </button>
        </div>
        <Box
          width="98%"
          height={500}
          m="0 auto"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-row": {
              backgroundColor: "white",
              borderRadius: "10px",
              marginBlock: "5px",
              padding: "0 3px",
            },
            "& .MuiDataGrid-footerContainer": {
              border: "none",
            },
          }}
        >
          <DataGrid
            sx={{ width: "100%", height: "100%" }}
            columns={columns}
            rows={rows}
            selectionModel={selectionModel}
            onSelectionModelChange={(newSelection) => {
              setSelectionModel(newSelection);
            }}
            deleteRowsModel={selectionModel}
          />
        </Box>
      </div>
    </div>
  );
};

export default Topics;
