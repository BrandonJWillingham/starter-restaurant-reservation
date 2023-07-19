import React from "react";
import Menu from "./Menu";
import Switch from "./Switch";
import { Route,Routes, useLocation } from "react-router-dom";

import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {

  const location = useLocation().pathname.split("/")[1].split("")
  let capLet 
  location[0] == undefined ? capLet = "D"  : capLet = location[0].toUpperCase() 
  location.splice(0,1,capLet)

  return (
    <div className="container-fluid p-0">
      <div className="">
        <div className="d-flex testing ">
          <div className="w-25">
            <Menu/>
          </div>

          <div className="googlines">
            <h2 className="m-0">{location.join("")}</h2>
          </div>
          
        </div>
        
        <div className="col padding-0">
            <Switch />
        </div>
      </div>
    </div>
  );
}

export default Layout;
