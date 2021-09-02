import React from "react";
import { Link } from "react-router-dom";

const Buttton = ({ aText, aLink, dataEffect = "", classes }) => {
  return (
    <>
      <Link to={aLink} data-effect={dataEffect} className={classes}>
        {aText}
      </Link>
    </>
  );
};

export default Buttton;
