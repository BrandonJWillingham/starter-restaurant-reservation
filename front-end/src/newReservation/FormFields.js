import React,{useState} from "react";
import { createReservation } from "../utils/api";
import "./NewReservations.css"
import "./formFields.css"
import {useNavigate} from "react-router-dom"

export default function NewReservations({setErrors,errors}){
    const navigate = useNavigate();

    const initalFormState = {
        first_name: "",
        last_name: "",
        mobile_number: "",
        people: 1,
        reservation_date:"",
        reservation_time:"",
    }

    const [formData,setFormData] = useState({...initalFormState})

    const onChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const onCancel = async(event)=>{
        event.preventDefault();
        navigate(-1);
    }

    const onSubmit = async (event) =>{

        setErrors({
            ... errors,
            message: ""
        })

        event.preventDefault()
        const dateAndTime = formData.reservation_date + "T" + formData.reservation_time

        let d = new Date(dateAndTime)
        let day = d.getDay()
        let today = new Date()

        if(day == 2){
            setErrors({
                ...errors,
                message: "Closed on Tuesdays"
            })
        }else if(today.valueOf() > d.valueOf()){
            setErrors({
                ...errors,
                message:"Only future reservations are allowed"
            })
        } else{
            createReservation(formData)
            .then(()=>navigate(`/dashboard?date=${formData.reservation_date}`))
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <form className=" d-flex flex-column formCSS" style={{marginTop:100 , width:500}}>  
                <div  style={{marginBottom: 10}}>
                    <label className="d-flex justify-content-between" style={{margin:0}}htmlFor="first_name">
                    <p className="align-self-center" style={{margin:0}}>First Name</p>
                        <input  id="first_name" name="first_name" type="text"  style={{borderRadius:20, paddingLeft:20, borderWidth:1}} onChange={onChange} value={formData.first_name} />
                    </label>
                </div>
                <div style={{marginBottom: 10}}>
                    <label className="d-flex justify-content-between" style={{margin:0}} htmlFor="last_name">
                    <p className="align-self-center" style={{margin:0}}>Last Name</p>
                        <input id="last_name" name="last_name" type="text" style={{borderRadius:20, paddingLeft:20, borderWidth:1}}  onChange={onChange} value={formData.last_name} />
                    </label>
                </div>
            

                <div style={{marginBottom: 10}}>
                    <label className="d-flex justify-content-between" style={{margin:0}} htmlFor="mobile_number">
                    <p className="align-self-center" style={{margin:0}}>Number</p>
                        <input id="mobile_number" name="mobile_number" type="number" style={{borderRadius:20, paddingLeft:20, borderWidth:1}}  onChange={onChange} value={formData.mobile_number} />
                    </label>
                </div>

                <div style={{}} className="d-flex justify-content-between" >
                    <label htmlFor="reservation_date">
                        <input id="reservation_date" name="reservation_date" type="date" onChange={onChange} value={formData.reservation_date}/>
                    </label>
                    <label htmlFor="reservation_time" className="d-flex">
                    <p className="align-self-center" style={{padding:0,margin:0}}>at </p>
                        <span style={{width:5}}/>
                        <input id="reservation_time" name="reservation_time" type="time" onChange={onChange} value={formData.reservation_time}/>
                    </label>
                    <label htmlFor="people" className="d-flex">
                        <p className="align-self-center" style={{margin:0}}>with </p>
                        <span style={{width:5}}/>
                        <select id="people" name="people" type="" onChange={onChange} value={formData.people}>
                            <option value="1" label="1 Guest"/>
                            <option value="2" label="2 Guests"/>
                            <option value="3" label="3 Guests"/>
                            <option value="4" label="4 Guests"/>
                            <option value="5" label="5 Guests"/>
                            <option value="6" label="6 Guests"/>
                            <option value="7" label="7 Guests"/>
                        </select>
                    </label>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn" onClick={onSubmit}> <p>Submit</p></button>
                    <span style={{width:25}}/>
                    <button className="btn" onClick={onCancel}> <p>Cancel</p> </button>
                </div>
    
                
            </form> 
        </div>
    )
}
