import React from "react";
import { deleteReservation, setTable } from "../utils/api";

export default function Table({table}){
    let key = Math.random() * 1000
    
    console.log(document.getElementsByClassName(`finish-${table.table_id}`)[0])

    console.log(document.getElementsByClassName("hiddenButton"))
    return(
        <div key={Math.floor(key)}>
            <div>
                <div>
                    {table.table_name} 
                </div>

                <div>
                    {"seats: " + table.capacity}
                </div>

                <div className={`status-${table.table_id}`}>
                    {table.reservation_id ? "Occupied" : "free"}
                </div>

                <div className={`finish-${table.table_id}`} style={{display: table.reservation_id? "flex" : "none"}}>
                    <button onClick={handleClick} id={table.table_id} value={table.reservation_id} >
                        Finished
                    </button>
                </div>
                

            </div>
        </div>
    )
}

// function getStatus(table){
//     const statusDiv = document.getElementsByClassName(`status-${table.table_id}`)[0];
//     if(statusDiv.innerText){
//         return statusDiv.innerText
//     }else{
//         return null
//     }
// }

// const finished = (table)=>{
//     return(<button onClick={handleClick} id={table.table_id} value={table.reservation_id} >
//         Finished
//     </button>)
// }

async function handleClick(event){
    event.preventDefault();
    setTable(event.target.id, null)
    deleteReservation(event.target.value)
    window.location.reload()

}