import React from "react";
import "./Reservation.css"

export default function Reservation({r}){




    return(
        <div className="ReservationCss">
            <div className="bookOut">
                <div className="top">
                    {r.first_name + " " +r.last_name } 
                    <span className="oi oi-circle-x" onClick={handleClick()}/>
                </div>
                <div className="bottom">
                    {r. reservation_time}
                </div>
            </div>
        </div>
    )
}

function handleClick(){
    console.log("clicked")
}