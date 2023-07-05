import React from "react";
import Menu from "./Menu";
import Switch from "./Routes";
import { Route,Routes } from "react-router-dom";

import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="container-fluid p-0">
      <div className="h-100">
        <div className="col-md-2 testing ">
          <Menu />
        </div>
        <div className="col">
            <Switch />
           
        </div>
      </div>
    </div>
  );
}

export default Layout;
