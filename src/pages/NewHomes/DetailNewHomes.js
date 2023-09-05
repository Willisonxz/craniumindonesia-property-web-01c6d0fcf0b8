import React, {  useState } from 'react'
import '../../styles/new-homes.css'
import NavbarNewHomes from './components/NavbarNewHomes'
import ImageViewer from 'react-simple-image-viewer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { branchExample, detailExample, bannerNewApartment, bannerNewBuilder, completedDevelopmentExample, avatarExample, listSample, bannerBrandSide, Video, Camera, Share, DoraExplorer } from './assets'
import { IconButton, Box, Container, Fab, Grid, Link, Typography, Card, CardContent, Button, CardMedia, Chip, Divider, Accordion, AccordionSummary, AccordionDetails, FormControl, InputAdornment, TextField, Tab, Tabs, Table, TableContainer, Paper, TableCell, TableRow, TableBody, FormControlLabel, Checkbox, FormGroup, Select, MenuItem, Radio, RadioGroup, Tooltip, useMediaQuery, Modal, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemButton } from '@mui/material'
import { Close, StarOutline, ChatBubbleOutline, Home, Apartment, KeyboardArrowUp, KeyboardArrowRight, KeyboardArrowDown, ExpandMore, Article, Email, Launch, Bed, Bathtub, DirectionsCar, Straighten, Info, Facebook, Twitter, Mail, LinkSharp, Star } from '@mui/icons-material'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BedIcon, SizeIcon, BathtubIcon, CarIcon } from '../../assets/icons';
import Slider from 'react-slick'
import prevIcon from "../../assets/prev_logo.svg"
import nextIcon from "../../assets/next_logo.svg"
import Footer from '../../components/Footer'
import QuickSearch from '../../components/QuickSearch'

