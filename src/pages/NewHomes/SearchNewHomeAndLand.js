import React, { Component, useState } from 'react'
import HeaderNewHomesAndLand from './components/HeaderNewHomesAndLand'
import { Box, Container, Grid, Link, Typography, FormControl, Select, MenuItem, Card, Button, Pagination, CardContent, Divider, List, ListItem, useMediaQuery } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight, StarOutline } from '@mui/icons-material';
import { branchExample, listSample, detailExample } from './assets';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BedIcon, SizeIcon, BathtubIcon, CarIcon } from '../../assets/icons';
import Footer from '../../components/Footer'
import QuickSearch from '../../components/QuickSearch'

export default function SearchNewHomeAndLand(props) {
  // states
  const [ sort, setSort ] = useState('Most Relevant')
  const [ data ] = useState([1, 2, 3, 4, 5, 6])
  const mobileSize = useMediaQuery('(max-width: 700px)')

  // props
  const { route } = props;

  const changeFilterSort = (e) => {
    setSort(e.target.value)
  }

  return (
    <>
      <HeaderNewHomesAndLand menu={route}/>
      <Box sx={{ backgroundColor: '#F0F2F5', marginTop: '150px' }}>
        <Container sx={{ paddingTop: '30px' }}>
          <Link href={'/new-homes/'} className='back-to-new-homes' sx={{ textDecoration: 'none', color: '#697684' }}>
            <KeyboardArrowLeft /> Back to home page
          </Link>
          <Grid container>
            <Grid item lg={8}>
              <Typography sx={{ marginTop: '30px', color: '#505A63', fontWeight: 500 }}>New house and land packages for sale in Adelaide - Greater Region, SA</Typography>
              <Grid container sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid item>
                  <Typography sx={{ fontSize: '14px', color: '#697684' }}>1-25 of 1219 results</Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '14px', color: '#697684' }}>Sort:</Typography>
                  <FormControl sx={{ m: 1, }}>
                    <Select
                      id="demo-multiple-name"
                      value={sort}
                      onChange={changeFilterSort}
                      sx={{ width: '200px', height: '36px' }}
                      fullWidth
                    >
                      <MenuItem sx={{ color: '#868389' }} value="Most Relevant">Most Relevant</MenuItem>
                      <MenuItem sx={{ color: '#868389' }} value="Price (Highest - Lowest)">Price (Highest - Lowest)</MenuItem>
                      <MenuItem sx={{ color: '#868389' }} value="Price (Lowest - Highest)">Price (Lowest - Highest)</MenuItem>
                      <MenuItem sx={{ color: '#868389' }} value="Date (Newest - Oldest)">Date (Newest - Oldest)</MenuItem>
                      <MenuItem sx={{ color: '#868389' }} value="Date (Oldest - Newest)">Date (Oldest - Newest)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {data.map(d => (
                <Card sx={{ marginTop: '20px' }}>
                  <div style={{ height: '26px', background: '#000', display: 'flex', alignItems: 'center' }}>
                    <img src={branchExample} alt="brand" width='100px' />
                  </div>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <Grid sx={{ marginTop: '20px', display: 'flex'}}>
                        <Grid item>
                          <Swiper loop={true} navigation={true} modules={[Navigation]} style={{ width: mobileSize ? '350px' : '265px', height: '195px', zIndex: '0' }}>
                            <SwiperSlide><img src={detailExample} alt="" width={mobileSize ? "350px" : "265px"} height="195px" /></SwiperSlide>
                            <SwiperSlide><img src={listSample} alt="" width={mobileSize ? "350px" : "265px"} height="195px" /></SwiperSlide>
                          </Swiper>
                          <Container sx={{ marginTop: '10px', display: mobileSize ? 'block' : 'none' }}>
                            <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>$3,050,000</Typography>
                            <Typography sx={{ fontWeight: 700, fontSize: '16px', textOverflow: 'ellipsis', width: '300px', whiteSpace: 'nowrap', overflow: 'hidden', marginTop: '20px' }}>Elevated Serenity in the Heart of Noosa asdasd asd adsasdasd</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#868389', marginTop: '10px' }}>Apartment</Typography>
                            <Box sx={{ display: 'flex', alignContent: 'center', marginTop: '10px' }}>
                              <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                                <img src={BedIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }}/>
                                <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                              </Box>
                              <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                                <img src={BathtubIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }}/>
                                <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                              </Box>
                              <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                                <img src={CarIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }}/>
                                <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>1</Typography>
                              </Box>
                              <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                                <img src={SizeIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }}/>
                                <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>223 m²</Typography>
                              </Box>
                            </Box>
                            <Box sx={{ display: 'flex', marginTop: '5px', alignItems: 'center', float: 'right' }}>
                              <StarOutline sx={{ fontSize: '25px', color: '#868389', cursor: 'pointer' }} />
                              <Link href="/project/new-home-and-land/test" underline='none' sx={{ color: '#868398', display: 'flex', marginTop: '5px' }}>Details <KeyboardArrowRight /></Link>
                            </Box>
                          </Container>
                        </Grid>
                        <Grid item sx={{ display: mobileSize ? 'none' : 'block' }}>
                          <Container sx={{ marginTop: '10px' }}>
                            <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>$3,050,000</Typography>
                            <Typography sx={{ fontWeight: 700, fontSize: '16px', textOverflow: 'ellipsis', width: '300px', whiteSpace: 'nowrap', overflow: 'hidden', marginTop: '20px' }}>Elevated Serenity in the Heart of Noosa asdasd asd adsasdasd</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#868389', marginTop: '10px' }}>Apartment</Typography>
                            <Box sx={{ display: 'flex', alignContent: 'center', marginTop: '10px' }}>
                              <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                                <img src={BedIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }}/>
                                <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                              </Box>
                              <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                                <img src={BathtubIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }}/>
                                <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                              </Box>
                              <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                                <img src={CarIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }}/>
                                <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>1</Typography>
                              </Box>
                              <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                                <img src={SizeIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }}/>
                                <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>223 m²</Typography>
                              </Box>
                            </Box>
                            <Box sx={{ display: 'flex', marginTop: '5px', alignItems: 'center', float: 'right' }}>
                              <StarOutline sx={{ fontSize: '25px', color: '#868389', cursor: 'pointer' }} />
                              <Link href="/project/new-home-and-land/test" underline='none' sx={{ color: '#868398', display: 'flex', marginTop: '5px' }}>Details <KeyboardArrowRight /></Link>
                            </Box>
                          </Container>
                        </Grid>
                      </Grid>
                    </Typography>
                  </CardContent>
                </Card>
              ))}
              <Divider light sx={{ marginY: '20px' }}/>
              <Typography sx={{ marginY: '20px', color: '#726E75' }}>Viewing 1-12 of 12 builders</Typography>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button disabled variant='outlined' sx={{ width: '180px', padding: '10px', textTransform: 'none' }}><KeyboardArrowLeft /> Previous page</Button>
                <Button disabled variant='outlined' sx={{ width: '180px', padding: '10px', marginLeft: '20px', textTransform: 'none' }}>Next page <KeyboardArrowRight /></Button>
              </Box>
              <Divider light sx={{ marginY: '20px' }}/>
            </Grid>
            <Grid item xs={4} sx={{ position: 'absolute', left: '65%', display: mobileSize ? 'none' : 'block' }}>
              <Box sx={{ backgroundColor: 'white', width: '300px', padding: '25px' }}>
                <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                  Discover builders
                </Typography>
                <Typography sx={{ fontSize: '16px', color: '#868389' }}>
                  Adelaide - Greater Region, SA
                </Typography>
                <Divider light sx={{ marginTop: '10px' }}/>
                <List sx={{ marginTop: '20px' }}>
                  <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ width: '20px', height: '20px', backgroundColor: 'yellow', border: '1px solid #868389' }}></Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '16px', textOverflow: 'ellipsis', width: '200px', marginLeft: '10px', whiteSpace: 'nowrap', overflow: 'hidden'}}>Elevated Serenity in the Heart of Noosa asdasd asd adsasdasd</Typography>
                    </Box>
                    <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#868389' }} component={'p'}>Home designs</Typography>
                      <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '40px' }} component={'p'}>15</Typography>
                    </Box>
                  </ListItem>
                  <Divider light sx={{ marginTop: '10px' }}/>
                  <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ width: '20px', height: '20px', backgroundColor: 'red', border: '1px solid #868389' }}></Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '16px', textOverflow: 'ellipsis', width: '200px', marginLeft: '10px', whiteSpace: 'nowrap', overflow: 'hidden'}}>Elevated Serenity in the Heart of Noosa asdasd asd adsasdasd</Typography>
                    </Box>
                    <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#868389' }} component={'p'}>Home designs</Typography>
                      <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '40px' }} component={'p'}>15</Typography>
                    </Box>
                  </ListItem>
                  <Divider light sx={{ marginTop: '10px' }}/>
                  <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ width: '20px', height: '20px', backgroundColor: 'green', border: '1px solid #868389' }}></Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '16px', textOverflow: 'ellipsis', width: '200px', marginLeft: '10px', whiteSpace: 'nowrap', overflow: 'hidden'}}>Elevated Serenity in the Heart of Noosa asdasd asd adsasdasd</Typography>
                    </Box>
                    <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#868389' }} component={'p'}>Home designs</Typography>
                      <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '40px' }} component={'p'}>15</Typography>
                    </Box>
                  </ListItem>
                  <Divider light sx={{ marginTop: '10px' }}/>
                </List>
                <Button variant="outlined" color='info' sx={{ marginTop: '20px' }} fullWidth>Explore more builders</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <div className='quickSearch-section'>
          <QuickSearch />
        </div>

        <div className='footer-section'>
          <Footer />
        </div>
      </Box>
    </>
  )
}