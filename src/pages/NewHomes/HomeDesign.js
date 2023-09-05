import React, { useState } from 'react'
import NavbarNewHomes from './components/NavbarNewHomes'
import { Fab, FormGroup, Checkbox, Tooltip, InputAdornment, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, Box, Container, Grid, Typography, Chip, Card, CardMedia, CardContent, Divider, Button, FormControl, Select, MenuItem, FormControlLabel, Radio, InputLabel, TextField, RadioGroup, Link, Tabs, Tab, Badge, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import { StarOutline, ExpandMore, Email, Info, CameraAlt, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import ImageViewer from 'react-simple-image-viewer'
import { useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { brandLogo, builderIcon, smallBrandHero, veryBigBrandHero, detailExample, bannerNewApartment, bannerNewBuilder, bigBrandHero, Blueprint, Camera, Telephone, FloorPlan1 } from './assets'
import { BathtubIcon, BedIcon, CarIcon, HouseSizeIcon, SizeIcon } from '../../assets/icons'
import FooterNewHomes from './components/FooterNewHomes'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import { Loader } from '@googlemaps/js-api-loader'
import Footer from '../../components/Footer'
import QuickSearch from '../../components/QuickSearch'

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#3d3b40',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#242326',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

function TabPropertiesBuilder(props) {
  return (
    <div hidden={props.value !== props.tab}>
      <Grid container>
        {props.data.map(d => (
          <Grid item xs={props.mobileSize ? 12 : 3}>
            <Card sx={{ maxWidth: props.mobileSize ? '100%' : 360, borderRadius: '10px', marginBottom: '20px', cursor: 'pointer', marginRight: '20px' }}>
              <CardMedia
                sx={{ height: 180 }}
                image={veryBigBrandHero}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="p" fontWeight={600} component="div">
                  Burbank Homes {d}
                </Typography>
                <Typography>
                  From $250.000
                </Typography>
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
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button variant='outlined' sx={{ textTransform: 'none', width: '276px', height: '48px', color: 'black', borderColor: 'black', fontWeight: 'bold' }}>Show more properties</Button>
      </Box>
    </div>
  )
}

export default function HomeDesign(props) {
  // states
  const [ openMenu, setOpenMenu ]             = useState(false)
  const [ open, setOpen ]                     = useState(false)
  const [ openImage, setOpenImage ]           = useState(false)
  const [ builderType ]                       = useState(["Volume builder", "Knock down rebuilder", "Custom builder"])
  const [ minPrice, setMinPrice ]             = useState('')
  const [ maxPrice, setMaxPrice ]             = useState('')
  const [ beds, setBeds ]                     = useState('')
  const [ bath, setBath ]                     = useState('')
  const [ cars, setCars ]                     = useState('')
  const [ storeys, setStoreys ]               = useState('')
  const [ dataHomeDesign, setDataHomeDesign ] = useState([1,2,3,4,5,6,7,8,9,10])
  const [ displayHome ]                       = useState([1,2,3,4,5])
  const [ isExpand, setIsExpand ]             = useState(false)
  const [ listFloorplan ]                     = useState([1,2,3,4])
  const [ propertiesForSale ]                 = useState([1,2,3,4,5,6,7,8])
  const [ propertiesSold ]                    = useState([1,2,3,4,5,6,7,8])
  const [ propertiesForRent ]                 = useState([1,2,3,4,5,6,7,8])
  const [ tabProperties, setTabProperties ]   = useState('for-sale')
  const [ images ]                            = useState([detailExample, bannerNewApartment, bannerNewBuilder, bannerNewApartment])
  const [ expandOpenHour, setExpandOpenHour ] = useState(true)
  const [ openHours ]                         = useState([
    {
      day: 'Saturday',
      hour: '12:00pm - 5:00 pm'
    },
    {
      day: 'Sunday',
      hour: '12:00pm - 5:00 pm'
    },
    {
      day: 'Monday',
      hour: '12:00pm - 5:00 pm'
    },
    {
      day: 'Tuesday',
      hour: 'By appointment only'
    },
    {
      day: 'Wednesday',
      hour: '1:00 pm - 5:00 pm'
    },
    {
      day: 'Thursday',
      hour: 'Closed'
    },
    {
      day: 'Friday',
      hour: 'Closed'
    },
  ])
  const [ location, setLocation ]             = useState([
    { lat: -7.751, lng: 113.202 },
    { lat: -7.756, lng: 113.209 },
    { lat: -7.734, lng: 113.175 },
    { lat: -7.679, lng: 113.248 },
    { lat: -6.2329181, lng: 106.9898949 }
  ])
  const [ faqs ]                              = useState([
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

  const mobileSize     = useMediaQuery('(max-width: 700px)')
  const { id_builder } = useParams()

  const handleChangeTabProperties = (e, value) => {
    setTabProperties(value)
  }

  const handleOpenPersonalInformation = () => {
    setIsExpand(!isExpand)
  }

  const handleExpandOpenHours = () => {
    setExpandOpenHour(!expandOpenHour)
  }

  const handleFilterMinPrice = e => {
    setMinPrice(e.target.value)
  }

  const handleFilterMaxPrice = e => {
    setMaxPrice(e.target.value)
  }

  const handleFilterBeds = e => {
    setBeds(e.target.value)
  }

  const handleFilterBaths = e => {
    setBath(e.target.value)
  }

  const handleFilterCars = e => {
    setCars(e.target.value)
  }

  const handleFilterStoreys = e => {
    setStoreys(e.target.value)
  }

  const openAndCloseListImage = () => {
    setOpenImage(!openImage)
  }

  const handleMenuItem = () => {
    if (mobileSize) {
      setOpenMenu(!openMenu)
    } else {
      if (!open) {
        document.getElementById("navbar-menu-item").style.display = "block";
        document.getElementById("breadcrumbs-nav").style.top = '107px';
        document.getElementById("brand-sticky").style.top = '155px';
      } else {
        document.getElementById("brand-sticky").style.top = '107px';
        document.getElementById("navbar-menu-item").style.display = "none";
        document.getElementById("breadcrumbs-nav").style.top = '57px';
      }
      setOpen(!open)
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  window.onscroll = function() {
    if (document.documentElement.scrollTop > (!open ? 100 : 150)) {
      document.getElementById('brand-sticky').style.top = 0;
    } else {
      document.getElementById('brand-sticky').style.top = !open ? '107px' : '157px';
    }
  }

  const loader = new Loader({
    apiKey: 'AIzaSyCrGHuKbAqbGPumgKuzlqMtYBAVb4O0xCQ',
    version: 'weekly'
  })

  loader.load().then(async () => {
    const google = window.google;
    // Request needed libraries.
    //@ts-ignore
    const { Map, infoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    let map = new Map(document.getElementById("map-home-design"), {
      zoom: 10,
      center: location[0],
      mapId: "e7f00e4f77c30c63",
    });

    // The marker, positioned at Uluru
    const markers = location.map((position, i) => {
      const pointerLocation = document.createElement('div')
      
      // pointer
      pointerLocation.style.padding = '5px 10px'
      pointerLocation.style.fontWeight = 600
      pointerLocation.style.color = '#fff'
      pointerLocation.style.border = '2px solid white'
      pointerLocation.style.backgroundColor = '#17C2ED'
      pointerLocation.innerText = 'Display'
      pointerLocation.style.position = 'relative'
      

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position,
        content: pointerLocation,
      });

      // markers can only be keyboard focusable when they have click listeners
      // open info window when marker is clicked
      // marker.addListener("click", () => {
      //   infoWindow.open(map, marker);
      // });
      return marker;
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map });
  });

  return (
    <div>
      <NavbarNewHomes open={open} openMenu={openMenu} handleOpenMenu={handleOpenMenu} handleMenuItem={handleMenuItem} display={openImage} route={props.route} id_project={id_builder}/>
      <Box id="brand-sticky" sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#F68B1F',
        height: mobileSize ? '40px' : '65px',
        marginTop: '107px',
        position: 'sticky',
        top: 0,
        zIndex: '1'
      }}>
        <img src={brandLogo} alt="brand" style={{ width: '135px', height: '32px' }}/>
      </Box>
      <Box sx={{
        backgroundColor: '#F6F5F7'
      }}>
        <img src={bigBrandHero} alt="detail image" width="100%" height={mobileSize ? "100%" : "460px"} style={{ objectFit: 'contain' }}/>
        <Container sx={{ position: 'relative' }}>
          {/* web size bottom 30px left 25vw */}
          <Fab variant='extended' sx={{ background: 'white', position: 'absolute', bottom: mobileSize ? '20px' : '30px', left: '40%', zIndex: 0, width: mobileSize ? '105px' : '255px', height: '40px', display: 'flex', justifyContent: 'space-between', borderRadius: '10px' }} onClick={openAndCloseListImage}>
            <Box sx={{ display: 'flex', alignItems: 'center', ':hover': { background: '#eaeaea' }, width: '100%', height: '100%' }}>
              <img src={Camera} width='16px' height='16px' />
              <Typography sx={{ fontSize: '14px', textTransform: 'none', marginLeft: '5px' }}>
                5 {mobileSize ? "" : "images"}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', ':hover': { background: '#eaeaea' }, width: '100%', height: '100%' }}>
              <img src={Blueprint} width='16px' height='16px' />
              <Typography sx={{ fontSize: '14px', textTransform: 'none', marginLeft: '5px' }}>
                5 {mobileSize ? "" : "floorplans"}
              </Typography>
            </Box>
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
      </Box>
      <Container sx={{ marginTop: mobileSize ? '20px' : '50px' }}>
        <Grid container>
          <Grid item xs={mobileSize ? 12 : 8}>
            <Box sx={{ display: mobileSize ? 'flex' : 'none', alignItems: 'center' }}>
              <Typography variant='h5' fontWeight={700}>Phillips</Typography>
              <span style={{ marginLeft: '5px', marginRight: '5px' }}>by</span>
              <Link sx={{ textDecoration: 'none', fontWeight: 600, fontSize: '20px' }}>Burbank Homes</Link>
            </Box>
            <Typography variant='h5' fontWeight={700} display={mobileSize ? 'none' : 'block'}>Phillips</Typography>
            <Typography marginTop={'10px'}>From $334,100</Typography>
            <hr style={{ color: '#A5ADB5' }}/>
            <Typography fontSize={'20px'} variant='p' fontWeight={600}>Customise your design and create your dream home</Typography>
            <Typography fontSize={'16px'} marginTop={'20px'}>Choose your floorplan</Typography>
            {/* floorplan list */}
            <Box sx={{ marginTop: '10px' }}>
              <Grid container sx={{ flexWrap: mobileSize ? 'nowrap' : 'wrap', maxWidth: mobileSize ? '500px' : '100vw', overflowX: mobileSize ? 'auto' : 'hidden' }}>
                {listFloorplan.map(d => (
                  <Grid key={d} item sx={{ width: mobileSize ? '228px' : '208px', height: mobileSize ? '110px' : '94px', border: d === 1 ? '2px solid' : '1px solid #eaeaea', borderRadius: '10px', padding: mobileSize ? '0px' : '5px', paddingX: mobileSize ? '10px' : '0px', marginRight: '10px', marginBottom: '10px', cursor: 'pointer' }}>
                    <Typography variant='p' fontSize={'20px'} fontWeight={700}>Phillips 214</Typography>
                    <Box sx={{ display: 'flex', alignContent: 'center'}}>
                      <Box display='flex' sx={{ color: '#868389', marginRight: '10px', alignItems: 'center', }}>
                        <img src={BedIcon} alt="bed-icon" style={{ width: '16px', height: '16px' }}/>
                        <Typography sx={{ color: '#868389', marginLeft: '2px', fontSize: '16px' }}>2</Typography>
                      </Box>
                      <Box display='flex' sx={{ color: '#868389', marginRight: '10px', alignItems: 'center', }}>
                        <img src={BathtubIcon} alt="bed-icon" style={{ width: '16px', height: '16px' }}/>
                        <Typography sx={{ color: '#868389', marginLeft: '2px', fontSize: '16px' }}>2</Typography>
                      </Box>
                      <Box display='flex' sx={{ color: '#868389', marginRight: '10px', alignItems: 'center', }}>
                        <img src={CarIcon} alt="bed-icon" style={{ width: '16px', height: '16px' }}/>
                        <Typography sx={{ color: '#868389', marginLeft: '2px', fontSize: '16px' }}>1</Typography>
                      </Box>
                      <Box display='flex' sx={{ color: '#868389', marginRight: '10px', alignItems: 'center', }}>
                        <img src={SizeIcon} alt="bed-icon" style={{ width: '16px', height: '16px' }}/>
                        <Typography sx={{ color: '#868389', marginLeft: '2px', fontSize: '16px' }}>223 m²</Typography>
                      </Box>
                    </Box>
                    <Typography>From $334,100</Typography>
                  </Grid>
                ))}
              </Grid>
              <Typography display={mobileSize ? 'none' : 'block'} color={'#00639E'} fontWeight={600}>Show more options (1) <KeyboardArrowDown/></Typography>
            </Box>
            {/* floorplan detail */}
            <Box sx={{ border: '1px solid #eaeaea', borderRadius: '10px', width: mobileSize ? '100%' : '640px', marginY: '10px', position: 'relative' }}>
              <span style={{ background: '#3D3B40', padding: '5px', color: 'white', borderRadius: '30%', fontSize: '12px', position: 'absolute', top: '8px', right: '8px' }}>1/1</span>
              <img src={FloorPlan1} alt="floorplan1" style={{ width: '100%' }}/>
              <Grid container sx={{ alignItems: 'center', justifyItems: 'center', height: mobileSize ? '150px' : '92px', borderTop: '1px solid #eaeaea', paddingX: '16px', paddingY: '20px' }}>
                <Grid item xs={6} lg={3} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={SizeIcon} alt="bed-icon" style={{ width: '16px', height: '16px' }}/>
                    <Typography textTransform={'uppercase'} fontSize={'12px'} fontWeight={600} marginLeft={'5px'}>total area</Typography>
                  </Box>
                  <Typography fontSize={'16px'}>214.1㎡</Typography>
                </Grid>
                <Grid item xs={6} lg={3} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={SizeIcon} alt="bed-icon" style={{ width: '16px', height: '16px' }}/>
                    <Typography textTransform={'uppercase'} fontSize={'12px'} fontWeight={600} marginLeft={'5px'}>min. block width</Typography>
                  </Box>
                  <Typography fontSize={'16px'}>9m</Typography>
                </Grid>
                <Grid item xs={6} lg={3} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={HouseSizeIcon} alt="bed-icon" style={{ width: '16px', height: '16px' }}/>
                    <Typography textTransform={'uppercase'} fontSize={'12px'} fontWeight={600} marginLeft={'5px'}>house length</Typography>
                  </Box>
                  <Typography fontSize={'16px'}>19.19m</Typography>
                </Grid>
                <Grid item xs={6} lg={3} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={HouseSizeIcon} alt="bed-icon" style={{ width: '16px', height: '16px' }}/>
                    <Typography textTransform={'uppercase'} fontSize={'12px'} fontWeight={600} marginLeft={'5px'}>house width</Typography>
                  </Box>
                  <Typography fontSize={'16px'}>7.91m</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ width: mobileSize ? '100%' : '640px' }}>
              <Typography variant='p' fontSize={'20px'} fontWeight={700} >About Phillips</Typography>
              <Typography marginTop={'10px'} fontSize={'16px'}>Whatever your block size, we have you covered with the Phillips designs. Magnificent entry way takes you through to open plan living with gourmet kitchen and walk-in pantry. Upstairs you will find extra living areas and glorious master suite.</Typography>
              <hr style={{ color: '#A5ADB5' }}/>
            </Box>
            <div id="map-home-design" style={{ marginTop: '10px', width: mobileSize ? '100%' : '640px', height: '300px', borderRadius: '20px' }}></div>
            <Grid container sx={{ marginTop: '20px' }}>
              <Grid item xs={6} sx={{ borderRight: '1px solid #eaeaea' }}>
                <Typography color={'#7C787F'} fontSize={'12px'} letterSpacing={'1px'} fontWeight={600}>SELECTED DISPLAY LOCATIONS</Typography>
                <Typography marginTop={'5px'} fontSize={'16px'} color={'#3d3b40'}>Espial Street, Seaford Heights, SA 5169</Typography>
                <Typography sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={handleExpandOpenHours} marginTop={'20px'} textTransform={'uppercase'} fontSize={'12px'} color={'#00639e'} fontWeight={600}>show open hours {expandOpenHour ? <KeyboardArrowDown/> : <KeyboardArrowUp/>} </Typography>
                <div hidden={expandOpenHour}>
                  {openHours.map(d => (
                    <Box key={d} sx={{ paddingX: '10px', backgroundColor: '#F7F8F9', width: '340px', height: '49px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #eaeaea', borderRadius: '5px' }}>
                      <Typography fontWeight={600}>{d.day}</Typography>
                      <Typography>{d.hour}</Typography>
                    </Box>
                  ))}
                </div>
              </Grid>
              <Grid item xs={5} sx={{ marginLeft: '20px' }}>
                <Typography color={'#7C787F'} fontSize={'12px'} letterSpacing={'1px'} fontWeight={600}>DISPLAY HOMES ON SHOW</Typography>
                <Typography marginTop={'5px'} fontSize={'16px'} color={'#3d3b40'}>Riverlea</Typography>
              </Grid>
            </Grid>
            <Box sx={{ width: mobileSize ? '100%' : '640px', marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: mobileSize ? 'column' : 'row' }}>
              <Typography color={'#7C787F'} fontSize={'16px'} fontWeight={600}>Want to find out more about Burbank Homes display homes?</Typography>
              <Button variant='contained' sx={{ marginTop: mobileSize ? '10px' : '0px', width: mobileSize ? '100%' : '144px', height: '48px', backgroundColor: '#17C2ED', boxShadow: 'none', textTransform: 'none', ':hover': { backgroundColor: '#17C2ED' } }}>Find out more</Button>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ display: mobileSize ? 'none' : 'block' }}>
            <Card sx={{ width: '300px', borderRadius: '10px', position: 'sticky', top: '20px', zIndex: '0', marginLeft: '20px' }}>
              <Box sx={{ backgroundColor: '#F68B1F', justifyContent: 'center', display: 'flex' }}>
                <CardMedia 
                  image={brandLogo}
                  sx={{  height: '35px', width: '135px' }}
                />
              </Box>
              <CardContent >
                <Grid container sx={{ display: 'flex' }}>
                  <Grid item sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', alignItems: 'start' }}>
                    <Link underline='none'>Burbank Homes</Link>
                    <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 500 }} component="p">
                      Get in touch with a consultant today.
                    </Typography>
                    <Chip icon={<img src={Telephone} width='14px' height='14px'/>} label='0812 9878 9399' variant='outlined' sx={{ borderRadius: '5px' }}/>
                  </Grid>
                </Grid>
                <Divider light sx={{ marginY: '20px' }}/>
                <Button color='inherit' variant='contained' sx={{ backgroundColor: '#17C2ED', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: '#17C2ED' }, textTransform: 'none' }} fullWidth>Get in touch</Button>
                <Button startIcon={<StarOutline/>} variant='outlined' sx={{  marginTop: '10px', textTransform: 'none', backgroundClip: '#17C2ED' }} fullWidth>Save property</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: '#fff', paddingY: '10px', marginTop: '20px' }}>
        <Container sx={{ marginY: '20px', display: 'flex', justifyContent: 'start' }}>
          <Box>
            <Card sx={{ borderRadius: '10px', width: mobileSize ? '100%' : '640px' }}>
              <Box sx={{ backgroundColor: '#F68B1F', justifyContent: 'center', display: 'flex' }}>
                <CardMedia 
                  image={brandLogo}
                  sx={{  height: '35px', width: '135px' }}
                />
              </Box>
              <CardContent>
                <Typography variant='p' fontWeight={600} fontSize='20px'>Get in touch with a consultant to discuss Tallow Residences today.</Typography>
                <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 600, marginTop: '20px' }} >
                  Get in touch with a consultant today.
                </Typography>
                <Chip label='0812 9878 9399' variant='outlined'/><br/>
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
                <Button color='inherit' variant='contained' sx={{ width: '100%', backgroundColor: '#17C2ED', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: '#17c2ed' }, textTransform: 'none', padding: '10px' }} fullWidth>Next step: property preferences</Button>
              </CardContent>
            </Card>
          </Box>
        </Container>
        <div className='quickSearch-section'>
          <QuickSearch />
        </div>

        <div className='footer-section'>
          <Footer />
        </div>
      </Box>
    </div>
  )
}
