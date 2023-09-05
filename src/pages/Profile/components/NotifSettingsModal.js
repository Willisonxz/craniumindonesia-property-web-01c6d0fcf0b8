import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Divider, FormControlLabel, MenuItem, Switch } from '@mui/material';
import { PhoneAndroidOutlined } from '@mui/icons-material';
import hp from '../assets/hp.svg'
import DividerHorizontal from '../../../components/DividerHorizontal';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      maxWidth: '400px',
      minHeight: '200px',
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, px: 4, pt: 3, pb: 1, maxWidth: '400px' }} display={"flex"} justifyContent={"space-between"} alignItems={"start"} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              p: 0,
              ml: 2,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon fontSize='large' />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  const NotifSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
      width: 50,
      height: 32,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: '#39393D',
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: '#39393D',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color:
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 28,
        height: 28,
      },
      '& .MuiSwitch-track': {
        borderRadius: 32 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
          duration: 500,
        }),
      },
    }));

export default function NotifSettingsModal(props) {
  const { onClose, open, showEmail, showPush, showManageSavedSearches, title, desc } = props;

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
          <Typography fontSize={"24px"} fontWeight={"700"}>{title}</Typography>
        </BootstrapDialogTitle>
        <DialogContent sx={{ pt: 0, mb: 5 }}>
          <div className='px-3'>
            <Typography paddingRight={"3.5rem"}>{desc}</Typography>
          </div>
          {showEmail && <div className='px-3 pt-5'>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <EmailOutlinedIcon style={{fontSize: "22px"}} className="me-2" />
                <Typography fontSize={"16px"} fontWeight={"600"}>Email</Typography>
              </div>
              <div>
                <FormControlLabel
                  control={<NotifSwitch defaultChecked />}
                  label=""
                />
              </div>
            </div>
          </div>}
          {showPush && <div className='px-3 pt-5'>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <PhoneAndroidOutlined style={{fontSize: "22px"}} className="me-2" />
                <div>
                  <Typography fontSize={"16px"} fontWeight={"600"} className='text-muted'>Push</Typography>
                  <Typography fontSize={"12px"}>Download the app for push notifications</Typography>
                </div>
              </div>
            </div>
          </div>}
          {showManageSavedSearches && <div>
            <div className='py-4'>
              <hr></hr>
            </div>
            <div className='px-3'>
              <Typography>Manage individual saved searches <a href='' target='_blank'>here</a></Typography>
            </div>
          </div>}
        </DialogContent>
        {showEmail && <>
          <Divider />
          <div className="w-100 align-items-center p-2">
              <button className='btn btn-info my-2 text-white w-100' onClick={() => handleClose()} style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>Save</button>
          </div>
        </>}
      </BootstrapDialog>
  );
}