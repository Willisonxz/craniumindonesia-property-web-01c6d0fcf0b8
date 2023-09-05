import "../assets/profile.css";
import { Box, Checkbox, FormControlLabel, InputAdornment, MenuItem, TextField, Tooltip, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import HeaderComponentNotSettle from "../../../components/HeaderComponentNotSettle";
import DividerVertical from "../../../components/DividerVertical";
import RoutesPage from "../../../Routes";
import { useState } from "react";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import { InfoOutlined } from "@mui/icons-material";

export default function Employment() {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    const handleChecked = (event) => {
        setChecked(event.target.checked);
    };

    const EMPLOYMENT_TYPE = [
        {
          id: '1',
          label: 'Employed',
        },
        {
          id: '2',
          label: 'Self-employed',
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

    const REFERENCE_TYPE = [
        {
        id: '1',
        label: 'Property Manager',
        },
        {
        id: '2',
        label: 'Private Landlord',
        },
        {
        id: '3',
        label: 'Parents',
        },
        {
        id: '4',
        label: 'Other',
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
                                <div className="d-flex align-items-center w-100">
                                    <Typography fontSize={"12px"} display={"block"}>RENTER PROFILE</Typography>
                                </div>
                                <Typography fontSize={"34px"} fontWeight={"700"}>Employment</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                                <div className="mb-5">
                                    <div className="align-items-center w-form mb-3">
                                        <Typography fontSize={"20px"} display={"block"} fontWeight={"700"}>Employment</Typography>
                                        <Typography fontSize={"16px"} display={"block"} className="text-muted">Add your current employment information and help verify your details with a valid reference.</Typography>
                                    </div>
                                    <div className="mb-3">
                                        <FormControlLabel
                                            label="I am currently not employed"
                                            control={<Checkbox checked={checked} onChange={handleChecked} />}
                                        />
                                    </div>
                                    {!checked && 
                                    <>
                                        <div className="mb-4">
                                            <div className="d-flex align-items-center w-form">
                                                <Typography fontSize={"16px"} fontWeight={"700"}>What's the employment type?</Typography>
                                            </div>
                                            <div className="d-flex align-items-center w-form">
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="Select"
                                                    className="flex-grow-1"
                                                    >
                                                    {EMPLOYMENT_TYPE.map((option) => (
                                                        <MenuItem key={option.id} value={option.label}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex align-items-center w-form">
                                                <Typography fontSize={"16px"} fontWeight={"700"}>What's the name of the company?</Typography>
                                            </div>
                                            <div className="d-flex align-items-center w-form">
                                                <TextField
                                                    variant="outlined"
                                                    label=""
                                                    sx={{ width: "100%" }}
                                                    InputProps={{
                                                        startAdornment: (
                                                        <InputAdornment position="start">
                                                        </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex align-items-center w-form">
                                                <Typography fontSize={"16px"} fontWeight={"700"}>ABN / ACN</Typography>
                                            </div>
                                            <div className="d-flex align-items-center w-form">
                                                <TextField
                                                    variant="outlined"
                                                    label=""
                                                    sx={{ width: "100%" }}
                                                    InputProps={{
                                                        startAdornment: (
                                                        <InputAdornment position="start">
                                                        </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex align-items-center w-form">
                                                <Typography fontSize={"16px"} fontWeight={"700"}>What's your job title?</Typography>
                                            </div>
                                            <div className="d-flex align-items-center w-form">
                                                <TextField
                                                    variant="outlined"
                                                    label=""
                                                    sx={{ width: "100%" }}
                                                    InputProps={{
                                                        startAdornment: (
                                                        <InputAdornment position="start">
                                                        </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className='mb-4'>
                                            <div className="d-flex align-items-center w-form">
                                                <Typography fontSize={"16px"} fontWeight={"700"}>When did you start working here?</Typography>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center w-form">
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="Month"
                                                    sx={{
                                                        '@media (max-width: 1128px)': {
                                                            width: '100%',
                                                            paddingRight: '16px',
                                                        },
                                                        '@media (min-width: 1129px)': {
                                                            flexGrow: '1',
                                                            paddingRight: '16px',
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
                                        <div className='bg-content-detail px-3 py-4 w-form'>
                                            <Typography fontWeight={"700"}>Address reference</Typography>
                                            <Typography fontSize={"14px"} className='mb-4 text-muted'>You must have this person's consent to provide their personal information and be contacted by us and/or the relevant agency during business hours.</Typography>
                                            <div className='mb-3'>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className='flex-grow-1 w-100 pe-3'>
                                                        <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Reference type</Typography>
                                                        <TextField
                                                            id="outlined-select-currency"
                                                            select
                                                            label="Please select"
                                                            className='w-100'
                                                            >
                                                            {REFERENCE_TYPE.map((option) => (
                                                                <MenuItem key={option.id} value={option.label}>
                                                                {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </div>
                                                    <div className="flex-grow-1 w-100">
                                                        <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Full name</Typography>
                                                        <TextField
                                                            variant="outlined"
                                                            placeholder="First and last name"
                                                            sx={{ width: "100%" }}
                                                            InputProps={{
                                                                startAdornment: (
                                                                <InputAdornment position="start">
                                                                </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mb-3'>
                                                <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Email&nbsp;
                                                    <Tooltip fontSize={"16px"} title="Ensure reference email is working and valid before submitting your application" placement="top">
                                                        <InfoOutlined fontSize='small'  />
                                                    </Tooltip>
                                                </Typography>
                                                <TextField
                                                        variant="outlined"
                                                    label=""
                                                    sx={{ width: "100%" }}
                                                    InputProps={{
                                                        startAdornment: (
                                                        <InputAdornment position="start">
                                                        </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <div className='mb-3'>
                                                <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Phone number</Typography>
                                                <TextField
                                                        variant="outlined"
                                                    placeholder="Mobile or Landline"
                                                    sx={{ width: "100%" }}
                                                    InputProps={{
                                                        startAdornment: (
                                                        <InputAdornment position="start">
                                                        </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                            <Typography fontSize={"14px"} display={"block"} className='text-muted'>To confirm your address history, we'll send your referee a SMS & email.</Typography>
                                        </div>
                                    </>
                                    }
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