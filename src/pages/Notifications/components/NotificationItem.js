import React from 'react';
import { useNavigate } from 'react-router-dom';
import websiteLogo from '../assets/img/website_logo.svg';
import { Typography } from '@mui/material';

const NotifItem = ({...props}) => {
    const {id, desc, time, type, linkUrl} = props.item;
    const navigate = useNavigate();

    const handleNotifClick = (path) => {
      navigate(path);
    }

    const iconType = {
      property: websiteLogo,
      social: websiteLogo
    }

    return (
      <>
        <div className='d-flex align-items-center pointer' onClick={() => handleNotifClick(linkUrl)}>
          <div className='px-3 py-2'>
            <img src={iconType[type]} />
          </div>
          <div className='p-2'>
            <Typography fontSize={"14px"}>{desc}</Typography>
            <Typography fontSize={"14px"} className='text-muted'>{time}</Typography>
          </div>
        </div>
        <hr></hr>
      </>
    )
}

export default function NotificationItem() {
    const DATA_NOTIFICATION_ITEM = [
        {
          id: 1,
          desc: "Recent sales are in for New South Wales",
          time: "Saturday",
          type: "property",
          linkUrl: "/"
        },
        {
          id: 2,
          desc: "Compare the previous sales, rating and reviews for the top agents in Darling Point.",
          time: "24 May",
          type: "social",
          linkUrl: "/me"
        },
        {
          id: 3,
          desc: "Recent sales are in for New South Wales",
          time: "Saturday",
          type: "property",
          linkUrl: "/"
        },
        {
          id: 4,
          desc: "Compare the previous sales, rating and reviews for the top agents in Darling Point.",
          time: "24 May",
          type: "social",
          linkUrl: "/me"
        }
    ]

    return (
        <>
          <div>
            {DATA_NOTIFICATION_ITEM.map((item) => {
              return <NotifItem key={item.id} item={item} />
            })}
          </div>
        </>
    )
}