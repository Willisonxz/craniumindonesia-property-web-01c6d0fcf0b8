import React from 'react';
import NavbarAfterLogin from '../../../components/NavbarAfterLogin';
import { Box, Typography } from '@mui/material';
import SearchProperties from '../../components/SearchProperties';
import PropertyImage from '../../../../../assets/house_red.png';
import PropertyCard from '../../components/PropertyCard';
import Footer from '../../../../../components/Footer';
import '../../../assets/profile.css';

function MyProperties() {
  return (
    <Box>
      <NavbarAfterLogin />

      <Box className='box-content-profile bg-white py-5'>
        <Box className='row'>
          <Box className='col-12 col-md-8'>
            <Typography className='mb-3' fontSize={"24px"}>Track another property</Typography>
            <SearchProperties btnLabel='Track Your Property' />
          </Box>
        </Box>
      </Box>

      {/* MY PROPERTIES SECTION */}
      <Box className='bg-grey'>
        <Box className='box-content-profile bg-grey py-5'>
          <Typography fontSize={"34px"}>
            My Properties
          </Typography>
          <Typography fontSize={"16px"}>Explore Cranium, supply and demand insights and market activity of places you own.</Typography>

          <Box className='row mt-3'>
            {[
              { name: 'Lot1 Dwan Lane', address: 'Bony Lane' },
              { name: 'Lot1 Dwan Lane', address: 'Bony Lane' },
              { name: 'Lot1 Dwan Lane', address: 'Bony Lane' },
            ].map((property) => <Box className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <PropertyCard sx={{ mb: '2rem' }} data={property} />
            </Box>)}
          </Box>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box className='box-content-profile py-5'>
        <Typography fontSize={"34px"}>Properties I'm interested in</Typography>
        <Typography fontSize={"16px"}>All the properties you're keeping an eye on, in one place.</Typography>

        <Box className='d-flex justify-content-center rounded-3 border border-lightgrey py-3 mt-5'>
          <img style={{ maxHeight: '75px' }} src={PropertyImage} alt='property' />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default MyProperties;