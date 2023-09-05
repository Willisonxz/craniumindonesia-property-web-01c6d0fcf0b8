import React, { useState } from 'react'
import '../../styles/new-homes.css'
import NavbarNewHomes from './components/NavbarNewHomes'
import ImageViewer from 'react-simple-image-viewer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { branchExample, detailExample, bannerNewApartment, bannerNewBuilder, completedDevelopmentExample, avatarExample, listSample, bannerBrandSide } from './assets'
import { useMediaQuery, Box, Container, Fab, Avatar, Grid, Link, Typography, Card, CardContent, Button, CardMedia, Chip, Divider, Accordion, AccordionSummary, AccordionDetails, FormControl, InputAdornment, TextField, Tab, Tabs, Table, TableContainer, Paper, TableCell, TableRow, TableBody, FormControlLabel, Checkbox, FormGroup, Select, MenuItem, Radio, RadioGroup, Tooltip, ImageList, ImageListItem, InputLabel, AppBar, Breadcrumbs } from '@mui/material'
import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { CameraAlt, IosShare, StarOutline, ChatBubbleOutline, Home, Apartment, KeyboardArrowUp, KeyboardArrowRight, KeyboardArrowDown, ExpandMore, Article, Email, Launch, Bed, Bathtub, DirectionsCar, Straighten, Info } from '@mui/icons-material'
import 'swiper/css';
import 'swiper/css/navigation';
import { BedIcon, CarIcon, BathtubIcon, HouseSizeIcon, AreaSizeIcon, SizeIcon, DownloadIcon, ToiletIcon } from '../../assets/icons'
import { Navigation } from 'swiper/modules';
import FooterNewHomes from './components/FooterNewHomes'
import FontRoboto from '../../components/FontRoboto'
import DividerHorizontal from '../../components/DividerHorizontal'
import TableComponent from './TableComponent'
import Carousel from './Carousel'
import FooterSocialMedia from '../../components/FooterSocialMedia'
import RenovationEstimator from './RenovationEstimator'
import HeaderComponentNotSettle from '../../components/HeaderComponentNotSettle'
import NavbarAfterLogin from '../Profile/components/NavbarAfterLogin'
import StarIcon from '@mui/icons-material/Star';

