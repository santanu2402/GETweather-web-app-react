import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className='abtcontainer'>
      <p>Hi,</p>
      <p>Welcome,</p>
      <p>To GETweather web app,</p>
      <p>This is a Web Application to get the Current Weather of a particular location and Weather Forecast for upcoming 7 days of that respected location. </p>
      <p className='underline'>Steps to fetch the Current Weather and Weather Forcast:-</p>
      <ul>
        <li>Search for the location in search bar.</li>
        <li>A Dropdown menu will appear with the location options. </li>
        <li>Select the dsired location from the options.</li>
        <li>Please Wait, while page is loading the results.</li>
      </ul>
      <p>Thank You!</p>

      <p>After using please provide the feedback by the clicking the feedback link.(link will appear at the end of the page after a complete search)</p>
      <div>
        <p>APIs used are:- </p>
        <ul>
        
        <li><a href='https://rapidapi.com/wirefreethought/api/geodb-cities/' rel="noreferrer" target='_blank'>Geo-db</a></li>
        
        <li><a href='https://openweathermap.org/api' rel="noreferrer" target='_blank'>OpenWeatherMap</a></li>
        </ul>

        <p>Codes are uploaded to my Github Account:-</p>
      </div>

    </div>
  )
}

export default About
