import React, { useState } from 'react'
import { FormControl, Checkbox, AppBar, Container, useMediaQuery, TextField, InputAdornment, Button, Modal, Box, Typography, IconButton, FormGroup, FormControlLabel, Divider, Card, CardMedia, CardContent, CardActions, Grid, Tabs, Tab, Select, MenuItem } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos, Close, KeyboardArrowLeft, KeyboardArrowRight, Search, Tune } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import NavbarBuildersAndHomeDesign from './components/NavbarBuildersAndHomeDesign'
import { brandLogo, veryBigBrandHero } from './assets'
import Footer from '../../components/Footer'
import QuickSearch from '../../components/QuickSearch'

function TabFilterBuilder(props) {
  return (
    <div hidden={props.value !== props.tab}>
      <Box sx={{ display: props.tab === 'builder' }}>
        <Typography variant='h6' fontWeight={600} marginTop={'10px'}>Builder Type</Typography>
        <FormGroup sx={{ marginLeft: '10px' }}>
          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'renovation_builder'} checked={props.builderFilter.renovation_builder} onChange={props.handleChangeFilterCheckbox} />} label='Renovation builder'/>
          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'custom_home_builder'} checked={props.builderFilter.custom_home_builder} onChange={props.handleChangeFilterCheckbox} />} label='Custom home builder'/>
          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'valume_home_builder'} checked={props.builderFilter.valume_home_builder} onChange={props.handleChangeFilterCheckbox} />} label='Volume home builder'/>
          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'luxury_home_builder'} checked={props.builderFilter.luxury_home_builder} onChange={props.handleChangeFilterCheckbox} />} label='Luxury home builder'/>
          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'knock_down_builder'} checked={props.builderFilter.knock_down_builder} onChange={props.handleChangeFilterCheckbox} />} label='Knock down rebuilder'/>
          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'dual_occupancy_home_builder'} checked={props.builderFilter.dual_occupancy_home_builder} onChange={props.handleChangeFilterCheckbox} />} label='Dual occupancy home builder'/>
        </FormGroup>
      </Box>
    </div>
  )
}

