import React from "react";
import NavBar from "../components/navBar";
import CardMeeting from "../components/_base/HomePage/cardMeeting";
function homePage(props) {
  return (
    <div className="HomePageCard">
      <NavBar {...props} />
      <CardMeeting />
    </div>
  );
}

export default homePage;
