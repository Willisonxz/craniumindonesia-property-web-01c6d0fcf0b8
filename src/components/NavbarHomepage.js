import React, {useEffect, useState} from 'react'
import logo from "../assets/CraniumLogo.png"
import {NavLink, useNavigate} from 'react-router-dom'
import RoutesPage from '../Routes';
import profile from "../assets/homepage/ProfileIcon.svg"
import notif from "../assets/homepage/NotificationIcon.svg"
import collection from "../assets/homepage/CollectionIcon.svg"
import burgerMenu from "../assets/homepage/burgerMenu.png"
import { Button, Popover } from '@mui/material';
import Notifications from '../pages/Notifications';
import { Grid, Typography, Drawer, Box, List,ListItem, ListItemButton, ListItemText} from '@mui/material'
import CollectionsDropdown from './CollectionsDropdown';


export default function NavbarHomepage() {
  const navigate = useNavigate()
  /* UseState untuk background navbar saat discroll vertikal sejauh 100px */
  const [scrolled, setScrolled] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  const path = window.location.pathname
  const check_path = (e) => {
    let color = "#726E75"
    if (e === path){
      color = "white"
    }
    return color
  }

  let token=false 
  if (sessionStorage.getItem("token")!== null){
    token= true
  }else { token= false}

  // navbar collections functions
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handlePopoverClose = () => {
    setAnchorEl(null);
  }
  const handleClick = (event) => {
    if (!collectionsOpen) {
      handlePopoverOpen(event);
    } else {
      handlePopoverClose();
    }
    setCollectionsOpen(!collectionsOpen);
  }

  const handleClose = () => {
    setCollectionsOpen(false);
    handlePopoverClose()
  }

  // Drawer Start
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const menu_list = [
    {label:"Buy",link:"/"},
    {label:"Rent",link:"/rent"},
    {label:"Sold",link:"/sold"},
    {label:"New Homes",link:"/new-homes"},
    {label:"Find Agents",link:"/find-agent"},
    {label:"News",link:"/news"}
    // {label:"",link:""}
  ]

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu_list.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={(e)=>navigate(text.link)}>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    /* Penambahan Template Literal */
    <div className={`header `}>
      {/* <div className={`header ${scrolled ? 'scrolled' : ''}`}></div> */}
      <Grid className='box-content' direction="row" justifyContent={"space-between"} display="flex">
      <React.Fragment>
      <a href='#' className='d-md-none d-xs-block' onClick={toggleDrawer('left', true)}>
          <img src={burgerMenu} alt='' className='burger-menu' style={{width:"27px", height:"30px", objectFit:"contain"}}/>
          </a>
          <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
              >
                {list('left')}
              </Drawer>
          </React.Fragment>
        <Grid item direction={"row"} display={"flex"}>
        
          <a href='/'>
          <img src={logo} alt='' style={{width:"76px", height:"23px", objectFit:"contain"}}/>
          </a>
          <Grid className='menu d-md-flex d-sm-none d-xs-none' container display={"flex"} direction={"row"}>
            <NavLink to="/" style={{color: `${check_path("/")}` }}>Buy</NavLink>
            <NavLink to="/rent" style={{color: `${check_path("/rent")}` }}>Rent</NavLink>
            <NavLink to="/sold" style={{color: `${check_path("/sold")}` }}>Sold</NavLink>
            <NavLink to="/new-homes" style={{color: `${check_path("/new-homes")}` }}>New Homes</NavLink>
            <NavLink to={RoutesPage.RouteFindAgent} style={{color: `${check_path(RoutesPage.RouteFindAgent)}` }}>Find Agents</NavLink>
            <NavLink to="/news" style={{color: `${check_path("/news")}` }}>News</NavLink>
          </Grid>
        </Grid>
        {token === false ?
        <Grid item className='d-flex'>
          <button onClick={(e) => window.location.href="/login"}>Sign In</button>
          <button className='bt-join d-sm-none d-xs-none d-md-flex' onClick={(e) => window.location.href="/signup"}>Join</button>
        </Grid>:
        <Grid item className='icon-nav' sx={{display:"flex"}}>
          <CollectionsDropdown />
          <Notifications />
          <div aria-describedby={'collections-popover'} variant="plain" onClick={handleClick} className='d-flex align-item-center'>
            <img src={profile} alt='' className='pointer' onClick={() => navigate(RoutesPage.RouteProfile)} />
          </div>
        </Grid>}
      </Grid>
    </div>
  )
}
