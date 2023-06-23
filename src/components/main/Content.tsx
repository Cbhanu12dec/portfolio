import React from "react";
import mainimg from "../assets/back-img.jpeg";
import { PROFILE } from "../utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Button, Input } from "antd";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Content() {
  return (
    <div className="min-h-full flex justify-center flex-col">
      <div className="w-full flex flex-col items-center relative mt-10">
        <div
          className="bg-banner-bg h-40 mt-10 w-10/12 absolute -top-8"
          style={{ boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)" }}
        ></div>
        <div
          className="h-80 mt-10 w-11/12"
          style={{
            backgroundImage: `url(${mainimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            zIndex: 99,
          }}
        >
          <div
            className="h-full relative"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(45,45,58,.9) 15%,rgba(45,45,58,.7) 50%,rgba(43,43,53,.7) 100%)",
            }}
          >
            <div className="absolute top-1/4 left-10 ">
              <div className="text-5xl text-white font-Poppins font-extrabold tracking-wider">
                Discover my Amazing
              </div>
              <div className="text-5xl text-white font-Poppins font-bold tracking-wider">
                Art Space!
              </div>
              <div className="my-4">
                <span className="text-white">{`<`}</span>
                <span className="text-app-yellow">code</span>
                <span className="text-white">{`>`}</span>
                <span className="text-white text-lg tracking-widest	">{` I am Software Engineer...! `}</span>
                <span className="text-white">{`<`}</span>
                <span className="text-app-yellow">code</span>
                <span className="text-white">{`/>`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="my-6 flex flex-row mx-12">
        {PROFILE.MAINBANNER?.map((item) => {
          return (
            <div className="stats-banner-item flex flex-row align-middle items-center ml-8">
              <div className="text-3xl text-app-yellow font-semibold">
                {item.COUNT}
              </div>
              <div className="text-lg text-white mx-2">{item.NAME}</div>
            </div>
          );
        })}
      </div>
      {/*  Experiance and Education */}
      <div className="app-history flex flex-row mx-20 py-10">
        <div className="app-eductaion  basis-1/2 flex flex-col">
          <div className="text-2xl text-app-yellow tracking-widest font-semibold">
            Education
          </div>
          <div className="overflow-scroll">
            <VerticalTimeline lineColor="#191923" layout="1-column-right">
              {PROFILE.EDUCATION?.map((item) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background:
                        "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderLeft: "10px solid  rgba(43,43,53,.98)",
                    }}
                    position="left"
                    iconStyle={{
                      background: "#ffc107",
                      borderColor: "blue",
                      height: "15px",
                      width: "15px",
                      marginRight: "13px",
                      marginTop: "18px",
                    }}
                  >
                    <div className="w-full flex flex-row justify-between items-center ">
                      <div className="text-lg font-Poppins ">{item.NAME}</div>
                      <div className="bg-app-terinary-color p-3 text-sm rounded-full text-duration">
                        {item.DURATION}
                      </div>
                    </div>
                    <div className="text-duration mt-4">{item.INFO}</div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
        <div className="app-eductaion basis-1/2 flex flex-col">
          <div className="text-2xl text-app-yellow tracking-widest font-semibold">
            Work History
          </div>
          <div className="overflow-scroll">
            <VerticalTimeline lineColor="#191923" layout="1-column-right">
              {PROFILE.EXPERIANCE?.map((item) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background:
                        "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
                      color: "#fff",
                      border: "none",
                    }}
                    contentArrowStyle={{
                      borderLeft: "10px solid  rgba(43,43,53,.98)",
                    }}
                    position="left"
                    iconStyle={{
                      background: "#ffc107",
                      height: "15px",
                      width: "15px",
                      marginRight: "13px",
                      marginTop: "18px",
                    }}
                  >
                    <div className="w-full flex flex-row justify-between items-center ">
                      <div className="text-lg font-Poppins ">{item.NAME}</div>
                      <div className="bg-app-terinary-color p-3 text-sm rounded-full text-duration">
                        {item.DURATION}
                      </div>
                    </div>
                    <div className="text-duration mt-4">{item.INFO}</div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="app-projects mx-20 mb-10">
        <div className="text-3xl text-white  font-semibold my-6">Projects</div>

        {PROFILE.PROJECTS?.map((item) => {
          return (
            <div
              className="app-card px-10 py-6 w-1/3 rounded"
              style={{
                background: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
                boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
              }}
            >
              <div className="flex flex-row justify-between items-center">
                <div className="title text-white text-xl tracking-wider	">
                  {item.NAME}
                </div>
                <div className="bg-app-terinary-color p-3 text-sm rounded-full text-duration max-w-max my-4">
                  {item.DURATION}
                </div>
              </div>

              <div className="my-4 text-duration">{item.SHORTDESC}</div>
              <div className="text-app-yellow cursor-pointer">VIEW MORE</div>
            </div>
          );
        })}
      </div>

      {/* Contact Information */}
      <div className="contact-section flex flex-col mx-20">
        <div className="text-3xl text-white  font-semibold my-6">
          Contact information
        </div>

        <div className="contact-details grid grid-rows-2 grid-cols-2 gap-4">
          <div
            className="py-6 rounded"
            style={{
              background: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
              boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            }}
          >
            <div className="flex px-10 py-2">
              <div className="text-white text-lg">Name:</div>
              <div className="text-lg text-duration mx-6"> {PROFILE.NAME}</div>
            </div>
            <div className="flex px-10 py-2">
              <div className="text-white text-lg">Email:</div>
              <div className="text-lg text-duration mx-6"> {PROFILE.EMAIL}</div>
            </div>
            <div className="flex px-10 py-2">
              <div className="text-white text-lg">University Mail:</div>
              <div className="text-lg text-duration mx-6">
                {" "}
                {PROFILE.CLGMAIL}
              </div>
            </div>
          </div>
          <div
            className="py-6 rounded"
            style={{
              background: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
              boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            }}
          >
            <div className="flex px-10 py-2">
              <div className="text-white text-lg">Street:</div>
              <div className="text-lg text-duration mx-6">
                {" "}
                {PROFILE.ADDRESS.STREET}
              </div>
            </div>
            <div className="flex px-10 py-2">
              <div className="text-white text-lg">City:</div>
              <div className="text-lg text-duration mx-6">
                {" "}
                {PROFILE.ADDRESS.CITY}
              </div>
            </div>
            <div className="flex px-10 py-2">
              <div className="text-white text-lg">State:</div>
              <div className="text-lg text-duration mx-6">
                {" "}
                {PROFILE.ADDRESS.STATE}
              </div>
            </div>
          </div>
        </div>
        <div className="contact-mail-section my-6">
          <div className="text-2xl text-white">Get in touch</div>
          <div
            className="my-4 px-10 py-10"
            style={{
              background: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
              boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            }}
          >
            <Input
              style={{
                background: "linear-gradient(159deg,#252532 0%,#23232d 100%)",
                height: "60px",
              }}
              bordered={false}
              prefix={
                <BsFillPersonFill
                  color="white"
                  height={40}
                  width={40}
                  fontSize={"30px"}
                />
              }
              size="large"
              placeholder="large size"
            />

            <Input
              style={{
                margin: "30px 0px",
                background: "linear-gradient(159deg,#252532 0%,#23232d 100%)",
                height: "60px",
              }}
              bordered={false}
              prefix={
                <MdEmail
                  color="white"
                  height={40}
                  width={40}
                  fontSize={"30px"}
                />
              }
              size="large"
              placeholder="large size"
            />

            <Button
              size={"large"}
              style={{
                background: "#ffc107",
                color: "#000",
                borderRadius: 0,
                letterSpacing: 1.5,
                fontWeight: 500,
              }}
            >
              SEND MESSAGE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
