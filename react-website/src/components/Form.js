import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div>
      <h1>Form Page</h1>
      <Link to="/form-status">
        <button>form status</button>
      </Link>
    </div>
  );
};
export default Form;
