import "../assets/profile.css";
import { Box, Card, Checkbox, FormControlLabel, TextareaAutosize, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import { useState } from "react";
import { DescriptionOutlined, DoDisturbOnOutlined, FileUploadOutlined, InfoOutlined } from "@mui/icons-material";
import AddIncomeSourceModal from "./components/AddIncomeSourceModal";
import NavbarAfterLogin from "../components/NavbarAfterLogin";

export default function AboutMe() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false)
    const [checked, setChecked] = useState(false);

    const handleChecked = (event) => {
        setChecked(event.target.checked);
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
                                <div className="d-flex align-items-center w-100">
                                    <Typography fontSize={"12px"} display={"block"}>RENTER PROFILE</Typography>
                                </div>
                                <Typography fontSize={"34px"} fontWeight={"700"}>Income (after tax)</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
                                <div>
                                    <div className="mb-5">
                                        <div className="align-items-center w-form">
                                            <Typography fontSize={"20px"} display={"block"} fontWeight={"700"}>Source of income</Typography>
                                            <Typography fontSize={"16px"} display={"block"} className="text-muted">Add all your income sources to help show you can afford the rent.</Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <button disabled={checked} className="btn btn-outline-secondary w-form p-2" onClick={() => {setModalOpen(true)}}>
                                            Add income source
                                        </button>
                                        <AddIncomeSourceModal onClose={() => setModalOpen(false)} open={modalOpen} />
                                    </div>
                                    <div className="my-2 w-form">
                                        <FormControlLabel
                                            label="I currently don't receive any income"
                                            control={<Checkbox checked={checked} onChange={handleChecked} />}
                                        />
                                    </div>
                                    {checked && <Box className="bg-sky-blue w-form" sx={{borderRadius: "10px"}}>
                                        <Box className="d-flex p-3">
                                            <Box className="me-2">
                                                <InfoOutlined color="primary" fontSize="small" />
                                            </Box>
                                            <Box>
                                                <Typography color={"primary"} fontSize={"14px"} display={"block"} className="mb-3">It's highly recommended to add a form of income or finances to show you can afford the rent.</Typography>
                                                <Typography color={"primary"} fontSize={"14px"} display={"block"}>Income can refer to things like government benefits, bonuses, commission, allowances or rent income.</Typography>
                                            </Box>
                                        </Box>
                                    </Box>}
                                </div>
                                <div className="my-5">
                                    <div className="d-flex align-items-center w-form">
                                        <Typography fontSize={"20px"} display={"block"} fontWeight={"700"}>Recent proof of income</Typography>
                                    </div>
                                    <div className="d-flex align-items-center w-form">
                                        <Typography fontSize={"16px"} display={"block"} className="mb-3 text-muted">Attach your three most recent payslips or any other supporting documents that prove your income.</Typography>
                                    </div>
                                    <div className="mb-3">
                                        <div className="bg-content-detail mb-2 w-form" style={{ borderRadius: "10px" }}>
                                            <div className="d-flex justify-content-between align-items-center p-3">
                                                <div className="d-flex align-items-center" style={{ fontWeight: "600" }}>
                                                    <DescriptionOutlined fontSize="small" />&nbsp; file-1
                                                </div>
                                                <div className="pointer" style={{color: "#A8420D", fontSize: "14px"}}>
                                                    Delete <DoDisturbOnOutlined fontSize="small" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-content-detail mb-2 w-form" style={{ borderRadius: "10px" }}>
                                            <div className="d-flex justify-content-between align-items-center p-3">
                                                <div className="d-flex align-items-center" style={{ fontWeight: "600" }}>
                                                    <DescriptionOutlined fontSize="small" />&nbsp; file-1
                                                </div>
                                                <div className="pointer" style={{color: "#A8420D", fontSize: "14px"}}>
                                                    Delete <DoDisturbOnOutlined fontSize="small" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-secondary w-form p-2">
                                            <FileUploadOutlined /> Upload a file
                                        </button>
                                    </div>
                                    <Typography fontSize={"12px"} display={"block"} className="text-muted">Max. 10MB - GIF, JPG, JPEG, PNG, HEIC, PDF</Typography>
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