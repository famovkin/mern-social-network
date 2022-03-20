import React, { useState } from "react";
import { TopBar, Feed, RightBar, SideBar } from "../components";

function Home() {
  const [rightBarOpened, setRightBarOpened] = useState(false);

  const openRightBar = () => setRightBarOpened(true);
  const closeRightBar = () => setRightBarOpened(false);

  return (
    <>
      <TopBar openRightBar={openRightBar} isRightBarOpened={rightBarOpened}/>
      <main className="home">
        <SideBar />
        <div className="home__container">
          <Feed />
          <RightBar
            isOpen={rightBarOpened}
            closeRightBar={closeRightBar}
            openRightBar={openRightBar}
          />
        </div>
      </main>
    </>
  );
}

export default Home;
