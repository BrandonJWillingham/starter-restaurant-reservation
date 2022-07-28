import React,{useState} from "react";
import "./NewReservations.css"

export default function(){

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
        const response = await fetch("",{
            method: "PUT",
            body: JSON.stringify(FormData)
        });
    }

    return (
        <form>
                <label htmlFor="first_name">
                    Your First Name
                    <input  id="first_name" name="first_name" type="text"  onChange={onChange} value={formData.first_name} />
                </label>
                <label htmlFor="last_name">
                    Your Last Name
                    <input id="last_name" name="last_name" type="text" onChange={onChange} value={formData.last_name} />
                </label>
                <label htmlFor="mobile_number">
                    Your Phone Number
                    <input id="mobile_number" name="mobile_number" type="number" onChange={onChange} value={formData.mobile_number} />
                </label>
                <label htmlFor="reservation_date">
                    Date of Reservation
                </label>
                <label htmlFor="reservation_time">
                    Time of Reservation
                </label>
                <label htmlFor="party">
                    Party Size
                </label>
            </form> 
    )
}