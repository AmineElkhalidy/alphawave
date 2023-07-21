import React from "react";

import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import { ReactComponent as Home } from "../assets/svgs/home.svg";
import { ReactComponent as HomeActive } from "../assets/svgs/home-active.svg";
import { ReactComponent as Companies } from "../assets/svgs/companies.svg";
import { ReactComponent as CompaniesActive } from "../assets/svgs/companies-active.svg";
import { ReactComponent as Images } from "../assets/svgs/images.svg";
import { ReactComponent as ImagesActive } from "../assets/svgs/images-active.svg";
import { ReactComponent as Updates } from "../assets/svgs/synchronize.svg";
import { ReactComponent as UpdatesActive } from "../assets/svgs/synchronize-light.svg";
import { ReactComponent as Events } from "../assets/svgs/calendar.svg";
import { ReactComponent as EventsActive } from "../assets/svgs/calendar-light.svg";
import { ReactComponent as Topics } from "../assets/svgs/file.svg";
import { ReactComponent as TopicsActive } from "../assets/svgs/topics-active.svg";
import { ReactComponent as Jobs } from "../assets/svgs/briefcase.svg";
import { ReactComponent as JobsActive } from "../assets/svgs/briefcase-light.svg";

import { ReactComponent as Profile } from "../assets/svgs/profile.svg";
import { ReactComponent as Logout } from "../assets/svgs/solar_logout-linear.svg";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="min-w-[250px] bg-darkOrange min-h-screen">
      <div className=" flex flex-col items-center h-screen justify-between py-3">
        <img src={Logo} alt="AlphaWave" />

        <div className="w-full flex justify-center">
          <ul className="space-y-4">
            <li
              className={`${
                location.pathname === "/"
                  ? "bg-white pt-3 pb-2 rounded-s-full w-[200%]"
                  : undefined
              }`}
            >
              <Link
                className="inline-flex items-center gap-3 font-semibold"
                to="/"
              >
                {location.pathname === "/" ? <HomeActive /> : <Home />}
                <span
                  className={`${
                    location.pathname === "/" ? "text-black " : "text-white"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>

            <li
              className={`${
                location.pathname === "/companies"
                  ? "bg-white pt-3 pb-2 rounded-s-full w-[200%]"
                  : undefined
              }`}
            >
              <Link
                className="inline-flex items-center gap-3 font-semibold"
                to="/companies"
              >
                {location.pathname === "/companies" ? (
                  <CompaniesActive />
                ) : (
                  <Companies />
                )}
                <span
                  className={`${
                    location.pathname === "/companies"
                      ? "text-black "
                      : "text-white"
                  }`}
                >
                  Companies
                </span>
              </Link>
            </li>

            <li
              className={`${
                location.pathname === "/images"
                  ? "bg-white pt-3 pb-2 rounded-s-full w-[200%]"
                  : undefined
              }`}
            >
              <Link
                className="inline-flex items-center gap-3 font-semibold"
                to="/images"
              >
                {location.pathname === "/images" ? (
                  <ImagesActive />
                ) : (
                  <Images />
                )}
                <span
                  className={`${
                    location.pathname === "/images"
                      ? "text-black "
                      : "text-white"
                  }`}
                >
                  Images
                </span>
              </Link>
            </li>

            <li
              className={`${
                location.pathname === "/updates"
                  ? "bg-white pt-3 pb-2 rounded-s-full w-[200%]"
                  : undefined
              }`}
            >
              <Link
                className="inline-flex items-center gap-3 font-semibold"
                to="/updates"
              >
                {location.pathname === "/updates" ? (
                  <UpdatesActive />
                ) : (
                  <Updates />
                )}
                <span
                  className={`${
                    location.pathname === "/updates"
                      ? "text-black "
                      : "text-white"
                  }`}
                >
                  Updates
                </span>
              </Link>
            </li>

            <li
              className={`${
                location.pathname === "/events"
                  ? "bg-white pt-3 pb-2 rounded-s-full w-[200%]"
                  : undefined
              }`}
            >
              <Link
                className="inline-flex items-center gap-3 font-semibold"
                to="/events"
              >
                {location.pathname === "/events" ? (
                  <EventsActive />
                ) : (
                  <Events />
                )}
                <span
                  className={`${
                    location.pathname === "/events"
                      ? "text-black "
                      : "text-white"
                  }`}
                >
                  Events
                </span>
              </Link>
            </li>

            <li
              className={`${
                location.pathname === "/topics"
                  ? "bg-white pt-3 pb-2 rounded-s-full w-[200%]"
                  : undefined
              }`}
            >
              <Link
                className="inline-flex items-center gap-3 font-semibold"
                to="/topics"
              >
                {location.pathname === "/topics" ? (
                  <TopicsActive />
                ) : (
                  <Topics />
                )}
                <span
                  className={`${
                    location.pathname === "/topics"
                      ? "text-black "
                      : "text-white"
                  }`}
                >
                  Topics
                </span>
              </Link>
            </li>

            <li
              className={`${
                location.pathname === "/jobs"
                  ? "bg-white pt-3 pb-2 rounded-s-full w-[200%]"
                  : undefined
              }`}
            >
              <Link
                className="inline-flex items-center gap-3 font-semibold"
                to="/jobs"
              >
                {location.pathname === "/jobs" ? <JobsActive /> : <Jobs />}
                <span
                  className={`${
                    location.pathname === "/jobs" ? "text-black " : "text-white"
                  }`}
                >
                  Jobs
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <ul className="space-y-3 -ml-8">
          <li>
            <Link
              className="inline-flex items-center gap-3 font-semibold"
              to="/profile"
            >
              <Profile />
              <span className="text-white">Profile</span>
            </Link>
          </li>

          <li>
            <Link
              className="inline-flex items-center gap-3 font-semibold"
              to="/logout"
            >
              <Logout />
              <span className="text-white">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
