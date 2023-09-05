import { Container, Box, Tabs, Tab, Grid, Typography, useMediaQuery, Link } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { fb, twt, pts, lk, yt } from '../../../assets/social-media'
import { Facebook, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material';

export default function FooterNewHomes(props) {
  const [value, setValue] = useState('new-apartment')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mobileSize = useMediaQuery('(max-width: 700px)')

  return (
    <>
      <div style={{ display: mobileSize ? 'block' : 'none', backgroundColor: props.background }}>
        <Container>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <Grid item>
              <a href="/"><Facebook sx={{ color: 'white' }}/></a>
            </Grid>
            <Grid item>
              <a href="/"><Twitter sx={{ color: 'white' }}/></a>
            </Grid>
            <Grid item>
              <a href="/"><Pinterest sx={{ color: 'white' }}/></a>
            </Grid>
            <Grid item>
              <a href="/"><LinkedIn sx={{ color: 'white' }}/></a>
            </Grid>
            <Grid item>
              <a href="/"><YouTube sx={{ color: 'white' }}/></a>
            </Grid>
          </Grid>
          <Grid container sx={{ paddingBottom: '20px' }}>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link underline='none' sx={{ color: 'white', marginBottom: '10px' }} href="">Advertise with us</Link>
              <Link underline='none' sx={{ color: 'white', marginBottom: '10px' }} href="">Agent admin</Link>
              <Link underline='none' sx={{ color: 'white', marginBottom: '10px' }} href="">Legal</Link>
              <Link underline='none' sx={{ color: 'white', marginBottom: '10px' }} href="">Site map</Link>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link underline='none' sx={{ color: 'white', marginBottom: '10px' }} href="">Contact us</Link>
              <Link underline='none' sx={{ color: 'white', marginBottom: '10px' }} href="">Media sales</Link>
              <Link underline='none' sx={{ color: 'white', marginBottom: '10px' }} href="">Privacy</Link>
              <Link underline='none' sx={{ color: 'white', marginBottom: '10px' }} href="">Careers</Link>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className='footer-new-homes' style={{ backgroundColor: props.background, display: mobileSize ? 'none' : 'block' }}>
        <Container>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="info"
              indicatorColor="primary"
              aria-label="secondary tabs example"
              variant='scrollable'
            >
              <Tab style={{ color: '#B5AEAE' }} value="new-apartment" label="New Apartments" />
              <Tab style={{ color: '#B5AEAE' }} value="new-land-estate" label="New Land Estates" />
              <Tab style={{ color: '#B5AEAE' }} value="house-and-land" label="House and Land" />
              <Tab style={{ color: '#B5AEAE' }} value="home-builder" label="Home Builders" />
              <Tab style={{ color: '#B5AEAE' }} value="home-designs" label="Home Designs" />
              <Tab style={{ color: '#B5AEAE' }} value="other-new-homes" label="Other New Homes" />
            </Tabs>
          </Box>
          <Grid container style={{padding: '3px'}}>
            <Grid className='grid-inner-footer' item display={'flex'} flexDirection="column">
              <NavLink to="/">NSW New Apartment</NavLink>
              <NavLink to="/">WA New Apartment</NavLink>
              <NavLink to="/">NT New Apartment</NavLink>
            </Grid>
            <Grid className='grid-inner-footer' item display={'flex'} flexDirection="column">
              <NavLink to="/">VIC New Apartment</NavLink>
              <NavLink to="/">SA New Apartment</NavLink>
              <NavLink to="/">TAS New Apartment</NavLink>
            </Grid>
            <Grid className='grid-inner-footer' item display={'flex'} flexDirection="column">
              <NavLink to="/">QLD New Apartment</NavLink>
              <NavLink to="/">ACT New Apartment</NavLink>
            </Grid>
          </Grid>
          <hr style={{color: '#B5AEAE'}}/>
          <Typography mt={2} color={'#B5AEAE'}>
            Search for New Homes on realestate.com.au. Choose the right new home to buy or invest in. We have a huge range in our <a href="/" className='a-with-decoration'>new apartment</a>, <a href="/" className='a-with-decoration'>new home design</a>, <a href="/" className='a-with-decoration'>house and land package</a>, <a href="/" className='a-with-decoration'>builder</a> and <a href="/" className='a-with-decoration'>land estate</a> sections so you can build your brand new house. Our range of builders and home designs mean that you can build a new home and find the right new house to suit your needs.We have a huge range of brand new home designs, new houses, new apartments and land available so that you can build your dream home. Search for builders and home designs so that you can find the right fit for a brand new house.
          </Typography>
        </Container>
      </div>
      <div className="social-media-footer" style={{ display: mobileSize ? 'none' : 'block' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid display={'flex'} flexDirection="row">
            <Grid className='social-media-icon'>
              <a href="/"><img src={fb} alt="" /></a>
            </Grid>
            <Grid className='social-media-icon'>
              <a href="/"><img src={twt} alt="" /></a>
            </Grid>
            <Grid className='social-media-icon'>
              <a href="/"><img src={pts} alt="" /></a>
            </Grid>
            <Grid className='social-media-icon'>
              <a href="/"><img src={lk} alt="" /></a>
            </Grid>
            <Grid className='social-media-icon'>
              <a href="/"><img src={yt} alt="" /></a>
            </Grid>
          </Grid>
          <Grid display={'flex'} flexDirection="row">
            <Grid className='social-media-link'>
              <a href="/">Advertise with us</a>
            </Grid>
            <Grid className='social-media-link'>
              <a href="/">Contact us</a>
            </Grid>
            <Grid className='social-media-link'>
              <a href="/">Agent admin</a>
            </Grid>
            <Grid className='social-media-link'>
              <a href="/">Media sales</a>
            </Grid>
            <Grid className='social-media-link'>
              <a href="/">Legal</a>
            </Grid>
            <Grid className='social-media-link'>
              <a href="/">Privacy</a>
            </Grid>
            <Grid className='social-media-link'>
              <a href="/">Site map</a>
            </Grid>
            <Grid className='social-media-link'>
              <a href="/">Careers</a>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}