import React, { useState } from 'react'
import NavbarNewHomes from './components/NavbarNewHomes'
import { Modal, ListItem, ListItemText, ListItemButton, Avatar, ListItemAvatar, List, IconButton, FormGroup, Checkbox, Tooltip, InputAdornment, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, Box, Container, Grid, Typography, Chip, Card, CardMedia, CardContent, Divider, Button, FormControl, Select, MenuItem, FormControlLabel, Radio, InputLabel, TextField, RadioGroup, Link, Tabs, Tab } from '@mui/material'
import { StarOutline, ExpandMore, Email, Info, Close, Facebook, Twitter, Mail, LinkSharp, KeyboardArrowDown, Tune } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { ShareSVG, brandLogo, builderIcon, smallBrandHero, veryBigBrandHero } from './assets'
import { BathtubIcon, BedIcon, CarIcon } from '../../assets/icons'
import Maps from './components/MapsBuilder'
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
            <Card sx={{ maxWidth: '100%', width: props.mobileSize ? '100%' : 260, borderRadius: '10px', marginBottom: '20px', cursor: 'pointer', marginRight: '20px', display: props.mobileSize ? 'flex' : 'block' }}>
              <CardMedia
                sx={{ height: props.mobileSize ? 140 : 180, width: props.mobileSize ? 200 : '100%' }}
                image={veryBigBrandHero}
                title="green iguana"
                component={props.mobileSize ? 'img' : ''}
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

