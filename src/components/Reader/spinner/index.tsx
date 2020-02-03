import * as React from "react";
import "./spinner.css";

const Spinner = () => (
  <div className="spinner-wrapper">
    <div className="spinner">
      <div className="rect" />
      <div className="rect rect2" />
      <div className="rect rect3" />
      <div className="rect rect4" />
      <div className="rect rect5" />
    </div>
  </div>
);

export default Spinner;
