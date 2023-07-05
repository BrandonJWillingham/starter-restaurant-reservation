import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css"

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
const onClick = (event)=>{
  console.log("testing")
  event.target.classList.toggle("is-active")
  const dropdown = document.getElementsByClassName("nav")
  dropdown[0].classList.toggle("disappear")
  // console.log(dropdown[0],event.target)
  // dropdown.classList.toggle("disappear")
}

  return (
    <nav className="navbar navbar-dark align-items-start p-0">
      <div className="container-fluid d-flex flex-column p-0">
        <div
          className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0 navTop"
        >
          <div className="sidebar-brand-text mx-3">
            <span>Periodic Tables </span>
          </div>
          <button onClick={onClick} className="stack">
            <div className="bar"></div>
          </button>
        </div>
        {/* <hr className="sidebar-divider my-0" /> */}
        <ul className="nav navbar-nav text-light list" id="accordionSidebar">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <span className="oi oi-dashboard" />
              &nbsp;Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              <span className="oi oi-magnifying-glass" />
              &nbsp;Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reservations/new">
              <span className="oi oi-plus" />
              &nbsp;New Reservation
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tables/new">
              <span className="oi oi-layers" />
              &nbsp;New Table
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/all">
              <span className="oi oi-list"/>
              &nbsp;All
            </Link>
          </li>
        </ul>
        {/* <div className="text-center d-none d-md-inline">
          <button
            className="btn rounded-circle border-0"
            id="sidebarToggle"
            type="button"
          />
        </div> */}
      </div>
    </nav>
  );
}

export default Menu;
