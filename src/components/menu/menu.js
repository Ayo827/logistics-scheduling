import React from "react"; 
import Profile from "../profileComp/profile";
import profileImage from "../../assets/images/profile-alt.png";
import MenuDropdown from "../menu_dropdown/dropdown";
import "./menu.css";

export default function Menu(){
    return(
        <aside className="Menu">
        <div className="Menu__content">
            <Profile image={profileImage} name="Kemi Adedotun" accountype="Admin"/>
            <MenuDropdown />
            </div>
        </aside>
    )
}