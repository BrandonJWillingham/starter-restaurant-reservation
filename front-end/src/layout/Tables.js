import React from "react"
import { useState } from "react"
import { createTable } from "../utils/api"
import {useHistory} from "react-router-dom"

export default function Table(){
    const history = useHistory();
    const initializer = {
        table_name : "",
        capacity:"",
    }
    const [forms,setForms] = useState(initializer)
    const handleSubmit = async (event)=>{
        event.preventDefault()
        createTable(forms)
        history.push("/dashboard")
    }
    const handleCancel = (event)=>{
        event.preventDefault()
        history.goBack()
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