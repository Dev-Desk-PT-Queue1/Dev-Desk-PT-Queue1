import React from "react";

import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <p>
        &copy; <NavLink to="/">Lambda DevDesk {"  "}</NavLink>
        {"   "} 2020. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer