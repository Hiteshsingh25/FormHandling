import React from 'react'
import './Input.css'

export default function  Checkbox({label,onChange,value}){
    return(
       <label>
        <input className='checkbox mx-1' type='checkbox' value={value} onChange={onChange}/>
        {label}<br/>
       </label>
    )
}