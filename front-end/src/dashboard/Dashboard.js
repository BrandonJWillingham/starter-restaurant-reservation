import React, { useEffect, useState } from "react";
import { listReservations } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import Reservation from "./Reservation";
import sortByDate from "../utils/sortByDate";


/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(response => sortByDate(response,compare))
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for date</h4>
      </div>
      <ErrorAlert error={reservationsError} />
     <div>
      {reservations.map(r => <Reservation r={r} />)}
     </div>

    </main>
  );
}

function compare(left,right){
  
  const leftDate = left.reservation_date
  const rightDate = right.reservation_date

  const leftDateValues = leftDate.split("-")
  const rightDateValues = rightDate.split("-")

  const leftYear = parseInt(leftDateValues[0])
  const leftMonth = parseInt(leftDateValues[1])
  const leftDay = parseInt(leftDateValues[2])
  const rightYear = parseInt(rightDateValues[0])
  const rightMonth = parseInt(rightDateValues[1])
  const rightDay = parseInt(rightDateValues[2])

  if(leftYear !== rightYear){
    return leftYear - rightYear
  } else if(leftMonth !== rightMonth){
    return leftMonth - rightMonth
  } else if(leftDay !== rightDay){
    return leftDay - rightDay
  } else {
     return 1
  }
}
export default Dashboard;
