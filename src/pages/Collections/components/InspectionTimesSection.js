import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import bedroom from '../../../assets/icons/bed.png';
import bathroom from '../../../assets/icons/bathroom.png';
import cars from '../../../assets/icons/cars.png';
import '../assets/collections.css';

import { TurnRight } from '@mui/icons-material';

const InspectionPropertyItem = ({ property, className, ...props }) => {
  const { facilities } = property;
  return (
    <Box className={`inspection-property-item property-card ${className}`}>
      <Box sx={{ display: 'flex', ...props.sx }}>
        <Box>
          <Typography sx={{ fontWeight: 600 }}>{property.type}</Typography>
          <Typography className='mt-2 mb-3'>{property.address}</Typography>
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
        <Box className='ms-auto property-image-container'
          sx={{ backgroundImage: `url(${property.propertyImg})` }}>
          <Box className='btn-control'>...</Box>
        </Box>
      </Box>
      <Divider sx={{ borderColor: 'rgba(188, 188, 188, 0.90)'}} className='my-3' />
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingRight: '1rem', cursor: 'pointer' }}>
        <TurnRight className='me-2' /> Get Direction
      </Box>
    </Box>)
}

export default function InspectionTimesSection(props) {
  const { inspectionsData } = props;
  if (!inspectionsData) {
    return <></>;
  }

  return (
    <>
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 600 }} variant="h5">My Plans</Typography>
      <Typography>{inspectionsData.total} {inspectionsData.total === 1 ? 'inspection' : 'inspections'}</Typography>

      {inspectionsData.inspectionTimes.map((inspectionTimeItem, index) => {
        return (
          <Box className="inspection-time-item">
            <Box className='inspection-time-header' display='flex' alignItems='center'>
              <Box className="inspection-number">{index + 1}</Box>
              <Typography fontSize='0.75rem' fontWeight='600'>{inspectionTimeItem.inspectionTime}</Typography>
            </Box>
            <Box sx={{ paddingLeft: '1rem' }} className='row'>
              {inspectionTimeItem.properties.map((property) => (<InspectionPropertyItem className="col-12 col-md-9 col-lg-7" property={property} />))}
            </Box>
          </Box>
        )
      })}
    </>
  );
}