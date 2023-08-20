import React, { useState } from "react";
import "./dropdown.css";
import { useStateValue } from "../../StateProvider";


export default function MenuDropdown() {
    const [{  }, dispatch] = useStateValue();
    const [display, setDisplay] = useState(2);
    const [notDisplay, setNotDisplay] = useState(0);
    const [style, setStyle] = useState([2,1]);

    const dropdownoptions = [
        { mainoption: "Business Development", iconClass: "bx bx-anchor", optionarray: ["Opportunities/Tenders", "Customers", "Contracts"] },
        { mainoption: "Reservations", iconClass: "bi bi-tag", optionarray: ["Bookings", "Scheduling"] },
        {
            mainoption: "Operations", iconClass: "bi bi-database",
            optionarray: ["Checklist", "Movement Logs", "Maintenance", "Driver Performance", "Incidents", "Violations", "Expense"]
        },
        { mainoption: "Infrastructure", iconClass: "bi bi-journal-text", optionarray: ["Drivers", "Vehicles", "Fuel Card", "Inventory", "Third Party Assets", "Vendors", "Payroll"] },
        { mainoption: "Report & Tools", iconClass: "bi bi-database", optionarray: ["Financials", "Duty Calculator", "Operational Stats"] },
        { mainoption: "Setup", iconClass: "bi bi-gear", optionarray: ["Dashboard", "Users", "Pricing", "Categories", "Approval Workflow", "Metrics"] }
    ]
    return (
        <div className="MenuDropdown">
            {
                dropdownoptions.map((option, index) => {
                    return <div className="MenuDropdown__mainoption" key={index}>
                        <div className={(((notDisplay === index + 1) && (display === 0)) || ((notDisplay === 0) && (display === index + 1))) ? "MenuDropdown__main MenuDropdown__main_border" : "MenuDropdown__main"}>
                            <i className={option.iconClass}></i>
                            <p>{option.mainoption}</p>
                            <i className={(((notDisplay === index + 1) && (display === 0)) || ((notDisplay === 0) && (display === index + 1))) ? "notDisplay" : "bi bi-caret-down-fill"} onClick={() => {
                                setDisplay(index + 1);
                                setNotDisplay(0);
                            }}></i>
                            <i className={(display === index + 1 && notDisplay === 0) ? "bi bi-caret-up-fill " : "notDisplay "} onClick={() => {
                                setNotDisplay(0);
                                setDisplay(0);
                            }}></i>
                        </div>
                        <ul className={(display === index + 1 && notDisplay === 0) ? "MenuDropdown__optionlist display" : ((notDisplay === index + 1) && (display === 0)) ? "notDisplay" : "notDisplay"}>
                            {
                                option.optionarray.map((list, listIndex) => {
                                    return <li  key={listIndex}  onClick={()=>{
                                        setStyle([index + 1, listIndex])
                                        dispatch({
                                            type: "SET_TITLE",
                                            title:  list,
                                        });
                                    }} className={style[0] === display && style[1] === listIndex ? "MenuDropdown__optionlist_li" : ""}><small>{list}</small></li>
                                })
                            }
                        </ul>
                    </div>
                })
            }
        </div>
    )
}