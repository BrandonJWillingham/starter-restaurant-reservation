import React,{ useState,useEffect } from "react";
import { listMatchedReservations } from "../utils/api";
import MatchedReservations from "./MatchedReservations";
import { Icon } from '@iconify/react';

export default function Search(){
    const mobile_number = new URLSearchParams(window.location.search).get("mobile_number")
    useEffect(loadDashboard,[]);
    function loadDashboard(){
        if(mobile_number){
            listMatchedReservations(mobile_number)
            .then(setReservations)
        }
        
    } 
    const [search,setSearch] = useState("")
    const [reservations,setReservations] = useState([])
   
    const handleChange = ({target})=> {
        setSearch(`${target.value}`)
    }



    return(
        <div className="d-flex flex-column justify-content-center ">
            <div style={{height: 40}}>

            </div>
        <form className="align-self-center searchForm" style={{width:"fit-content"}}>
            <div className="d-flex">
                <label htmlFor="Search" style={{margin: 0, }}>
                    <input name="mobile_number"s tyle={{height:20}} type="text" onChange={handleChange} value={search}/>
                </label>
                <div>
                    <button className="searchBtn" style={{height:"100%", width:40,borderLeft: 0}}><Icon icon="heroicons:magnifying-glass-solid" /></button>
                </div>
            </div>
            
        </form>
        <div>
        <hr/>
        </div>
     

        <div className="d-flex flex-wrap align-self-center" style={{width:"75%"}}>
                {reservations.map((reservation) => <MatchedReservations reservation={reservation} />)}
        </div>
        
       
        </div>
    )
}