import React from "react";

const Footer = ({ length }) => {
  const year = new Date();
  return (
    <>
      <div className="footer">
        {year.getDate()}/{year.getMonth()}/{year.getFullYear()}
      </div>
      ;
    </>
  );
};

export default Footer;
