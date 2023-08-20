import React from "react";
import "./search.css";

export default function Search(){
    return (
        <div className="search">
        <i className='bx bx-search'></i>
        <input type="text" placeholder="search" />
        </div>
    )
}