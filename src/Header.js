import React from "react";

const Header = ({ title }) => {
  return <div className="header">{title}</div>;
};
Header.defaultProps = {
  title: "TODO LIST",
};

export default Header;
