import React, { useEffect, useState } from "react";
import { listReservations,listTables } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import Reservation from "./Reservation";
import Table from "./Tables";
import sortByDate from "../utils/sortByDate";
import { today } from "../utils/date-time";
import { gettingHeader } from "../utils/date-time";
import "./Dashboard.css"


/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard() {
  let date;
  const queryParams = new URLSearchParams(window.location.search).get("date")
  if(!queryParams){
    date = today()
  } else{
    date = queryParams
  }
  const header = gettingHeader(date)
  const [tables,setTables] = useState([])
  const [tablesError,setTablesError] = useState(null)
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
    listTables(abortController.signal)
      .then(response => sortByDate(response,compareTable))
      .then(setTables)
      .catch(setTablesError)
    return () => abortController.abort();
  }

  return (
    <main>
        <div className=" d-flex justify-content-center align-items-center p-0">
          <h3 className="m-0"> { header[0] + " " + header[1] + " " + header[2] } </h3>
        </div>

      

      <ErrorAlert error={reservationsError} />
      <ErrorAlert error={tablesError}/>
     <div className="Res_Table_div">
        <div className="col-md-5">
            <h3>
              Reservations
            </h3>
            <hr/>
          {reservations.map((r,key) => <Reservation r={r} tables={tables} key={key} />)}
        </div>
        <div>
            <h3>
              Tables
            </h3>
            <hr/>
            {tables.map((table,key)=> <Table table={table} key={key} />)}
        </div>
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

function compareTable(left,right){
  const leftName = left.table_name;
  const rightName = right.table_name;
  let shortestLength = rightName.length
  if(leftName.length < shortestLength){
    shortestLength = leftName.length
  }

  for(let i=0;i<shortestLength;i++){
    if( leftName[i] !== rightName[i] ){
      return leftName[i].charCodeAt(0) - rightName[i].charCodeAt(0);
    } else if(!rightName[i]){
      return -1
    } else if(!leftName[i]){
      return 1
    } 
  }
  return 1
}
export default Dashboard;
