import React, { useState } from 'react';
import logo from '../../../assets/CraniumLogo.png';
import { Link, AppBar, Box, Toolbar, Container, Grid, Button, Avatar, IconButton, useMediaQuery, Drawer, List, ListItemButton, ListItemText, ListItem, ListItemIcon, Divider } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import RoutesPage from '../../../Routes';

export default function NavbarNewHomesMain(props) {
  // states
  const [openMenu, setOpenMenu] = useState(false)

  // media query
  const mobileSize = useMediaQuery('(max-width:700px)');

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute" sx={{ background: 'transparent', boxShadow: 'none', top: mobileSize ? '10px' : 0 }}>
          <Container>
            <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Grid item sx={{ display: mobileSize ? 'block' : 'none' }}>
                <IconButton
                  onClick={handleOpenMenu}
                >
                  <Menu sx={{ color: '#fff' }} />
                </IconButton>
                <Drawer
                  open={openMenu}
                >
                  <List sx={{ width: '300px' }}>
                    <ListItem disablePadding sx={{ marginTop: '-10px' }}>
                      <ListItemButton component="a" href="/">
                        <ListItemText primary="Buy" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="/rent">
                        <ListItemText primary="Rent" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="/sold">
                        <ListItemText primary="Sold" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#">
                        <ListItemText primary="New homes" sx={{ color: '#17C2ED' }} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton component="a" href={RoutesPage.RouteFindAgent}>
                        <ListItemText primary="Find agents" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="/news">
                        <ListItemText primary="News" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton onClick={handleOpenMenu}>
                        <ListItemIcon sx={{ marginRight: '-30px' }}>
                          <Close sx={{ color: 'red' }} />
                        </ListItemIcon>
                        <ListItemText primary="Close" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </List>
                </Drawer>
              </Grid>
              <Grid item>
                <img src={logo} alt="logo website" style={{width: "76px", height: "23px", objectFit:"contain"}} />
              </Grid>
              <Grid item sx={{ display: mobileSize ? 'none' : 'block' }}>
                <Toolbar>
                  <Link href={RoutesPage.RouteBuy} color="inherit" sx={{ marginRight: '20px', textDecoration: props.menu === "buy" ? 'underline' : 'none' }}>Buy</Link>
                  <Link href={RoutesPage.RouteRent} color="inherit" sx={{ marginRight: '20px', textDecoration: props.menu === "rent" ? 'underline' : 'none' }}>Rent</Link>
                  <Link href={RoutesPage.RoutesSold} color="inherit" sx={{ marginRight: '20px', textDecoration: props.menu === "sold" ? 'underline' : 'none' }}>Sold</Link>
                  <Link href={RoutesPage.RouteNewHome} color="inherit" sx={{ marginRight: '20px', textDecoration: props.menu === "new-homes" ? 'underline' : 'none', textUnderlineOffset: '10px' }}>New homes</Link>
                  <Link href={RoutesPage.RouteFindAgent} color="inherit" sx={{ marginRight: '20px', textDecoration: props.menu === RoutesPage.RouteFindAgent ? 'underline' : 'none' }}>Find agents</Link>
                  <Link href='/news' color="inherit" sx={{ marginRight: '20px', textDecoration: props.menu === "news" ? 'underline' : 'none' }}>News</Link>
                </Toolbar>
              </Grid>
              <Grid item sx={{ display: mobileSize ? 'none' : 'block' }}>
                <IconButton sx={{ display: 'none' }}>
                  <Avatar src="/static/images/avatar/2.jpg" />
                </IconButton>
                <Button href={RoutesPage.RouteLogin} variant='text' sx={{ textTransform: 'none', marginRight: '10px', color: 'white' }}>Sign in</Button>
                <Button href={RoutesPage.RouteSignUp} variant='outlined' sx={{ textTransform: 'none', borderColor: 'white', color: 'white', width: '81px', height: '40px', ':hover': { borderColor: 'white' } }}>Join</Button>
              </Grid>
              <Grid item sx={{ display: mobileSize ? 'block' : 'none' }}>
                <IconButton >
                  <Avatar src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>
    </div>
  )
}
