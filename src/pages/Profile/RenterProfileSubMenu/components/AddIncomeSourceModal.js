import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Divider, InputAdornment, TextField, MenuItem } from '@mui/material';
import DividerVertical from '../../../../components/DividerVertical';

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

export default function AddIncomeSourceModal(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const DATA_INCOME_TYPE = [
    {
      id: '1',
      label: 'Salary',
    },
    {
      id: '2',
      label: 'Family Allowance',
    },
    {
      id: '3',
      label: 'Pensions',
    },
    {
      id: '4',
      label: 'Existing Rental Income',
    },
    ];

    const DATA_PAY_FREQUENCY = [
        {
        id: '1',
        label: 'Annually',
        },
        {
        id: '2',
        label: 'Monthly',
        },
        {
        id: '3',
        label: 'Fortnightly',
        },
        {
        id: '4',
        label: 'Weekly',
        },
    ];

  return (
    <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography fontSize={"20px"} fontWeight={"700"}>Income source</Typography>
        </BootstrapDialogTitle>
        <DialogContent
         dividers sx={{
                px: '1rem !important',
            }}>
          <div className=''>
              <div className=''>
                  <div className='mb-4'>
                      <Typography gutterBottom display={"block"} fontWeight={"700"}>What type of income is it?</Typography>
                      <TextField
                        size='small'
                        id="outlined-select-currency"
                        select
                        label="Select"
                        className="flex-grow-1 w-100"
                        >
                        {DATA_INCOME_TYPE.map((option) => (
                            <MenuItem key={option.id} value={option.label}>
                            {option.label}
                            </MenuItem>
                        ))}
                      </TextField>
                  </div>
                  <div className='mb-4'>
                      <Typography gutterBottom display={"block"} fontWeight={"700"}>Pay frequency</Typography>
                      <TextField
                        size='small'
                        id="outlined-select-currency"
                        select
                        label="Select"
                        className="flex-grow-1 w-100"
                        >
                        {DATA_PAY_FREQUENCY.map((option) => (
                            <MenuItem key={option.id} value={option.label}>
                            {option.label}
                            </MenuItem>
                        ))}
                      </TextField>
                  </div>
                  <div className='mb-4'>
                      <Typography gutterBottom display={"block"} fontWeight={"700"}>Amount (after tax)</Typography>
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