import React from 'react';
import HeaderComponentNotSettle from '../../../../../components/HeaderComponentNotSettle';
import Footer from '../../../../../components/Footer';
import { ChevronLeft, Circle, Edit, Update } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import placeholderImage from '../../../../../assets/property_placeholder.png';
import bedIcon from '../../../../../assets/icons/bed.png';
import bathroomIcon from '../../../../../assets/icons/bathroom.png';
import carsIcon from '../../../../../assets/icons/cars.png';
import lockIcon from '../../../../../assets/icons/lock.png';
import landSize from '../../../../../assets/icons/land_size.png';
import floorArea from '../../../../../assets/icons/floor_area.png';
import house from '../../../../../assets/icons/house.png';
import { NavLink } from 'react-router-dom';
import NavbarAfterLogin from '../../../components/NavbarAfterLogin';
import '../../assets/track_property.css'

const dummyPropertyData = {
  name: 'Lot 1 Dwan Lane, Bony Mountain',
  bedrooms: '3',
  bathrooms: '1',
  carSpaces: '1',
  landSize: '275,90',
  propertyType: 'House',
  floorArea: '120,20',
};

function TrackYourPropertyDetails(props) {
  return (
    <Box className="bg-white">
      <NavbarAfterLogin />

      {/* Top Header Contents */}
      <Box sx={{
        borderBottom: 1,
        borderColor: 'divider',
      }}>
        <Box className='box-content-profile-2'>
          <div className="mt-3">
            <NavLink to="/property/my-property" style={{ textDecoration: 'none' }}><Typography fontSize={"14px"}><ChevronLeft></ChevronLeft>Back to My Properties</Typography></NavLink>
          </div>
          <div className='row pt-4 pb-5'>
            <div className='col-12 col-md-3'>
              <Box display='flex' justifyContent='center'>
                <img className='img-property-details' src={placeholderImage} alt='property-placeholder' />
              </Box>
            </div>
            <div className='col-12 col-md-9'>
              <Box pl='1rem'>
                <Typography fontSize={"34px"}>{dummyPropertyData.name}</Typography>
                <Box display='flex' alignItems='center' className="icons-group">
                  <img style={{ width: '16px', height: '16px' }} src={bedIcon} alt="feature" /> <Box display='inline' mx='12px'>-</Box>
                  <img style={{ width: '16px', height: '16px' }} src={bathroomIcon} alt="feature" /> <Box display='inline' mx='12px'>-</Box>
                  <img style={{ width: '16px', height: '16px' }} src={carsIcon} alt="feature" /> <Box display='inline' mx='12px'>-</Box>
                  <Box display='flex' alignItems='center' className='pointer text-link'><Edit fontSize='14px' sx={{ mr: '5px' }} /> Update</Box>
                </Box>
                <Box display='flex' alignItems='center' sx={{ mt: '10px' }}>
                  <img src={lockIcon} style={{ marginRight: '0.75rem' }} />
                  <Typography fontSize={"14px"}>Private owner view</Typography>
                </Box>
              </Box>
            </div>
          </div>
        </Box>
      </Box>


      {/* Property details content */}
      <Box className='bg-content-detail py-5'>
        <Box className='box-content-profile-2'>
          <div className="p-5 rounded-3 bg-white">
            <Box display='flex' justifyContent='center' flexDirection='row'>
              <div className='flex-grow-1 text-center'>
                <Typography className='text-muted' variant='h5'>$-</Typography>
                Low range
              </div>

              <div className='flex-grow-1 text-center'>
                <Typography variant='h4'>$-</Typography>
                <span className="badge bg-light text-secondary">
                  <Circle fontSize='5px' sx={{ height: '10px' }} color='grey' />No Estimate</span>
              </div>

              <div className='flex-grow-1 text-center'>
                <Typography className='text-muted' variant='h5'>$-</Typography>
                High range
              </div>
            </Box>
            <Typography mt='1.5rem' display='block' variant='caption' textAlign='center'>Sorry, there isn't enough property value information available at this time.</Typography>
            <Divider sx={{ my: '3rem' }} />
            <div className='row px-md-5'>
              <div className='col-12 col-sm-6 my-2'>
                <img style={{ height: '1.5rem' }} src={bedIcon} alt='features' /> Bedrooms: {dummyPropertyData.bedrooms || '-'}
              </div>
              <div className='col-12 col-sm-6 my-2'>
                <img style={{ height: '1.5rem' }} src={bathroomIcon} alt='features' /> Bathrooms: {dummyPropertyData.bathrooms || '-'}
              </div>
              <div className='col-12 col-sm-6 my-2'>
                <img style={{ height: '1.5rem' }} src={carsIcon} alt='features' /> Car spaces: {dummyPropertyData.carSpaces || '-'}
              </div>
              <div className='col-12 col-sm-6 my-2'>
                <img style={{ height: '1.5rem' }} src={landSize} alt='features' /> Land size: {dummyPropertyData.landSize || '-'}
              </div>
              <div className='col-12 col-sm-6 my-2'>
                <img style={{ height: '1.5rem' }} src={house} alt='features' /> Property type: {dummyPropertyData.propertyType || '-'}
              </div>
              <div className='col-12 col-sm-6 my-2'>
                <img style={{ height: '1.5rem' }} src={floorArea} alt='features' /> Floor area: {dummyPropertyData.floorArea || '-'}
              </div>
            </div>
          </div>

          {/* Median */}
          <Box className="row mt-5 p-3 p-sm-5 rounded-3 bg-white">
            <Box className='col-12 col-sm-6' py='1rem' pr='1.5rem'>
              <Box display='flex'>
                <Box>
                  <Typography mb='1rem' display='block' variant='h5'>Median days on market</Typography>
                  <Typography mb='1rem' display='block'>Based on last 12 months</Typography>
                  <Typography mb='1rem' display='block' variant='h3'>$-</Typography>
                  <Typography mb='1rem' display='block'>
                    Sorry, there's no data available for Median sale price right now.
                  </Typography>
                </Box>
                <Box className='d-none d-sm-block' ml='auto' width='1px' borderRight='1px solid lightgrey' />
              </Box>

            </Box>

            <Box className='col-12 d-block d-sm-none w-100' borderBottom='1px solid lightgrey' />

            <Box className='col-12 col-sm-6 p-3 px-sm-5'>
              <Typography mb='1rem' display='block' variant='h5'>Median sale price</Typography>
              <Typography mb='1rem' display='block'>Based on last 12 months</Typography>
              <Typography mb='1rem' display='block' variant='h4'>- days</Typography>
              <Typography mb='1rem' display='block'>
                Sorry, there's no data available for Median days on market right now.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default TrackYourPropertyDetails;