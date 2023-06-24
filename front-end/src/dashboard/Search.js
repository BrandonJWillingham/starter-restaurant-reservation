import React,{ useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { listMatchedReservations } from "../utils/api";
import MatchedReservations from "./MatchedReservations";

export default function Search(){
    const mobile_number = new URLSearchParams(window.location.search).get("mobile_number")
    useEffect(loadDashboard,[]);
    function loadDashboard(){
        listMatchedReservations(mobile_number)
        .then(setReservations)
    } 
    const [search,setSearch] = useState("")
    const [reservations,setReservations] = useState([])
   
    const handleChange = ({target})=> {
        setSearch(`${target.value}`)
    }


    return(
        <>
        <form>
            <label htmlFor="Search">
                <input name="mobile_number" type="text" onChange={handleChange} value={search}>
            
                </input>

                <button> search </button>
            </label>
        </form>
        {reservations.map((reservation) => <MatchedReservations reservation={reservation} />)}
        </>
    )
}