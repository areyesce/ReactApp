import React, { Component } from "react";
import { Link } from "react-router-dom";

class FormStatus extends Component {
  render() {
    return (
      <>
        <h1>Form Status Page</h1>
        <Link to="/">
          <button>form</button>
        </Link>
      </>
    );
  }
}
export default FormStatus;
