import React from "react";
import "./others.css";
import logo from "../../assets/images/logo.PNG"

export default function Others(){
    return (
        <div className="Others">
        <ul className="others_list">
            <li><i className="bi bi-bell-fill"></i> Notifications</li>
            <li><i className="bi bi-gear"></i> Tools</li>
            <li><i className="bi bi-question-circle-fill"></i> Help</li>
        </ul>
        <img src={logo} alt='logo' />
        </div>
    )
}