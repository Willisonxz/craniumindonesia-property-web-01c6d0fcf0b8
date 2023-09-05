import React, { useState } from 'react'
import '../../styles/new-homes.css'
import NavbarNewHomes from './components/NavbarNewHomes'
import ImageViewer from 'react-simple-image-viewer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { branchExample, detailExample, bannerNewApartment, bannerNewBuilder, completedDevelopmentExample, avatarExample, listSample, bannerBrandSide } from './assets'
import { useMediaQuery, Box, Container, Fab, Avatar, Grid, Link, Typography, Card, CardContent, Button, CardMedia, Chip, Divider, Accordion, AccordionSummary, AccordionDetails, FormControl, InputAdornment, TextField, Tab, Tabs, Table, TableContainer, Paper, TableCell, TableRow, TableBody, FormControlLabel, Checkbox, FormGroup, Select, MenuItem, Radio, RadioGroup, Tooltip, ImageList, ImageListItem, InputLabel } from '@mui/material'
import { CameraAlt, IosShare, StarOutline, ChatBubbleOutline, Home, Apartment, KeyboardArrowUp, KeyboardArrowRight, KeyboardArrowDown, ExpandMore, Article, Email, Launch, Bed, Bathtub, DirectionsCar, Straighten, Info } from '@mui/icons-material'
import 'swiper/css';
import 'swiper/css/navigation';
import { BedIcon, CarIcon, BathtubIcon, HouseSizeIcon, AreaSizeIcon, SizeIcon, DownloadIcon, ToiletIcon } from '../../assets/icons'
import { Navigation } from 'swiper/modules';
import Footer from '../../components/Footer'
import QuickSearch from '../../components/QuickSearch'

