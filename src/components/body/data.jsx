import { UilFastMail } from "@iconscout/react-unicons";
import React from "react";
const Data = (props) => {
  const { fullname, occasion, children } = props;
  return (
    <div className="body_data">
      <h1 className="body_title">{fullname}</h1>
      <h3 className="body_subtitle typed">{occasion}</h3>
      <p className="body_description">{children}</p>
      <a href="#contact" className="btn btn-dark btn-lg button">
        Contact me
        <UilFastMail />
      </a>
    </div>
  );
};

export default Data;
