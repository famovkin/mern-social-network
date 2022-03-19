import React from "react";
import { TopBar, Feed, RightBar, SideBar } from "../components";

function Home() {
  return (
    <>
      <TopBar />
      <main className="home">
        <SideBar />
        <div className="home__container">
          <Feed />
          <RightBar />
        </div>
      </main>
    </>
  );
}

export default Home;
