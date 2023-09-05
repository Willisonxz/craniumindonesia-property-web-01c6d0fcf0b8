import React, { useState } from 'react'
import '../../../styles/new-homes.css'
import { Container, Grid, Breadcrumbs, Link, FormControl, Avatar, Button, Select, MenuItem, Box, TextField, InputAdornment, Divider, ToggleButton, ToggleButtonGroup, AppBar, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import AppsIcon from '@mui/icons-material/Apps'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import { Menu, Close, NavigateNext } from '@mui/icons-material'
import logo from '../../../assets/logo.svg'
import RoutesPage from '../../../Routes'
import { RightArrow } from '../assets/index'

export default function HeaderNewHomes(props) {
  // states
  const [menu, setMenu] = useState(props.menu)
  const [ openMenu, setOpenMenu ] = useState(false)
  const mobileSize = useMediaQuery('(max-width: 700px)')

  const handleChange = (event) => {
    window.location.href = `/${event.target.value}`;
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div>
      <AppBar width='100%' sx={{ position: 'fixed', top: 0, background: 'white', boxShadow: 'none', height: '65px', zIndex: 1, borderBottom: '1px solid #E3E3E3', display: 'flex', justifyContent: 'center' }}>
        <Container>
          <Grid container  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingY: '5px' }}>
            <Grid item>
              <IconButton sx={{ display: mobileSize ? 'block' : 'none' }} onClick={handleOpenMenu}>
                <Menu/>
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

              </IconButton>
              <Box id="menu-item" sx={{ display: mobileSize ? 'none' : 'block' }}>
                <NavLink style={{ textDecoration: 'none', padding: '0 8px', color: '#697684', fontSize: '14px' }} to="/">Buy</NavLink>
                <NavLink style={{ textDecoration: 'none', padding: '0 8px', color: '#697684', fontSize: '14px' }} to="/rent">Rent</NavLink>
                <NavLink style={{ textDecoration: 'none', padding: '0 8px', color: '#697684', fontSize: '14px' }} to="/sold">Sold</NavLink>
                <NavLink style={{ textDecoration: 'none', padding: '0 8px', color: '#697684', fontSize: '14px' }} to="/new-homes">New Homes</NavLink>
                <NavLink style={{ textDecoration: 'none', padding: '0 8px', color: '#697684', fontSize: '14px' }} to={RoutesPage.RouteFindAgent}>Find Agents</NavLink>
                <NavLink style={{ textDecoration: 'none', padding: '0 8px', color: '#697684', fontSize: '14px' }} to="/news">News</NavLink>
              </Box>
            </Grid>
            <Grid item sx={{ display: mobileSize ? 'block' : 'none' }}>
              <img src={logo} alt="logo website" />
            </Grid>
            <Grid item sx={{ display: mobileSize ? 'none' : 'block' }}>
              <IconButton sx={{ display: 'none' }}>
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Button variant='text' sx={{ fontFamily: 'Roboto-400', fontWeight: 400, fontSize: '14px', textTransform: 'none', marginRight: '10px', color: '#727A80' }}>Sign in</Button>
              <Button sx={{ border: '1px solid #727A80', fontSize: '14px', textTransform: 'none', color: '#727A80' }}>Join</Button>
            </Grid>
            <Grid item sx={{ display: mobileSize ? 'block' : 'none' }}>
              <IconButton >
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <AppBar width='100%' sx={{ position: 'absolute', top: mobileSize ? '60px' : 65, background: 'white', boxShadow: 'none', borderBottom: '1px solid #E3E3E3', zIndex: 1}}>
        <Container sx={{ paddingY: '15px' }}>
          <Breadcrumbs maxItems={mobileSize ? 2 : 3} aria-label="breadcrumb" separator={<img src={RightArrow} width={13} height={16}/>} sx={{ "&ol": {
            justifyContent: "center",
            margin: "auto"
          } }}>
            <Link underline="hover" color="inherit" href="/new-homes">
              New Homes
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/new-apartments"
             
            >
              {menu === "new-apartments" ? "New Apartments" : "New Land Estate"}
            </Link>
            <Link
              underline="hover"
              color="grey"
              aria-current="page"
              
            >
              {menu === "new-apartments" ? props.idApartment : props.idLand}
            </Link>
          </Breadcrumbs>
        </Container>
      </AppBar>
      <AppBar className="navbar-button" sx={{ position: 'absolute', top: mobileSize ? '110px' : 120, background: 'white', boxShadow: 'none', zIndex: 1 }}>
        <Box sx={{ minWidth: 120 }}>
          <Grid display={'flex'} sx={{ borderBottom: '1px solid #E3E3E3' }}>
            <FormControl sx={{ display: mobileSize ? 'none' : 'block' }}>
              <Select
                id='select-menu'
                value={menu}
                onChange={handleChange}
                label="Menu"
                sx={{ boxShadow: "none",  '.MuiOutlinedInput-notchedOutline': { border: 0 }, width: '200px' }}
                className='select-menu'
              >
                <MenuItem value="new-apartments">New Apartments</MenuItem>
                <MenuItem value="new-land">New Land Estate</MenuItem>
                <MenuItem value="new-home-and-land">House & Land</MenuItem>
                <MenuItem value="new-builder">Home Builders</MenuItem>
                <MenuItem value="new-home-design">Home Designs</MenuItem>
              </Select>
            </FormControl>
            <Divider orientation="vertical" flexItem />
            <TextField sx={{ border: 'none', width: '82vw', '.MuiOutlinedInput-notchedOutline': { border: 'none' } }} InputProps={{
              startAdornment: (
                <InputAdornment style={{ marginRight: '20px' }}>
                  <SearchIcon />
                </InputAdornment>
              ),
              placeholder: 'Search by region, suburb or postcode'
            }}/>
            <Divider orientation="vertical" flexItem />
            <ToggleButtonGroup
              value={props.button}
              exclusive
              onChange={props.changeButton}
            >
              <ToggleButton value="list" sx={{ width: mobileSize ? '100%' : '4vw' }}>
                <Box sx={{ backgroundColor: props.button === "list" ? '#6A7785' : 'white', padding: '7px', borderRadius: '5px' }}>
                  <AppsIcon sx={{ color: props.button === "list" ? 'white' : 'black' }}/>
                </Box>
              </ToggleButton>
              <ToggleButton value="maps" sx={{ width: mobileSize ? '100%' : '4vw' }}>
                <Box sx={{ backgroundColor: props.button === "maps" ? '#6A7785' : 'white', padding: '7px', borderRadius: '5px' }}>
                  <FmdGoodIcon sx={{ color: props.button === "maps" ? 'white' : 'black' }}/>
                </Box>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Box>
      </AppBar>
    </div>
  )
}
