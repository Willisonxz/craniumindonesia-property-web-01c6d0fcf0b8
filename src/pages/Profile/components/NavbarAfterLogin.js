import React,{useState} from 'react'
import burger from "../../../assets/homepage/burgerMenu.png"
import closeMenu from "../../BuyList/assets/close.png"
import profile from "../../../assets/homepage/ProfileIcon.svg"
import notif from "../../../assets/homepage/NotificationIcon.svg"
import collection from "../../../assets/homepage/CollectionIcon.svg"
import { Grid, Typography, Drawer, Box, List,ListItem, ListItemButton, ListItemText} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import RoutesPage from '../../../Routes'
import Notifications from '../../Notifications'
import CollectionsDropdown from '../../../components/CollectionsDropdown'


export default function NavbarAfterLogin() {
  const navigate = useNavigate()
  const [statusMenu, setStatusMenu] = useState(false)
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
    <div className='col-12'>
      <div className='col-sm-12 nav-bl'>
          <div className='container-buylist d-flex justify-content-between h-100 align-items-center'>
              <div className='h-100 align-items-center  d-sm-none d-md-flex'>
                {statusMenu &&
                  <img src={closeMenu} alt='' className='menu-bl-close trans pointer' style={{marginLeft:"7px", marginRight:"5px"}} onClick={(e)=>setStatusMenu(false)} />}
                  {!statusMenu &&
                  <img src={burger} alt='' className='menu-bl trans pointer' onClick={(e)=>setStatusMenu(true)}/>}
                  <h6 className='tx-menu-bl w-600'>Menu</h6>
              </div>
              <div className='h-100 align-items-center d-xs-flex d-sm-flex d-md-none'>
                <React.Fragment>
                  <img src={burger} alt='' className='menu-bl trans pointer' onClick={toggleDrawer('left', true)}/>
                  <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                  >
                    {list('left')}
                  </Drawer>
              </React.Fragment>
                  
                  <h6 className='tx-menu-bl w-600'>Menu</h6>
              </div>
              <h2 className='cr-logo w-600 pointer' onClick={(e)=>navigate("/")}>Cranium</h2>
              <div className='h-100 align-items-center d-flex right-side'>
                  <CollectionsDropdown />
                  <Notifications />
                  <img src={profile} alt='' className='pointer' onClick={() => navigate(RoutesPage.RouteProfile)} />
              </div>
          </div>
      </div>
      <div className='col-12 d-sm-none d-md-block '>
        <div className='col-12 d-flex justify-content-center navbar-bl trans bg-ff' style={{opacity:`${statusMenu?"1":"0"}`,height:`${statusMenu?"":"0"}`}}>
          {menu_list.map((item,i)=>(
          <p key={i} onClick={(e)=>navigate(item.link)} className='pointer s-16 c-3d'>{item.label} </p>
          ))}
        </div>
      </div>
    </div>
  )
}
