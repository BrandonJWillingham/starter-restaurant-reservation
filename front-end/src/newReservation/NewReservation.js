import React, { useEffect,useState } from "react";
import FormFields from "./FormFields";
import Calendar from "./Calendar"
import "./newReservation.css"
import { today } from "../utils/date-time";

export default function NewReservation({date}){
    const [overlay,setOverlay] = useState()
    const [inquiringDate, setInquiringDate] = useState("")
    useEffect(()=>{
        let getOverlay = document.querySelector(".overlay")
        setOverlay(getOverlay)
    },[])

    
    return(
        <main>
            <FormFields overlay={overlay} date ={inquiringDate}/>
            <div className="overlay">
                <Calendar date={today()} setDate = {setInquiringDate} />
            </div>
        </main>
    )
}