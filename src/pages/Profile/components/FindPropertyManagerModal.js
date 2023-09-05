import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Divider, InputAdornment, TextField, MenuItem, Grid } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 4 }} {...other}>
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
            <CloseIcon />
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

  return (
    <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography fontSize={"22px"} fontWeight={"700"}></Typography>
        </BootstrapDialogTitle>
        <DialogContent>
          <div className=''>
              <div className=''>
                  <div className='pb-5'>
                    <div className='d-flex justify-content-center align-item-center'>
                      <Typography fontSize={"24px"} gutterBottom display={"block"} fontWeight={"700"} className='mb-4'>Search local property management agencies</Typography>
                    </div>
                    <div>
                      <Grid container spacing={0} sx={{ flexGrow: 1, px: 2 }}>
                        <Grid item xs={10} md={9}>
                            <div className="d-flex justify-content-center align-item-center">
                            <TextField
                                size='small'
                                variant="outlined"
                                placeholder=""
                                sx={{
                                    width: '100%',
                                    textAlign: 'center',
                                    backgroundColor: 'white',
                                    border: 'none'
                                }}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start"><SearchOutlined />
                                    </InputAdornment>
                                    ),
                                }}
                            />
                            
                            </div>
                        </Grid>
                      <Grid item xs={2} md={3}>
                        <div className="d-flex justify-content-center align-item-center">
                          <button className='btn btn-info' style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>See options</button>
                        </div>
                      </Grid>
                      </Grid>
                    </div>
                  </div>
              </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
  );
}