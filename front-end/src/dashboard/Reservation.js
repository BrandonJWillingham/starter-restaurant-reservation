import React from "react";
import "./Reservation.css"
import { deleteReservation } from "../utils/api";
export default function Reservation({r,date}){
    // if(r.reservation_date != date) return<></>;
  return(
        <div className="ReservationCss" key={Math.random() * 1000}>
            <div className="bookOut">
                <div className="top">
                    {r.first_name + " " +r.last_name + " "+ "size: "+ r.people} 
                    <button className="oi oi-circle-x" onClick={handleClick} id={r.reservation_id}>
                        Delete
                    </button>
                </div>
                <div className="bottom">
                    {r.reservation_time}
                    {"   " + r.reservation_date}
                </div>
            </div>
        </div>
    )
}


async function handleClick(event){
    event.preventDefault();
    console.log(event.target.id)
    deleteReservation(event.target.id)
    
}