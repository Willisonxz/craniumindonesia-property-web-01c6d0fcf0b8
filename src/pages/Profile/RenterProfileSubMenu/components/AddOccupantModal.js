import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Divider, InputAdornment, TextField, MenuItem, ToggleButtonGroup, ToggleButton, Tooltip, Button } from '@mui/material';
import DividerVertical from '../../../../components/DividerVertical';
import { InfoOutlined } from '@mui/icons-material';

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

export default function AddOccupantModal(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const [toggle, setToggle] = useState();

  const handleToggleClick = (event, newToggleValue) => {
    setToggle(newToggleValue);
  };

  return (
    <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography fontSize={"20px"} fontWeight={"700"}>Add person</Typography>
        </BootstrapDialogTitle>
        <DialogContent
         dividers sx={{
                px: '1rem !important',
            }}>
          <div className=''>
              <div className=''>
                  <div className='mb-4'>
                      <Typography gutterBottom display={"block"} fontWeight={"700"}>Is the occupant 18 years of age or over?</Typography>
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
                  <div className='mb-4'>
                      <Typography gutterBottom display={"block"} fontWeight={"700"}>Occupant's given name</Typography>
                      <TextField
                        size='small'
                          variant="outlined"
                          placeholder="Enter name"
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
                      <Typography gutterBottom display={"block"} fontWeight={"700"}>Occupant's years of age (optional)&nbsp;
                        <Tooltip title="The occupant age helps property managers describe who will be living in the property to the owner" placement="bottom">
                          <InfoOutlined fontSize='small'  />
                        </Tooltip>
                      </Typography>
                      <TextField
                        size='small'
                          variant="outlined"
                          placeholder="Enter name"
                          sx={{ width: "100%" }}
                          InputProps={{
                              startAdornment: (
                              <InputAdornment position="start">
                              </InputAdornment>
                              ),
                          }}
                      />
                      <Typography gutterBottom display={"block"} fontSize={"12px"} className='text-muted'>Use numbers between 0 and 17.</Typography>
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