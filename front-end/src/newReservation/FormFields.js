import React,{useState} from "react";
import { createReservation } from "../utils/api";
import "./NewReservations.css"

export default function NewReservations(){

    const initalFormState = {
        first_name: "",
        last_name: "",
        mobile_number: "",
    }

    const [formData,setFormData] = useState({...initalFormState})

    const onChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const onSubmit = async (event) =>{
        event.preventDefault()
        createReservation(formData)
            // .then(()=>history.push)
    }

    return (
        <div>
            <form>  
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

                <div>
                    <label htmlFor="mobile_number">
                        Your Phone Number
                        <input id="mobile_number" name="mobile_number" type="number" onChange={onChange} value={formData.mobile_number} />
                    </label>
                </div>

                <div>
                    <button className="Reservation_date">
                        <label htmlFor="reservation_date">
                            <p>Date</p> 
                            <div>Today</div>
                        </label>
                        
                    </button>
                </div>

                <div>    
                    <label htmlFor="reservation_time">
                        Time of Reservation
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
            </form> 
        </div>
    )
}