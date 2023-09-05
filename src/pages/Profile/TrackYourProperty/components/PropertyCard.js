import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyPlaceholder from '../../../../assets/property_placeholder.png';
import { Edit } from '@mui/icons-material';
import RoutesPage from '../../../../Routes';

function PropertyCard({data = {}, sx, className}) {
  const { name='', address='', imgSrc='' } = data;
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 0, ...sx}} className={`card w-100 ${className}`}>
      <img src={imgSrc || PropertyPlaceholder} className="card-img-top" alt="property" />
      <Box className="card-body">
        <Box display='flex' justifyContent='space-between'>
          <Box>
            <Typography className="">{name}</Typography>
            <Typography variant='body2' className="text-muted">{address}</Typography>
          </Box>
          <Box className='text-link' display='flex' alignItems='center'>
            <Typography variant='body2' mr='0.5rem'>Edit</Typography><Edit fontSize='14px' />
          </Box>
        </Box>
        <Box mt='1rem'>
          <button className='btn w-100 btn-outline-secondary' onClick={() => navigate(RoutesPage.RouteProfileTrackYourPropertyDetails)}>View Property Data</button>
        </Box>
      </Box>
    </Box>
  );
}

export default PropertyCard;