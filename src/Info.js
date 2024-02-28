import React from "react";
import profile_image from "./profile_image.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Info(){
    return (
        <div className="info">
            <img src={profile_image} alt="rohit_uddagiri" className="info-picture"/>
            <h1>Sai Rohit Uddagiri</h1>
            <h2>Software Engineer</h2>
            <h3>my website</h3>
            <div className="info-buttons">
                <button className="-info-email">
                <a href="mailto:hello@ashmoreno.dev">
                    <FontAwesomeIcon icon={faEnvelope}/> Email
                </a>
                </button>
                <button className="-info-linkedin">
                <a href="https://www.linkedin.com/in/asthermoreno10/" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>
                </button>
            </div>
        </div>
        
    )
}