import React from "react"
import { useState } from "react"
import { createTable } from "../utils/api"
import {useNavigate} from "react-router-dom"

export default function Table(){
    const navigate = useNavigate();
    const initializer = {
        table_name : "",
        capacity:"",
    }
    const [forms,setForms] = useState(initializer)
    const handleSubmit = async (event)=>{
        event.preventDefault()
        createTable(forms)
        navigate("/dashboard")
    }
    const handleCancel = (event)=>{
        event.preventDefault()
        navigate(-1)
    }
    const handleChange = ({target})=>{
        setForms({
            ...forms,
            [target.name]: target.value,
        })
    }
    
    return (<main>
        <form>
            <label htmlFor="table_name">
                table_name
                <input name="table_name" id="table_name" value={forms.table_name} onChange={handleChange} required/>
            </label>

            <label>
                capacity
               <input name="capacity" value={forms.capacity} onChange={handleChange} required/>
            </label>
            <button onClick={handleSubmit}>
                Submit
            </button>
            <button onClick={handleCancel}>
                Cancel
            </button>
        </form>
    </main>)
}