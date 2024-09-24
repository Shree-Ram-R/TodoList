import React from "react";

const Footer = ({ length }) => {
  const year = new Date();
  return (
    <>
      <div className="footer">CopyRight &copy; {year.getFullYear()}</div>;
    </>
  );
};

export default Footer;
