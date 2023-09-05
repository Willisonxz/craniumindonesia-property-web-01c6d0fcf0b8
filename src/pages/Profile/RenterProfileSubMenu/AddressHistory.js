import "../assets/profile.css";
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import { useState } from "react";
import AddCurrentAddressModal from "./components/AddCurrentAddressModal";
import NavbarAfterLogin from "../components/NavbarAfterLogin";

export default function AddressHistory() {
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
                                <Typography fontSize={"34px"} fontWeight={"700"}>Address History</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                                <div className="mb-5">
                                    <div className="align-items-center w-form">
                                        <Typography fontSize={"20px"} display={"block"} fontWeight={"700"}>Address History</Typography>
                                        <Typography fontSize={"16px"} display={"block"} className="mb-3 text-muted">Add two or more years of your most recent address history and help verify your details with a valid reference.</Typography>
                                    </div>
                                    <div className="align-items-center w-form">
                                        <Typography fontSize={"16px"} display={"block"} className="mb-3 text-muted">Your history could include living with parents or the property you own.</Typography>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-secondary w-form p-2" onClick={() => {setModalOpen(true)}}>
                                            Add current address
                                        </button>
                                        <AddCurrentAddressModal onClose={() => setModalOpen(false)} open={modalOpen} />
                                    </div>
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
            </Box>
        </>
    )
}