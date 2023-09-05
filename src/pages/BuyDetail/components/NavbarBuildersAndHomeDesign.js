import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Container, Link, Grid, Breadcrumbs, AppBar, useMediaQuery, Divider, Drawer, List, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import WebsiteLogo from '../../../assets/Cranium.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import RoutesPage from '../../../Routes';


function NavbarBuildersAndHomeDesign(props) {
  const mobileSize = useMediaQuery('(max-width: 700px)')

  let breadcrumbPageName = ""
  switch (props.route) {
    case "new-apartments":
      breadcrumbPageName = "New Apartments"
      break;
    case "new-land":
      breadcrumbPageName = "New Land Estates"
      break;
    case "new-home-and-land":
      breadcrumbPageName = "New Home And Land"
      break;
  }

  return (
    <Box sx={{ backgroundColor: '#fff', display: props.display ? 'none' : 'block' }}>
      <AppBar sx={{ borderBottom: '1px solid #eaeaea', background: 'white', boxShadow: 'none', position: 'absolute' }}>
        <Container>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid item>
              <IconButton
                color="#000"
                aria-label="open drawer"
                edge="start"
                onClick={props.handleMenuItem}
              >
                {props.open ? <CloseIcon /> : <MenuIcon />}

                <Typography>
                  Menu
                </Typography>
              </IconButton>
            </Grid>
            <Grid item>
              <Link
                href='/'
                sx={{
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                <img src={WebsiteLogo} alt="logo" />
              </Link>
            </Grid>
            <Grid item>
              <IconButton >
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
        <Drawer
          open={props.openMenu}
          variant='temporary'
        >
          <List sx={{ width: '300px' }}>
            <ListItem disablePadding sx={{ marginTop: '-10px' }}>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Buy" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Rent" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
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
              <ListItemButton component="a" href="#">
                <ListItemText primary="Find agents" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary="News" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={props.handleOpenMenu}>
                <ListItemIcon sx={{ marginRight: '-30px' }}>
                  <CloseIcon sx={{ color: 'red' }} />
                </ListItemIcon>
                <ListItemText primary="Close" />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </AppBar>
      <AppBar id="navbar-menu-item" style={{ borderBottom: '1px solid #eaeaea', display: 'none', height: '50px', position: 'absolute', top: '57px', background: 'white', boxShadow: 'none', border: '1px solid' }}>
        <Container>
          <Grid container display={"flex"} direction={"row"} sx={{ justifyContent: 'center', padding: '15px' }}>
            <NavLink style={{ marginRight: '40px', textDecoration: 'none', fontWeight: 500, color: 'black' }} to="/">Buy</NavLink>
            <NavLink style={{ marginRight: '40px', textDecoration: 'none', fontWeight: 500, color: 'black' }} to="/rent">Rent</NavLink>
            <NavLink style={{ marginRight: '40px', textDecoration: 'none', fontWeight: 500, color: 'black' }} to="/sold">Sold</NavLink>
            <NavLink style={{ marginRight: '40px', textDecoration: 'none', fontWeight: 500, color: 'black' }} to="/new-homes">New Homes</NavLink>
            <NavLink style={{ marginRight: '40px', textDecoration: 'none', fontWeight: 500, color: 'black' }} to={RoutesPage.RouteFindAgent}>Find Agents</NavLink>
            <NavLink style={{ marginRight: '40px', textDecoration: 'none', fontWeight: 500, color: 'black' }} to="/news">News</NavLink>
          </Grid>
        </Container>
      </AppBar>
      <AppBar id="submenu-nav" sx={{ height: '50px', backgroundColor: '#F6F5F7', position: 'absolute', top: '57px', boxShadow: 'none', display: mobileSize ? 'none' : 'block' }}>
        <Container>
          <Grid container display={"flex"} direction={"row"} sx={{ justifyContent: 'center', padding: '15px' }}>
            <NavLink style={{ marginRight: '30px', textDecoration: 'none', fontWeight: 500, color: 'black' }} to="/new-apartments">New Apartments</NavLink>
            <NavLink style={{ marginRight: '30px', textDecoration: 'none', fontWeight: 500, color: 'black' }} to="/new-land">Land Estates</NavLink>
            <NavLink style={{ marginRight: '30px', textDecoration: 'none', fontWeight: 500, color: 'black' }} to="/new-home-and-land">House and Land Packages</NavLink>
            <NavLink style={{ marginRight: '30px', textDecoration: 'none', fontWeight: 500, color: props.route === 'new-builder' ? '#17C2ED' : 'black' }} to="/new-builder">Builders</NavLink>
            <NavLink style={{ marginRight: '30px', textDecoration: 'none', fontWeight: 500, color: props.route === 'new-home-design' ? '#17C2ED' : 'black' }} to="/new-home-design">Home Designs</NavLink>
          </Grid>
        </Container>
      </AppBar>
      <AppBar id="breadcrumbs-nav" style={{ padding: '15px', borderBottom: '1px solid #eaeaea', background: 'white', position: 'absolute', top: mobileSize ? '57px' : '107px', boxShadow: 'none' }}>
        <Container>
          <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item>
              <Link href={'/new-apartments/' + props.id_project} sx={{ display: 'flex', alignItems: 'center' }}><ArrowBackIcon fontSize='10px' /> back to results</Link>
            </Grid>
            <Grid item>
              <Breadcrumbs maxItems={mobileSize ? 2 : 3} aria-label="breadcrumb" separator=">" sx={{ marginLeft: '20px' }}>
                <Link underline="hover" fontSize='15px' color="inherit" href="/new-homes">
                  New Homes
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  fontSize='15px'
                  href={props.route === "new-builder" ? `/${props.route}` : `/${props.route}`}
                >
                  {props.route === "new-builder" ? "New Builder" : "New Home Design"}
                </Link>
                <Link
                  underline="hover"
                  color="text.primary"
                  href="/material-ui/react-breadcrumbs/"
                  aria-current="page"
                >
                  asd
                </Link>
              </Breadcrumbs>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavbarBuildersAndHomeDesign;