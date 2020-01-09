import React from "react";

import { NavLink } from "react-router-dom";
import { SFooter } from "../../helpers/index";

const Footer = () => {
  return (
    <SFooter>
      <p>
        &copy; <NavLink to="/">Lambda DevDesk {"  "}</NavLink>
        {"   "} 2019. All Rights Reserved.
      </p>
    </SFooter>
  );
};

export default Footer;