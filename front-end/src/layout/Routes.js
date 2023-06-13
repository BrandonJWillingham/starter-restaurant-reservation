import React from "react";
import Table from "./Tables";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import NewReservation from "../newReservation/NewReservation"
import Seating from "./Seating";
/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route exact={true} path="/tables/new">
        <Table/>
      </Route>
      <Route exact={true} path="/reservations/new">
        <NewReservation  date={today()}/>
      </Route>
      <Route exact path={`/reservations/:reservation_id/seat`}>
        <Seating/>
      </Route>
      <Route path="/dashboard">
        <Dashboard date={today()} />
      </Route>
      
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
