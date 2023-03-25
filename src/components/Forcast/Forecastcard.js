import React from 'react'
import './forecastcard.css'
const Forecastcard = (props) => {
    return (
        <div className='prent-cont1'>

            <div className='card1'>
                <p className='day'>	&#xA0; {props.day} &#xA0;</p>
            </div> 

            <div className='card2'>
                < img className='weatherimg1' src={require(`./icons/${props.icon}.png`)} alt='weather' />
                <p className='main-temp'>{Math.round(props.temp)}&#8451;</p>
            </div>
            
            <div className='card3'>
                <p className='description'> &#xA0; {props.desc} &#xA0;</p>
            </div>

            <div className='card4'>
                <div className='row'>
                    <p className='label'>Feels Like:- </p>
                    <p className='value'>{Math.round(props.feels)}&#8451;</p>
                </div>
                <div className='row'>
                    <p className='label'>Min Temp.:- </p>
                    <p className='value'>{Math.round(props.tempmin)}&#8451;</p>
                </div>
                <div className='row'>
                    <p className='label'>Max Temp.:- </p>
                    <p className='value'>{Math.round(props.tempmax)}&#8451;</p>
                </div>
                <div className='row'>
                    <p className='label'>Humidity:- </p>
                    <p className='value'>{props.humidity} %</p>
                </div>
                <div className='row'>
                    <p className='label'>Cloudiness:- </p>
                    <p className='value'>{props.cloudiness} %</p>
                </div>

            </div>

        </div>





        
    )
}

export default Forecastcard
