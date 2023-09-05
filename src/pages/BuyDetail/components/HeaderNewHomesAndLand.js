import React, { useState } from 'react'
import '../../../styles/new-homes.css'
import { Container, Grid, Breadcrumbs, Link, FormControl, Select, MenuItem, Avatar, TextField, InputAdornment, Divider, AppBar, Button, Drawer, List, ListItem, ListItemText, IconButton, ListItemButton, ListItemIcon, useMediaQuery } from '@mui/material'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import { Menu, Tune, Close } from '@mui/icons-material'
import { BathtubIcon, BedIcon, CarIcon } from '../../../assets/icons'
import logo from '../../../assets/logo.svg'
import RoutesPage from '../../../Routes'

export default function HeaderNewHomesAndLand(props) {
  // states
  const [menu]                  = useState(props.menu)
  const [minBed, setMinBed]     = useState('any')
  const [maxBed, setMaxBed]     = useState('any')
  const [minPrice, setMinPrice] = useState('any')
  const [maxPrice, setMaxPrice] = useState('any')
  const [bathroom, setBathroom] = useState('any')
  const [carSpace, setCarSpace] = useState('any')
  const [ openFilter, setOpenFilter ] = useState(false)
  const [ openMenu, setOpenMenu ] = useState(false)

  const mobileSize = useMediaQuery('(max-width: 700px)')

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter)
  }

  const changeMinBedFilter = (event) => {
    setMinBed(event.target.value)
  }

  const changeMaxBedFilter = (event) => {
    setMaxBed(event.target.value)
  }

  const changeBathroomFilter = (event) => {
    setBathroom(event.target.value)
  }
  
  const changeCarSpaceFilter = (event) => {
    setCarSpace(event.target.value)
  }
  
  const changeMinPriceFilter = (event) => {
    setMinPrice(event.target.value)
  }

  const changeMaxPriceFilter = (event) => {
    setMaxPrice(event.target.value)
  }

  const handleChange = (event) => {
    window.location.href = `/${event.target.value}`;
  };

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <AppBar sx={{ paddingY: mobileSize ? '10px' : '15px', boxShadow: 'none', background: 'white', position: 'absolute', zIndex: 1 }}>
        <Container>
          <Grid container display={"flex"} direction={"row"} sx={{ justifyContent: 'space-between', alignItems: 'center' }} >
            <Grid item sx={{ display: mobileSize ? 'block' : 'none' }}>
              <IconButton color='#000' onClick={handleOpenMenu}>
                <Menu sx={{ color: 'black' }}/>
              </IconButton>
            </Grid>
            <Grid item sx={{ display: mobileSize ? 'block' : 'none' }}>
              <img src={logo} alt="logo-website" />
            </Grid>
            <Grid item sx={{ display: mobileSize ? 'none' : 'block' }}>
              <NavLink style={{ marginRight: '15px', textDecoration: 'none', color: 'black' }} to="/">Buy</NavLink>
              <NavLink style={{ marginRight: '15px', textDecoration: 'none', color: 'black' }} to="/rent">Rent</NavLink>
              <NavLink style={{ marginRight: '15px', textDecoration: 'none', color: 'black' }} to="/sold">Sold</NavLink>
              <NavLink style={{ marginRight: '15px', textDecoration: 'none', color: 'black' }} to="/new-homes">New Homes</NavLink>
              <NavLink style={{ marginRight: '15px', textDecoration: 'none', color: 'black' }} to={RoutesPage.RouteFindAgent}>Find Agents</NavLink>
              <NavLink style={{ marginRight: '15px', textDecoration: 'none', color: 'black' }} to="/news">News</NavLink>
            </Grid>
            <Grid item sx={{ display: mobileSize ? 'none' : 'block' }}>
              <Link sx={{ marginRight: '10px', color: '#000' }} underline='none'>Sign In</Link>
              <Link sx={{ padding: '10px', paddingX: '20px', backgroundColor: '#17C2ED', color: '#fff', borderRadius: '10px' }} underline='none'>Join</Link>
            </Grid>
            <Grid item sx={{ display: mobileSize ? 'block' : 'none' }}>
              <IconButton >
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
        <Drawer
          open={openMenu}
        >
          <List sx={{ width: '300px' }}>
            <ListItem disablePadding sx={{ marginTop: '-10px' }}>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Buy"/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Rent"/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Sold"/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary="New homes" sx={{ color: '#17C2ED' }}/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Find agents"/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary="News"/>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleOpenMenu}>
                <ListItemIcon sx={{ marginRight: '-30px' }}>
                  <Close sx={{ color: 'red' }}/>
                </ListItemIcon>
                <ListItemText primary="Close"/>
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </AppBar>
      <AppBar sx={{ display: mobileSize ? 'none' : 'block' , boxShadow: 'none', position: 'absolute', top: '50px', background: 'white', paddingY: '15px', border: '1px solid #eaeaea', zIndex: 1 }}>
        <Container>
          <Breadcrumbs aria-label="breadcrumb" separator=">" className='breadcumps-navbar'>
            <Link underline="hover" color="inherit" href="/new-homes">
              New Homes
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/new-apartments"
            >
              House and Land Packages
            </Link>
            <Link
              underline="none"
              color="text.primary"
              aria-current="page"
            >
              {menu}
            </Link>
          </Breadcrumbs>
        </Container>
      </AppBar>
      <AppBar sx={{ boxShadow: 'none', position: 'absolute', top: mobileSize ? '65px' : '100px', background: 'white', border: '1px solid #eaeaea', zIndex: 1 }}>
        <Container>
          <Grid display={'flex'} >
            <FormControl sx={{ width: '200px', display: mobileSize ? 'none' : 'block' }}>
              <Select
                id='select-menu'
                value={menu}
                onChange={handleChange}
                sx={{ boxShadow: "none",  '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                className='select-menu'
              >
                <MenuItem value="new-apartments">New Apartments</MenuItem>
                <MenuItem value="new-land">New Land Estate</MenuItem>
                <MenuItem value="new-home-and-land">House & Land</MenuItem>
                <MenuItem value="new-builder">Home Builders</MenuItem>
                <MenuItem value="new-home-design">Home Designs</MenuItem>
              </Select>
            </FormControl>
            <Divider orientation="vertical" flexItem light sx={{ display: mobileSize ? 'none' : 'block' }}/>
            <TextField variant='standard' sx={{ padding: '10px', border: 'none', minWidth: mobileSize ? '200px' : '600px', '.MuiOutlinedInput-notchedOutline': { border: 0 } }} InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment style={{ marginRight: '20px' }}>
                  <SearchIcon />
                </InputAdornment>
              ),
              placeholder: 'Search by region, suburb or postcode'
            }}/>
            <Divider orientation="vertical" flexItem light/>
            <Button sx={{ border: 'none' }} variant='outlined' startIcon={<Tune />} onClick={handleOpenFilter}>Filters</Button>
          </Grid>
        </Container>
        <Drawer
          open={openFilter}
          anchor='top'
          sx={{
            '& .MuiPaper-root': {
              position: 'absolute',
              top: '57px',
              transition: 'none !important'
            },
            zIndex: 0,
            height: openFilter ? '45vh' : '0px'
          }}
          variant='persistent'
        >
          <Container>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item sx={{ marginRight: '20px' }}>
                    <FormControl sx={{ width: mobileSize ? '150px' : '200px' }}>
                      <label style={{ marginBottom: '10px' }} htmlFor="minPrice">Min Price</label>
                      <Select
                        id='minPrice'
                        value={minPrice}
                        onChange={changeMinPriceFilter}
                      >
                        <MenuItem value='any'>Any</MenuItem>
                        <MenuItem value='50000'>$50.000</MenuItem>
                        <MenuItem value='100000'>$100.000</MenuItem>
                        <MenuItem value='150000'>$150.000</MenuItem>
                        <MenuItem value='200000'>$200.000</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl sx={{ width: mobileSize ? '150px' : '200px' }}>
                      <label style={{ marginBottom: '10px' }} htmlFor="maxPrice">Max Price</label>
                      <Select
                        id='maxPrice'
                        value={maxPrice}
                        onChange={changeMaxPriceFilter}
                      >
                        <MenuItem value='any'>Any</MenuItem>
                        <MenuItem value='50000'>$50.000</MenuItem>
                        <MenuItem value='100000'>$100.000</MenuItem>
                        <MenuItem value='150000'>$150.000</MenuItem>
                        <MenuItem value='200000'>$200.000</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item sx={{ marginRight: '20px' }}>
                    <FormControl sx={{ width: mobileSize ? '150px' : '200px' }}>
                      <label style={{ marginBottom: '10px' }} htmlFor="minPrice">Min Bedrooms</label>
                      <Select
                        id='minPrice'
                        value={minBed}
                        onChange={changeMinBedFilter}
                        startAdornment={
                          <InputAdornment sx={{ marginRight: '10px' }}>
                            <img src={BedIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }} />
                          </InputAdornment>
                        }
                      >
                        <MenuItem value='any'>Any</MenuItem>
                        <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                        <MenuItem value='3'>3</MenuItem>
                        <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl sx={{ width: mobileSize ? '150px' : '200px' }}>
                      <label style={{ marginBottom: '10px' }} htmlFor="maxPrice">Max Bedrooms</label>
                      <Select
                        id='maxPrice'
                        value={maxBed}
                        onChange={changeMaxBedFilter}
                        startAdornment={
                          <InputAdornment sx={{ marginRight: '10px' }}>
                            <img src={BedIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }} />
                          </InputAdornment>
                        }
                      >
                        <MenuItem value='any'>Any</MenuItem>
                        <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                        <MenuItem value='3'>3</MenuItem>
                        <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item sx={{ marginRight: '20px' }}>
                    <FormControl sx={{ width: mobileSize ? '150px' : '200px' }}>
                      <label style={{ marginBottom: '10px' }} htmlFor="minPrice">Bathrooms</label>
                      <Select
                        id='minPrice'
                        value={bathroom}
                        onChange={changeBathroomFilter}
                        startAdornment={
                          <InputAdornment sx={{ marginRight: '10px' }}>
                            <img src={BathtubIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }} />
                          </InputAdornment>
                        }
                      >
                        <MenuItem value='any'>Any</MenuItem>
                        <MenuItem value='1'>1+</MenuItem>
                        <MenuItem value='2'>2+</MenuItem>
                        <MenuItem value='3'>3+</MenuItem>
                        <MenuItem value='4'>4+</MenuItem>
                        <MenuItem value='5'>5+</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl sx={{ width: mobileSize ? '150px' : '200px' }}>
                      <label style={{ marginBottom: '10px' }} htmlFor="maxPrice">Car Spaces</label>
                      <Select
                        id='maxPrice'
                        value={carSpace}
                        onChange={changeCarSpaceFilter}
                        startAdornment={
                          <InputAdornment sx={{ marginRight: '10px' }}>
                            <img src={CarIcon} alt="bed-icon" style={{ width: '20px', height: '20px' }} />
                          </InputAdornment>
                        }
                      >
                        <MenuItem value='any'>Any</MenuItem>
                        <MenuItem value='1'>1+</MenuItem>
                        <MenuItem value='2'>2+</MenuItem>
                        <MenuItem value='3'>3+</MenuItem>
                        <MenuItem value='4'>4+</MenuItem>
                        <MenuItem value='5'>5+</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button variant='contained' sx={{ width: mobileSize ? '150px' : '200px', backgroundColor: '#17C2ED', marginRight: '20px' }} >Update</Button>
                <Button variant='outlined' sx={{ width: mobileSize ? '150px' : '200px', borderColor: 'black', color: 'black' }}>Clear Filter</Button>
              </ListItem>
            </List>
          </Container>
        </Drawer>
      </AppBar>
      <Divider light/>
    </div>
  )
}
