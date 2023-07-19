import React,{useEffect,useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { readReservation,updateReservation } from "../utils/api";

export default function EditReservation(){
    const navigate = useNavigate()
    const {reservation_id} = useParams()
    const initalState = {
        first_name: "",
        last_name: "",
        mobile_number: "",
        reservation_date: "",
        reservation_date: "",
        people: "",
    }
    const [reservation,setReservations] = useState({...initalState})
    useEffect(loadDashboard,[])
    function loadDashboard(){
        const abortController = new AbortController()
        readReservation(reservation_id,abortController.signal)
        .then(setReservations)
    }
    const onChange = ({target})=>{
        setReservations({
            ...reservation,
            [target.name] : target.value
        })
    }
    const handleSubmit = ()=>{
        console.log(reservation)
        updateReservation(reservation)
        navigate(`/dashboard?date=${reservation.reservation_date}`)
    }

    return (
    <div className="d-flex justify-content-center flex-column">
        <span style={{height:100}}/>
        <div className="d-flex justify-content-center ">
        <div className="editForm">
        <form className="d-flex flex-column " style={{width:500,paddingLeft:15,paddingRight:15, paddingTop:25,paddingBottom:25}}>
            <div className="d-flex justify-content-between" style={{paddingTop:5,paddingBottom:5}}>
                <div>
                    <input name="first_name" style={{width:100}} type="text" value={reservation.first_name} onChange={onChange} />  
                    <input type="text" style={{width:100}} value={reservation.last_name} name="last_name" onChange={onChange}  />
                </div>
                <select id="people" name="people" type="" style={{}}onChange={onChange} value={reservation.people}>
                            <option value="1" label="1 Guest"/>
                            <option value="2" label="2 Guests"/>
                            <option value="3" label="3 Guests"/>
                            <option value="4" label="4 Guests"/>
                            <option value="5" label="5 Guests"/>
                            <option value="6" label="6 Guests"/>
                            <option value="7" label="7 Guests"/>
                </select>
            </div>
            <div style={{paddingTop:5,paddingBottom:5}}>
                <input type="text" value={reservation.mobile_number} name="mobile_number" onChange={onChange} />    
            </div>

            <div className=" d-flex justify-content-between" style={{paddingTop:5,paddingBottom:5}}>  
                <input type="text" value={reservation.reservation_date} onChange={onChange} name="reservation_date"/>
                <input id="reservation_time" name="reservation_time" type="time" onChange={onChange} value={reservation.reservation_time}/> 
            </div>

            <button onClick={handleSubmit}>
                Change
            </button>
        </form>
        </div>
        
        </div>
       
    </div>)
}