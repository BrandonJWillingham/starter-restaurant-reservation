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

    return (<>
        <form>
            <div>
                <label htmlFor="first_name">
                    First Name:
                    <input name="first_name" type="text" value={reservation.first_name} onChange={onChange} />
                </label>
                <label htmlFor="last_name">
                    Last Name:
                    <input type="text" value={reservation.last_name} name="last_name" onChange={onChange}  />
                </label>
            </div>
            <div>
                <label>
                    Mobile number:
                    <input type="text" value={reservation.mobile_number} name="mobile_number" onChange={onChange} />
                </label>
                <label htmlFor="people">
                        <div>Party Size: </div>
                        <select id="people" name="people" type="" onChange={onChange} value={reservation.people}>
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

            <div>
                <label>
                    Reservation Date:
                    <input type="text" value={reservation.reservation_date} onChange={onChange} name="reservation_date"/>
                </label>

                <label htmlFor="reservation_time">
                        Reservation Time:
                        <input id="reservation_time" name="reservation_time" type="time" onChange={onChange} value={reservation.reservation_time}/>
                    </label>
            </div>

            <button onClick={handleSubmit}>
                Change
            </button>
        </form>
    </>)
}