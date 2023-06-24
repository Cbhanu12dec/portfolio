import React from "react";
import { PROFILE } from "../utils";
// import Avatar from "react-avatar";
import profile from "../assets/profile1.jpeg";
import { Avatar, Progress } from "antd";
import { FaDownload } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-info max-h-screen">
      <div
        className="profile-header px-4 text-center py-10"
        style={{
          background:
            "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
        }}
      >
        <div>
          <Avatar src={profile} size={140} />
        </div>
        <div className="text-white my-2 font-Poppins tracking-wide text-2xl">
          {PROFILE.NAME}
        </div>
        <div className="text-secondary text-lg italic font-medium">
          {PROFILE.DESIGNATION}
        </div>
      </div>
      <div className="divide-y px-5 relative divide-secondary overflow-scroll">
        {/* first section */}
        <div className="personal-details py-8 px-2">
          <div className="flex justify-between text-lg mt-2">
            <div className="text-white">City:</div>
            <div className="text-secondary">{PROFILE.ADDRESS.CITY}</div>
          </div>
          <div className="flex justify-between text-lg mt-2">
            <div className="text-white">State:</div>
            <div className="text-secondary"> {PROFILE.ADDRESS.STATE}</div>
          </div>
          <div className="flex justify-between text-lg mt-2">
            <div className="text-white">Age:</div>
            <div className="text-secondary"> {PROFILE.AGE}</div>
          </div>
        </div>
        {/* second section */}
        <div className="py-6 relative flex flex-row justify-around">
          <div className="flex flex-col items-center">
            <Progress
              type="circle"
              percent={85}
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
              percent={95}
              size={"small"}
              strokeColor={"#ffc107"}
            />
            <div className="my-2 text-white text-base">
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
        <div className="py-6 relative overflow-scroll">
          {PROFILE.TECHSTACK?.map((item) => {
            return (
              <div className="flex flex-col my-3 mx-2">
                <div className="flex flex-row justify-between">
                  <div className="text-lg text-white">{item.name}</div>
                  <div className="text-lg text-white">{item.proficiency} %</div>
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
        <div className="flex flex-row  py-6 align-middle items-center cursor-pointer  justify-center">
          <div className="text-lg text-secondary mr-3 tracking-wide capitalize font-semibold">
            DOWNLOAD RESUME
          </div>
          <FaDownload color="#54595f" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
