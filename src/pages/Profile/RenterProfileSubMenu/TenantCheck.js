import "../assets/profile.css";
import "./assets/renter_profile.css"
import images1 from "./assets/121.svg"
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import * as React from 'react';
import { useState } from "react";
import DividerHorizontal from "../../../components/DividerHorizontal";
import { AccessTimeOutlined, CalendarMonthOutlined, MonetizationOnOutlined } from "@mui/icons-material";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import AddTenantVerifModal from "./components/AddTenantVerifModal";

export default function TenantCheck() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false)

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
                                <Typography fontSize={"34px"} fontWeight={"700"}>Tenant Check</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
                                <div>
                                    <div className="align-items-center w-form">
                                        <Typography display={"block"} fontWeight={"700"} className="mt-3">Take control of your application and help property managers and owners evaluate you faster.</Typography>
                                        <Typography display={"block"} className="my-4">Run your own check through Equifax, Australia's leading tenancy database, to verify your identity and uncover the records property managers and owners care about most:</Typography>
                                    </div>
                                    <Grid container spacing={0} className="w-50">
                                        <Grid item xs={12} md={6}>
                                            <ul>
                                                <li>Tenancy database</li>
                                                <li>Bankruptcy notices</li>
                                            </ul>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <ul>
                                                <li>Court records</li>
                                                <li>Directorships</li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={0} className="w-50 mt-2">
                                        <Grid item xs={12} md={4}>
                                            <Typography fontSize={"12px"}>On average takes less than</Typography>
                                            <Typography fontSize={"24px"} fontWeight={"700"}><AccessTimeOutlined /> 3 mins</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Typography fontSize={"12px"}>Lasts for</Typography>
                                            <Typography fontSize={"24px"} fontWeight={"700"}><CalendarMonthOutlined /> 6 months</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={2}>
                                            <Typography fontSize={"12px"}>Only costs</Typography>
                                            <Typography fontSize={"24px"} fontWeight={"700"}><MonetizationOnOutlined /> $29</Typography>
                                        </Grid>
                                    </Grid>
                                    <div className="align-items-center w-form">
                                        <Typography display={"block"} className="my-4">Use your Tenant Check for any application, even outside of Cranium, or choose not to share it at all.</Typography>
                                    </div>
                                    <button className="btn btn-info my-2 text-white w-form" style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>Start Tenant Check</button>
                                </div>

                                <DividerHorizontal />

                                <div className="align-items-center w-form">
                                    <Typography display={"block"} className="mt-4 mb-2" fontWeight={"700"}>Already have a Tenant Verification Report?</Typography>
                                    <Typography display={"block"} className="mb-4">If you have previously purchased a <a href="" target="_blank" style={{textDecoration: "none"}}>Cranium Tenant Verification</a>  report through 1form, you can upload it here instead of a Tenant Check. Make sure your report is still valid.</Typography>
                                    <button className="btn btn-outline-secondary w-100 p-2" onClick={() => {setModalOpen(true)}}>
                                        Add <img src={images1}></img> <strong>Form</strong> Tenant Verification
                                    </button>
                                    <AddTenantVerifModal onClose={() => setModalOpen(false)} open={modalOpen} />
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