export default function Builders(props) {
  const mobileSize     = useMediaQuery('(max-width: 700px)')

  // states
  const [ openMenu, setOpenMenu ]               = useState(false)
  const [ open, setOpen ]                       = useState(false)
  const [ openImage ]                           = useState(false)
  const [ builderType ]                         = useState(["Volume builder", "Knock down rebuilder", "Custom builder"])
  const [ minPrice, setMinPrice ]               = useState(mobileSize ? 'any' : '')
  const [ maxPrice, setMaxPrice ]               = useState(mobileSize ? 'any' : '')
  const [ beds, setBeds ]                       = useState(mobileSize ? 'any' : '')
  const [ bath, setBath ]                       = useState(mobileSize ? 'any' : '')
  const [ cars, setCars ]                       = useState(mobileSize ? 'any' : '')
  const [ storeys, setStoreys ]                 = useState(mobileSize ? 'any' : '')
  const [ dataHomeDesign, setDataHomeDesign ]   = useState([1,2,3,4,5,6,7,8,9,10])
  const [ displayHome ]                         = useState([1,2,3,4,5])
  const [ isExpand, setIsExpand ]               = useState(false)
  const [ propertiesForSale ]                   = useState([1,2,3,4,5,6,7,8])
  const [ propertiesSold ]                      = useState([1,2,3,4,5,6,7,8])
  const [ propertiesForRent ]                   = useState([1,2,3,4,5,6,7,8])
  const [ tabProperties, setTabProperties ]     = useState('for-sale')
  const [ openShareModal, setOpenShareModal ]   = useState(false)
  const [ openDisplayHome, setOpenDisplayHome ] = useState(false)
  const [ readDescription, setReadDescription ] = useState(false)
  const [ modalFilter, setModalFilter ]         = useState(false)
  const [ showOpenHours, setShowOpenHours ]     = useState(false)
  const [ faqs ]                                = useState([
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

  const { id_builder } = useParams()

  const handleOpenDisplayHome = () => {
    setOpenDisplayHome(!openDisplayHome)
  }

  const handleOpenAndCloseOpenHours = () => {
    setShowOpenHours(!showOpenHours)
    if (showOpenHours) {
      document.getElementById("open-hours-arrow").style.rotate = "360deg"
    } else {
      document.getElementById("open-hours-arrow").style.rotate = "180deg"
    }
  }

  const handleOpenAndCloseModalFilter = () => {
    setModalFilter(!modalFilter)
  }

  const handleOpenAndCloseShareModal = () => {
    setOpenShareModal(!openShareModal)
  }

  const handleChangeTabProperties = (e, value) => {
    setTabProperties(value)
  }

  const handleOpenPersonalInformation = () => {
    setIsExpand(!isExpand)
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

  const handleReadMoreAndLessDescription = () => {
    setReadDescription(!readDescription)
    if (readDescription) {
      document.getElementById("desc-builder-arrow").style.rotate = "360deg"
    } else {
      document.getElementById("desc-builder-arrow").style.rotate = "180deg"
    }
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

    if (document.documentElement.scrollTop > 4500) {
      document.getElementById("floating-button-enquire").style.display = 'none'
    } else {
      document.getElementById("floating-button-enquire").style.display = 'flex'
    }
  }

  return (
    <div style={{ minHeight: '4000px' }}>
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
        zIndex: '2'
      }}>
        <img src={brandLogo} alt="brand" style={{ width: '135px', height: '32px' }}/>
      </Box>
      <Box sx={{ width: mobileSize ? '100%' : '100%', height: mobileSize ? '300px' : '450px', backgroundImage: `url(${mobileSize ? smallBrandHero : veryBigBrandHero})`, backgroundRepeat: 'no-repeat',backgroundPosition: 'center', backgroundSize: 'cover' }}>
      </Box>
      <Container sx={{ marginTop: mobileSize ? '20px' : '50px' }}>
        <Grid container sx={{ marginBottom: '20px' }}>
          <Grid item xs={mobileSize ? 12 : 8}>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Grid item>
                <Typography variant='h4' fontWeight={700}>Burbank Homes</Typography>
              </Grid>
              <Grid item sx={{ display: mobileSize ? 'block' : 'none' }}>
                <img src={ShareSVG} alt="share" onClick={handleOpenAndCloseShareModal} style={{ cursor: 'pointer' }}/>
              </Grid>
              {/* modal share */}
              <Modal
                  open={openShareModal}
                  onClose={handleOpenAndCloseShareModal}
                  sx={{ display: 'flex', alignItems:'center', justifyContent:'center' }}
                >
                  <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'white', outline: 'none' }}>
                    <Container>
                      <Box sx={{ width: '100%', position: 'relative' }}>
                        <IconButton onClick={() => handleOpenAndCloseShareModal()} size='large' sx={{ position: 'absolute', top: 25, right: 5 }}>
                          <Close fontSize='30px'/>
                        </IconButton>
                      </Box>
                      <Box sx={{ width: '100vw', height: '90vh', position: 'relative' }}>
                        <Typography position={'absolute'} top={70} left={35} fontSize={'24px'} fontWeight={600}>Links & Share</Typography>
                        <List sx={{ position: 'absolute', top: 100, left: 20, width: '100%' }}>
                          <ListItem disablePadding sx={{ width: '100vw' }}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar sx={{ backgroundColor: '#eaeaea' }}>
                                  <LinkSharp sx={{ color: 'black' }}/>
                                </Avatar>
                              </ListItemAvatar>
                              <Typography fontSize={'16px'} fontWeight={600} color={'#00639e'}>Visit Builder Website</Typography>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding sx={{ width: '100vw' }}>
                            <ListItemButton href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.realestate.com.au%2Fproject%2Fvictoria-tower-adelaide-600033446' target='blank'>
                              <ListItemAvatar>
                                <Avatar sx={{ backgroundColor: '#eaeaea' }}>
                                  <Facebook sx={{ color: 'black' }} />
                                </Avatar>
                              </ListItemAvatar>
                              <Typography fontSize={'16px'} fontWeight={600} color={'#00639e'}>Facebook</Typography>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding sx={{ width: '100vw' }}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar sx={{ backgroundColor: '#eaeaea' }}>
                                  <Twitter sx={{ color: 'black' }}/>
                                </Avatar>
                              </ListItemAvatar>
                              <Typography fontSize={'16px'} fontWeight={600} color={'#00639e'}>Twitter</Typography>
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding sx={{ width: '100vw' }}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar sx={{ backgroundColor: '#eaeaea' }}>
                                  <Mail sx={{ color: 'black' }}/>
                                </Avatar>
                              </ListItemAvatar>
                              <Typography fontSize={'16px'} fontWeight={600} color={'#00639e'}>Email</Typography>
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </Box>
                    </Container>
                  </Box>
              </Modal>
            </Grid>
            <Box sx={{ marginTop: mobileSize ? '20px' : '30px' }}>
              {builderType.map(d => (
                <Chip key={d} label={d} sx={{ marginRight: '10px', borderRadius: '5px', marginBottom: '10px' }}/>
              ))}
            </Box>
            <Typography id='builder-desc' sx={{ marginTop: '20px', color: '#726E75', height: mobileSize ? readDescription ? '300px' : '100px' : 'none', overflowY: mobileSize ? 'hidden' : 'none' }}>
              Aspirational, award-winning and distinctly Australian, Burbank has been building homes since 1983. Burbank is one of Australia’s most trusted new home builders, with construction on the ground in Victoria, Queensland, South Australia, New South Wales and the Australian Capital Territory. Whether you're after a new home on the block you already own, or a house and land package, they have a variety of design choice and options to tailor your home just for you. Combining outstanding style, uncompromising quality and exceptional customer service, Burbank creates great places for people to live.
            </Typography>
            <Link onClick={handleReadMoreAndLessDescription} sx={{ display: mobileSize ? 'flex' : 'none', alignContent: 'center', cursor: 'pointer', fontWeight: 600, textDecoration: 'none' }}>{readDescription ? 'Read less '  : 'Read more '}<KeyboardArrowDown id="desc-builder-arrow"/></Link>
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
                    <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 500 }} component="p">
                      Get in touch with a consultant today.
                    </Typography>
                    <Chip label='0812 9878 9399' variant='outlined' />
                  </Grid>
                </Grid>
                <Divider light sx={{ marginY: '20px' }}/>
                <Button color='inherit' variant='contained' sx={{ backgroundColor: '#17C2ED', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: '#17C2ED' }, textTransform: 'none' }} fullWidth>Get in touch</Button>
                <Button startIcon={<StarOutline/>} variant='outlined' sx={{  marginTop: '10px', textTransform: 'none', backgroundClip: '#17C2ED' }} fullWidth>Save property</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant='p' fontSize={mobileSize ? '20px' : '25px'} fontWeight={600} sx={{ marginBottom: '20px' }}>Home Designs from Burbank Homes</Typography>
        <Box sx={{ display: mobileSize ? 'block' : 'none', marginTop: '10px' }}>
          <Button onClick={handleOpenAndCloseModalFilter} variant='outlined' startIcon={<Tune/>} sx={{ textTransform: 'none', width: '107px', height: '40px', borderRadius: '50px', color: 'black', borderColor: 'black' }}>Filter</Button>
        </Box>
        {/* modal filter */}
        <Modal
          open={modalFilter}
          onClose={handleOpenAndCloseModalFilter}
        >
          <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
            <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'end' }}>
              <IconButton onClick={handleOpenAndCloseModalFilter} size='large'>
                <Close/>
              </IconButton>
            </Box>
            <Box sx={{ height: '90vh', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'space-between', justifyContent: 'space-between' }}>
              <Grid container justifyContent={'center'}>
                <Grid item xs={5} sx={{ marginRight: '10px' }}>
                  <FormControl fullWidth>
                    <label style={{ fontWeight: 600 }} htmlFor="min-price">Min Price</label>
                    <Select
                      id='min-price'
                      value={minPrice}
                      onChange={handleFilterMinPrice}
                    >
                      <MenuItem value={'any'}>Any</MenuItem>
                      <MenuItem value={150000}>$150.000</MenuItem>
                      <MenuItem value={200000}>$200.000</MenuItem>
                      <MenuItem value={250000}>$250.000</MenuItem>
                      <MenuItem value={300000}>$300.000</MenuItem>
                      <MenuItem value={350000}>$350.000</MenuItem>
                      <MenuItem value={400000}>$400.000</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={5}>
                  <FormControl fullWidth>
                    <label style={{ fontWeight: 600 }} htmlFor="max-price">Max Price</label>
                    <Select
                      id='max-price'
                      value={maxPrice}
                      onChange={handleFilterMaxPrice}
                    >
                      <MenuItem value={'any'}>Any</MenuItem>
                      <MenuItem value={150000}>$150.000</MenuItem>
                      <MenuItem value={200000}>$200.000</MenuItem>
                      <MenuItem value={250000}>$250.000</MenuItem>
                      <MenuItem value={300000}>$300.000</MenuItem>
                      <MenuItem value={350000}>$350.000</MenuItem>
                      <MenuItem value={400000}>$400.000</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={5} sx={{ marginRight: '10px', marginTop: '10px' }}>
                  <FormControl fullWidth>
                    <label style={{ fontWeight: 600 }} htmlFor="min-price">Beds</label>
                    <Select
                      id='beds'
                      value={beds}
                      onChange={handleFilterBeds}
                    >
                      <MenuItem value={'any'}>Any</MenuItem>
                      <MenuItem value={'3+'}>3+</MenuItem>
                      <MenuItem value={'4+'}>4+</MenuItem>
                      <MenuItem value={'5+'}>5+</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={5} sx={{ marginTop: '10px' }}>
                  <FormControl fullWidth>
                    <label style={{ fontWeight: 600 }} htmlFor="min-price">Bath</label>
                    <Select
                      id='bath'
                      value={bath}
                      onChange={handleFilterBaths}
                    >
                      <MenuItem value={'any'}>Any</MenuItem>
                      <MenuItem value={'3+'}>3+</MenuItem>
                      <MenuItem value={'4+'}>4+</MenuItem>
                      <MenuItem value={'5+'}>5+</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={5} sx={{ marginRight: '10px', marginTop: '10px' }}>
                  <FormControl fullWidth>
                    <label style={{ fontWeight: 600 }} htmlFor="cars">Cars</label>
                    <Select
                      id='cars'
                      value={cars}
                      onChange={handleFilterCars}
                    >
                      <MenuItem value={'any'}>Any</MenuItem>
                      <MenuItem value={'1+'}>1+</MenuItem>
                      <MenuItem value={'2+'}>2+</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={5} sx={{ marginTop: '10px' }}>
                  <FormControl fullWidth>
                    <label style={{ fontWeight: 600 }} htmlFor="min-price">Storeys</label>
                    <Select
                      id='storeys'
                      value={storeys}
                      onChange={handleFilterStoreys}
                    >
                      <MenuItem value={'any'}>Any</MenuItem>
                      <MenuItem value={'3+'}>3+</MenuItem>
                      <MenuItem value={'4+'}>4+</MenuItem>
                      <MenuItem value={'5+'}>5+</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button variant='contained' sx={{ textTransform: 'none', height: '48px', width: '332px' }}>Search</Button>
            </Box>
          </Box>
        </Modal>
        <Box sx={{ display: mobileSize ? 'none' : 'block' }}>
          <FormControl sx={{ marginTop: '20px', marginRight: '10px' }}>
            <InputLabel id='min-price'>Min Price</InputLabel>
            <Select
              labelId='min-price'
              value={minPrice}
              sx={{ width: '150px', borderColor: 'black', borderRadius: '30px' }}
              label='Min Price'
              onChange={handleFilterMinPrice}
            >
              <MenuItem value={'any'}>Any</MenuItem>
              <MenuItem value={150000}>$150.000</MenuItem>
              <MenuItem value={200000}>$200.000</MenuItem>
              <MenuItem value={250000}>$250.000</MenuItem>
              <MenuItem value={300000}>$300.000</MenuItem>
              <MenuItem value={350000}>$350.000</MenuItem>
              <MenuItem value={400000}>$400.000</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: '20px', marginRight: '10px' }}>
            <InputLabel id='max-price'>Max Price</InputLabel>
            <Select
              labelId='max-price'
              value={maxPrice}
              sx={{ width: '150px', borderColor: 'black', borderRadius: '30px' }}
              label='Max Price'
              onChange={handleFilterMaxPrice}
            >
              <MenuItem value={'any'}>Any</MenuItem>
              <MenuItem value={200000}>$200.000</MenuItem>
              <MenuItem value={250000}>$250.000</MenuItem>
              <MenuItem value={300000}>$300.000</MenuItem>
              <MenuItem value={350000}>$350.000</MenuItem>
              <MenuItem value={400000}>$400.000</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: '20px', marginRight: '10px' }}>
            <InputLabel id='max-price' sx={{ textAlign: 'center' }}>Beds</InputLabel>
            <Select
              labelId='max-price'
              value={beds}
              sx={{ width: '150px', borderColor: 'black', borderRadius: '30px' }}
              label='Beds'
              onChange={handleFilterBeds}
            >
              <MenuItem value={'any'}>Any</MenuItem>
              <MenuItem value={'3+'}>3+</MenuItem>
              <MenuItem value={'4+'}>4+</MenuItem>
              <MenuItem value={'5+'}>5+</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: '20px', marginRight: '10px' }}>
            <InputLabel id='max-price' sx={{ textAlign: 'center' }}>Baths</InputLabel>
            <Select
              labelId='max-price'
              value={bath}
              sx={{ width: '150px', borderColor: 'black', borderRadius: '30px' }}
              label='Baths'
              onChange={handleFilterBaths}
            >
              <MenuItem value={'any'}>Any</MenuItem>
              <MenuItem value={'3+'}>3+</MenuItem>
              <MenuItem value={'4+'}>4+</MenuItem>
              <MenuItem value={'5+'}>5+</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: '20px', marginRight: '10px' }}>
            <InputLabel id='max-price' sx={{ textAlign: 'center' }}>Cars</InputLabel>
            <Select
              labelId='max-price'
              value={cars}
              sx={{ width: '150px', borderColor: 'black', borderRadius: '30px' }}
              label='Cars'
              onChange={handleFilterCars}
            >
              <MenuItem value={'any'}>Any</MenuItem>
              <MenuItem value={'1+'}>1+</MenuItem>
              <MenuItem value={'2+'}>2+</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: '20px', marginRight: '10px' }}>
            <InputLabel id='max-price' sx={{ textAlign: 'center' }}>Storeys</InputLabel>
            <Select
              labelId='max-price'
              value={storeys}
              sx={{ width: '150px', borderColor: 'black', borderRadius: '30px' }}
              label='Storeys'
              onChange={handleFilterStoreys}
            >
              <MenuItem value={'any'}>Any</MenuItem>
              <MenuItem value={'1'}>1</MenuItem>
              <MenuItem value={'2'}>2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Grid container sx={{ marginTop: '20px' }}>
            {dataHomeDesign.slice(0, 8).map(d => (
              <Grid key={d} item xs={mobileSize ? 12 : 3}>
                <Card sx={{ maxWidth: '100%', width: mobileSize ? '100%' : 260, borderRadius: '10px', marginBottom: '20px', cursor: 'pointer', marginRight: '20px', display: mobileSize ? 'flex' : 'block' }}>
                  <CardMedia
                    sx={{ height: mobileSize ? 140 : 180, width: mobileSize ? 200 : '100%' }}
                    image={veryBigBrandHero}
                    component={mobileSize ? 'img' : ''}
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
          <Button variant='outlined' sx={{ width: mobileSize ? '100%' : '275px', height: mobileSize ? '48px' : '40px', borderColor: '#3D3B40', color: '#3D3B40', textTransform: 'none', fontWeight: 600 }}>View all (10)</Button>
        </Box>
        <Box sx={{ boxShadow: 2, marginTop: '20px' }}>
          <Grid container sx={{ flexDirection: mobileSize ? 'column-reverse' : 'row' }}>
            <Grid item xs={mobileSize ? 12 : 4} sx={{ padding: '15px' }}>
              <Typography variant='h5' fontWeight={600}>Find a display home</Typography>
              <Box sx={{ marginTop: '30px', maxHeight: '300px', overflowY: 'auto' }}>
                <Box sx={{ display: openDisplayHome ? 'none' : 'block' }}>
                  {displayHome.map(d => (
                    <Box onClick={handleOpenDisplayHome} sx={{ border: '1px solid #eaeaea', borderRadius: '5px', padding: '10px', cursor: 'pointer', marginBottom: '10px' }}>
                      <Typography fontWeight={600}>Vista Estate</Typography>
                      <Typography>Espial Street, Seaford Heights, SA 5169</Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ display: openDisplayHome ? 'block' : 'none' }}>
                  <Link onClick={handleOpenDisplayHome} sx={{ color: 'black', textDecorationColor: 'black' }}>Back to list</Link>
                  <Typography fontWeight={600} fontSize={20} marginTop={2}>Vista Estate</Typography>
                  <Typography fontSize={16}>Espial Street, Seaford Heights, SA 5169</Typography>
                  {/* Open hours section */}
                  <Typography fontSize={16} marginTop={2} fontWeight={600}>Open today</Typography>
                  <Box onClick={handleOpenAndCloseOpenHours} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <Typography color={'#17c2ed'} textTransform={'uppercase'} fontWeight={600} fontSize={12}>hide open hours</Typography>
                    <KeyboardArrowDown sx={{ color: '#17c2ed' }} id='open-hours-arrow'/>
                  </Box>
                  <Box sx={{ border: '1px solid #eaeaea', borderRadius: '10px', display: showOpenHours ? 'block' : 'none' }}>
                    {displayHome.map(d => (
                      <Box key={d} sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', border: '1px solid #eaeaea', backgroundColor: '#F7F8F9', padding: 2 }}>
                        <Typography>Saturday</Typography>
                        <Typography>12:00 pm - 5:00 pm</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography fontSize={14} marginTop={2} fontWeight={600}>Designs featured at this display centre</Typography>
                  <Typography fontSize={14} color={'#726e75'}>Clark 222, Butler 298</Typography>

                  <Button variant='contained' sx={{ height: '48px', backgroundColor: '#17c2ed', boxShadow: 'none', marginTop: 2, textTransform: 'none', ':hover': { backgroundColor: '#17c2ed' } }} fullWidth>Enquire now</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={mobileSize ? 12 : 8}>
              <Maps mobileSize={mobileSize}/>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: '20px', boxShadow: 2, padding: mobileSize ? '10px' : '40px' }}>
          <Grid container>
            <Grid item xs={mobileSize ? 12 : 5}>
              <Grid container sx={{ flexDirection: mobileSize ? 'row-reverse' : 'row' }}>
                <Grid item>
                  <img src={builderIcon} alt="icon-request-information-pack" width={'120px'} />
                </Grid>
                <Grid item xs={mobileSize ? 8 : 7} sx={{ width: '330px', marginLeft: mobileSize ? '0px' : '30px' }}>
                  <Typography sx={{ marginBottom: '20px' }} variant='h5' fontWeight={600}>Request your free information pack</Typography>
                  <Typography variant='p'>Leave in your details and we will send you the full information pack from Burbank Homes</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider orientation='vertical' />
            </Grid>
            <Grid item xs={mobileSize ? 12 : 6} sx={{ marginLeft: mobileSize ? '0px' : '30px' }}>
              <Grid container justifyContent={'space-between'}>
                <Grid item xs={mobileSize ? 12 : 6}>
                  <FormControl sx={{ width: mobileSize ? '100%' : '255px' }}>
                    <label style={{ fontWeight: 600 }} htmlFor="name">Name</label>
                    <TextField id='name' size='small' sx={{ borderRadius: '20px', marginTop: '5px', width: mobileSize ? '100%' : '255px' }} placeholder='Your name'/>
                  </FormControl>
                </Grid>
                <Grid item xs={mobileSize ? 12 : 6}>
                  <FormControl sx={{ width: mobileSize ? '100%' : '255px' }}>
                    <label style={{ fontWeight: 600 }} htmlFor="email">Email</label>
                    <TextField id='email' size='small' sx={{ borderRadius: '20px', marginTop: '5px', width: mobileSize ? '100%' : '255px' }} placeholder='Your email'/>
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl sx={{ marginLeft: '5px', marginY: '10px' }}>
                <RadioGroup row>
                  <FormControlLabel value="female" control={<BpRadio />} label="I'm interested in buying" />
                  <FormControlLabel value="male" control={<BpRadio />} label="I'm exploring options" />
                </RadioGroup>
                <Button variant='contained' sx={{ textTransform: 'none', backgroundColor: '#3d3b40', width: mobileSize ? '100%' : '253px', height: '48px', '&:hover': '#3d3b40', marginTop: '10px' }}>Get information pack</Button>
                <Link onClick={handleOpenPersonalInformation} sx={{ cursor: 'pointer', color: '#697684', textDecorationColor: '#697684', marginTop: '20px' }}>Personal Information Collection Statement</Link>
                <Typography display={isExpand ? 'block' : 'none'} marginTop={'10px'} color={'#697684'} fontSize={'14px'} variant='p'>Your personal information will be passed to the Agent so they may contact you about your property enquiry. They are required not to use your information for any other purpose. Our <Link sx={{ color: '#697684', textDecorationColor: '#697684' }}>Privacy Policy</Link> explains how we store personal information and how you may access, correct or complain about the handling of personal information.</Typography>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant='h5' fontWeight={600}>Properties by Burbank Homes</Typography>
          <Typography color={'#697684'} marginTop={'40px'}>The property lists contain all properties Burbank Homes have sold and listed on realestate.com.au. It may not contain off-market and private listings, properties with unknown sold dates and listings that may be exclusively listed on other websites.</Typography>
          <Tabs value={tabProperties} onChange={handleChangeTabProperties} sx={{ marginBottom: '10px' }}>
            <Tab sx={{ textTransform: 'none' }} value={'for-sale'} label="For sale" />
            <Tab sx={{ textTransform: 'none' }} value={'sold'} label="Sold" />
            <Tab sx={{ textTransform: 'none' }} value={'for-rent'} label="For rent" />
          </Tabs>
          <TabPropertiesBuilder value={tabProperties} mobileSize={mobileSize} data={propertiesForSale} tab='for-sale'/>
          <TabPropertiesBuilder value={tabProperties} mobileSize={mobileSize} data={propertiesSold} tab='sold'/>
          <TabPropertiesBuilder value={tabProperties} mobileSize={mobileSize} data={propertiesForRent} tab='for-rent'/>
        </Box>
      </Container>
      <Box id='floating-button-enquire' sx={{ zIndex: 1, display: mobileSize ? 'flex' : 'none', justifyContent: 'space-evenly', alignItems: 'center', height: '80px', width: '100%', backgroundColor: 'white', position: 'fixed', bottom: 0, boxShadow: 5 }}>
        <Button variant='contained' sx={{ width: '178px', height: '48px', textTransform: 'none', backgroundColor: '#17C2ED', fontWeight: 600 }}>Enquire</Button>
        <Button variant='outlined' sx={{ width: '178px', height: '48px', textTransform: 'none', borderColor: 'black', color: 'black', fontWeight: 600  }}>Call</Button>
      </Box>
      <Box id='inquire-form' sx={{ backgroundColor: '#F6F5F7', paddingY: '10px', marginTop: '20px' }}>
        <Container sx={{ marginY: '20px', display: 'flex', justifyContent: 'center' }}>
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
                <Button color='inherit' variant='contained' sx={{ width: '100%', backgroundColor: '#17C2ED', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: 'red' }, textTransform: 'none', padding: '10px' }} fullWidth>Next step: property preferences</Button>
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
