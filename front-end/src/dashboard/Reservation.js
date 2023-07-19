import React from "react";
import "./Reservation.css"
import { deleteReservation } from "../utils/api";

export default function Reservation({r,tables}){
    let seated = false;
    tables.map(table =>{ 
        if(table.reservation_id == r.reservation_id) seated = true
    })
    const testingFit ={
        height: "fit-content", 
    }


    const time = r.reservation_time.split(":")

  return(
    <div className="space">


        <div className="ReservationCss container flex-column p-0" key={Math.random() * 1000}>
                <div className="row w-100 ml-0 "style={testingFit}>
                    <div className="mr-auto">
                    <p className="m-0">{r.first_name + " " +r.last_name + " "}</p>
                    </div>
                    <div className="">
                        <button className="oi oi-circle-x delete-button"
                         onClick={handleClick} id={r.reservation_id}
                        >
                        </button>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <span>{ "party size: "+ r.people}</span>
                   <span>{ "Time:"} {time[0] > 12 ? time[0] - 12 : time[0]}:{time[1]}{ time[0] > 12 ? "PM": "AM"}</span>
                </div>
                <div className="bottom">
                <a href={`/reservations/${r.reservation_id}/seat`}>
                           <button className="seatBtn">
                                {seated ? "Seated" : "Seat"}
                           </button>
                        </a>
                        
                        <a href={`/reservations/${r.reservation_id}/edit`} >
                            <button className=" editBtn">
                                Edit
                            </button>
                        </a>
                </div>

            {/* </div> */}
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