import { Edit, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

import defaultAgentImage from '../assets/agent-placeholder.png';
import defaultPropertyImage from '../assets/property-placeholder.png';
import '../assets/collections.css';
import bedroom from '../../../assets/icons/bed.png';
import bathroom from '../../../assets/icons/bathroom.png';
import cars from '../../../assets/icons/cars.png';

function SavedPropertyItemCard({
  name = 'Raine & Horne',
  type = 'House',
  department = 'Rental Department',
  price = 370,
  agentImg = '',
  propertyImg = '',
  formattedAddress = '5/27 Geach Road, Broadmeadows',
  facilities = { beds: 2, bathrooms: 1, cars: 1 } }) {
  return (
    <Box className='property-card'>
      <Box className='property-card-header'>
        {name}
        <Typography>{department}</Typography>
        <div className='property-agent-image'
          style={{ backgroundImage: `url(${agentImg || defaultAgentImage})` }} />
      </Box>
      <Box className='property-card-image'>
        <img src={propertyImg || defaultPropertyImage} />
      </Box>
      <Box className='property-card-content'>
        <Box className='property-card-title'>
          <Typography>${price || 0} per week</Typography>
          <Edit className='me-2' /> <Star className='star-icon' />
        </Box>
        <Typography
          marginBottom='1rem'
          color='#726E75'
          fontWeight='600'
          className='property-card-address'>{formattedAddress}</Typography>
        <Box className='property-card-facilities'>
          {facilities.beds && <div>
            <img src={bedroom} alt='features' />{facilities.beds}
          </div>}
          {facilities.bathrooms && <div>
            <img src={bathroom} alt='features' />{facilities.bathrooms}
          </div>}
          {facilities.cars && <div>
            <img src={cars} alt='features' />{facilities.cars}
          </div>}
        </Box>
      </Box>
    </Box>
  );
}

export default SavedPropertyItemCard;