import * as React from 'react';
import { useState } from 'react';
import "../../assets/profile.css";
import "../assets/renter_profile.css"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Divider, InputAdornment, TextField, MenuItem, ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';
import DividerVertical from '../../../../components/DividerVertical';
import { InfoOutlined, SearchOutlined } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      maxWidth: '400px',
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon fontSize='large' />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

export default function AddCurrentAddressModal(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const [toggle, setToggle] = useState();

  const handleToggleClick = (event, newToggleValue) => {
    setToggle(newToggleValue);
  };

    const COUNTRY = [
        {
        id: '1',
        label: 'Indonesia',
        },
        {
        id: '2',
        label: 'Australia',
        },
        {
        id: '3',
        label: 'Japan',
        },
        {
        id: '4',
        label: 'Singapore',
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
    <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography fontSize={"20px"} fontWeight={"700"}>Current address</Typography>
        </BootstrapDialogTitle>
        <DialogContent
         dividers sx={{
                px: '1rem !important',
            }}>
          <div className=''>
              <div className=''>
                  <div className='mb-4'>
                      <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Address</Typography>
                      <TextField
                        size='small'
                          variant="outlined"
                          label=""
                          sx={{ width: "100%" }}
                          InputProps={{
                              startAdornment: (
                              <InputAdornment position="start"><SearchOutlined />
                              </InputAdornment>
                              ),
                          }}
                      />
                      <Typography fontSize={"12px"} display={"block"} fontWeight={"700"} className='pointer text-link mt-1'>Enter Australian or overseas address manually</Typography>
                  </div>
                  <div className='mb-4'>
                      <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Street and number</Typography>
                      <TextField
                        size='small'
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
                  <div className='mb-4'>
                      <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>City or suburb</Typography>
                      <TextField
                        size='small'
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
                  <div className='mb-4'>
                      <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Country</Typography>
                      <TextField
                            size='small'
                            id="outlined-select-currency"
                            select
                            label="Please select"
                            className="flex-grow-1 w-100 me-2"
                            >
                            {COUNTRY.map((option) => (
                                <MenuItem key={option.id} value={option.label}>
                                {option.label}
                                </MenuItem>
                            ))}
                      </TextField>
                  </div>
                  <div className='mb-4'>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className='flex-grow-1 w-100 me-2'>
                            <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Postcode</Typography>
                            <TextField
                                size='small'
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
                        <div className="flex-grow-1 w-100">
                            <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>State/Region</Typography>
                            <TextField
                                size='small'
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
                  </div>
                  <div className='mb-4'>
                      <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>When did you move?</Typography>
                      <div className="d-flex justify-content-between align-items-center">
                        <TextField
                            size='small'
                            id="outlined-select-currency"
                            select
                            label="Month"
                            className="flex-grow-1 w-100 me-2"
                            >
                            {MONTH.map((option) => (
                                <MenuItem key={option.id} value={option.label}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            size='small'
                            id="outlined-select-currency"
                            select
                            label="Year"
                            className="flex-grow-1 w-100"
                            >
                            {YEAR.map((option) => (
                                <MenuItem key={option.id} value={option.label}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                      </div>
                  </div>
                  <div className='mb-4'>
                      <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Do you own the property</Typography>
                      <ToggleButtonGroup
                            value={toggle}
                            exclusive
                            onChange={handleToggleClick}
                            aria-label="text toggle"
                        >
                            <ToggleButton value="no" aria-label="no">
                                NO
                            </ToggleButton>
                            <ToggleButton value="yes" aria-label="yes">
                                YES
                            </ToggleButton>
                      </ToggleButtonGroup>
                  </div>
                  <div className='bg-content-detail px-3 py-4'>
                        <Typography fontWeight={"700"}>Address reference</Typography>
                        <Typography fontSize={"14px"} className='mb-4 text-muted'>You must have this person's consent to provide their personal information and be contacted by us and/or the relevant agency during business hours.</Typography>
                        <div className='mb-3'>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className='flex-grow-1 w-100 me-2'>
                                    <Typography fontSize={"16px"} fontWeight={"700"} gutterBottom display={"block"}>Reference type</Typography>
                                    <TextField
                                        size='small'
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
                                        size='small'
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
                                <Tooltip title="Ensure reference email is working and valid before submitting your application" placement="right">
                                    <InfoOutlined fontSize='small'  />
                                </Tooltip>
                            </Typography>
                            <TextField
                                size='small'
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
                                size='small'
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
              </div>
          </div>
        </DialogContent>
        <Divider />
        {/* <DialogActions> */}
            <div className="d-flex justify-content-between align-items-center p-2">
                <button className="btn flex-grow-1" onClick={() => handleClose()}>Cancel</button>
                <DividerVertical />
                <button className='btn btn-info my-2 text-white flex-grow-1' onClick={() => handleClose()} style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>Add</button>
            </div>
        {/* </DialogActions> */}
      </BootstrapDialog>
  );
}