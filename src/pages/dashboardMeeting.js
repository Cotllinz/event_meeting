import React from "react";
import Navbar from "../components/navBar";
import Dashboard from "../components/_base/Dashboard/dashboard";
function dashboardMeeting(props) {
  return (
    <div>
      <Navbar {...props} />
      <Dashboard />
    </div>
  );
}

export default dashboardMeeting;
