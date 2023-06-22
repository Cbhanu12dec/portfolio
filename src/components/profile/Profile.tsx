import React from "react";
import { PROFILE } from "../utils";
import Avatar from "react-avatar";
import profile from "../assets/profile1.jpeg";
import { Progress } from "antd";
import { FaDownload } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-info min-h-full">
      <div
        className="profile-header px-4 text-center py-6"
        style={{
          background:
            "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
        }}
      >
        <div>
          <Avatar src={profile} round={true} />
        </div>
        <div className="text-white my-2 font-Poppins tracking-wide text-base">
          {PROFILE.NAME}
        </div>
        <div className="text-secondary text-sm">{PROFILE.DESIGNATION}</div>
      </div>
      <div className="divide-y px-5 divide-secondary">
        {/* first section */}
        <div className="personal-details py-4">
          <div className="flex justify-between text-sm mt-1">
            <div className="text-white">City:</div>
            <div className="text-secondary">{PROFILE.ADDRESS.CITY}</div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <div className="text-white">State:</div>
            <div className="text-secondary"> {PROFILE.ADDRESS.STATE}</div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <div className="text-white">Age:</div>
            <div className="text-secondary"> {PROFILE.AGE}</div>
          </div>
        </div>
        {/* second section */}
        <div className="py-6 flex flex-row justify-around">
          <div className="flex flex-col items-center">
            <Progress
              type="circle"
              percent={75}
              size={"small"}
              strokeColor={"#ffc107"}
            />
            <div className="my-2 text-white text-sm">
              {PROFILE.LANGUAGES[0]}
            </div>
          </div>
          <div className="flex flex-col justify-center justify-items-center align-middle">
            <Progress
              type="circle"
              percent={75}
              size={"small"}
              strokeColor={"#ffc107"}
            />
            <div className="my-2 text-white text-sm">
              {PROFILE.LANGUAGES[1]}
            </div>
          </div>
          <div className="flex flex-col justify-center justify-items-center align-middle">
            <Progress
              type="circle"
              percent={75}
              size={"small"}
              strokeColor={"#ffc107"}
            />
            <div className="my-2 text-white text-sm">
              {PROFILE.LANGUAGES[2]}
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="py-4">
          {PROFILE.TECHSTACK?.map((item) => {
            return (
              <div className="flex flex-col my-2 mx-2">
                <div className="flex flex-row justify-between">
                  <div className="text-sm text-white">{item.name}</div>
                  <div className="text-sm text-white">{item.proficiency} %</div>
                </div>
                <Progress
                  percent={item.proficiency}
                  strokeColor={"#ffc107"}
                  strokeWidth={3}
                  showInfo={false}
                />
              </div>
            );
          })}
        </div>

        {/* fourth section */}
        <div className="flex flex-row  py-6 align-middle items-center cursor-pointer">
          <div className="text-sm text-secondary mr-3 tracking-wide capitalize font-semibold">
            DOWNLOAD RESUME
          </div>
          <FaDownload color="#54595f" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
