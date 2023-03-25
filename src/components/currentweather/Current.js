import React from 'react'
import './current.css'
const Current = (props) => {
    return (
        <div className='parentcon'>
            <p className='headingcur'>  &#xA0; Current Weather &#xA0; </p>
            <div className='con'>

                <div className='con1'>
                    <div className='topleft'>
                        <p className='cityname'>  {props.data.city} </p>
                        <p className='weathertype'>  {props.data.weather[0].description}  </p>
                    </div>
                    <div className='bottomleft'>
                        <img className='weatherimg' src={require(`./icons/${props.data.weather[0].icon}.png`)} alt='weather' />                    </div>
                </div>


                <div className='con2'>
                    <div className='topmiddle'>
                        <p className='ctemperature'>{Math.round(props.data.main.temp)}&#8451;</p>
                    </div>

                    <div className='middlemiddle'>
                        <p className='ftemperature'>{Math.round(((props.data.main.temp)* 9/5) + 32)}&#x2109;</p>
                    </div>

                    <div className='bottommiddle'>
                        <div className='bottommiddleleft'>
                            <p className='mintemplabel'>Min Temp.</p>
                            <p className='mintempvalue'>{Math.round(props.data.main.temp_min)}&#8451;</p>
                        </div>

                        <div className='bottommiddleright'>
                            <p className='maxtemplabel'>Max Temp.</p>
                            <p className='mintempvalue'>{Math.round(props.data.main.temp_max)}&#8451;</p>
                        </div>

                    </div>
                </div>
                <div className='con3'>
                    <p className='detailsheading'> &#xA0; MORE DETAILS &#xA0; </p>
                    {/* <div className='parm-cont'> */}
                    <div className='param-row'>
                        <span className='param-label'>Feels Like:-</span>
                        <span className='param-value'>{Math.round(props.data.main.feels_like)}&#8451;</span>

                    </div>
                    <div className='param-row'>
                        <span className='param-label'>Wind Speed:-</span>
                        <span className='param-value'>{props.data.wind.speed} m/s</span>
                    </div>
                    <div className='param-row'>
                        <span className='param-label'>Humidity:-</span>
                        <span className='param-value'>{props.data.main.humidity} %</span>
                    </div>
                    <div className='param-row'>
                        <span className='param-label'>Pressure:-</span>
                        <span className='param-value'>{props.data.main.pressure} hPa</span>
                    </div>

                    <div className='param-row'>
                        <span className='param-label'>Cloudiness:-</span>
                        <span className='param-value'>{props.data.clouds.all} %</span>
                    </div>

                    {/* </div> */}
                </div>

            </div>
        </div>
    )
}

export default Current
