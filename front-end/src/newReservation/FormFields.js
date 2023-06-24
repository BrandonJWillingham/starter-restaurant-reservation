import React,{useState} from "react";
import { createReservation } from "../utils/api";
import "./NewReservations.css"
import "./formFields.css"
import {today} from "../utils/date-time"
import {useNavigate} from "react-router-dom"
import ErrorAlert from "../layout/ErrorAlert";

export default function NewReservations({setErrors,errors}){
    const navigate = useNavigate();
    let catching = {message: "", time: "",date: ""};
    const td = today()
    


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

        // console.log("today : ", today.a(), " d: ", d.valueOf())


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
    console.log(catching.message)
    return (
        <div>
            <form>  

                <div className="name_fields">
                    <div>
                        <label htmlFor="first_name">
                            Your First Name
                            <input  id="first_name" name="first_name" type="text"  onChange={onChange} value={formData.first_name} />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="last_name">
                            Your Last Name
                            <input id="last_name" name="last_name" type="text" onChange={onChange} value={formData.last_name} />
                        </label>
                    </div>

                </div>


                <div>
                    <label htmlFor="mobile_number">
                        Mobile Number
                        <input id="mobile_number" name="mobile_number" type="number" onChange={onChange} value={formData.mobile_number} />
                    </label>
                </div>

                <div>
                    <label htmlFor="reservation_date">
                        Date
                        <input id="reservation_date" name="reservation_date" type="date" onChange={onChange} value={formData.reservation_date}/>
                    </label>
                </div>

                <div>
                    <label htmlFor="reservation_time">
                        Time
                        <input id="reservation_time" name="reservation_time" type="time" onChange={onChange} value={formData.reservation_time}/>
                    </label>
                </div>

                <div>
                    <label htmlFor="people">
                        <div>Party Size: </div>
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
                
                <button onClick={onSubmit}> Submit</button>
                <button onClick={onCancel}> Cancel </button>
            </form> 
        </div>
    )
}
