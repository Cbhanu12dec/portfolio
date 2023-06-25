import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Content from "./components/main/Content";
import mainimg from "../src/components/assets/back-img.jpeg";

function App() {
  return (
    <div className="App px-14 flex flex-row mt-2">
      {/* Profile page */}
      <div
        className="app-info-bar profile-page bg-app-terinary-color col-span-3 transition ease-in-out max-h-screen basis-[26%] relative"
        style={{ boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)" }}
      >
        <Profile />
      </div>
      <div
        className="portfolio-content relative overflow-scroll w-screen bg-content-bg"
        style={{
          position: "relative",
          // overflow: "scroll",
          width: "95vw",
          height: "calc(100vh - 30px)",
          transition: ".55s ease-in-out",
        }}
      >
        <div
          className="prt-curtain w-full h-full opacity-0"
          style={{
            background: "rgba(30,30,40,.88)",
            transition: ".55s ease-in-out",
            opacity: 0,
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div
          className="absolute w-full top-0 overflow-hidden"
          style={{
            backgroundImage: `url(${mainimg})`,
            overflow: "hidden",
            position: "absolute",
            width: "100%",
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "end",
            height: "400px",
            boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
          }}
        >
          <div
            className="part-overlay relative w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(180deg,rgba(30,30,40,.93) 0%,rgba(30,30,40,.96) 70%,rgba(30,30,40,.99) 80%,#1e1e28 100%)",
            }}
          ></div>
        </div>

        <div style={{ position: "absolute", left: 0, top: 0, width: "100%" }}>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
