import React, {useEffect, useState} from 'react'
import "./assets/notifications.css";
import NotificationItem from "./components/NotificationItem";
import { Box, Button, Popover, Typography } from '@mui/material';
import notif from "../../assets/homepage/NotificationIcon.svg"
import { useNavigate } from 'react-router-dom';
import RoutesPage from '../../Routes';

export default function Notifications() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  
  // functions
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
  }
  const handlePopoverClose = () => {
      setAnchorEl(null);
  }
  const handleClick = (event) => {
      if (!notificationsOpen) {
      handlePopoverOpen(event);
      } else {
      handlePopoverClose();
      }
      setNotificationsOpen(!notificationsOpen);
  }

  const handleClose = () => {
      setNotificationsOpen(false);
      handlePopoverClose()
  }
  return (
      <>
        <div aria-describedby={'notifications-popover'} variant="plain" onClick={handleClick}>
          <img src={notif} alt='' className='pointer mr-16'/>
        </div>
        <Popover
          id={'notifications-popover'}
          open={notificationsOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box
            sx={{
              p: '1rem',
              '@media (max-width: 1128px)': {
                width: '100%',
              },
              '@media (min-width: 1129px)': {
                width: '450px',
              },
          }}>
            <div className='d-flex justify-content-between align-items-center'>
              <Typography fontSize={"20px"} fontWeight={"600"}>
                  Notifications
              </Typography>
              <div onClick={() => navigate(RoutesPage.RouteProfileAccountSettings)}>
                <Typography className='text-link' fontWeight={"700"}>Settings</Typography>
              </div>
            </div>
            <hr></hr>
            <NotificationItem />
          </Box>
        </Popover>
        {/* <NotificationItem /> */}
      </>
  )
}