import Sidebar from "../components/Sidebar";

import { ReactComponent as Loaction } from "../assets/svgs/location.svg";
import { ReactComponent as Star } from "../assets/svgs/star.svg";
import { ReactComponent as Badge } from "../assets/svgs/badge.svg";
import { ReactComponent as Comment } from "../assets/svgs/comment.svg";

import GoogleLogo from "../assets/images/google.png";
import Bycycle from "../assets/images/bycycle.png";
import Adventure from "../assets/images/adventure.png";
import BycycleYellow from "../assets/images/yellow-cycles.png";
import AudiCar from "../assets/images/audi-car.png";
import BmwCar from "../assets/images/bmw-car.png";
import Lights from "../assets/images/lights.png";

const images = [Bycycle, Adventure, BycycleYellow, AudiCar, BmwCar, Lights];

const Images = () => {
  return (
    <div className="w-full flex">
      <Sidebar />

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
          <h2 className="text-darkOrange font-semibold text-[28px] ">Images</h2>

          <button className="bg-white text-textGray font-semibold py-2.5 px-4 rounded-full">
            + New Image
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg p-3 space-y-6 ">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <img src={GoogleLogo} alt="Google" />

                  <div>
                    <h3 className="font-semibold text-xl">Google</h3>
                    <p className="text-textGray text-sm">*google*</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="flex items-center gap-1">
                    <span className="text-sm">3</span>
                    <Badge />
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-sm">4.5</span>
                    <Star />
                  </div>
                </div>
              </div>

              <img src={image} alt="Bycycle" />

              <div className="flex flex-col gap-4">
                <div className="bg-bgGray flex rounded-md p-2 justify-between items-center">
                  <input
                    type="text"
                    placeholder="Write comments"
                    className="bg-transparent text-sm w-full h-full outline-none"
                  />
                  <div className="flex gap-2">
                    <Comment />
                    <span className="font-medium">17</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
