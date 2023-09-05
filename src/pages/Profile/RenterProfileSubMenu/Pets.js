import "../assets/profile.css";
import { Box, TextareaAutosize, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import './assets/renter_profile.css';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import NavbarAfterLogin from "../components/NavbarAfterLogin";

export default function Pets() {
    const navigate = useNavigate();
    const [number, setNumber] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleNumber = (event, newNumber) => {
        setNumber(newNumber);
    };

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
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <Typography fontSize={"12px"} display={"block"}>RENTER PROFILE</Typography>
                                </div>
                                <Typography fontSize={"34px"} fontWeight={"700"}>Pets</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
                                <div className="align-items-center w-form">
                                    <Typography display={"block"} className="my-3">Let the property manager know if you have pets.</Typography>
                                </div>
                                <div className="my-4">
                                    <Typography display={"block"} fontWeight={"700"}>Dogs</Typography>
                                    <ToggleButtonGroup
                                        className="pets-number"
                                        value={number}
                                        exclusive
                                        onChange={handleNumber}
                                        aria-label="dogs"
                                    >
                                        <ToggleButton value="0" aria-label="0">0</ToggleButton>
                                        <ToggleButton value="1" aria-label="1">1</ToggleButton>
                                        <ToggleButton value="2" aria-label="2">2</ToggleButton>
                                        <ToggleButton value="3" aria-label="3">3</ToggleButton>
                                        <ToggleButton value="4" aria-label="4">4+</ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                                <div className="my-4">
                                    <Typography display={"block"} fontWeight={"700"}>Cats</Typography>
                                    <ToggleButtonGroup
                                        className="pets-number"
                                        value={number}
                                        exclusive
                                        onChange={handleNumber}
                                        aria-label="cats"
                                    >
                                        <ToggleButton value="0" aria-label="0">0</ToggleButton>
                                        <ToggleButton value="1" aria-label="1">1</ToggleButton>
                                        <ToggleButton value="2" aria-label="2">2</ToggleButton>
                                        <ToggleButton value="3" aria-label="3">3</ToggleButton>
                                        <ToggleButton value="4" aria-label="4">4+</ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                                <div className="my-4">
                                    <Typography display={"block"} fontWeight={"700"}>Other pets</Typography>
                                    <ToggleButtonGroup
                                        className="pets-number"
                                        value={number}
                                        exclusive
                                        onChange={handleNumber}
                                        aria-label="other"
                                    >
                                        <ToggleButton value="0" aria-label="0">0</ToggleButton>
                                        <ToggleButton value="1" aria-label="1">1</ToggleButton>
                                        <ToggleButton value="2" aria-label="2">2</ToggleButton>
                                        <ToggleButton value="3" aria-label="3">3</ToggleButton>
                                        <ToggleButton value="4" aria-label="4">4+</ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                                <div className="align-items-center w-form">
                                    <Typography display={"block"} className="my-4">Describe your pets in more detail</Typography>
                                </div>
                                <TextareaAutosize
                                    minRows={5}
                                    maxRows={5}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    inputProps={{ maxLength: 3000 }}
                                    aria-label="text area"
                                    placeholder="Include breed or type, weight, age and temperament, or a pet profile link if you have one"
                                    className="p-3 w-form"
                                />
                                <Typography fontSize={"14px"} display={"block"}>{inputValue.length}/3000</Typography>
                                <Box className="bg-content-detail my-5 w-form">
                                    <Box className="p-4">
                                        <Typography fontSize={"18px"} display={"block"} fontWeight={"700"} className="mb-1">Declaring pets</Typography>
                                        <Typography fontSize={"16px"} display={"block"}>Use this space to tell them more about your pets. It's a good opportunity to explain how amazing your pet is.</Typography>
                                    </Box>
                                </Box>
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