import React from 'react';
import './profile.css';


export default function Profile({image, name, accountype}){
    return (
        <div className='profileComp'>
            <div className='profileComp__profile'>
                <img src={image} alt='profile-pic'/>
                <p>{name}</p>
                <span><small>{accountype}</small></span>
            </div>
            <div className='profileComp__pageicon'>
            <i className="bi bi-house-door-fill"></i> <p>Home</p>
            </div>
        </div>
    )
}