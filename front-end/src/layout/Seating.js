import React,{useEffect} from "react"
import { useState } from "react"
import {readReservation, listTables } from "../utils/api";
import sortByDate from "../utils/sortByDate";
import { useParams, useNavigate} from "react-router-dom"
import { setTable } from "../utils/api";

export default function Seating(){
  const {reservation_id} = useParams()
  const navigate = useNavigate()
  useEffect(loadDashboard, []);

  const [tables,setTables] = useState([])
  const [reservation, setReservation] = useState({})
  const [tablesError,setTablesError] = useState(null)

    function loadDashboard() {
        const abortController = new AbortController();
        listTables(abortController.signal)
          .then(response => sortByDate(response,compareTable))
          .then(response => setTables(response))
          .catch(setTablesError)
        readReservation(reservation_id,abortController.signal)
          .then(response => setReservation(response))
        return () => abortController.abort();
    }

    

    const handleSubmit = async (event)=>{
      event.preventDefault()
      const date = reservation.reservation_date;
      const table_id = document.getElementById("table_id").value
      console.log(table_id,reservation_id)
      setTable(table_id,reservation_id)
      navigate(`/dashboard?date=${date}`)
    }
    const handleCancel = (event)=>{
    
        event.preventDefault()
        navigate(-1)
    }

    let makeList = (table)=>{
      if(table.capacity >= reservation.people){
        return <option value={table.table_id}>{table.table_name} - {"cap: " +table.capacity}</option>
      } else{
        return 
      }
    }

    return (
    <div className="d-flex flex-column">
      <span style={{height:100}}/>
      <div className="seating">
        <form className="">
          <div className="d-flex flex-row">
            <p>Table Name</p>
            <span style={{width:10}}/>
            <select name="table_id" id="table_id">
            {tables.map(makeList)}
            </select>
          </div>
              
           
            <div className="d-flex justify-content-end">
                <button onClick={handleSubmit}>
                  <p>Seat</p>
              </button>
              <button onClick={handleCancel}>
                  <p>Cancel</p>
              </button>
            </div>
            
        </form>
      </div>
        
    </div>)

    
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