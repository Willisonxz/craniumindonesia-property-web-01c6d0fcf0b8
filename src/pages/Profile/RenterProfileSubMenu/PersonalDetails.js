import "../assets/profile.css";
import "./assets/renter_profile.css"
import { Box, Grid, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import { NavLink, useNavigate } from 'react-router-dom'
import { ChevronLeft } from "@mui/icons-material";
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import buildings from "../assets/buildings.jpg"
import NavbarAfterLogin from "../components/NavbarAfterLogin";

export default function PersonalDetails() {
    const navigate = useNavigate();

    const DATE = [
        {
          id: '1',
          label: '1',
        },
        {
          id: '2',
          label: '2',
        },
        {
          id: '3',
          label: '3',
        },
        {
          id: '4',
          label: '4',
        },
    ];

    const MONTH = [
    {
        id: '1',
        label: 'January',
    },
    {
        id: '2',
        label: 'February',
    },
    {
        id: '3',
        label: 'March',
    },
    {
        id: '4',
        label: 'April',
    },
    ];

    const YEAR = [
    {
        id: '1',
        label: '2023',
    },
    {
        id: '2',
        label: '2022',
    },
    {
        id: '3',
        label: '2021',
    },
    {
        id: '4',
        label: '2020',
    },
    ];

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
                                <Typography fontSize={"34px"} fontWeight={"700"}>Personal details</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <Typography>First name</Typography>
                                    </div>
                                    <TextField
                                        variant="outlined"
                                        label=""
                                        sx={{
                                            '@media (max-width: 1128px)': {
                                              width: '100%',
                                            },
                                            '@media (min-width: 1129px)': {
                                                width: '50%',
                                            },
                                          }}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <Typography>Last name</Typography>
                                    </div>
                                    <TextField
                                        variant="outlined"
                                        label=""
                                        sx={{
                                            '@media (max-width: 1128px)': {
                                              width: '100%',
                                            },
                                            '@media (min-width: 1129px)': {
                                                width: '50%',
                                            },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <Typography>Date of birth</Typography>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center w-form">
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Date"
                                            sx={{
                                                '@media (max-width: 1128px)': {
                                                  width: '100%',
                                                },
                                                '@media (min-width: 1129px)': {
                                                  flexGrow: '1',
                                                },
                                            }}
                                            >
                                            {DATE.map((option) => (
                                                <MenuItem key={option.id} value={option.label}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Month"
                                            sx={{
                                                '@media (max-width: 1128px)': {
                                                    width: '100%',
                                                    margin: '10px',
                                                },
                                                '@media (min-width: 1129px)': {
                                                    flexGrow: '1',
                                                    marginLeft: '10px',
                                                    marginRight: '10px',
                                                },
                                            }}
                                            >
                                            {MONTH.map((option) => (
                                                <MenuItem key={option.id} value={option.label}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Year"
                                            sx={{
                                                '@media (max-width: 1128px)': {
                                                    width: '100%',
                                                },
                                                '@media (min-width: 1129px)': {
                                                    flexGrow: '1',
                                                },
                                            }}
                                            >
                                            {YEAR.map((option) => (
                                                <MenuItem key={option.id} value={option.label}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <Typography>Phone number (mobile preferred)</Typography>
                                    </div>
                                    <TextField
                                        variant="outlined"
                                        label=""
                                        sx={{
                                            '@media (max-width: 1128px)': {
                                              width: '100%',
                                            },
                                            '@media (min-width: 1129px)': {
                                                width: '50%',
                                            },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <Typography fontSize={"13px"} display={"block"}>Use numbers only, without spaces or other characters, e.g. 0416222333 or 0244443333.</Typography>
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
                        <Typography fontSize={"12px"} display={"block"}>WANT TO CHANGE YOUR EMAIL ?</Typography>
                        <Typography fontSize={"16px"} display={"block"}>We will use the email you have defined as your realestate.com.au username to inform about status updates. You can <a href="/my-real-estate/account" target="_blank">change it here</a></Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}