import Sidebar from "../components/Sidebar";

import { ReactComponent as Loaction } from "../assets/svgs/location.svg";
import { ReactComponent as EventCalendar } from "../assets/svgs/event-calendar.svg";
import { ReactComponent as EventLocation } from "../assets/svgs/event-location.svg";

import { Link } from "react-router-dom";

const Events = () => {
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

        <div>
          <div className="flex justify-between items-center my-6">
            <h2 className="text-darkOrange font-semibold text-[28px] ">
              Events
            </h2>

            <button className="bg-darkOrange text-white font-semibold py-2.5 px-4 rounded-full">
              + New Events
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="p-3 bg-white rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-textGray font-medium">
                    <span className="text-darkOrange font-semibold text-lg">
                      12
                    </span>
                    OCT
                  </p>

                  <button className="text-xs font-semibold bg-bgGray p-2 rounded-md">
                    Music Events
                  </button>
                </div>

                <h2 className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>

                <div className="flex items-center gap-2">
                  <EventCalendar />
                  <span className="text-xs font-semibold text-textGray">
                    Monday, 10 July 2023
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <EventLocation />
                  <span className="text-xs font-semibold text-textGray">
                    1 Bus Street, London, E1 1 AA
                  </span>
                </div>

                <div className="flex">
                  <Link
                    className="w-full bg-lightOranger rounded-full text-center py-3 text-white text-sm font-semibold"
                    to="#"
                  >
                    Get A Ticket
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="my-6 font-semibold text-lg">Upcoming Events</h2>

          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="p-3 bg-white rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-textGray font-medium">
                    <span className="text-darkOrange font-semibold text-lg">
                      12
                    </span>
                    OCT
                  </p>

                  <button className="text-xs font-semibold bg-bgGray p-2 rounded-md">
                    Music Events
                  </button>
                </div>

                <h2 className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>

                <div className="flex items-center gap-2">
                  <EventCalendar />
                  <span className="text-xs font-semibold text-textGray">
                    Monday, 10 July 2023
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <EventLocation />
                  <span className="text-xs font-semibold text-textGray">
                    1 Bus Street, London, E1 1 AA
                  </span>
                </div>

                <div className="flex">
                  <Link
                    className="w-full bg-lightOranger rounded-full text-center py-3 text-white text-sm font-semibold"
                    to="#"
                  >
                    Get A Ticket
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
