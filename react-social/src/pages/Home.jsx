import React from "react";
import { TopBar, Feed, RightBar, SideBar } from "../components";

function Home() {
  return (
    <>
      <TopBar />
      <div className="home">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default Home;
