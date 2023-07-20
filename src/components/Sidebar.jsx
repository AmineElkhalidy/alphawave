import React from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import { ReactComponent as Home } from "../assets/svgs/home.svg";
import { ReactComponent as HomeLight } from "../assets/svgs/companies.svg";
import { ReactComponent as Companies } from "../assets/svgs/companies.svg";
import { ReactComponent as CompaniesLight } from "../assets/svgs/home-light.svg";
import { ReactComponent as Images } from "../assets/svgs/images.svg";
import { ReactComponent as ImagesLight } from "../assets/svgs/home-light.svg";
import { ReactComponent as Updates } from "../assets/svgs/synchronize.svg";
import { ReactComponent as UpdatesLight } from "../assets/svgs/home-light.svg";
import { ReactComponent as Events } from "../assets/svgs/calendar.svg";
import { ReactComponent as EventsLight } from "../assets/svgs/home-light.svg";
import { ReactComponent as Topics } from "../assets/svgs/file.svg";
import { ReactComponent as TopicsLight } from "../assets/svgs/home-light.svg";
import { ReactComponent as Jobs } from "../assets/svgs/briefcase.svg";
import { ReactComponent as JobsLight } from "../assets/svgs/home-light.svg";
import { ReactComponent as Profile } from "../assets/svgs/profile.svg";
import { ReactComponent as Logout } from "../assets/svgs/solar_logout-linear.svg";

const Sidebar = () => {
  return (
    <aside className="min-w-[250px] bg-darkOrange min-h-screen">
      <div className="flex flex-col items-center h-screen justify-between py-3">
        <img src={Logo} alt="AlphaWave" />

        <ul className="space-y-4">
          <li>
            <Link
              className="inline-flex items-center gap-3 font-semibold"
              to="/"
            >
              <Home />
              <span className="text-white">Home</span>
            </Link>
          </li>

          <li>
            <Link
              className="inline-flex items-center gap-3 font-semibold"
              to="/companies"
            >
              <Companies />
              <span className="text-white">Companies</span>
            </Link>
          </li>

          <li>
            <Link
              className="inline-flex items-center gap-3 font-semibold"
              to="/images"
            >
              <Images />
              <span className="text-white">Images</span>
            </Link>
          </li>

          <li>
            <Link
              className="inline-flex items-center gap-3 font-semibold"
              to="/updates"
            >
              <Updates />
              <span className="text-white">Updates</span>
            </Link>
          </li>

          <li>
            <Link
              className="inline-flex items-center gap-3 font-semibold"
              to="/events"
            >
              <Events />
              <span className="text-white">Events</span>
            </Link>
          </li>

          <li>
            <Link
              className="inline-flex items-center gap-3 font-semibold"
              to="/topics"
            >
              <Topics />
              <span className="text-white">Topics</span>
            </Link>
          </li>

          <li>
            <Link
              className="inline-flex items-center gap-3 font-semibold"
              to="/jobs"
            >
              <Jobs />
              <span className="text-white">Jobs</span>
            </Link>
          </li>
        </ul>

        <ul className="space-y-3 -ml-6">
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
