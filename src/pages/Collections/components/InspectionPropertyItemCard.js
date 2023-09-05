import { Edit, EditOutlined, Star } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import defaultAgentImage from '../assets/agent-placeholder.png';
import defaultPropertyImage from '../assets/property-placeholder.png';
import '../assets/collections.css';
import bedroom from '../../../assets/icons/bed.png';
import bathroom from '../../../assets/icons/bathroom.png';
import cars from '../../../assets/icons/cars.png';

function InspectionPropertyItemCard({ property: {
  name = 'Raine & Horne',
  department = 'Rental Department',
  price = 370,
  agentImg = '',
  propertyImg = '',
  area,
  address = '5/27 Geach Road, Broadmeadows',
  facilities = { beds: 2, bathrooms: 1, cars: 1 } } }) {
  return (
    <Box className='property-card'>
      <Box className='property-card-header'>
        <Typography fontWeight={600} fontSize='1rem'>{name}</Typography>
        <Typography fontSize='14px'>{department}</Typography>
        <div className='property-agent-image'
          style={{ backgroundImage: `url(${agentImg || defaultAgentImage})` }} />
      </Box>
      <Box className='property-card-image'>
        <img src={propertyImg || defaultPropertyImage} />
      </Box>
      <Box className='property-card-content'>
        <Box className='property-card-title'>
          <Typography>${price || 0} per week</Typography>
          <Star className='star-icon' />
        </Box>
        <Typography className='property-card-address'>{area}</Typography>
        <Box display='flex' flexWrap='nowrap'>
          <Typography
            flexGrow='1'
            marginBottom='1rem'
            className='property-card-address'>{address}</Typography>
          {/* Facilities */}
          <Box>
            <Box className='property-card-facilities tight'>
              {facilities.beds && <Box display='flex' alignItems='center'>
                <img src={bedroom} alt='features' />{facilities.beds}
              </Box>}
              {facilities.bathrooms && <Box display='flex' alignItems='center'>
                <img src={bathroom} alt='features' />{facilities.bathrooms}
              </Box>}
              {facilities.cars && <Box display='flex' alignItems='center'>
                <img src={cars} alt='features' />{facilities.cars}
              </Box>}
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ borderColor: 'rgba(188, 188, 188)'}} />
      <Box className='pointer' display='flex' alignItems='center' sx={{ padding: '1rem' }}>
        <Typography className='text-muted' fontSize='14px' sx={{ marginLeft: 'auto', marginRight: '1rem' }}>Add Note</Typography>
        <EditOutlined className='text-muted' fontSize='14px' />
      </Box>
    </Box>
  );
}

export default InspectionPropertyItemCard;