export default function DetailNewHomesAndLand(props) {
  const [ id_project ]            = useState(window.location.href.split('/').pop())
  const [ openMenu, setOpenMenu ] = useState(false)
  const [ open, setOpen ]           = useState(false)
  const [ currentImage, setCurrentImage ] = useState(0)
  const [ openImage, setOpenImage ] = useState(false)
  const [ images ]                = useState([detailExample, bannerNewApartment, bannerNewBuilder, bannerNewApartment])
  const [ isExpandAccordion, setIsExpandAccordion ]     = useState(false)
  const [ completedDevelopments ] = useState([1,2,3,4])
  const [ listProperties ]        = useState([1,2,3])
  const [ facilities ]            = useState(
  {
    primary: [
      {
        facility: 'Sunshine Beach State School',
        tab: 'primary',
        type: 'Goverment',
        distance: '1.81km'
      },
      {
        facility: 'Sunshine Beach State School',
        tab: 'primary',
        type: 'Goverment',
        distance: '1.81km'
      },
      {
        facility: 'Sunshine Beach State School',
        tab: 'primary',
        type: 'Goverment',
        distance: '1.81km'
      }
    ],
    secondary: [
      {
        facility: 'Sunshine',
        tab: 'primary',
        type: 'Goverment',
        distance: '1.81km'
      },
      {
        facility: 'Sunshine',
        tab: 'primary',
        type: 'Goverment',
        distance: '1.81km'
      },
      {
        facility: 'Sunshine',
        tab: 'primary',
        type: 'Goverment',
        distance: '1.81km'
      }
    ],
    child_care: [
      {
        facility: 'Sunshine',
        tab: 'primary',
        type: 'Goverment',
        distance: '1.81km'
      },
      {
        facility: 'Sunshine',
        tab: 'primary',
        type: 'Goverment',
        distance: '1.81km'
      },
      {
        facility: 'Sunshine',
        tab: 'primary',
        type: 'Goverment',
        distance: '1.81km'
      }
    ]
  })
  const [ faqs ] = useState([
    {
      title: 'How many properties does Tallow Residences Apartments offer?',
      content: 'There are 22 properties in Tallow Residences Apartments.'
    },
    {
      title: 'How many bedrooms and bathrooms does Tallow Residences Apartments offer?',
      content: 'Tallow Residences Apartments has properties with 3 bedrooms, 2 bathrooms.'
    },
    {
      title: 'Does Tallow Residences Apartments have a swimming pool?',
      content: 'Yes, Tallow Residences Apartments offers a swimming pool for its residents.'
    }
  ])
  const [ currentFacilitiesTab, setCurrentFacilitiesTab ] = useState('primary')
  const [ readDescription, setReadDescription ]           = useState(false)

  const mobileSize = useMediaQuery('(max-width: 700px)')

  const openAndCloseAccordion = (panel) => (event, isExpanded) => {
    setIsExpandAccordion(isExpanded ? panel : false);
  };

  const handleReadMoreAndLessDescription = () => {
    setReadDescription(!readDescription)
  }

  const openAndCloseListImage = () => {
    setOpenImage(!openImage)
  }

  const changeTabFacilities = (e, tab) => {
    setCurrentFacilitiesTab(tab)
  }

  const TabFacilities = (props) => {
    const { value, current, facilities } = props;
  
    return (
      <div>
        {value === current && (
          <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
            <Table sx={{ minWidth: 650, boxShadow: 'none' }} aria-label="simple table">
              <TableBody>
                {facilities.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{ fontWeight: 600, color: '#868389' }} component="th" scope="row">
                      {row.facility}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500, color: '#868389' }} align="right">{row.tab}</TableCell>
                    <TableCell sx={{ fontWeight: 500, color: '#868389' }} align="right">{row.type}</TableCell>
                    <TableCell sx={{ fontWeight: 500, color: '#868389' }} align="right">{row.distance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    );
  }

  const handleMenuItem = () => {
    if (mobileSize) {
      setOpenMenu(!openMenu)
    } else {
      if (!open) {
        document.getElementById("navbar-menu-item").style.display = "block";
        document.getElementById("breadcrumbs-nav").style.top = '107px';
      } else {
        document.getElementById("navbar-menu-item").style.display = "none";
        document.getElementById("breadcrumbs-nav").style.top = '57px';
      }
      setOpen(!open)
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const openListImage = (e) => {
    if (typeof e.target.alt !== "undefined") {
      setOpenImage(!openImage)
      setCurrentImage(+e.target.value)
    } else {
      setOpenImage(!openImage)
      setCurrentImage(+e.target.value)
    }
  }

  const closeListImage = (e) => {
    setOpenImage(!openImage)
  }

  return (
    <>
      <NavbarNewHomes open={open} openMenu={openMenu} handleOpenMenu={handleOpenMenu} handleMenuItem={handleMenuItem} display={openImage} route={props.route} id_project={id_project}/>
      <Box sx={{
        backgroundColor: '#F6F5F7'
      }}>
        <Container sx={{ display: mobileSize ? 'none' : 'block' }}>
          <ImageList
            cols={4}
            sx={{ overflow: 'hidden', cursor: 'pointer', marginTop: '110px' }}
            onClick={openListImage}
          >
            <ImageListItem cols={3} rows={3}>
              <img src={images[0]} alt="0" />
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
              <img src={images[1]} alt="1" />
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
              <img src={images[2]} alt="2" />z``
            </ImageListItem>
            <ImageListItem cols={1} rows={1} sx={{ position: 'relative' }}>
              <Box sx={{ width: '100%', height: '100%', backgroundColor: 'black', position: 'absolute', opacity: '0.5' }}>
              </Box>
              <Typography sx={{ width: '100%', height: '100%', position: 'absolute', left: '45%', top: '40%', fontSize: '28px', color: 'white', fontWeight: 700 }}>2+</Typography>
              <img src={images[0]} alt="image4" />
            </ImageListItem>
          </ImageList>
        </Container>
        <Container sx={{ position: 'relative', display: mobileSize ? 'block' : 'none', marginTop: '107px' }}>
          <img src={detailExample} alt="detail image" width="100%"/>
          {/* web size bottom 30px left 25vw */}
          <Fab variant='extended' sx={{ position: 'absolute', bottom: mobileSize ? '20px' : '30px', left: '40%', zIndex: 0, width: mobileSize ? '65px' : '155px', height: '40px' }} onClick={openAndCloseListImage}>
            <CameraAlt/>
            <Typography sx={{ marginLeft: '5px', width: '100px' }}>
              5 {mobileSize ? "" : "Images"}
            </Typography>
          </Fab>
          {openImage && (
            <ImageViewer
              src={images}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={openAndCloseListImage}
            />
          )}
        </Container>
        {openImage && (
          <ImageViewer
            src={images}
            disableScroll={false}
            closeOnClickOutside={true}
            currentIndex={currentImage}
            onClose={closeListImage}
          />
        )}
      </Box>
      <Box sx={{ marginTop: '24px', minHeight: '2500px' }}>
        <Container>
          <Grid sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '50px' }}>
            <Grid item lg={mobileSize ? 12 : 8} sx={{ width: mobileSize ? '100%' : '90%' }}>
              <Typography sx={{
                  fontSize: '24px',
                  fontWeight: 600,
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: mobileSize ? '400px' : '90%',
                  marginLeft: mobileSize ? '-55px' : '0px'
                }}
              >
                Lot 1 Riverview Dr, Paradise, SA 5075
                <Box sx={{ display: 'flex', alignContent: 'center' }}>
                  <IosShare sx={{ marginRight: '10px', fontSize: '25px' }}/>
                  <StarOutline sx={{ fontSize: '25px' }}/> 
                </Box> 
              </Typography>
              <Box sx={{ display: 'flex', alignContent: 'center', marginTop: '10px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
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
              <hr style={{ width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px', marginTop: '15px' }}/>
              {/* Maps */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35483.602388181636!2d112.9730386860465!3d-7.9433246201062735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sGn.%20Bromo!5e0!3m2!1sid!2sid!4v1690248058390!5m2!1sid!2sid"  height="300px" style={{ border: 0, marginTop: '10px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <hr style={{ width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px', marginTop: '15px' }}/>
              {/* Property Description */}
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Typography component='h1' variant='h5' fontWeight={700}>Paradise - Home And Land Package</Typography>
                <Typography textTransform='uppercase' component='p' fontSize='12px' fontWeight={600} marginTop='20px' color='#868389'>Lot 1 Riverview Dr, Paradise</Typography>
                <Box sx={{ height: readDescription ? '100%' : '200px', overflowY: readDescription ? 'none' : 'hidden' }}>
                  <ul style={{ width: '90%', marginLeft: mobileSize ? '-20px' : '-30px' }}>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Surrounded by parklands and situated in a maintenance-free, botanical garden setting</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Exclusive amenities await with a resort-like swimming pool, beautiful private dining room, wine storage, library and elevated community garden</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>SA choice of spacious 1, 2 and 3 bedroom architecturally designed apartments</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Residents will enjoy a vibrant and active edge-of-city lifestyle within walking distance of Adelaide’s most desirable restaurants, cafes, fashion stores, shops and supermarkets</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Benefit from lifestyle concierge services including coordination of shopping, restaurant bookings, social gatherings, arts and event bookings, cleaning, pet care, dog walking and vehicle care and maintenance</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Meticulously finished apartments featuring generous balconies, stone benchtops, Smeg appliances, plus more</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Add your own personal touch with options including a choice of three colour scheme, a range of luxurious finishes, additional appliances, and flooring upgrades</li>
                  </ul>
                </Box>
                <Link onClick={handleReadMoreAndLessDescription} sx={{ display: 'flex', alignContent: 'center', cursor: 'pointer' }}>{readDescription ? 'Read less '  : 'Read more '}<KeyboardArrowUp sx={{ display: readDescription ? 'block' : 'none' }}/><KeyboardArrowDown sx={{ display: !readDescription ? 'block' : 'none' }}/></Link>
              </Box>
              <hr style={{ width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px', marginTop: '15px' }}/>
              {/* Property Features */}
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Typography variant='p' fontWeight={600} fontSize='20px'>Property features</Typography>
                <Grid container sx={{ marginTop: '20px' }}>
                  <Grid item xs={6}>
                    <Box display='flex' sx={{ color: '#868389', fontWeight: 600, alignItems: 'center' }}>
                      <img src={HouseSizeIcon} alt="bed-icon" style={{ width: '25px', height: '25px' }}/>
                      <Typography sx={{ fontSize: '16px', color: '#868389', fontWeight: 500, marginLeft: '15px' }}>Building size:</Typography>
                      <Typography sx={{ color: 'black', fontWeight: 600, marginLeft: '5px' }}>223 m²</Typography>
                    </Box>
                    <Box display='flex' sx={{ color: '#868389', fontWeight: 600, alignItems: 'center', marginTop: '20px' }}>
                      <img src={SizeIcon} alt="bed-icon" style={{ width: '25px', height: '25px' }}/>
                      <Typography sx={{ fontSize: '16px', color: '#868389', fontWeight: 500, marginLeft: '15px' }}>Land size:</Typography>
                      <Typography sx={{ color: 'black', fontWeight: 600, marginLeft: '5px' }}>223 m²</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display='flex' sx={{ color: '#868389', fontWeight: 600, alignItems: 'center' }}>
                      <img src={CarIcon} alt="bed-icon" style={{ width: '25px', height: '25px' }}/>
                      <Typography sx={{ fontSize: '16px', color: '#868389', fontWeight: 500, marginLeft: '15px' }}>Garage spaces:</Typography>
                      <Typography sx={{ color: 'black', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                    </Box>
                    <Box display='flex' sx={{ color: '#868389', fontWeight: 600, alignItems: 'center', marginTop: '20px' }}>
                      <img src={ToiletIcon} alt="bed-icon" style={{ width: '25px', height: '25px' }}/>
                      <Typography sx={{ fontSize: '16px', color: '#868389', fontWeight: 500, marginLeft: '15px' }}>Toilets:</Typography>
                      <Typography sx={{ color: 'black', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <hr style={{ width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px', marginTop: '15px' }}/>
              {/* Inspection */}
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Typography variant='p' fontWeight={600} fontSize='20px'>Inspection</Typography>
                <Typography sx={{ padding: '20px', border: '1px solid #E5E3E8', borderRadius: '10px', fontSize: '16px', marginTop: '20px' }}>
                  There are no upcoming inspections for this property. <Link fontSize='16px' fontWeight={700}>Contact the egent</Link> to see this place.
                </Typography>
                <Button variant='outlined' sx={{ borderColor: '#3D3B40', color: '#3D3B40', textTransform: 'none', fontWeight: 600, marginLeft: '10px', marginTop: '20px' }}>See my inspection plan</Button>
              </Box>
              <hr style={{ width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px', marginTop: '15px' }}/>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Card sx={{ borderRadius: '10px' }}>
                  <CardMedia 
                    sx={{ height: '57px', backgroundColor: 'black' }}
                  />
                  <CardContent >
                    <Typography variant='p' fontWeight={600} fontSize='20px'>Team behind Bloom</Typography>
                    <Typography sx={{ fontSize: '14px', color: '#868389', marginBottom: '10px' }}>
                      Leave your details below and we'll send you the following:
                    </Typography>
                    <Button disableTouchRipple color='inherit' startIcon={<Article/>} variant='outlined' sx={{  marginTop: '10px', textTransform: 'none', border: 'none', backgroundColor: '#F6F5F7', width: '190px', height: '50px' }}>Project Brochure</Button>
                  </CardContent>
                  <Divider light />
                  <CardContent>
                    <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                      <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>Name <span style={{ color: '#868389' }}>(required)</span></label>
                      <TextField
                        required
                        id="outlined-required"
                        placeholder='Enter your name'
                        sx={{ height: '48px !important' }}
                      />
                    </FormControl>
                    <Grid sx={{
                        display: 'flex'
                      }}
                      container
                    >
                      <Grid item xs={mobileSize ? 12 : 6} display='block'>
                        <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>Email <span style={{ color: '#868389' }}>(required)</span></label>
                        <TextField
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Email />
                              </InputAdornment>
                            ),
                          }}
                          id="outlined-required"
                          placeholder='Enter your email'
                          sx={{ width: mobileSize ? '100%' : '95%' }}
                          rows={4}
                        />
                      </Grid>
                      <Grid item xs={mobileSize ? 12 : 6} display='block' sx={{ marginTop: mobileSize ? '10px' : '0px' }}>
                        <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>Phone Number</label>
                        <TextField
                          required
                          id="outlined-required"
                          placeholder='Enter your phone number'
                          rows={4}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Divider light sx={{ marginTop: '20px' }}/>
                    <Box sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', alignContent: 'center', flexDirection: mobileSize ? 'column-reverse' : 'row'}}>
                      <Link sx={{ color: '#868389', marginTop: mobileSize ? '10px' : '0px' }}>Personal Information Collection Statement</Link>
                      <Button color='inherit' variant='contained' sx={{ width: mobileSize ? '100%' : '200px', backgroundColor: '#17C2ED', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: 'red' }, textTransform: 'none' }} fullWidth>Get information kit</Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }} id="maps">
                <Typography variant='p' fontWeight={600} fontSize='20px'>Bloom project</Typography>
                <Grid sx={{ marginTop: '20px', display: 'flex' }}>
                  <Grid item lg={6}>
                    <Box>
                      <Typography sx={{ fontSize: '12px', color: '#868389', letterSpacing: '2px', fontWeight: 600 }}>DISPLAY LOCATION</Typography>
                      <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#868389' }}>220 Fullarton Road, Glenside, SA 5065</Typography>
                      <Link sx={{ fontWeight: 600, display: 'flex', marginTop: '10px' }} underline='none'>Get direction<Launch/></Link>
                    </Box>
                  </Grid>
                  <Grid item lg={6} sx={{ marginLeft: '50px' }}>
                    <Box>
                      <Typography sx={{ fontSize: '12px', color: '#868389', letterSpacing: '2px', fontWeight: 600 }}>DISPLAY LOCATION</Typography>
                      <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#868389' }}>69 King William Street, Kent Town, SA 5067</Typography>
                      <Link sx={{ fontWeight: 600, display: 'flex', marginTop: '10px' }} underline='none'>Get direction<Launch/></Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
              <hr />
                <Typography sx={{ fontSize: '12px', color: '#868389', letterSpacing: '2px', fontWeight: 600, marginTop: '20px' }}>DISPLAY LOCATION</Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#868389' }}>69 King William Street, Kent Town, SA 5067</Typography>
                <Button color='inherit' variant='contained' sx={{ width: '250px', fontSize: '16px', backgroundColor: '#17C2ED', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: 'red' }, textTransform: 'none', marginTop: '20px' }} fullWidth>Request an appointment</Button>
              </Box>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }} id="properties">
                <hr />
                <Typography variant='p' fontWeight={600} fontSize='20px'>Properties in Bloom</Typography>
                <Typography sx={{ marginTop: '20px', fontSize: '16px' }}>Showing all properties in this development</Typography>
                {listProperties.map(d => (
                  <><Grid sx={{ marginTop: '10px', display: 'flex'}}>
                    <Grid item>
                      <Swiper loop={true} navigation={true} modules={[Navigation]} style={{ width: mobileSize ? '400px' : '265px', height: '195px', zIndex: '0' }}>
                        <SwiperSlide><img src={detailExample} alt="" width={mobileSize ? "400px" : "265px"} height="195px" /></SwiperSlide>
                        <SwiperSlide><img src={listSample} alt="" width={mobileSize ? "400px" : "265px"} height="195px" /></SwiperSlide>
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
                          <Link href="" underline='none' sx={{ color: '#868398', display: 'flex', marginTop: '5px' }}>Details <KeyboardArrowRight /></Link>
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
                          <Link href="" underline='none' sx={{ color: '#868398', display: 'flex', marginTop: '5px' }}>Details <KeyboardArrowRight /></Link>
                        </Box>
                      </Container>
                    </Grid>
                  </Grid><Divider light sx={{ marginTop: '10px' }} /></>
                ))}
              </Box>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Typography variant='p' fontWeight={600} fontSize='20px'>Nearby schools & child care</Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs indicatorColor='red' value={currentFacilitiesTab} onChange={changeTabFacilities} aria-label="basic tabs example">
                    <Tab label="Primary" value='primary' sx={{ textTransform: 'none' }}/>
                    <Tab label="Secondary" value='secondary' sx={{ textTransform: 'none' }}/>
                    <Tab label="Child care" value='child_care' sx={{ textTransform: 'none' }}/>
                  </Tabs>
                  <TabFacilities value='primary' current={currentFacilitiesTab} facilities={facilities.primary}/>
                  <TabFacilities value='secondary' current={currentFacilitiesTab} facilities={facilities.secondary}/>
                  <TabFacilities value='child_care' current={currentFacilitiesTab} facilities={facilities.child_care}/>
                </Box>
              </Box>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Typography variant='p' fontWeight={700} fontSize='20px' sx={{ marginBottom: '20px' }}>FAQs about Tallow Residences Apartments</Typography>
                {faqs.map((d, i) => (
                  <Accordion sx={{ boxShadow: 'none' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1a-content"
                      id={"panel1a-header-"+i}
                    >
                      <Typography fontWeight={600}>{d.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {d.content}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
            <Grid item lg={4} sx={{ display: mobileSize ? 'none' : 'block' }}>
              <Card sx={{ width: '300px', borderRadius: '10px', position: 'sticky', top: '20px', zIndex: '0' }}>
                <CardMedia 
                  image={branchExample}
                  sx={{ height: '35px', backgroundColor: 'black' }}
                />
                <CardContent >
                  <Grid container sx={{ display: 'flex' }}>
                    <Grid item>
                      <Avatar sx={{ width: '50px', height: '50px' }} src="/broken-image.jpg" />
                    </Grid>
                    <Grid item sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', alignItems: 'center' }}>
                      <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 600 }} component="p">
                        Get in touch 
                      </Typography>
                      <Chip label='0812 9878 9399' variant='outlined' />
                    </Grid>
                  </Grid>
                  <Divider light sx={{ marginY: '20px' }}/>
                  <Button color='inherit' variant='contained' sx={{ backgroundColor: 'red', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: 'red' }, textTransform: 'none' }} fullWidth>Get in touch</Button>
                  <Button color='inherit' startIcon={<StarOutline/>} variant='outlined' sx={{  marginTop: '10px', textTransform: 'none' }} fullWidth>Save property</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: '#F6F5F7', width: '100%', marginTop: '20px', paddingY: '20px ' }}>
        <Container >
          <Grid sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '50px' }}>
            <Grid item lg={mobileSize ? 12 : 8} id="contact">
              <Box sx={{ width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Card sx={{ borderRadius: '10px' }}>
                  <CardMedia 
                    sx={{ height: '57px', backgroundColor: 'black' }}
                  />
                  <CardContent>
                    <Typography variant='p' fontWeight={600} fontSize='20px'>Get in touch with a consultant to discuss Tallow Residences today.</Typography>
                    <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 600, marginTop: '20px' }} >
                      Get in touch with a consultant today.
                    </Typography>
                    <Chip label='0812 9878 9399' variant='outlined'/><br/>
                    <Grid container sx={{ marginTop: '20px' }}>
                      <Grid item xs={2}>
                        <img src={detailExample} alt="home" style={{ width: '100px', height: '75px' }}/>
                      </Grid>
                      <Grid item xs={8} sx={{ marginLeft: mobileSize ? '50px' : '0px' }}>
                        <Typography fontSize='16px' fontWeight={600}>61 Osborne Rd, North Haven, SA 5018</Typography>
                        <Typography fontSize='16px' fontWeight={600} marginTop='10px'>$575,000</Typography>
                      </Grid>
                    </Grid>
                    <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 600, marginTop: '20px' }} >
                      What's your enquiry about?
                    </Typography>
                    <Grid display={'flex'}>
                      <Grid item lg={6} >
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox name="gilad" />
                            }
                            label="Scheduling an inspection"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="gilad" />
                            }
                            label="Rates & Fees"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item lg={6} sx={{ marginLeft: '30px' }}>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox name="gilad" />
                            }
                            label="Price information"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="gilad" />
                            }
                            label="Similar properties"
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider light />
                  <CardContent>
                    <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                      <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>Name <span style={{ color: '#868389' }}>(required)</span></label>
                      <textarea name="message" id="" cols="30" rows="10"></textarea>
                    </FormControl>
                    <Grid container>
                      <Grid item lg={6}>
                        <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>Name<span style={{ color: '#868389' }}>(required)</span></label>
                        <TextField
                          required
                          id="outlined-required"
                          placeholder='Enter your name'
                          sx={{ width: mobileSize ? '100%' : '95%' }}
                          rows={4}
                        />
                      </Grid>
                      <Grid item lg={6} sx={{ marginLeft: 'auto', marginTop: mobileSize ? '10px' : '0px' }}>
                        <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>Email address<span style={{ color: '#868389' }}>(required)</span></label>
                        <TextField
                          required
                          id="outlined-required"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Email />
                              </InputAdornment>
                            ),
                          }}
                          placeholder='Enter your email'
                          rows={4}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid container sx={{ marginTop: mobileSize ? '10px' : '30px' }}>
                      <Grid item lg={6}>
                        <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>Phone number</label>
                        <TextField
                          required
                          id="outlined-required"
                          placeholder='Enter your phone number'
                          sx={{ width: mobileSize ? '100%' : '95%' }}
                        />
                      </Grid>
                      <Grid item lg={6} sx={{ marginLeft: 'auto', width: '100%', marginTop: mobileSize ? '10px' : '0px' }}>
                        <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>What are you looking to do?</label>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          value="Please select"
                          placeholder='Please select'
                          fullWidth
                          sx={{ display: 'block' }}
                        >
                          <MenuItem value="Buy but keep my current home">Buy but keep my current home</MenuItem>
                          <MenuItem value="Buy and live in my first home">Buy and live in my first home</MenuItem>
                          <MenuItem value="Buy an investment property">Buy an investment property</MenuItem>
                          <MenuItem value="Buy and sell property">Buy and sell property</MenuItem>
                          <MenuItem value="Monitor the market">Monitor the market</MenuItem>
                          <MenuItem value="Representing a client">Representing a client</MenuItem>
                          <MenuItem disabled value="Please select">Please select</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                    <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 600, marginTop: '20px', display: 'flex' }} >
                      Do you have finance pre-approval?
                      <Tooltip placement='top' sx={{ marginLeft: '5px', fontSize: '16px', cursor: 'pointer' }} title='Having finance pre-approval means you’ve gotten the thumbs up from your bank and you’re ready to make an offer.'>
                        <Info/>
                      </Tooltip>
                    </Typography>
                    
                    <RadioGroup
                      name='pre-approval'
                      row
                    >
                      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio />} label="No" />
                      <FormControlLabel value="no_say" control={<Radio />} label="Rather not say" />
                    </RadioGroup>
                    <Button color='inherit' variant='contained' sx={{ width: '100%', backgroundColor: '#17C2ED', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: 'red' }, textTransform: 'none', padding: '10px' }} fullWidth>Next step: property preferences</Button>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item lg={4} sx={{ display: mobileSize ? 'none' : 'block' }}>
              <img src={bannerBrandSide} alt="banner-side" width="300px" height="600px" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div className='quickSearch-section'>
        <QuickSearch />
      </div>

      <div className='footer-section'>
        <Footer />
      </div>
    </>
  )
}
