import React from "react";
import Table from "./Tables";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import NewReservation from "../newReservation/NewReservation"
import Seating from "./Seating";
import Search from "../dashboard/Search";
/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Switch() {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Navigate to={"/dashboard"} />}/>
      
      <Route exact={true} path="/reservations" element={<Navigate to={"/dashboard"} />}/>
      
      <Route exact={true} path="/tables/new" element={<Table/>}/>

      <Route exact={true} path="/reservations/new" element={<NewReservation  date={today()}/>}/>

      <Route exact path={`/reservations/:reservation_id/seat`} element={<Seating/>}/>
      
      <Route path="/dashboard" element={<Dashboard date={today()} />}/>
      
      <Route path="/search" element={<Search/>} />
      
      <Route element={<NotFound />}/>

    </Routes>
  );
}

export default Switch;
