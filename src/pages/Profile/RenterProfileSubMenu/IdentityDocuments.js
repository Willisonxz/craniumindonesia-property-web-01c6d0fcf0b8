import "../assets/profile.css";
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import { useState } from "react";
import AddPhotoIDModal from "./components/AddPhotoIDModal";
import AddSecondIDModal from "./components/AddSecondIDModal";
import NavbarAfterLogin from "../components/NavbarAfterLogin";

export default function IdentityDocuments() {
    const navigate = useNavigate();
    const [photoIDModalOpen, setPhotoIDModalOpen] = useState(false)
    const [secondIDModalOpen, setSecondIDModalOpen] = useState(false)

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
                                <Typography fontSize={"34px"} fontWeight={"700"}>Identity documents</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                                <div className="mb-3">
                                    <div className="align-items-center w-form">
                                        <Typography fontSize={"20px"} display={"block"} fontWeight={"700"}>Add your ID</Typography>
                                        <Typography fontSize={"16px"} display={"block"}>Upload images of two IDs. At least one ID must have your photo on it.</Typography>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-outline-secondary w-form p-2" onClick={() => {setPhotoIDModalOpen(true)}}>
                                        Add photo ID
                                    </button>
                                    <AddPhotoIDModal onClose={() => setPhotoIDModalOpen(false)} open={photoIDModalOpen} />
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary w-form p-2" onClick={() => {setSecondIDModalOpen(true)}}>
                                        Add second ID
                                    </button>
                                    <AddSecondIDModal onClose={() => setSecondIDModalOpen(false)} open={secondIDModalOpen} />
                                </div>
                                <div className="d-flex w-form justify-content-between align-items-center my-2">
                                    <button className="btn flex-grow-1" onClick={() => navigate(RoutesPage.RouteProfileRenterProfile)}>Cancel</button>
                                    <DividerVertical />
                                    <button className='btn btn-info my-2 text-white flex-grow-1' onClick={() => navigate(RoutesPage.RouteProfileRenterProfile)} style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>Save and back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Box className="bg-content-detail box-content-profile" mt="auto">
                    <Box className="p-4">
                        <Typography fontSize={"12px"} display={"block"}>HOW WE STORE YOUR UPLOADS</Typography>
                        <Typography fontSize={"14px"} display={"block"}>We'll store your uploads securely on our servers. Find out more in <a href="/my-real-estate/account" target="_blank">our help centre</a></Typography>
                        <Typography fontSize={"14px"} display={"block"}>If you remove files once you've submitted an application, that will remove them from your profile, but not from submitted applications.</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}