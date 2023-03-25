import React from 'react'
import './forecast.css'
import Forecastcard from './Forecastcard';

const Weak = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = (props) => {
    const day = new Date().getDay();
    const forecastdays = Weak.slice(day, Weak.length).concat(Weak.slice(0, day))
    return (
        <div className='parent-cont'>
            <p className='heading'> &#xA0; Weather Forecast &#xA0; </p>
            <div className='card-container'> {props.data.list.splice(0, 7).map((item, indx) => {
                return <div key={indx}><Forecastcard day={forecastdays[indx]} icon={item.weather[0].icon} desc={item.weather[0].description} temp={item.main.temp} feels={item.main.feels_like} tempmax={item.main.temp_max} tempmin={item.main.temp_min} cloudiness={item.clouds.all} humidity={item.main.humidity}   />
                </div>
            })}</div>
        </div>
    )
}

export default Forecast
