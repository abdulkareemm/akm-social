import React from "react";
import { ForwardArrow } from "../img";

const Pin = ({ pinSize }) => {
  return (
    <div className={`pin ${pinSize}`}>
      <img
        src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg"
        className="minPic"
        alt=""
      />
      <div className="content">
        <h3>Sample name</h3>
        <div className="search">
          <img src={ForwardArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pin;
