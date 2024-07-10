import React from "react";
const HeaderList = (props) => {
  const { children, link } = props;
  return (
    <li className="nav_item">
      <a href={link} className="nav_link active-link">
        {children}
      </a>
    </li>
  );
};

export default HeaderList;
