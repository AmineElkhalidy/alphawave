import { ReactComponent as Discussion } from "../assets/svgs/discussion.svg";
import { ReactComponent as Notification } from "../assets/svgs/notification.svg";
import ProfileImage from "../assets/images/profile-img.png";

const stats = [
  {
    number: 12,
    label: "Ratings",
  },
  {
    number: 12,
    label: "Comments",
  },
  {
    number: 12,
    label: "Business Supported",
  },
  {
    number: 12,
    label: "Conversation Started",
  },
  {
    number: 12,
    label: "Likes",
  },
  {
    number: 12,
    label: "Comments",
  },
];

const ProfileAside = () => {
  return (
    <aside className="min-h-screen bg-white min-w-[250px]">
      <div className="flex justify-center h-full py-10">
        {/* Content */}
        <div className="space-y-12">
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-textGray text-center">Username</h2>
            <div className="flex items-center gap-6">
              <button>
                <Discussion />
              </button>
              <img
                className="w-20"
                src={ProfileImage}
                alt="User profile image"
              />
              <button>
                <Notification />
              </button>
            </div>
            <p className="p-2 bg-textGray rounded-lg text-white text-center">
              Newbie
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-2xl text-center">Stats</h2>
            <div className="grid grid-cols-2 gap-y-4">
              {stats.map((state, index) => (
                <div key={index} className="text-center space-y-1 px-2">
                  <div className="max-w-20 h-16 bg-lighterOrange rounded-lg">
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="font-semibold text-darkOrange text-2xl">
                        {state.number}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm">{state.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileAside;
