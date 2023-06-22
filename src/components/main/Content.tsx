import React from "react";
import mainimg from "../assets/back-img.jpeg";

function Content() {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg,rgba(45,45,58,.9) 15%,rgba(45,45,58,.7) 50%,rgba(43,43,53,.7) 100%)",
      }}
      className="min-h-full flex justify-center relative"
    >
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
            </div>
          </div>
        </div>
      </div>

      {/*  navbar */}
      <div></div>
    </div>
  );
}

export default Content;
