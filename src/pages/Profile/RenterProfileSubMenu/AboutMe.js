import "../assets/profile.css";
import "./assets/renter_profile.css"
import { Box, TextareaAutosize, Typography, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import { useState } from "react";
import { DescriptionOutlined, DoDisturbOnOutlined, FileUploadOutlined } from "@mui/icons-material";
import NavbarAfterLogin from "../components/NavbarAfterLogin";

export default function AboutMe() {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value.length <= 3000) {
          setInputValue(value);
        }
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
                                <Typography fontSize={"34px"} fontWeight={"700"}>About Me</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                                <div className="mb-5">
                                    <div className="d-flex align-items-center w-form">
                                        <Typography fontSize={"20px"} display={"block"} fontWeight={"700"}>Introduce yourself</Typography>
                                    </div>
                                    <div className="d-flex align-items-center w-form">
                                        <Typography fontSize={"16px"} display={"block"} className="mb-3 text-muted">Share with the agent and landlord why you are the best fit for the property.</Typography>
                                    </div>
                                    <TextareaAutosize
                                        minRows={5}
                                        maxRows={5}
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        inputProps={{ maxLength: 3000 }}
                                        aria-label="text area"
                                        placeholder="Include details about yourself, any hobbies and why you want this property"
                                        className="p-3 w-form"
                                    />
                                    <Typography fontSize={"14px"} display={"block"}>{inputValue.length}/3000</Typography>
                                </div>
                                <div className="mb-5">
                                    <div className="d-flex align-items-center w-form">
                                        <Typography fontSize={"20px"} display={"block"} fontWeight={"700"}>Optional supporting documents</Typography>
                                    </div>
                                    <div className="d-flex align-items-center w-form">
                                        <Typography fontSize={"16px"} display={"block"} className="mb-3 text-muted">Attach any supporting document you'd like e.g. letters of recommendation, tenant ledgers or company guarantees.</Typography>
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
                                <div className="d-flex justify-content-between align-items-center w-form my-2">
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