export default function DetailNewHomes(props) {
  const [ id_project ]            = useState(window.location.href.split('/').pop())
  const [ openMenu, setOpenMenu ] = useState(false)
  const [ open, setOpen ]           = useState(false);
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
  const [ news ] = useState([
    {
      title: 'State-by-state guide to first home buyers grants',
      content: 'There are 22 properties in Tallow Residences Apartments.',
      durationRead: '3 min read'
    },
    {
      title: 'When will a body corporate pay for things?',
      content: 'Tallow Residences Apartments has properties with 3 bedrooms, 2 bathrooms.',
      durationRead: '5 min read'
    },
    {
      title: '21 investment property tax deductions',
      content: 'Yes, Tallow Residences Apartments offers a swimming pool for its residents.',
      durationRead: '8 min read'
    },
    {
      title: '21 investment property tax deductions',
      content: 'Yes, Tallow Residences Apartments offers a swimming pool for its residents.',
      durationRead: '8 min read'
    }
  ])
  const [ currentFacilitiesTab, setCurrentFacilitiesTab ] = useState('primary')
  const [ openShareModal, setOpenShareModal ]             = useState(false)
  const [ savedProperty, setSavedProperty ]               = useState(false)
  const [ readDescription, setReadDescription ]           = useState(false)    
  const [ readAbout, setReadAbout ]                       = useState(false)  
  
  const settings = {
    dots: false,
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:<img src={prevIcon} style={{  }} alt='prevIconNews'/>,
    nextArrow:<img src={nextIcon} alt='nestIconNews'/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const mobileSize = useMediaQuery('(max-width: 700px)')

  const handleOpenShareModal = () => {
    setOpenShareModal(!openShareModal)
  }

  const openAndCloseAccordion = (panel) => (event, isExpanded) => {
    setIsExpandAccordion(isExpanded ? panel : false);
  };

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

  const handleSavedProperty = e => {
    setSavedProperty(e.target.checked)
  }

  const handleReadMoreAndLessDescription = () => {
    setReadDescription(!readDescription)
  }

  const handleReadMoreAndLessAbout = () => {
    setReadAbout(!readAbout)
  }

  return (
    <>
      <NavbarNewHomes open={open} openMenu={openMenu} handleOpenMenu={handleOpenMenu} handleMenuItem={handleMenuItem} display={openImage} route={props.route} id_project={id_project}/>
      <Box id="brand-sticky" sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'black',
        height: '65px',
        marginTop: '107px',
        position: 'sticky',
        top: 0,
        zIndex: '1'
      }}>
        <img src={branchExample} alt="brand" />
      </Box>
      <Box sx={{
        backgroundColor: '#F6F5F7'
      }}>
        <Container sx={{ position: 'relative' }}>
          <img src={detailExample} alt="detail image" width="100%"/>
          {/* web size bottom 30px left 25vw */}
          <Fab variant='extended' sx={{ background: 'white', position: 'absolute', bottom: mobileSize ? '20px' : '30px', left: '40%', zIndex: 0, width: mobileSize ? '105px' : '205px', height: '40px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }} onClick={openAndCloseListImage}>
            <Box sx={{ display: 'flex', alignItems: 'center', ':hover': { background: '#eaeaea' }, width: '100%', height: '100%' }}>
              <img src={Camera} width='16px' height='16px' />
              <Typography sx={{ fontSize: '14px', textTransform: 'none', marginLeft: '5px' }}>
                5 {mobileSize ? "" : "images"}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', ':hover': { background: '#eaeaea' }, width: '100%', height: '100%' }}>
              <img src={Video} width='16px' height='16px' />
              <Typography sx={{ fontSize: '14px', textTransform: 'none', marginLeft: '5px' }}>
                5 {mobileSize ? "" : "video"}
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
      <Box sx={{ marginTop: '24px' }}>
        <Container>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '50px' }}>
            <Grid item xs={mobileSize ? 12 : 8} sx={{ width: mobileSize ? '100%' : '90%' }}>
              <Typography sx={{
                  fontSize: '24px',
                  fontWeight: 600,
                  width: mobileSize ? '400px' : '90%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginLeft: mobileSize ? '-55px' : '0px'
                }}
              >
                Wicks Place
                <Box sx={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                  <img onClick={handleOpenShareModal} src={Share} width='18px' height='18px' style={{ marginRight: '5px', cursor: 'pointer' }} />
                  <Checkbox onChange={handleSavedProperty} checked={savedProperty} icon={<StarOutline fontSize='25px'/>} checkedIcon={<Star fontSize='25px' sx={{ color: '#fcca36' }}/>}/> 
                </Box>
                 {/* modal share */}
                <Modal
                  open={openShareModal}
                  onClose={handleOpenShareModal}
                  sx={{ display: 'flex', alignItems:'center', justifyContent:'center' }}
                >
                  <Box sx={{ width: '450px', height: '388px', backgroundColor: 'white', borderRadius: '10px', outline: 'none' }}>
                    <Container>
                      <Box sx={{ width: '100%', position: 'relative' }}>
                        <IconButton onClick={handleOpenShareModal} size='large' sx={{ position: 'absolute', top: 5, right: 5 }}>
                          <Close fontSize='30px'/>
                        </IconButton>
                      </Box>
                      <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                        <Typography position={'absolute'} top={30} fontSize={'20px'} fontWeight={600}>Share this listing</Typography>
                        <List sx={{ position: 'absolute', top: 60, width: '100%' }}>
                          <ListItem sx={{ width: '100%' }}>
                            <ListItemButton href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.realestate.com.au%2Fproject%2Fvictoria-tower-adelaide-600033446' target='blank'>
                              <ListItemAvatar>
                                <Avatar>
                                  <Facebook />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Facebook" sx={{ fontSize: '16px', color: '#00639e', fontWeight: 600 }}/>
                            </ListItemButton>
                          </ListItem>
                          <ListItem sx={{ width: '100%' }}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar>
                                  <Twitter />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Twitter" sx={{ fontSize: '16px', color: '#00639e', fontWeight: 600 }}/>
                            </ListItemButton>
                          </ListItem>
                          <ListItem sx={{ width: '100%' }}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar>
                                  <Mail />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Email" sx={{ fontSize: '16px', color: '#00639e', fontWeight: 600 }}/>
                            </ListItemButton>
                          </ListItem>
                          <ListItem sx={{ width: '100%' }}>
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar>
                                  <LinkSharp />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary="Link copied" sx={{ fontSize: '16px', color: '#00639e', fontWeight: 600 }}/>
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </Box>
                    </Container>
                  </Box>
                </Modal>
              </Typography>
              <Box sx={{ width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Typography sx={{ fontSize: '16px', color: '#868389', marginBottom: '10px' }}>9 Dequetteville Terrace, Kent Town, SA 5067</Typography>
                <Link href='#maps' variant='body1' underline='none' sx={{ fontWeight: 600 }}>View on map</Link>
                <Typography variant='h5' sx={{ fontWeight: 600, marginTop: '10px' }}>$892,000 to $2,950,000</Typography>
              </Box>
              <hr style={{ width: '90%', color: '#3d3b40' }}/>
              <Grid sx={{ marginTop: '20px', display: 'flex', flexDirection: mobileSize ? 'column' : 'row', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Grid item xs={mobileSize ? 12 : 6}>
                  <Box>
                    <Box sx={{ display: 'flex' }}>
                      <ChatBubbleOutline sx={{  color: '#868389' }}/>
                      <Typography sx={{ fontSize: '12px', color: '#868389', marginLeft: '10px', letterSpacing: '2px', fontWeight: 600 }}>DISPLAY LOCATION</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#868389', textIndent: '30px' }}>220 Fullarton Road, Glenside, SA 5065</Typography>
                    <Link href="#contact" sx={{ textIndent: '30px', fontWeight: 600, display: 'block', marginTop: '10px' }} underline='none'>Contact for appointment options</Link>
                  </Box>
                  <Box sx={{ marginTop: '20px' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Home sx={{  color: '#868389' }}/>
                      <Typography sx={{ fontSize: '12px', color: '#868389', marginLeft: '10px', letterSpacing: '2px', fontWeight: 600 }}>PROPERTY TYPES</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#868389', textIndent: '30px' }}>Apartment</Typography>
                  </Box>
                </Grid>
                <Grid item xs={mobileSize ? 12 : 6} sx={{ marginLeft: mobileSize ? '0px' : '50px', marginTop: mobileSize ? '20px' : '0px' }}>
                  <Box>
                    <Box sx={{ display: 'flex' }}>
                      <Apartment sx={{  color: '#868389' }}/>
                      <Typography sx={{ fontSize: '12px', color: '#868389', marginLeft: '10px', letterSpacing: '2px', fontWeight: 600 }}>DISPLAY LOCATION</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#868389', textIndent: '30px' }}>59 properties</Typography>
                    <Link href='#properties' sx={{ textIndent: '30px', fontWeight: 600, display: 'block', marginTop: '10px' }} underline='none'>View listed properties</Link>
                  </Box>
                </Grid>
              </Grid>
              <hr style={{ width: '90%', color: '#3d3b40' }}/>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                  <Typography component='h1' variant={mobileSize ? 'h5' : 'h4'} fontWeight={700}>A prestigious over 55s community - Construction has commenced!</Typography>
                  <Box sx={{ height: readDescription ? '100%' : '200px', overflowY: readDescription ? 'none' : 'hidden' }}>
                    <ul style={{ width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-30px' : '-30px' }}>
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
              <hr style={{ width: '90%', color: '#3d3b40' }}/>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Typography variant='p' fontWeight={600} fontSize='20px'>Learn about Bloom</Typography>
                <Box sx={{ height: readAbout ? '100%' : '200px', overflowY: readAbout ? 'none' : 'hidden' }}>
                  <ul style={{ width: '90%', marginLeft: '-30px' }}>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Surrounded by parklands and situated in a maintenance-free, botanical garden setting</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Exclusive amenities await with a resort-like swimming pool, beautiful private dining room, wine storage, library and elevated community garden</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>SA choice of spacious 1, 2 and 3 bedroom architecturally designed apartments</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Residents will enjoy a vibrant and active edge-of-city lifestyle within walking distance of Adelaide’s most desirable restaurants, cafes, fashion stores, shops and supermarkets</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Benefit from lifestyle concierge services including coordination of shopping, restaurant bookings, social gatherings, arts and event bookings, cleaning, pet care, dog walking and vehicle care and maintenance</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Meticulously finished apartments featuring generous balconies, stone benchtops, Smeg appliances, plus more</li>
                    <li style={{ fontWeight: 400, fontSize: '16px', color: '#868389', lineHeight: '24px' }}>Add your own personal touch with options including a choice of three colour scheme, a range of luxurious finishes, additional appliances, and flooring upgrades</li>
                  </ul>
                </Box>
                <Link onClick={handleReadMoreAndLessAbout} sx={{ display: 'flex', alignContent: 'center' }}>{readAbout ? 'Read less '  : 'Read more '}<KeyboardArrowUp sx={{ display: readAbout ? 'block' : 'none' }}/><KeyboardArrowDown sx={{ display: !readAbout ? 'block' : 'none' }}/></Link>
              </Box>
              <hr style={{ width: '90%', color: '#3d3b40' }}/>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Typography variant='p' fontWeight={600} fontSize='20px'>Team behind Bloom</Typography>
                <Accordion sx={{ marginTop: '10px' }} expanded={isExpandAccordion === 'panel1'} onChange={openAndCloseAccordion('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 600 }}>
                      Developer
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Cedar Woods</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ fontSize: '16px', color: '#868389' }}>
                      For more than 30 years Cedar Woods has worked hard to think ahead, evolving our designs to always respond to the changing world in which we live, creating meaningful places that inspire connection and help us grow.
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#868389', marginTop: '10px', letterSpacing: '1px', fontWeight: 600 }}>COMPLETED DEVELOPMENTS</Typography>
                    <Grid container>
                      {completedDevelopments.map(d => (
                        <Grid item lg={6} sx={{ marginTop: '20px' }}>
                          <Card sx={{ maxWidth: 272, boxShadow: 'none' }}>
                            <CardMedia
                              sx={{ height: 150, width: 272 }}
                              image={completedDevelopmentExample}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="p" component="div" fontWeight={600}>
                                Batavia Marina
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                New Apartments
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                3-7 Forrest Street, Geraldton, WA 6530
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                    <Link sx={{ display: 'flex', alignContent: 'center' }}>Read less <KeyboardArrowUp /></Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={isExpandAccordion === 'panel2'} onChange={openAndCloseAccordion('panel2')}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 600 }}>
                      Sales team
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Cedar Woods</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="sales-avatar" style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', width: '130px' }}>
                      <div style={{
                        backgroundImage: `url(${avatarExample})`,
                        backgroundSize: 'cover',
                        borderRadius: '100%',
                        width: '130px',
                        height: '130px'
                      }}>
                      </div>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Keiran Spencer
                      </Typography>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={isExpandAccordion === 'panel3'}>
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '32%', flexShrink: 0, fontWeight: 600 }}>
                      Builder
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Sarah Constructions Pty Ltd</Typography>
                  </AccordionSummary>
                </Accordion>
                <Accordion expanded={isExpandAccordion === 'panel4'}>
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '32%', flexShrink: 0, fontWeight: 600 }}>
                      Architect
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Hames Sharley</Typography>
                  </AccordionSummary>
                </Accordion>
              </Box>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35483.602388181636!2d112.9730386860465!3d-7.9433246201062735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sGn.%20Bromo!5e0!3m2!1sid!2sid!4v1690248058390!5m2!1sid!2sid" width="100%" height="300px" style={{ border: 0, marginTop: '20px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <Grid sx={{ marginTop: '20px', display: 'flex', flexDirection: mobileSize ? 'column' : 'row' }}>
                  <Grid item xs={mobileSize ? 12 : 6}>
                    <Box>
                      <Typography sx={{ fontSize: '12px', color: '#868389', letterSpacing: '2px', fontWeight: 600 }}>DISPLAY LOCATION</Typography>
                      <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#868389' }}>220 Fullarton Road, Glenside, SA 5065</Typography>
                      <Link sx={{ fontWeight: 600, display: 'flex', marginTop: '10px' }} underline='none'>Get direction<Launch/></Link>
                    </Box>
                  </Grid>
                  <Grid item xs={mobileSize ? 12 : 6} sx={{ marginLeft: mobileSize ? '0px' : '50px', marginTop: mobileSize ? '10px' : '0px' }}>
                    <Box>
                      <Typography sx={{ fontSize: '12px', color: '#868389', letterSpacing: '2px', fontWeight: 600 }}>DISPLAY SUITE LOCATION</Typography>
                      <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#868389' }}>69 King William Street, Kent Town, SA 5067</Typography>
                      <Link sx={{ fontWeight: 600, display: 'flex', marginTop: '10px' }} underline='none'>Get direction<Launch/></Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
              <hr style={{ color: '#3d3b40' }}/>
                <Typography sx={{ fontSize: '12px', color: '#868389', letterSpacing: '2px', fontWeight: 600, marginTop: '20px' }}>DISPLAY LOCATION</Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#868389' }}>69 King William Street, Kent Town, SA 5067</Typography>
                <Button color='inherit' variant='contained' sx={{ width: mobileSize ? '100%' : '250px', fontSize: '16px', backgroundColor: '#17C2ED', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: 'red' }, textTransform: 'none', marginTop: '20px' }} fullWidth>Request an appointment</Button>
              </Box>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }} id="properties">
              <hr style={{ color: '#3d3b40' }}/>
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
              <hr style={{ width: '90%', color: '#3d3b40' }}/>
              <Box sx={{ width: mobileSize ? '100%' : '90%' }}>
                <Typography fontSize={'16px'} fontWeight={600} marginY={'20px'}>Recommended articles</Typography>
                <Slider {...settings}>
                  {news.map(d => (
                    <Card key={d} sx={{ width: 280, height: 230 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={listSample}
                      />
                      <CardContent>
                        <Typography fontSize={'14px'} fontWeight={500}>
                          {d.title}
                        </Typography>
                        <Typography fontSize={'14px'} variant="body2" color="text.secondary">
                          {d.durationRead}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Slider>
              </Box>
              <hr style={{ width: '90%', color: '#3d3b40' }}/>
              <Box sx={{ width: mobileSize ? '100%' : '90%' }}>
                <Typography fontSize={'20px'} fontWeight={600} marginY={'20px'}>Discover insights for Adelaide</Typography>
                <Grid container sx={{ backgroundColor: '#F6F5F7', borderRadius: '10px', padding: '20px', display: 'flex', justifyContent: 'space-between', width: '500px' }}>
                  <Grid item xs={1}>
                    <img src={DoraExplorer} width={'40px'} height={'40px'} />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontSize={'14px'} color={'#3d3b40'} > 
                      Elevate your property journey with the latest Adelaide market insights.
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant='outlined' sx={{ textTransform: 'none', borderColor: '#3d3b40', color: '#3d3b40' }}>Explore Adelaide</Button>
                  </Grid>
                </Grid>
              </Box>
              <hr style={{ width: '90%', color: '#3d3b40' }}/>
              <Box sx={{ marginTop: '20px', width: mobileSize ? '400px' : '90%', marginLeft: mobileSize ? '-55px' : '0px' }}>
                <Typography variant='p' fontWeight={600} fontSize='20px'>Nearby schools & child care</Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={currentFacilitiesTab} onChange={changeTabFacilities} aria-label="basic tabs example">
                    <Tab label="Primary" value='primary' sx={{ textTransform: 'none' }}/>
                    <Tab label="Secondary" value='secondary' sx={{ textTransform: 'none' }}/>
                    <Tab label="Child care" value='child_care' sx={{ textTransform: 'none' }}/>
                  </Tabs>
                  <TabFacilities value='primary' current={currentFacilitiesTab} facilities={facilities.primary}/>
                  <TabFacilities value='secondary' current={currentFacilitiesTab} facilities={facilities.secondary}/>
                  <TabFacilities value='child_care' current={currentFacilitiesTab} facilities={facilities.child_care}/>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={mobileSize ? 1 : 4} sx={{ display: mobileSize ? 'none' : 'block' }}>
              <Card sx={{ width: '300px', borderRadius: '10px', position: 'sticky', top: '90px', zIndex: '0' }}>
                <CardMedia 
                  image={branchExample}
                  sx={{ height: '35px', backgroundColor: 'black' }}
                />
                <CardContent >
                  <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 600 }} component="b">
                    Get in touch with a consultant today.
                  </Typography>
                  <Chip label='0812 9878 9399' variant='outlined' sx={{ marginTop: '10px' }}/><br/>
                  <Button color='inherit' variant='contained' sx={{ backgroundColor: 'red', marginTop: '20px', fontWeight: 600, color: '#fff', ":hover": { backgroundColor: 'red' }, textTransform: 'none' }} fullWidth>Get in touch</Button>
                  <Button color='inherit' startIcon={<Checkbox checked={savedProperty} onChange={handleSavedProperty} icon={<StarOutline fontSize='25px'/>} checkedIcon={<Star fontSize='25px' sx={{ color: '#fcca36' }}/>}/>} variant='outlined' sx={{  marginTop: '10px', textTransform: 'none' }} fullWidth>Save property</Button>
                </CardContent>
                <CardContent sx={{ backgroundColor: '#F6F5F7', display: 'block' }}>
                  <Typography gutterBottom variant="body2" sx={{ fontSize: '14px', fontWeight: 600 }} component="b">
                    Want to know more?
                  </Typography>
                  <Typography sx={{ fontSize: '14px', color: '#868389', marginBottom: '10px' }}>
                    Receive the complete Bloom information kit
                  </Typography>
                  <Button color='inherit' variant='outlined' sx={{  marginTop: '10px', textTransform: 'none' }} fullWidth size='small'>Get Information kit</Button>
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
