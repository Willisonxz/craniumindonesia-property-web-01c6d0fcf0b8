import React from 'react'
import PropTypes from 'prop-types';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useMediaQuery, Box, Container, Grid, Typography,Link,Tab, Tabs, Chip, Card, CardMedia, CardContent, Divider, Button } from '@mui/material'
import icon from "../../assets/homepage/icon_realEstate.png"
import bg from "../../assets/homepage/bg.avif"
import filterLogo from "../../assets/filter_logo.svg"
import TabExplore from '../../components/TabExplore';
import TabNews from '../../components/TabNews';
import QuickSearch from '../../components/QuickSearch';
import Footer from '../../components/Footer';
import "./homepage.css"


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Homepage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


const list_menu = ["Buy","Rent","Sold","New homes","Find agents","Home loans","News","Commercial"]
const searchBar = <Grid container sx={{display:"flex", justifyContent:"space-between", flexDirection:"row", boxSizing:"border-box"}} width={{lg:"725px"}}>
                  <Grid item >
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search suburb, postcode or state"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    </Grid>
                    <Grid item className='sb-search'>
                      <Button sx={{backgroundColor:"white"}} className='c-3d filter'>
                        <img src={filterLogo} alt='' style={{marginRight:"5px"}}/>
                        Search</Button>
                      <Button className='bt-f' sx={{color:"white", marginLeft:".5rem"}}>Filter</Button>
                    </Grid>
                  </Grid>


  return (
    <Box className="home">
      <Grid container width={"100%"} height={"80px"} sx={{display:"flex", flexDirection:"column", height:"80px"}}>
        <Grid className='header' container m={"auto"} maxWidth={"70.375rem"} alignItems={"center"} >
          <img src={icon} alt='' className='icon' />
          <Grid item className='nav' sx={{display:"flex", flexDirection:"row"}}>
            {list_menu.map((data,i)=>(
            <Link href="#" underline='none' variant='body1' key={i}>{data} </Link>))}
          </Grid>
          <Grid item>
            <Button className='c-3d bg-ff'>Sign In</Button>
            <Button className='join' sx={{color:"white",backgroundColor:"#e4002b"}}>Join</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container maxWidth={"1600px"} height={{lg:"570px"}} sx={{backgroundImage:`url(${bg})`}} className='banner'>
        <Grid container sx={{display:"flex", flexDirection:"column", justifyContent:"center"}} className='searchBar'>
          <Typography variant='h6' className='c-ff'>Properties to call home</Typography>
          <Grid container boxShadow={3} className='tab' sx={{display:"flex", flexDirection:"column", borderBottom:"1px solid"}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Buy" {...a11yProps(0)} />
            <Tab label="Rent" {...a11yProps(1)} />
            <Tab label="Sold" {...a11yProps(2)} />
            <Tab label="Address" {...a11yProps(3)} />
            <Tab label="Agent" {...a11yProps(4)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            {searchBar}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            {searchBar}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            {searchBar}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
            {searchBar}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
            {searchBar}
            </CustomTabPanel>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className='explore-section' ><TabExplore/> </Grid>
<div className='news-section'>
          <TabNews />
        </div>
        <Grid container className='quickSearch-section'>
          <QuickSearch />
        </Grid>

        <Grid container className='footer-section'>
          <Footer />
        </Grid>
    </Box>
  )
}
