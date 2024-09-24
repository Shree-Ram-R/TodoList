import React from "react";

const Footer = ({ length }) => {
  const year = new Date();
  return (
    <>
      <div className="footer">
        CopyRight &copy; {year.getFullYear()}
        <h2>{length}</h2>
      </div>
      ;
    </>
  );
};
Footer.defaultProps = {
  length: 0,
};

export default Footer;
