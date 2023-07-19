import React from "react";
import "./MatchedReservations.css"
import { gettingHeader } from "../utils/date-time";
import { useNavigate } from "react-router-dom";


export default function MatchedReservations({reservation}){

    const date = gettingHeader(reservation.reservation_date)
    const time = reservation.reservation_time.split(":")
    const navigate = useNavigate()

    const handleClick=() => { 
        navigate(`/reservations/${reservation.reservation_id}/edit`)
    }

    return(
        <div className="ReservationCss d-flex col" style={{minWidth:300 , marginRight: 10 ,maxWidth: "32%"}}>
            <div className="d-flex justify-content-center">
                {reservation.first_name + " " + reservation.last_name}
            </div>
            <div className="d-flex justify-content-center" >
                {date[0] +" " +date[1] + " "+  date[2]}
            </div>
            <div className="d-flex justify-content-center" >
            <span>{time[0] > 12 ? time[0] - 12 : time[0]}:{time[1]}{ time[0] > 12 ? " PM": " AM"}</span>
            </div>
            <div className="d-flex justify-content-center">
            <a href={`/reservations/${reservation.reservation_id}/edit`} >
                <button className="editBtn" onClick={handleClick}>
                    Edit
                </button>
            </a>    
            </div>
            
        </div>
        )
}