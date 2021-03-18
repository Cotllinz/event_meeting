import React from "react";
import Navbar from "../components/navBar";
import Form from "../components/_base/Forms/form";
function eventForm(props) {
  return (
    <div>
      <Navbar {...props} />
      <Form />
    </div>
  );
}

export default eventForm;
