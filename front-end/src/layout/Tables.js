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
    
    return (<main className="d-flex flex-column justify-content-center">
        <span style={{height:100}}/>
        <div className="d-flex justify-content-center  ">
            <form className="d-flex flex-column tableForm">

                <label htmlFor="table_name" className="d-flex  m-0 pt-2 pb-2 justify-content-between">
                    <p className="align-self-center m-0">Table name</p>
                    <input name="table_name" id="table_name" value={forms.table_name} onChange={handleChange} required/>
                </label>

                <label className="d-flex m-0 m-0 pt-2 pb-2 justify-content-between" >
                    <p className="align-self-center m-0">Capacity</p>
                <input name="capacity" value={forms.capacity} onChange={handleChange} required/>
                </label>


                <div className="d-flex m-0 pt-2 pb-2 justify-content-end" >
                    <button style={{margin:0}} onClick={handleSubmit} >
                        <p style={{margin:0}}>Submit</p>
                    </button>
                    <span style={{width:25}}/>
                    <button onClick={handleCancel}>
                        <p style={{margin:0}}>Cancel</p>
                    </button>
                </div>
            </form>
        </div>
        
    </main>)
}