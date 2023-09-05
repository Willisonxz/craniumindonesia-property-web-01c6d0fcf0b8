import React from 'react';
import { ChevronLeft, InfoOutlined } from '@mui/icons-material';
import { Box, Tooltip, Typography, useMediaQuery } from '@mui/material';
import Maps from '../NewHomes/components/Maps';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NavbarAfterLogin from '../Profile/components/NavbarAfterLogin';
import { NavLink, useNavigate } from 'react-router-dom';
import RoutesPage from '../../Routes';
import SavedPropertyItemCard from './components/SavedPropertyItemCard';


function CollectionDetail(props) {
  const isDesktop = useMediaQuery('(min-width:768px)');

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: '#F6F5F7',
        height: '100vh',
        overflow: 'hidden',
      }}>
      <NavbarAfterLogin />
      <Box className='row' sx={{ flexDirection: isDesktop ? 'row' : 'column-reverse' }}>
        <Box className={`col-12 col-md-5 col-xl-4 ${isDesktop ? 'ps-5' : 'px-4'}`}
          sx={{ height: `calc(${isDesktop ? '100vh' : '65vh'} - 80px)`, overflow: 'scroll' }}>
          <Box sx={{ my:3 }}>
              <NavLink to="/collections/saved-properties" style={{textDecoration: 'none'}}><Typography fontSize={"14px"}><ChevronLeft></ChevronLeft>Back to Collections</Typography></NavLink>
          </Box>
          <Box display='flex' justifyContent='space-between' alignItems='center' marginBottom='0.5rem'>
            <Typography fontSize='2rem' fontWeight='600' variant='h4'>
              My Saved Properties
            </Typography>
            <Tooltip placement="bottom-end" title={<span>Collections help organise your favorite properties. Tap the star of any property to add it to a Collection.<br /><br />If a property is removed of our site, it will no longer show in your Collections</span>}>
                <InfoOutlined />
            </Tooltip>
          </Box>
          <FormControl sx={{
            '.MuiInputBase-root.MuiOutlinedInput-root': { borderRadius: '1.5rem' },
            m: 1, minWidth: 120
          }} size="small">
            <InputLabel id="demo-select-small-label">Filter</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age">
              <MenuItem value=""><em>All</em></MenuItem>
              <MenuItem value={'Buy'}>Buy</MenuItem>
              <MenuItem value={'Rent'}>Rent</MenuItem>
              <MenuItem value={'Sold'}>Sold</MenuItem>
            </Select>
          </FormControl>
          <Box>
            {[{}, {}, {}, {}, {}, {}].map(() => <Box className='ps-0 py-3'><SavedPropertyItemCard /></Box>)}
          </Box>
        </Box>
        <Box sx={{
          height: isDesktop ? '100vh' : '35vh',
          overflow: isDesktop ? 'unset' : 'hidden'
        }} className='col-12 col-md-7 col-xl-8'>
          <Box position='relative'>
            <Maps style={{ height: '100vh', top: 0, marginTop: 0 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CollectionDetail;