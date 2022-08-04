import React, { useEffect,useState } from "react";
import FormFields from "./FormFields";
import Calendar from "./Calendar"
import "./newReservation.css"

export default function NewReservation({date}){
    const [overlay,setOverlay] = useState()
    useEffect(()=>{
        let getOverlay = document.querySelector(".overlay")
        setOverlay(getOverlay)
    },[])

    
    return(
        <main>
            <FormFields overlay={overlay}/>
            <div className="overlay">
                <Calendar date={date}/>
            </div>
        </main>
    )
}