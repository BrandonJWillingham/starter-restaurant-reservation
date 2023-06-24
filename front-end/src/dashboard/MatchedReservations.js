import React from "react";

export default function MatchedReservations({reservation}){
    return(<div>
            <div>
                {reservation.first_name + " " + reservation.last_name}
            </div>
            <div>
                {"at " + reservation.reservation_time + " " + reservation.reservation_date}
            </div>
        </div>)
}