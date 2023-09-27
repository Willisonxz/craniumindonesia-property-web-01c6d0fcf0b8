import React, { useEffect, useState } from "react";
import axios from 'axios';
import NavBarAfterLogin from ".././Profile/components/NavbarAfterLogin";
import { Box, Icon } from "@mui/material";
import './AdvertiseAgency.css';
import Image_1 from './assets/Image_1.png'
import Image_2 from './assets/Image_2.png'
import Check_Icon from './assets/Check_Icon.png'
import Footer from "../../components/Footer";
import RayWhite from "./assets/Raywhite.png"
import Remax from "./assets/Remax.png"

export default function AdsAgency(){
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        // Make an Axios GET request to fetch data for the list of experts
        axios.get('https://property-api.cranium.id/advertise')
            .then(response => {
                // Handle the successful response by setting the experts state
                setExperts(response.data);
            })
            .catch(error => {
                // Handle any errors that occurred during the request
                console.error(error);
            });
    }, []); // The empty dependency array ensures this effect runs only once

    return (
        <div className="Body">
            <NavBarAfterLogin/>
            <div className="Text01">
                <h1>
                How do you want to list in ?
                </h1>
            </div>
        <div className="container">
            <div className="box-kiri">
            <h2>
            List with us
            </h2>
            <div className="image-container">
                <img src={Image_1} alt='' className="centered-image" />
            </div>
            <br/>
            <h3>Every listing includes: </h3>
            <div className="List">

                <div className="Point">
                    <img src ={Check_Icon} alt=''/> 
                        <div className="StandardAds">
                            Standard Ads
                         </div>                               
                </div>

                <div className="Point">
                    <img src ={Check_Icon} alt=''/> 
                        <div className="Advertiseuntilyoufindatenant">
                            Advertise until you find a tenant
                        </div>                               
                </div>

                <div className="Point">
                    <img src ={Check_Icon} alt=''/> 
                        <div className="Tools">
                            Tools & market insights to help you create a great listing
                        </div>                               
                </div>

                <div className="Point">
                    <img src ={Check_Icon} alt=''/> 
                        <div className="Track">
                            Track listing views and enquiries
                        </div>                               
                </div>

                <div className="Point">
                    <img src ={Check_Icon} alt=''/> 
                        <div className="Publish">
                            Publish, update or relist your property in minutes
                        </div>                               
                </div>

                <div className="Point">
                    <img src ={Check_Icon} alt=''/> 
                        <div className="Notifications">
                            Notifications via email, phone or SMS
                        </div>                               
                </div> 

                <br />

                <div className="Sub-note">
                <h8>Fee will be shown once the property address has been confirmed.</h8>
                <br />
                <h8>By proceeding, you agree to our T&Cs and Privacy Policy</h8>
                </div>
                <br/> 


                <button className="rectangular-button">List with us</button>

            </div>
        </div>

            <div className="box-kanan">
                <h2>List with an expert</h2>
                <div className="image-container">
                    <img src={Image_2} alt='' className="centered-image" />
                </div>
                <p className="sub-1">Get an expert property manager to find and manage a 
                </p>
                <p className="sub-2">quality tenant for your property.</p>

                <p className="List-Text">Real agencies in Indonesia</p>

                <br/>
                
<div className="container">
    <div className="box-Raywhite"> 
        <img src={RayWhite} alt="RayWhite" className="raywhite-img" />
        <h10>Ray White Indonesia<br />- INDONESIA</h10>
        <br /><br />
        79 Properties for <br/>
        rent in Indonesia
        <br/>
        <button className="view-profile">View profile</button>
    </div>

    <div className="box-Remax"> 
        <img src={Remax} alt="Remax" className="raywhite-img" />
        <h10>Remax Indonesia<br />- INDONESIA</h10>
        <br /><br />
        79 Properties for <br/>
        rent in Indonesia
        <br/>
        <button className="view-profile">View profile</button>
    </div>
</div>

                <button className="rectangular-button2">See all agencies in Indonesia</button>



            </div>
        </div>

        <div className="footer-section">
        <Footer />            
        </div>

    </div>
    )
}