function TabFilterHomeDesign(props) {
  return (
    <div hidden={props.value !== props.tab}>
      <Box sx={{ minHeight: '700px' }}>
        <Typography fontSize={'20px'} fontWeight={600}>Bedrooms</Typography>
        <Grid container>
          <Grid item>
            <FormControl>
              <label htmlFor="minBed">Min</label>
              <Select value={props.minBed} onChange={props.handleChangeMinBed} sx={{ border: '1px solid' }}>
                <MenuItem value={'any'}>Any</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>

          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default function SearchBuilder(props) {
  // states
  const [ openMenu, setOpenMenu ]           = useState(false)
  const [ openModal, setOpenModal ]         = useState(false)
  const [ builderFilter, setBuilderFilter ] = useState({
    renovation_builder: false,
    custom_home_builder: false,
    valume_home_builder: false,
    luxury_home_builder: false,
    knock_down_builder: false,
    dual_occupancy_home_builder: false
  })
  const [ open, setOpen ]                = useState(false)
  const [ dataBuilder, setDataBuilder ]  = useState([1,2,3,4,5,6])
  const [ openImage ]                    = useState(false)
  const [ tabFilter, setTabFilter ]      = useState(props.route === 'new-builder' ? 'builder' : 'home-design')

  const selectedCheckboxFilter = ['all'];

  const mobileSize     = useMediaQuery('(max-width: 700px)')
  const { id_builder, id_home_design } = useParams()
  const [ minBed, setMinBed ]       = useState('any')
  const [ maxBed, setMaxBed ]       = useState('any')
  const [ storeys, setStoreys ]     = useState('any')
  const [ carSpaces, setCarSpaces ] = useState('any')

  const handleChangeMinBed = e => {
    setMinBed(e.target.value)
  }

  const handleChangeMaxBed = e => {
    setMaxBed(e.target.value)
  }

  const handleChangeStoreys = e => {
    setStoreys(e.target.value)
  }

  const handleChangeCarSpaces = e => {
    setCarSpaces(e.target.value)
  }

  const propsFilterTabHomeDesign = {
    handleChangeMinBed,
    minBed
  }

  const handleChangeTabFilter = (e, value) => {
    setTabFilter(value)
  }

  const handleClearFilter = () => {
    setBuilderFilter({
      renovation_builder: false,
      custom_home_builder: false,
      valume_home_builder: false,
      luxury_home_builder: false,
      knock_down_builder: false,
      dual_occupancy_home_builder: false
    })
  }

  const handleMenuItem = () => {
    if (mobileSize) {
      setOpenMenu(!openMenu)
    } else {
      if (!open) {
        document.getElementById("navbar-menu-item").style.display = "block";
        document.getElementById("breadcrumbs-nav").style.top = '157px';
        document.getElementById("submenu-nav").style.top = '107px';
        document.getElementById("filter-nav").style.top = '207px';
        document.getElementById("content").style.marginTop = '287px';
      } else {
        document.getElementById("navbar-menu-item").style.display = "none";
        document.getElementById("submenu-nav").style.top = '57px';
        document.getElementById("breadcrumbs-nav").style.top = '107px';
        document.getElementById("filter-nav").style.top = '157px';
        document.getElementById("content").style.marginTop = '237px';
      }
      setOpen(!open)
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleOpenAndCloseModal = () => {
    setOpenModal(!openModal)
  }

  const redirectDetailBuilder = () => {
    window.location.href = `/project/${props.route}/data`
  }

  const handleChangeFilterCheckbox = e => {
    switch (e.target.value) {
      case 'all':
        setBuilderFilter({
          renovation_builder: false,
          custom_home_builder: false,
          valume_home_builder: false,
          luxury_home_builder: false,
          knock_down_builder: false,
          dual_occupancy_home_builder: false
        })
        break;
      case 'renovation_builder':
        setBuilderFilter({ ...builderFilter, renovation_builder: !builderFilter.renovation_builder })
        selectedCheckboxFilter.push(e.target.value)
        break;
      case 'custom_home_builder':
        setBuilderFilter({ ...builderFilter, custom_home_builder: !builderFilter.custom_home_builder })
        break;
      case 'valume_home_builder':
        setBuilderFilter({ ...builderFilter, valume_home_builder: !builderFilter.valume_home_builder })
        break;
      case 'luxury_home_builder':
        setBuilderFilter({ ...builderFilter, luxury_home_builder: !builderFilter.luxury_home_builder })
        break;
      case 'knock_down_builder':
        setBuilderFilter({ ...builderFilter, knock_down_builder: !builderFilter.knock_down_builder })
        break;
      case 'dual_occupancy_home_builder':
        setBuilderFilter({ ...builderFilter, dual_occupancy_home_builder: !builderFilter.dual_occupancy_home_builder })
        break;
    }
  }

  return (
    <div style={{ backgroundColor: '#F6F5F7' }}>
      <NavbarBuildersAndHomeDesign open={open} openMenu={openMenu} handleOpenMenu={handleOpenMenu} handleMenuItem={handleMenuItem} display={openImage} route={props.route} id_project={props.route === "new-builder" ? id_builder : id_home_design}/>
      <AppBar id='filter-nav' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '72px', position: 'absolute', top: mobileSize ? '107px' : '157px', backgroundColor: 'white', boxShadow: 'none', border: '1px solid #eaeaea' }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField onClick={handleOpenAndCloseModal} variant='standard' value={props.route === "new-builder" ? id_builder : id_home_design} sx={{ padding: '10px', border: 'none', minWidth: mobileSize ? '200px' : '300px', '.MuiOutlinedInput-notchedOutline': { border: 0 } }} InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment style={{ marginRight: '20px' }}>
                <Search />
              </InputAdornment>
            ),
            placeholder: 'Search by region, suburb or postcode'
          }}/>
          <Box onClick={handleOpenAndCloseModal} sx={{ display: props.route === "new-home-design" ? 'block' : 'none' }}>
            <Button sx={{ textTransform: 'none', borderRadius: '100px', height: '40px', width: '132px', maxHeight: '40px', maxWidth: '132px', marginTop: '5px', marginRight: '10px', color: 'grey', borderColor: 'grey !important', display: mobileSize ? 'none' : 'inline' }} variant='outlined'>Beds</Button>
            <Button sx={{ textTransform: 'none', borderRadius: '100px', height: '40px', width: '132px', maxHeight: '40px', maxWidth: '132px', marginTop: '5px', marginRight: '10px', color: 'grey', borderColor: 'grey !important', display: mobileSize ? 'none' : 'inline' }} variant='outlined'>Storeys</Button>
            <Button sx={{ textTransform: 'none', borderRadius: '100px', height: '40px', width: '132px', maxHeight: '40px', maxWidth: '132px', marginTop: '5px', marginRight: '10px', color: 'grey', borderColor: 'grey !important', display: mobileSize ? 'none' : 'inline' }} variant='outlined'>Block width</Button>
            <Button sx={{ textTransform: 'none', borderRadius: '100px', height: '40px', width: '132px', maxHeight: '40px', maxWidth: '132px', marginTop: '5px', marginRight: '10px', color: 'grey', borderColor: 'grey !important', display: mobileSize ? 'none' : 'inline' }} variant='outlined'>House size</Button>
            <Button sx={{ textTransform: 'none', borderRadius: '100px', height: '40px', width: '132px', maxHeight: '40px', maxWidth: '132px', marginTop: '5px', color: 'grey', borderColor: 'grey !important' }} variant='outlined' startIcon={<Tune />}>Filter</Button>
          </Box>
          <Box onClick={handleOpenAndCloseModal} sx={{ display: props.route === "new-builder" ? 'block' : 'none' }}>
            <Button sx={{ textTransform: 'none', borderRadius: '100px', height: '40px', width: '132px', maxHeight: '40px', maxWidth: '132px', marginTop: '5px', marginRight: '10px', color: 'grey', borderColor: 'grey !important', display: mobileSize ? 'none' : 'inline' }} variant='outlined'>Builder Type</Button>
            <Button sx={{ textTransform: 'none', borderRadius: '100px', height: '40px', width: '132px', maxHeight: '40px', maxWidth: '132px', marginTop: '5px', color: 'grey', borderColor: 'grey !important' }} variant='outlined' startIcon={<Tune />}>Filter</Button>
          </Box>
          <Modal
            open={openModal}
            keepMounted
            sx={{ display: 'flex', alignItems:'center', justifyContent:'center' }}
          >
            <Box sx={{ width: mobileSize ? '100%' : '720px', height: mobileSize ? '100%' : '85vh', backgroundColor: 'white', borderRadius: mobileSize ? 0 : '20px', position: 'relative' }}>
              <Typography marginTop={'20px'} variant='h5' fontWeight={600} textAlign={'center'}>Builder Filter</Typography>
              <IconButton onClick={handleOpenAndCloseModal} size='large' sx={{ float: 'right', marginTop: '-35px', marginRight: '20px' }}>
                <Close />
              </IconButton>
              <Box sx={{ height: '80px', backgroundColor: '#F6F5F7', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TextField value={id_builder} sx={{ minWidth: mobileSize ? '90%' : '600px', height: mobileSize ? '54px' : '48px', borderColor: 'black', backgroundColor: 'white', marginTop: mobileSize ? '-3px' : '-8px' }} InputProps={{
                  startAdornment: (
                    <InputAdornment style={{ marginRight: '20px' }}>
                      <Search />
                    </InputAdornment>
                  ),
                  placeholder: 'Search by region, suburb or postcode'
                }}/>
              </Box>
              <Box sx={{ maxHeight: mobileSize ? '100%' : '60vh', overflowY: 'scroll', width: '100%' }}>
                <Box sx={{ marginTop: '10px' }}>
                  <Container>
                    <Tabs value={tabFilter} onChange={handleChangeTabFilter}>
                      <Tab sx={{ width: '50%' }} label="Builders" value={'builder'}/>
                      <Tab sx={{ width: '50%' }} label="Home Designs" value={'home-design'}/>
                    </Tabs>
                    {/* tab builder */}
                    <div hidden={tabFilter !== 'builder'}>
                      <Box>
                        <Typography variant='h6' fontWeight={600} marginTop={'10px'}>Builder Type</Typography>
                        <FormGroup sx={{ marginLeft: '10px' }}>
                          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'renovation_builder'} checked={builderFilter.renovation_builder} onChange={handleChangeFilterCheckbox} />} label='Renovation builder'/>
                          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'custom_home_builder'} checked={builderFilter.custom_home_builder} onChange={handleChangeFilterCheckbox} />} label='Custom home builder'/>
                          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'valume_home_builder'} checked={builderFilter.valume_home_builder} onChange={handleChangeFilterCheckbox} />} label='Volume home builder'/>
                          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'luxury_home_builder'} checked={builderFilter.luxury_home_builder} onChange={handleChangeFilterCheckbox} />} label='Luxury home builder'/>
                          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'knock_down_builder'} checked={builderFilter.knock_down_builder} onChange={handleChangeFilterCheckbox} />} label='Knock down rebuilder'/>
                          <FormControlLabel sx={{ marginTop: '10px' }} control={<Checkbox sx={{ marginRight: '10px' }} name='filter_builder' value={'dual_occupancy_home_builder'} checked={builderFilter.dual_occupancy_home_builder} onChange={handleChangeFilterCheckbox} />} label='Dual occupancy home builder'/>
                        </FormGroup>
                      </Box>
                    </div>
                    {/* tab home design */}
                    <div hidden={tabFilter !== 'home-design'}>
                      <Box sx={{ maxHeight: mobileSize ? '65vh' : '70vh', height: '65vh', overflowY: 'auto' }}>
                        <Typography fontSize={'20px'} fontWeight={600}>Bedrooms</Typography>
                        <Grid container>
                          <Grid item sx={{ marginRight: '20px' }}>
                            <FormControl sx={{ width: '320px' }} fullWidth>
                              <label htmlFor="minBed">Min</label>
                              <Select value={minBed} onChange={handleChangeMinBed} sx={{ border: '1px solid', width: '320px', height: '48px' }}>
                                <MenuItem value={'any'}>Any</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item>
                            <FormControl sx={{ width: '320px' }} fullWidth>
                              <label htmlFor="maxBed">Max</label>
                              <Select value={maxBed} onChange={handleChangeMaxBed} sx={{ border: '1px solid', width: '320px', height: '48px' }}>
                                <MenuItem value={'any'}>Any</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Typography sx={{ marginTop: '30px' }} fontSize={'20px'} fontWeight={600}>Storeys</Typography>
                        <Grid container sx={{ marginTop: '10px' }}>
                          <Grid item sx={{ marginRight: '20px' }}>
                            <FormControl fullWidth>
                              <Select value={storeys} onChange={handleChangeStoreys} sx={{ border: '1px solid', width: '320px', height: '48px' }}>
                                <MenuItem value={'any'}>Any</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Typography sx={{ marginTop: '30px' }} fontSize={'20px'} fontWeight={600}>Car Spaces</Typography>
                        <Grid container sx={{ marginTop: '10px' }}>
                          <Grid item sx={{ marginRight: '20px' }}>
                            <FormControl fullWidth>
                              <Select value={carSpaces} onChange={handleChangeCarSpaces} sx={{ border: '1px solid', width: '320px', height: '48px' }}>
                                <MenuItem value={'any'}>Any</MenuItem>
                                <MenuItem value={'1+'}>1+</MenuItem>
                                <MenuItem value={'2+'}>2+</MenuItem>
                                <MenuItem value={'3+'}>3+</MenuItem>
                                <MenuItem value={'4+'}>4+</MenuItem>
                                <MenuItem value={'5+'}>5+</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Typography sx={{ marginTop: '30px' }} fontSize={'20px'} fontWeight={600}>Block width</Typography>
                        <Grid container sx={{ marginTop: '10px' }}>
                          <Grid item sx={{ marginRight: '20px' }}>
                            <FormControl fullWidth>
                              <Select value={carSpaces} onChange={handleChangeCarSpaces} sx={{ border: '1px solid', width: '320px', height: '48px' }}>
                                <MenuItem value={'any'}>Any</MenuItem>
                                <MenuItem value={'10'}>Up to 10m</MenuItem>
                                <MenuItem value={'15'}>Up to 15m</MenuItem>
                                <MenuItem value={'20'}>Up to 20m</MenuItem>
                                <MenuItem value={'25'}>Up to 25m</MenuItem>
                                <MenuItem value={'30'}>Up to 30m</MenuItem>
                                <MenuItem value={'35'}>Up to 35m</MenuItem>
                                <MenuItem value={'40'}>Up to 40m</MenuItem>
                                <MenuItem value={'45'}>Up to 45m</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Typography fontSize={'20px'} fontWeight={600} marginTop={'20px'}>House size</Typography>
                        <Grid container>
                          <Grid item sx={{ marginRight: '20px' }}>
                            <FormControl sx={{ width: '320px' }} fullWidth>
                              <label htmlFor="minBed">Min</label>
                              <Select value={minBed} onChange={handleChangeMinBed} sx={{ border: '1px solid', width: '320px', height: '48px' }}>
                                <MenuItem value={'any'}>Any</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item>
                            <FormControl sx={{ width: '320px' }} fullWidth>
                              <label htmlFor="maxBed">Max</label>
                              <Select value={maxBed} onChange={handleChangeMaxBed} sx={{ border: '1px solid', width: '320px', height: '48px' }}>
                                <MenuItem value={'any'}>Any</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Box>
                    </div>
                  </Container>
                </Box>
              </Box>
              <Box sx={{ position: 'absolute', bottom: 10, right: 10, }}>
                <Button onClick={handleClearFilter} variant='text' sx={{ textTransform: 'none', fontWeight: 600 }}>Clear all</Button>
                <Button id='filter-button' variant='contained' sx={{ backgroundColor: '#17C2ED', textTransform: 'none' }}>Apply filters</Button>
              </Box>
            </Box>
          </Modal>
        </Container>
      </AppBar>
      <Container id='content' sx={{ marginTop: '217px', paddingY: '20px' }}>
        <Typography variant='h5' fontWeight={600}>Home builders in {id_builder}</Typography>
        <Typography sx={{ marginY: '20px', color: '#726E75' }}>Viewing 1-12 of 12 builders</Typography>
        <Grid container>
          {dataBuilder.map(d => (
            <Grid item xs={mobileSize ? 12 : 4}>
              <Card onClick={redirectDetailBuilder} sx={{ maxWidth: mobileSize ? '100%' : 360, borderRadius: '10px', marginBottom: '20px', cursor: 'pointer' }}>
                <Box sx={{ width: mobileSize ? '100%' : '360px', height: '38', backgroundColor: '#F68B1F' }}>
                  <img src={brandLogo} alt="brand" style={{ width: '137px', height: '32px' }}/>
                </Box>
                <CardMedia
                  sx={{ height: 180 }}
                  image={veryBigBrandHero}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" fontWeight={600} component="div">
                    Burbank Homes
                  </Typography>
                  <Typography variant="body2">
                    30 Home designs | 5 Display homes
                  </Typography>
                  <Box sx={{ marginTop: '10px' }}>
                    <Typography>Building homes since 1983</Typography>
                    <Typography>Flexibility in design</Typography>
                    <Typography>Backed by the Burbank Group</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography sx={{ marginY: '20px', color: '#726E75' }}>Viewing 1-12 of 12 builders</Typography>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button disabled variant='outlined' sx={{ width: '180px', padding: '10px', textTransform: 'none' }}><KeyboardArrowLeft /> Previous page</Button>
          <Button disabled variant='outlined' sx={{ width: '180px', padding: '10px', marginLeft: '20px', textTransform: 'none' }}>Next page <KeyboardArrowRight /></Button>
        </Box>
      </Container>
      <div className='quickSearch-section'>
        <QuickSearch />
      </div>

      <div className='footer-section'>
        <Footer />
      </div>
    </div>
  )
}
