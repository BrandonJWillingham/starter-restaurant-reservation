import React from "react";
import { setTable } from "../utils/api";

export default function Table({table}){
    let key = Math.random() * 1000
    
   
    return(
        <div className="dashboardTable border rounded" key={Math.floor(key)}>

                <div className="align-self-center">
                    {"Table: " + table.table_name} 
                </div>
                <div className="align-self-center">
                    {"Total seats: " + table.capacity}
                </div>

                <div className=" bottomTable align-self-center">
                    <div className={`status-${table.table_id}`}>
                        {table.reservation_id ? "" : "free"}
                    </div>

                    <div className={`finish-${table.table_id}`} style={{display: table.reservation_id? "flex" : "none"}}>
                        <button onClick={handleClick} id={table.table_id} value={table.reservation_id} >
                            Clear
                        </button>
                    </div>  
                </div>
                
                
        </div>
    )
}

async function handleClick(event){
    event.preventDefault();
    setTable(event.target.id, null)
    window.location.reload()

}