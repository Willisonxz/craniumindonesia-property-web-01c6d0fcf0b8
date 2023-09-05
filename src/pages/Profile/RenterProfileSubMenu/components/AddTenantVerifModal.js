import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Divider, InputAdornment, TextField, MenuItem } from '@mui/material';
import DividerVertical from '../../../../components/DividerVertical';
import { DescriptionOutlined, DoDisturbOnOutlined, FileUploadOutlined } from '@mui/icons-material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      maxWidth: '450px',
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

export default function AddTenantVerifModal(props) {
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
          <Typography fontSize={"20px"} fontWeight={"700"}>1form Tenant Verification report</Typography>
        </BootstrapDialogTitle>
        <DialogContent
         dividers sx={{
                px: '1rem !important',
            }}>
          <div className=''>
              <div className=''>
                  <div className='mb-4'>
                      <Typography gutterBottom display={"block"} className='mb-4'>If you have previously purchased a <a href='/rent/rental-applications' target='_blank' style={{ textDecoration: "none" }}>realestate.com.au Tenant Verification</a> report through 1form, you can upload it here instead of a Tenant Check. Make sure your report is still valid.</Typography>
                      <div className="mb-3">
                          <div className="bg-content-detail mb-2 w-100" style={{ borderRadius: "10px" }}>
                              <div className="d-flex justify-content-between align-items-center px-3 py-2">
                                  <div className="d-flex align-items-center" style={{ fontWeight: "600" }}>
                                      <DescriptionOutlined fontSize="small" />&nbsp; file-1
                                  </div>
                                  <div className="pointer" style={{color: "#A8420D", fontSize: "14px"}}>
                                      Delete <DoDisturbOnOutlined fontSize="small" />
                                  </div>
                              </div>
                          </div>
                          <div className="bg-content-detail mb-2 w-100" style={{ borderRadius: "10px" }}>
                              <div className="d-flex justify-content-between align-items-center px-3 py-2">
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
                        <button className="btn btn-outline-secondary w-100 p-2 d-flex justify-content-center align-items-center">
                            <FileUploadOutlined />  <Typography fontSize={"14px"}>Upload a file</Typography>
                        </button>
                      </div>
                      <Typography fontSize={"12px"} display={"block"} className='text-muted'>Max. 10MB - GIF, JPG, JPEG, PNG, HEIC, PDF</Typography>
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