import React, { useState, useEffect } from 'react'
import './Navcss.css'
import Asyncsearch from '../Asyncsearch/Asyncsearch'
import Time from '../Time/Time'

const Navbar = (props) => {
    const [value, setValue] = useState(new Date());
    // ./icons/${props.data.weather[0].icon}.png
    useEffect(() => {
        setInterval(() => setValue(new Date()), 1000);
    }, []);


    return (
        <div>
            <nav className="nav">
                <div className='leftnav'>
                    <div className='leftnavtop'>
                    <img className='logoimg' src={require(`../../assets/image/android-icon-192x192.png`)} alt='logo' />     
                    </div>
                    <div className='leftnavbottom'>
                        <p>GETweather</p>
                    </div>
                </div>
                <div className='middlenav'>
                
                    <Asyncsearch className="searchcity" onSearchChange={props.onSearchChange} setProgress={props.setProgress} />
                    
                </div>
                <div className='rightnav'>
                    <Time value={value} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
