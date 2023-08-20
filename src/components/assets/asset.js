import React from 'react';
import "./asset.css";

export default function Assets({image, name, type, task, tasktype}){
    return (
        <div className='Asset'>
            <img src={image} alt="assets-pic"/>

            <div className='asset_info'>
                <h5>{name}</h5>
                <p>{type}</p>
                <span className={tasktype === 0 ? "asset_info_v2" : "asset_info_v1"}><small>{task}</small></span>
            </div>
        </div>
    )
}