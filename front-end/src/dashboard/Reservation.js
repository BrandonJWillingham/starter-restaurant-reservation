import React from "react";
import "./Reservation.css"
import { deleteReservation } from "../utils/api";
export default function Reservation({r,tables}){
    console.log(tables)
    let seated = false;
    tables.map(table =>{ 
        if(table.reservation_id == r.reservation_id) seated = true
    })

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
                        <a href={`/reservations/${r.reservation_id}/seat`}>
                           <button>
                                {seated ? "seated" : "seat"}
                           </button>
                           
                        </a>
                </div>
            </div>
        </div>
    )
}


async function handleClick(event){
    event.preventDefault();
    console.log(event.target.id)
    deleteReservation(event.target.id)
    window.location.reload()
}