import "../assets/profile.css";
import { Box, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import NavbarAfterLogin from "../components/NavbarAfterLogin";

export default function PersonalDetails() {
    const navigate = useNavigate();

    const RELATIONSHIP = [
        {
          id: '1',
          label: 'Parent',
        },
        {
          id: '2',
          label: 'Sibling',
        },
        {
          id: '3',
          label: 'Child',
        },
        {
          id: '4',
          label: 'Grandparent',
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
                                <Typography fontSize={"34px"} fontWeight={"700"}>Emergency contact</Typography>
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
                                        <Typography display={"block"}>The real estate agency requires an emergency contact who will not be living with you in case of an emergency or if you are unreachable during your tenancy.</Typography>
                                        <Typography display={"block"} className="my-4">You must have this person's consent to provide their personal information and to be contacted by the relevant agency.</Typography>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <Typography>Name</Typography>
                                    </div>
                                    <TextField
                                        variant="outlined"
                                        label=""
                                        placeholder="First and Last name"
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
                                        <Typography>Relationship to you</Typography>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center w-form">
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Please select"
                                            className="flex-grow-1"
                                            >
                                            {RELATIONSHIP.map((option) => (
                                                <MenuItem key={option.id} value={option.label}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <Typography>Mobile number</Typography>
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
                                        <Typography>Email address</Typography>
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
                                    <Typography fontSize={"14px"} display={"block"}>Contact details will only be used by the relevant agency in an emergency or if you are unreachable</Typography>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <Typography>Confirm email address</Typography>
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