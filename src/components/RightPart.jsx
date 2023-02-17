import React from 'react'
import './RightPart.css'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function RightPart() {
  return (
    <div className='RightPart'>

<div className='panel'>
<form id='locationInput'>

<input type="text" className='search' placeholder="Search Location.." name="search" />

<button type="submit" className='submit'>
<UilSearch/>
<UilLocationPoint/>
</button>

</form>
</div>
<ul className='cities'>
    <li className='city'>New York</li>
    <li className='city'>London</li>
    <li className='city'>Paris</li>
    <li className='city'>Tokyo</li>
    <li className='city'>Sydney</li>
    </ul>

    <ul className='details'>
    <h4>Weather Details</h4>
    <li className='detail'>
    <span>Cloudy</span>
    <span className='cloud'> 89%</span> 
    </li>
    <li className='detail'>
    <span>Humidity</span>
    <span className='humidity'> 64%</span> 
    </li>
    <li className='detail'>
    <span>Wind</span>
    <span className='wind'> 8Km/h</span> 
    </li>
    </ul>
<div className='fiveday'>
      <h4 className='forecast'>5 Day Forecast</h4>
    <ul className='five'>
      <li className='tem'>
        <span>Mon</span>
<UilLocationPoint/>

        <span> 89%</span>
      </li>
      <li className='tem'>
        <span>Tue</span>
<UilLocationPoint/>

        <span> 89%</span>
      </li>
      <li className='tem'>
        <span>Wed</span>
<UilLocationPoint/>

        <span> 89%</span>
      </li>
      <li className='tem'>
        <span>Thur</span>
<UilLocationPoint/>

        <span> 89%</span>
      </li>
      <li className='tem'>
        <span>Fri</span>
<UilLocationPoint/>

        <span> 89%</span>
      </li>
    </ul>
    </div>
    </div>
  )
}

export default RightPart