const JumbotronComponent = ({ ...props }) => {
  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(max-width: 1399.98px)')
  // state
  const [openImage, setOpenImage] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [images, setImages] = useState([detailExample, bannerNewApartment, bannerNewBuilder, bannerNewApartment])
  // handle function
  const openListImage = (e) => {
    if (typeof e.target.alt !== "undefined") {
      setOpenImage(!openImage)
      setCurrentImage(+e.target.value)
    }
    else {
      setOpenImage(!openImage)
      setCurrentImage(+e.target.value)
    }
  }
  return (
    <Box sx={{ backgroundColor: '#F6F5F7' }}>
      <div style={{ width: xSmallDevice || smallDeviceSize || mediumDeviceSize ? '100%' : largeDeviceSize || xLargeDeviceSize ? '100%' : '1300px', margin: 'auto' }}>
        <div className='row mx-0 px-0' >
          <div className='col-sx-12 col-md-4 col-lg-4 col-xl-4 d-flex' >
            <div style={{ display: xSmallDevice || smallDeviceSize ? 'none' : 'block' }}>
              <div className='d-flex align-items-center h-100' >
                <div className='d-flex flex-column justify-content-between align-items-start h-100' style={{ margin: '0px 10%' }}>
                  <div className='d-flex justify-content-end w-100' style={{ height: 50 }}>
                    <div className='d-flex align-items-center' style={{ gap: 10 }}>
                      <IosShare sx={{ fontSize: '25px' }} />
                      <StarOutline sx={{ fontSize: '25px' }} />
                    </div>
                  </div>
                  <div>
                    <FontRoboto text={'Lot 1 Riverview Dr, Paradise, SA 5075'} className={'fw-bold font-sz-32px'} />
                    <div className='my-5'>
                      <Box sx={{
                        display: 'flex', alignContent: 'center', marginTop: '10px',
                        width: xSmallDevice || smallDeviceSize ? '100%' : '90%',

                      }}>
                        <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                          <img src={BedIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }} />
                          <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                        </Box>
                        <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                          <img src={BathtubIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }} />
                          <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                        </Box>
                        <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                          <img src={CarIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }} />
                          <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>1</Typography>
                        </Box>
                        <Box display='flex' sx={{ color: '#868389', fontWeight: 600, marginRight: '10px', alignItems: 'center', }}>
                          <img src={SizeIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }} />
                          <Typography sx={{ color: '#868389', fontWeight: 600, marginLeft: '5px' }}>223 m²</Typography>
                        </Box>
                      </Box>
                    </div>
                    <FontRoboto text={'UNDER CONTRACT BY MARK FOELZ'} className={'fw-bold font-sz-16px'} />

                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='col-sx-12 col-md-8 col-lg-8 col-xl-8'>
            <div style={{ display: xSmallDevice || smallDeviceSize ? 'none' : 'block' }}>
              <ImageList cols={xSmallDevice || smallDeviceSize ? 0 : mediumDeviceSize ? 3 : 4} sx={{ overflow: 'hidden', cursor: 'pointer', margin: 0, minHeight: 500 }} onClick={openListImage}>
                <ImageListItem cols={3} rows={3}>
                  <img src={images[0]} alt="0" />
                </ImageListItem>
                <ImageListItem cols={1} rows={1}>
                  <img src={images[1]} alt="1" />
                </ImageListItem>
                <ImageListItem cols={1} rows={1}>
                  <img src={images[2]} alt="2" />
                </ImageListItem>
                <ImageListItem cols={1} rows={1} sx={{ position: 'relative' }}>
                  <Box sx={{ width: '100%', height: '100%', backgroundColor: 'black', position: 'absolute', opacity: '0.5' }}>
                  </Box>
                  <Typography sx={{ width: '100%', height: '100%', position: 'absolute', left: '45%', top: '40%', fontSize: '28px', color: 'white', fontWeight: 700 }}>2+</Typography>
                  <img src={images[0]} alt="image4" />
                </ImageListItem>
              </ImageList>
            </div>
            <Container sx={{ position: 'relative', display: xSmallDevice || smallDeviceSize ? 'block' : 'none' }}>
              <img src={detailExample} alt="detail image" width="100%" />
              {/* web size bottom 30px left 25vw */}
              <Fab variant='extended' sx={{ position: 'absolute', bottom: xSmallDevice || smallDeviceSize ? '20px' : '30px', left: '40%', zIndex: 0, width: xSmallDevice || smallDeviceSize ? '65px' : '155px', height: '40px' }} onClick={() => setOpenImage(!openImage)}>
                <CameraAlt />
                <Typography sx={{ marginLeft: '5px', width: '100px' }}>
                  5 {xSmallDevice || smallDeviceSize ? "" : "Images"}
                </Typography>
              </Fab>
            </Container>
          </div>

        </div>
      </div>


      {
        openImage && (
          <ImageViewer
            src={images}
            disableScroll={false}
            closeOnClickOutside={true}
            currentIndex={currentImage}
            onClose={() => setOpenImage(!openImage)}
          />
        )}
    </Box>
  )
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const MainComponent = ({ ...props }) => {

  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(max-width: 1399.98px)')
  //
  const [value, setValue] = React.useState(1);
  const [listProperties] = useState([1, 2, 3])
  const [currentFacilitiesTab, setCurrentFacilitiesTab] = useState('primary')
  const [facilities] = useState(

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
  const [faqs] = useState([
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
  const changeTabFacilities = (e, tab) => {
    setCurrentFacilitiesTab(tab)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ContentContainer = ({ ...props }) => {
    const { child } = props

    return (
      <Box sx={{ marginTop: '20px', width: xSmallDevice || smallDeviceSize ? '100%' : '100%', }}>
        {child}
      </Box>
    )
  }
  return (
    <Box sx={{}}>
      <Container>
        <DividerHorizontal />
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
            {/* Maps */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35483.602388181636!2d112.9730386860465!3d-7.9433246201062735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sGn.%20Bromo!5e0!3m2!1sid!2sid!4v1690248058390!5m2!1sid!2sid" height="300px" style={{ border: 0, marginTop: '20px', width: xSmallDevice || smallDeviceSize ? '100%' : '90%', }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <Divider light />
            {/* Property Description */}
            <ContentContainer child={
              <>
                <Typography component='h1' variant='h5' fontWeight={700}>Paradise - Home And Land Package</Typography>
                <FontRoboto className={'text-muted fw-bold my-2'} text={`Lot 1 Riverview Dr, Paradise`} />
                <FontRoboto
                  className={'text-muted'}
                  text={`
               This home will make the perfect place to raise your family or to attract an A-grade tenant. Within genuine walking distance to Saint John's Anglican College & Forest Lake State High. Stroll to the picturesque lake or enjoy afternoon games on adjoining sporting ovals. Cafes, restaurants, gymnasium and shopping centre precinct are all on your doorstep.

               Featuring a master bedroom complete with bay window, renovated ensuite, walk-in-robe, ceiling fan & split air conditioning system. The two additional bedrooms are positioned at the opposite end of the home and all including built in robes, ceiling fans and split air conditioning.
               
               Central to the home is the kitchen, serving the generous sized open plan family and dining area, perfect for everyday use. This full-size kitchen has new cooking appliances, dishwasher and dedicated space for microwave.
               Additional carpeted living areas are situated away from the central family space, providing two secondary options for further relaxation and dining under a raked ceiling.
               
               The owner has created an outdoor haven incorporating a pergola which has a built in bench seat with travertine tiles and a dry stone wall feature. Another pergola, purposely built for privacy, is positioned alongside the home to create a vertical green wall. The garden already is home to a lemon and lime tree with the rosemary and jasmine fragrance adding to the appeal. This oasis no doubt will become one of your favourite spots to unwind and entertain.
               
               The property will be sold with spare floor & wall tiles, including a new vanity, basin and tap ware to renovate the second bathroom. The tiles match the already renovated ensuite.
               
               Other notables:
               - Solar panels 8Kw
               - 4 x split air conditioning units
               - Diamond grill security screens to all windows & doors
               - Recently replaced carpet
               - Roof repointed, resealed and painted
               - New blinds
               - New ceiling fans
               - Two new toilets
               - Internal laundry
               - Compliant smoke detectors
               - Remote double garage
               - 30m | Sporting ovals
               - 80m | Lake walk
               - 300m | St John's Anglican High School
               - 400m | Off leash dog park
               - 400m | Bus stop
               - 500m | Shopping Centre Precinct
               - 600m | State High School
               `} />
                <Link href='' sx={{ display: 'flex', alignContent: 'center' }}>Read less <KeyboardArrowUp /></Link>
              </>
            } />
            <Divider light sx={{ width: xSmallDevice || smallDeviceSize ? '100%' : '90%', marginTop: '15px' }} />
            {/* Property Features */}
            <ContentContainer
              child={
                <>
                  <Typography variant='p' fontWeight={600} fontSize='20px'>Property features</Typography>
                  <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={6}>
                      <Box display='flex' sx={{ color: '#868389', fontWeight: 600, alignItems: 'center' }}>
                        <img src={HouseSizeIcon} alt="bed-icon" style={{ width: '25px', height: '25px' }} />
                        <Typography sx={{ fontSize: '16px', color: '#868389', fontWeight: 500, marginLeft: '15px' }}>Building size:</Typography>
                        <Typography sx={{ color: 'black', fontWeight: 600, marginLeft: '5px' }}>223 m²</Typography>
                      </Box>
                      <Box display='flex' sx={{ color: '#868389', fontWeight: 600, alignItems: 'center', marginTop: '20px' }}>
                        <img src={SizeIcon} alt="bed-icon" style={{ width: '25px', height: '25px' }} />
                        <Typography sx={{ fontSize: '16px', color: '#868389', fontWeight: 500, marginLeft: '15px' }}>Land size:</Typography>
                        <Typography sx={{ color: 'black', fontWeight: 600, marginLeft: '5px' }}>223 m²</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box display='flex' sx={{ color: '#868389', fontWeight: 600, alignItems: 'center' }}>
                        <img src={CarIcon} alt="bed-icon" style={{ width: '25px', height: '25px' }} />
                        <Typography sx={{ fontSize: '16px', color: '#868389', fontWeight: 500, marginLeft: '15px' }}>Garage spaces:</Typography>
                        <Typography sx={{ color: 'black', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                      </Box>
                      <Box display='flex' sx={{ color: '#868389', fontWeight: 600, alignItems: 'center', marginTop: '20px' }}>
                        <img src={ToiletIcon} alt="bed-icon" style={{ width: '25px', height: '25px' }} />
                        <Typography sx={{ fontSize: '16px', color: '#868389', fontWeight: 500, marginLeft: '15px' }}>Toilets:</Typography>
                        <Typography sx={{ color: 'black', fontWeight: 600, marginLeft: '5px' }}>2</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              }
            />
            <Divider light sx={{ width: xSmallDevice || smallDeviceSize ? '100%' : '90%', marginTop: '20px' }} />
            <ContentContainer
              child={
                <>
                  <Typography variant='p' fontWeight={600} fontSize='20px'>Floorplans and tours</Typography>
                  <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={6}>
                      <Box display='flex' sx={{ color: '#868389', fontWeight: 600, alignItems: 'center' }}>
                        <img src={HouseSizeIcon} alt="bed-icon" style={{ width: '25px', height: '25px' }} />
                        <Typography sx={{ fontSize: '16px', color: '#868389', fontWeight: 500, marginLeft: '15px' }}>Building size:</Typography>
                        <Typography sx={{ color: 'black', fontWeight: 600, marginLeft: '5px' }}>223 m²</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              }
            />
            <Divider light sx={{ width: xSmallDevice || smallDeviceSize ? '100%' : '90%', marginTop: '20px' }} />

            {/* Inspection */}
            <Box sx={{ marginTop: '20px', width: xSmallDevice || smallDeviceSize ? '100%' : '90%', }}>
              <Typography variant='p' fontWeight={600} fontSize='20px'>Inspection</Typography>
              <Typography sx={{ padding: '20px', border: '1px solid #E5E3E8', borderRadius: '10px', fontSize: '16px', marginTop: '20px' }}>
                There are no upcoming inspections for this property. <Link fontSize='16px' fontWeight={700}>Contact the egent</Link> to see this place.
              </Typography>
              <FontRoboto text={`See my inspection plan`} className={'fw-bold btn btn-light border-dark px-4 py-4 my-3'} />
            </Box>
            <Divider light sx={{ width: xSmallDevice || smallDeviceSize ? '100%' : '90%', marginTop: '20px' }} />
            <ContentContainer
              child={
                <>
                  <RenovationEstimator />
                </>
              }
            />
            <Divider light sx={{ width: xSmallDevice || smallDeviceSize ? '100%' : '90%', marginTop: '20px' }} />
            <ContentContainer
              child={
                <>
                  <FontRoboto text={`Discover insights for 3 bed houses in Forest Lake`} className={`font-sz-18px fw-bold`} />
                  <div className='bg-light p-3 border rounded my-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center' style={{gap: 10}}>
                        <img style={{ height: 40, width: 40 }}></img>
                        <FontRoboto text={`Elevate your property journey with the latest Forest Lake market insights.`} className={`font-sz-16px text-muted`} />
                      </div>
                      <div>
                        <div className='btn btn-light border border-dark px-4'>Explore Forest Lake</div>
                      </div>
                    </div>

                  </div>

                </>
              }
            />
            <Divider light sx={{ width: xSmallDevice || smallDeviceSize ? '100%' : '90%', marginTop: '20px' }} />
            <ContentContainer
              child={
                <>
                  <FontRoboto text={`Nearby schools`} className={`font-sz-18px fw-bold`} />
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                      value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Primary" {...a11yProps(0)} />
                      <Tab label="Secondary" {...a11yProps(1)} />
                      <Tab label="Child Care" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <TableComponent />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <TableComponent />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <TableComponent />
                  </CustomTabPanel>
                </>
              }
            />

          </div>
          <div className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 ${xSmallDevice || smallDeviceSize ? 'd-none' : ''}`}>
            <Card sx={{ borderRadius: '10px', position: 'sticky', top: '20px', zIndex: '0' }}>
              <CardMedia
                image={branchExample}
                sx={{ height: '35px', backgroundColor: 'black' }}
              />
              <CardContent className='px-0' >
                <div className='d-flex align-items-center px-2' style={{ gap: 10, marginBottom: 20 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ height: 80, width: 80 }} />
                  <div className='flex-column' style={{ gap: 10 }}>
                    <FontRoboto text={'Name Agent'} className={'fw-bold'} />
                    <div className='my-1' >
                      <div className='d-flex' style={{ gap: 10 }}>
                        <StarIcon className='font-sz-16px fw-bold' sx={{ color: '#faaf00' }} />
                        <FontRoboto text={`5`} className={'font-sz-14px'} />
                        <FontRoboto text={`(100 reviews)`} className={'text-muted font-sz-14px'} />
                      </div>
                    </div>
                    <div className='btn border border-dark'><FontRoboto text={`0432212211`} className={`font-sz-10px`} /></div>
                  </div>
                </div>
                <hr />
                <div className='px-3'>
                  <FontRoboto text={`@ap-realty - Property Sales and Management`} className={'fw-bold font-sz-16px'} />
                  <DividerHorizontal />
                  <FontRoboto text={`Shop H/255 Forest Lake Blvd, FOREST LAKE, QLD 4078`} className={'font-sz-14px'} />
                </div>
                <hr />
                <div className='px-3'>
                  <Button color='inherit' variant='contained' sx={{ backgroundColor: 'red', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: 'red' }, textTransform: 'none' }} fullWidth>Get in touch</Button>
                  <Button color='inherit' startIcon={<StarOutline />} variant='outlined' sx={{ marginTop: '10px', textTransform: 'none' }} fullWidth>Save property</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Box>
  )
}

const MailComponent = ({ ...props }) => {
  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(max-width: 1399.98px)')
  return (

    <Box sx={{ backgroundColor: '#F6F5F7', width: '100%', marginTop: '20px' }}>
      <Container >
        <div className='row py-4 px-0 mx-0'>
          <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8'>
            <Box sx={{ width: xSmallDevice || smallDeviceSize ? '100%' : '90%', }}>
              <Card sx={{ borderRadius: '10px' }}>
                <CardMedia
                  sx={{ height: '57px', backgroundColor: 'black' }}
                />
                <CardContent>
                  <Typography variant='p' fontWeight={600} fontSize='20px'>Get in touch with a consultant to discuss Tallow Residences today.</Typography>
                  <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 600, marginTop: '20px' }} >
                    Get in touch with a consultant today.
                  </Typography>
                  <Chip label='0812 9878 9399' variant='outlined' /><br />
                  <Grid container sx={{ marginTop: '20px' }}>
                    <Grid item xs={2}>
                      <img src={detailExample} alt="home" style={{ width: '100px', height: '75px' }} />
                    </Grid>
                    <Grid item xs={8} sx={{ marginLeft: xSmallDevice || smallDeviceSize ? '50px' : '0px' }}>
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
                  <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                      <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>Name<span style={{ color: '#868389' }}>(required)</span></label>
                      <TextField
                        required
                        id="outlined-required"
                        placeholder='Enter your name'
                        rows={4}
                        className='w-100'
                      />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
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
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                      <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>Phone number</label>
                      <TextField
                        required
                        id="outlined-required"
                        placeholder='Enter your phone number'
                        className='w-100'
                      />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                      <label htmlFor="name" style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>What are you looking to do?</label>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value="Please select"
                        placeholder='Please select'
                        fullWidth
                        className='w-100'
                      >
                        <MenuItem value="Buy but keep my current home">Buy but keep my current home</MenuItem>
                        <MenuItem value="Buy and live in my first home">Buy and live in my first home</MenuItem>
                        <MenuItem value="Buy an investment property">Buy an investment property</MenuItem>
                        <MenuItem value="Buy and sell property">Buy and sell property</MenuItem>
                        <MenuItem value="Monitor the market">Monitor the market</MenuItem>
                        <MenuItem value="Representing a client">Representing a client</MenuItem>
                        <MenuItem disabled value="Please select">Please select</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 600, marginTop: '20px', display: 'flex' }} >
                    Do you have finance pre-approval?
                    <Tooltip placement='top' sx={{ marginLeft: '5px', fontSize: '16px', cursor: 'pointer' }} title='Having finance pre-approval means you’ve gotten the thumbs up from your bank and you’re ready to make an offer.'>
                      <Info />
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
          </div>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4' >
            <div className='d-xs-none d-sm-none d-md-block d-lg-block d-xl-block'>
              <Card sx={{ borderRadius: '10px', position: 'sticky', top: '20px', zIndex: '0' }}>
                <CardMedia
                  image={detailExample}
                  sx={{ height: 200, backgroundColor: 'black' }}
                />
                <CardContent className='px-0' >
                  <div className='px-3'>
                    <FontRoboto text={`@ap-realty - Property Sales and Management`} className={'fw-bold font-sz-16px'} />
                    <DividerHorizontal />
                    <FontRoboto text={`Shop H/255 Forest Lake Blvd, FOREST LAKE, QLD 4078`} className={'font-sz-14px'} />
                    <DividerHorizontal />
                    <FontRoboto text={`@ap-realty is a broad-based property services company that offers a unique range of innovative property sales and`} className={'font-sz-12px text-muted'} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </Container>
    </Box>
  )
}

export default function Page(props) {
  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(max-width: 1399.98px)')
  return (
    <>
      <NavbarAfterLogin />

      <AppBar id="breadcrumbs-nav" style={{ padding: '15px', borderBottom: '1px solid #eaeaea', background: 'white', boxShadow: 'none', display: 'block', position: 'relative' }}>
        <Container>
          <Grid container sx={{ display: 'flex', alignItems: 'center' }}>

            <Grid item>
              <Breadcrumbs maxItems={xSmallDevice ? 2 : 3} aria-label="breadcrumb" separator=">" sx={{ marginLeft: '20px' }}>
                <Link underline="hover" fontSize='15px' color="inherit" >
                  Buy
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  fontSize='15px'
                >
                  QRD
                </Link>
                <Link
                  underline="hover"
                  color="text.primary"
                  href="/material-ui/react-breadcrumbs/"
                  aria-current="page"
                >
                  Forest Lake
                </Link>
                <Link
                  underline="hover"
                  color="text.primary"
                  href="/material-ui/react-breadcrumbs/"
                  aria-current="page"
                >
                  House
                </Link>
                <Link
                  underline="hover"
                  color="text.primary"
                  href="/material-ui/react-breadcrumbs/"
                  aria-current="page"
                >
                  29 Coachwood Crescent
                </Link>
              </Breadcrumbs>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <JumbotronComponent />
      <MainComponent />
      <MailComponent />
      <Container>
        <div className='my-4'>
          <div className='row mx-0 px-0'>
            <div className='col-sm-12 col-md-3 col-lg-3 col-xl-3' >
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6' >
              <div className='d-flex justify-content-center flex-wrap'>
                <FontRoboto text={`More properties from @ap-realty - Property Sales and Management`} className={'fw-bold h5 text-center'} />
                <FontRoboto text={`These properties from @ap-realty - Property Sales and Management are shown based on the property type and distance to this listing.`} className={'text-muted text-center my-3'} />
                <FontRoboto text={`View agency profile`} className={'btn btn-light border-dark px-4 py-3 my-3'} />
              </div>
            </div>
            <div className='col-sm-12 col-md-3 col-lg-3 col-xl-3' >
            </div>
          </div>

          <Carousel />
        </div >
      </Container>
      <FooterSocialMedia />
    </>
  )
}
