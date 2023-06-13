import React, {useState } from "react";
import FormFields from "./FormFields";
import ErrorAlert from "../layout/ErrorAlert";
import "./newReservation.css"

export default function NewReservation({date}){
    const [errors,setErrors] = useState({message:"",date:""})
    
    return(
        <main>
            {errors.message ? <ErrorAlert error={errors}/> : "" }
            <FormFields setErrors ={setErrors} errors ={errors}/>
        </main>
    )
    
}