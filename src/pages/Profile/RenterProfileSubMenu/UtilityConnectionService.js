import "../assets/profile.css";
import "./assets/renter_profile.css"
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import * as React from 'react';
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import NavbarAfterLogin from "../components/NavbarAfterLogin";

export default function UtilityConnectionService() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState();

    const handleToggleClick = (event, newToggleValue) => {
        setToggle(newToggleValue);
    };

    return (
        <>
            <NavbarAfterLogin />
            <Box className="full-height" sx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}>
                <div className="bg-content-detail">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <Typography fontSize={"12px"} display={"block"}>RENTER PROFILE</Typography>
                                </div>
                                <Typography fontSize={"34px"} fontWeight={"700"}>Utility connection service</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
                                <div className="align-items-center w-form">
                                    <Typography fontSize={"16px"} display={"block"} fontWeight={"700"} className="mt-3">Would you like to be contacted about <a href="" target="_blank" style={{textDecoration: "none"}}>moving or utility connection services</a> (for the purposes of arranging your energy plan and other services) if your application is successful?</Typography>
                                </div>

                                <ToggleButtonGroup
                                    className="yes-no-toggle"
                                    value={toggle}
                                    exclusive
                                    onChange={handleToggleClick}
                                    aria-label="text toggle"
                                >
                                    <ToggleButton value="yes" aria-label="yes">
                                        YES
                                    </ToggleButton>
                                    <ToggleButton value="no" aria-label="no">
                                        NO
                                    </ToggleButton>
                                </ToggleButtonGroup>

                                <div className="align-items-center w-form mt-5">
                                    <Typography fontSize={"14px"} display={"block"} className="mt-4">If 'Yes', the agency managing this property will share your contact information with their preferred moving and utility connection service. Speak to the agency to find out more about their preferred providers.</Typography>
                                    <Typography fontSize={"14px"} display={"block"} className="my-4">If 'No', you won't be contacted about utilities and connections services. However, successful applicants for properties based in Victoria may still be contacted for water connections services as per Victoria's State guidelines.</Typography>
                                </div>
                                <div className="d-flex w-form justify-content-between align-items-center my-4">
                                    <button className="btn flex-grow-1" onClick={() => navigate(RoutesPage.RouteProfileRenterProfile)}>Cancel</button>
                                    <DividerVertical />
                                    <button className='btn btn-info my-2 text-white flex-grow-1' onClick={() => navigate(RoutesPage.RouteProfileRenterProfile)} style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>Save and back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    )
}