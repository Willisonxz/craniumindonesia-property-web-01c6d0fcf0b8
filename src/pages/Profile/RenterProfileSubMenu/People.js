import "../assets/profile.css";
import "./assets/renter_profile.css"
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import { useState } from "react";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AddOccupantModal from "./components/AddOccupantModal";
import NavbarAfterLogin from "../components/NavbarAfterLogin";

export default function People() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false)
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
                                <Typography fontSize={"34px"} fontWeight={"700"}>People</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
                                <div className="align-items-center w-form">
                                    <Typography display={"block"} fontWeight={"700"} className="mt-3 mb-1">Will you live with other occupants who are not on the lease?</Typography>
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

                                <div className="align-items-center w-form">
                                    <Typography display={"block"} fontSize={"16px"} className="mt-4 text-muted">Leaseholders can't be added to a Renter Profile at the moment. We'll remind you to add them when you apply for a rental.</Typography>
                                    <Typography display={"block"} fontWeight={"700"} className="my-4">Add details of other occupants so the agent knows who you plan to live with.</Typography>
                                </div>
                                <div className="mb-3">
                                    {/* <ToggleButton
                                        value="add_occupant"
                                        onClick={() => {setModalOpen(true)}}
                                        className="w-form"
                                        sx={{textTransform: "none"}}
                                        >
                                        Add occupant
                                    </ToggleButton> */}
                                    <button className="btn btn-outline-secondary w-form p-2" onClick={() => {setModalOpen(true)}}>
                                        Add occupant
                                    </button>
                                    <AddOccupantModal onClose={() => setModalOpen(false)} open={modalOpen} />
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