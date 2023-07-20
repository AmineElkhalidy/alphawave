import Sidebar from "../components/Sidebar";

import { ReactComponent as Loaction } from "../assets/svgs/location.svg";

import GoogleLogo from "../assets/images/google.png";

const Jobs = () => {
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
          <div className="bg-white rounded-lg p-3 space-y-6">
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
                <p className="font-semibold text-sm text-textGray">Singapore</p>
                <button className="text-xs font-semibold text-blue-500">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 space-y-6">
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
                <p className="font-semibold text-sm text-textGray">Singapore</p>
                <button className="text-xs font-semibold text-blue-500">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 space-y-6">
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
                <p className="font-semibold text-sm text-textGray">Singapore</p>
                <button className="text-xs font-semibold text-blue-500">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 space-y-6">
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
                <p className="font-semibold text-sm text-textGray">Singapore</p>
                <button className="text-xs font-semibold text-blue-500">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 space-y-6">
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
                <p className="font-semibold text-sm text-textGray">Singapore</p>
                <button className="text-xs font-semibold text-blue-500">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
