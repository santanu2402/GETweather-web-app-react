import React from 'react'
import './time.css'

const Time = (props) => {
    function updateTime () {
        let d = props.value;
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[d.getMonth()];

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];

        let year=d.getFullYear();

        let date=d.getDate();
let timezone=d.toTimeString().slice(9,15)+"."+d.toTimeString().slice(15);
        


        let arr=[d.toLocaleTimeString(),day,month,date,year,timezone]
        return arr;
    }
    return (
        <div className='time-cont'>
            <p className='time-row1'>{updateTime()[0]}</p>
            <p className='time-row'>{updateTime()[1]}, {updateTime()[2]} {updateTime()[3]}, {updateTime()[4]}</p>
            <p className='time-row'>{updateTime()[5]}</p>
        </div>
    )
}

export default Time
