import React, {useEffect, useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import RoutesPage from '../Routes';
import collection from "../assets/homepage/CollectionIcon.svg"
import { Button, Popover, Typography, Box, linkClasses } from '@mui/material';
import star from '../assets/star_logo.svg';
import calendar from '../assets/calendar_logo.svg';
import mail from '../assets/mail_logo.svg';
import block from '../assets/block_logo.svg';

export default function CollectionsDropdown() {
    const [collectionsOpen, setCollectionsOpen] = useState(false);
    const navigate = useNavigate();

    const path = window.location.pathname
    const check_path = (e) => {
        let color = "#726E75"
        if (e === path){
        color = "white"
        }
        return color
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handlePopoverClose = () => {
        setAnchorEl(null);
    }
    const handleClick = (event) => {
        if (!collectionsOpen) {
        handlePopoverOpen(event);
        } else {
        handlePopoverClose();
        }
        setCollectionsOpen(!collectionsOpen);
    }

    const handleClose = () => {
        setCollectionsOpen(false);
        handlePopoverClose()
    }

    const handleCollectionsClick = (path) => {
        navigate(path);
    }

    const DATA_COLLECTIONS = [
      {
        id: 1,
        title: "Saved properties",
        icon: star,
        linkUrl: "/collections/saved-properties"
      },
      {
        id: 2,
        title: "Planned inspections",
        icon: calendar,
        linkUrl: "/collections/planner"
      },
      {
        id: 3,
        title: "Enquired",
        icon: mail,
        linkUrl: "/collections/enquired"
      },
      {
        id: 4,
        title: "Hidden",
        icon: block,
        linkUrl: "/collections/hidden"
      }
  ]

    return (
        <>
          <div aria-describedby={'collections-popover'} variant="plain" onClick={handleClick} className='d-flex align-item-center'>
            <img src={collection} alt='' className='pointer mr-16' />
          </div>
          <Popover
            id={'collections-popover'}
            open={collectionsOpen}
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
            <Box sx={{ px:2, pt:2, pb:3 }}>
              <Typography fontSize={"20px"} fontWeight={"700"}>
                  Collections
              </Typography>
              {DATA_COLLECTIONS.map((item) =>
                <Box sx={{
                  '@media (max-width: 1128px)': {
                    width: '100%',
                  },
                  '@media (min-width: 1129px)': {
                    width: '210px',
                  },
                }}>
                  <div key={item.id} className='d-flex align-items-center pointer py-2' onClick={() => handleCollectionsClick(item.linkUrl)}>
                    <div className='p-2 justify-content-center'>
                      <img src={item.icon} />
                    </div>
                    <div className='p-2'>
                      <Typography>{item.title}</Typography>
                    </div>
                  </div>
                </Box>
              )}
            </Box>
          </Popover>
        </>
    )
}