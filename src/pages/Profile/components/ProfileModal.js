import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Divider, InputAdornment, TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      maxWidth: "400px",
      minHeight: "400px",
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, px: 3, pt: 3, pb: 0 }} display={"flex"} justifyContent={"space-between"} alignItems={"center"} {...other}>
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

export default function ProfileModal(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography fontSize={"24px"} fontWeight={"700"}>Name</Typography>
        </BootstrapDialogTitle>
        <DialogContent sx={{ pt: 0 }}>
            <Box sx={{ m: 0, px: 1 }}>
                <div className=''>
                    <Typography className='mb-4'>Personalise your experience or help fill forms faster.</Typography>
                    <Typography display={"block"} fontWeight={"700"}>First name</Typography>
                    <TextField
                        margin="normal"
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
                <div className=''>
                    <Typography display={"block"} fontWeight={"700"}>Last name</Typography>
                    <TextField
                        margin="normal"
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
            </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
            <button 
                className="btn btn-info my-2 text-white w-100" 
                style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}} 
                onClick={() => handleClose()}>
                    Save
            </button>
        </DialogActions>
      </BootstrapDialog>
  );
}