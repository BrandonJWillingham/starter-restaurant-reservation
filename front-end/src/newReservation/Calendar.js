import React from "react";
import "./Calendar.css"
import {AiOutlineClose} from "react-icons/ai"

export default function Calendar ({date}){
    
    const nextDate = nextMonth(date)
    let currentMonth = numberOfDays(date)
    let nextMonthDays = numberOfDays(nextDate) 
    
    return(
        <div className="container">
            <div className="calendarHeader">
                <i onClick={handleClose}>
                <h2><AiOutlineClose/></h2> 
                </i>
            </div>
            <div className="group">
                <div className="months">
                <h2> {nameOfMonth(date)}</h2>
                <table className="calendarMonth">
                        <thead>
                            <tr key={generateKey}>
                                <th className="Calendar_Day" key={generateKey()}>Su</th>
                                <th className="Calendar_Day" key={generateKey()}>Mo</th>
                                <th className="Calendar_Day" key={generateKey()}>Tu</th>
                                <th className="Calendar_Day" key={generateKey()}>We</th>
                                <th className="Calendar_Day" key={generateKey()}>Th</th>
                                <th className="Calendar_Day" key={generateKey()}>Fr</th>
                                <th className="Calendar_Day" key={generateKey()}>Sa</th>
                            </tr>
                        </thead>
                        <tbody>
                        {generateRows(currentMonth,getStartDay(date))}
                        </tbody>
                    </table>   
                </div>
                <div className="months">
                    <h2> {nameOfMonth(nextDate)}</h2>
                    <table className="calendarMonth">
                        <thead>
                            <tr key={generateKey}>
                                <th key={generateKey()}>Su</th>
                                <th key={generateKey()}>Mo</th>
                                <th key={generateKey()}>Tu</th>
                                <th key={generateKey()}>We</th>
                                <th key={generateKey()}>Th</th>
                                <th key={generateKey()}>Fr</th>
                                <th key={generateKey()}>Sa</th>
                            </tr>
                        </thead>
                        <tbody>
                        {generateRows(nextMonthDays,getStartDay(nextDate))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function getStartDay(date){
    let year = date.split("-")[0]
    let month = date.split("-")[1]

    month = parseInt(month) - 1

    return new Date(year,`${month}`, "01").getDay()
}

function nextMonth(date){
    let x = date.split("-")[1]
    const y = date.split("-")[1] 
    x = parseInt(x)
    
    if(y === 12){
        x = 1
    }
    
    x = x + 1

    if(x >= 10){
        x = `${x}`
    }else {
        x = `0${x}`
    }

    return date.replace(y,x)
}

function numberOfDays (date){
    const year = date.split("-")[0]
    const month = date.split("-")[1];

    return new Date(year,month,0).getDate()
}

function nameOfMonth(date){
    const key = {
        "01": "January",
        "02": "Feburary",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }
    const month = date.split("-")[1]

    return key[month]
}

function generateRows(num,start){

    let days = []
    let rows = []
    let j = 0;
    let i = 0
    while(num){
        while(j<start){
            j++
            days.push(<td key={generateKey()}></td>)
        }
        i++
        num = num - 1
        days.push(<td key={generateKey()}><button onClick={handleClick(i)} className="calendarDays">{i}</button></td>)
        if((i + j)%7 === 0){
            rows.push(<tr key={generateKey()}>{days}</tr>)
            days = []
        }
        if(num === 0){
            rows.push(<tr key={generateKey()}>{days}</tr>)
        }
    }

    return rows
}

function generateKey(){
    return Math.floor(Math.random()*10000)
}
function handleClose(){
    const overlay = document.querySelector(".overlay")
    overlay.setAttribute("style","display:none")

}

function handleClick(day){

}