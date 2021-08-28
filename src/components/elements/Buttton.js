import React from "react";

const Buttton = ({ aText, aLink, dataEffect = "", classes }) => {
  return (
    <>
      <a href={aLink} data-effect={dataEffect} className={classes}>
        {aText}
      </a>
    </>
  );
};

export default Buttton;
