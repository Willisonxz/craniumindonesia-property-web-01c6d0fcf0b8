import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid"
import buy1 from "../assets/buy_icon1.svg"
import buy2 from "../assets/buy_icon2.svg"
import buy3 from "../assets/buy_icon3.svg"
import Card from '@mui/material/Card';
import buy_1 from "../assets/homepage/buy1.svg"
import buy_2 from "../assets/homepage/buy2.svg"
import rent_1 from "../assets/homepage/rent1.svg"
import rent_2 from "../assets/homepage/rent2.svg"
import sell_1 from "../assets/homepage/sell1.svg"
import sell_2 from "../assets/homepage/sell2.svg"


function TabPanel(props) {
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

TabPanel.propTypes = {
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

export default function TabExplore(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const data = [buy1,buy2,buy3]
  /* data2 adalah contoh pengambilan data API */
  // const data2 = props.dataYangDikirim
  const data2 = [buy3,buy2,buy1]
  const data3 = [buy1,buy3,buy2]
  const data4 = [buy2,buy1,buy3]

  const data_rent = [
    {img:rent_1,title:"Set up your renter profile", content:"Are you a tenant looking for a new place? Get yourself ready to apply online.", button:"Create a profile"},
    {img:rent_2,title:"Find a tenant", content:"List your property for rent through an agent or on your own.", button:"Advertise your rental property"}
  ]

  const data_buy = [
    {img:buy_1,title:"Get estimated property prices", content:"See how much your property’s worth whether you own it or you want to buy it.", button:"Check property values"},
    {img:buy_2,title:"Explore area profiles", content:"Check out different area profiles and find one that’s right for you. ", button:"Research areas"}
  ]

  const data_sell = [
    {img:sell_1,title:"Check this week’s sold prices", content:"Stay in the loop with the latest recent sales.", button:"See sold results"},
    {img:sell_2,title:"Decide whether to sell or stay", content:"Wondering if now’s a good time to sell? See your options.", button:"Read the selling guide"}
  ]


  return (
    <Box sx={{ width: '100%' }}>
      <div className='explore-heading'>Explore all things property</div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  className="exploreTabs" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='w-600' label="Buying" {...a11yProps(0)} />
          <Tab label="Renting" {...a11yProps(1)} />
          <Tab label="Selling" {...a11yProps(2)} />
          {/* <Tab label="Researching" {...a11yProps(3)} /> */}
        </Tabs>
      </Box>

      <TabPanel className='tabPanel' value={value} index={0}>
       <Grid container display="flex" direction="row" className='flex-sm-column flex-md-row flex-lg-row' justifyContent={"center"}>{
        data_buy.map((item, i) => (
          <Card key={i} className='card col-md-4 col-sm-12 col-xs-12'>
            <div className='card-container flex-sm-row flex-xs-row flex-md-column'>
              <img src={item.img} alt='' />
              <div className='cardContent-container'>
                <h3 className='w-600 c-34' style={{ margin: "0px 0px 4px 0px" }}>{item.title} </h3>
                <p className='c-72' style={{ margin: "0px 0px 4px 0px" }}>{item.content} </p>
                <a href="#" className='w-600 c-63'>{item.button} </a>
              </div>
            </div>
          </Card>
          ))
        }
        </Grid>
       
      {/* <Grid container display="flex" direction="row" justifyContent="space-between">
        {data.map((item,i)=>{
            if (i>3){
                return(
       <Card key={i} className='card'>
            <div className='center'>
            <img src={item} alt='' />
            <p className='w-600'>Get estimated property prices with 
                a realEstimate™</p>
                <p className='c-72'>See how much your property’s worth whether you own it or want to buy it.</p>
            </div>
            <a href="#" className='w-600 c-63'>Check property values</a>
        </Card>)
            }})}
      </Grid> */}

      {/* {test.map((item)=>(
       <h1>{item.nama} {item.umur} </h1>
      ))} */}
      </TabPanel>

      {/* Contoh pengambilan data API
      <TabPanel value={value} index={1}>
      <Grid container display="flex" direction="row" justifyContent="space-between">
        {data2.map((item,i)=>(
       <Card key={i} className='card'>
            <div className='center'>
            <img src={buy1} alt='' />
            <p className='w-600 c-34'>{item.code_product} </p>
                <p className='c-72'>{item.port_name} </p>
            </div>
            <a href="#" className='w-600 c-63'>Check property values</a>
        </Card>))}
       </Grid>
      </TabPanel> */}

      <TabPanel className='tabPanel' value={value} index={1}>
        <Grid container display="flex" direction="row" justifyContent="center">{
          data_rent.map((item, i) => (
            <Card key={i} className='card col-md-4 col-sm-12 col-xs-12' >
              <div className='card-container'>
                <img src={item.img} alt='' />
                <div className='cardContent-container'>
                  <h3 className='w-600 c-34' style={{ margin: "0px 0px 4px 0px" }}>{item.title} </h3>
                  <p className='c-72' style={{ margin: "0px 0px 4px 0px" }}>{item.content} </p>
                  <a href="/advertise" className='w-600 c-63'>{item.button} </a>
                </div>
              </div>
            </Card>
            ))
          }
        </Grid>
      </TabPanel>

      <TabPanel className='tabPanel' value={value} index={2}>
        <Grid container display="flex" direction="row" justifyContent={"center"} >{
          data_sell.map((item, i) => (
            <Card key={i} className='card col-md-4 col-sm-12 col-xs-12'>
              <div className='card-container'>
                <img src={item.img} alt='' />
                <div className='cardContent-container'>
                  <h3 className='w-600 c-34' style={{ margin: "0px 0px 4px 0px" }}>{item.title} </h3>
                  <p className='c-72' style={{ margin: "0px 0px 4px 0px" }}>{item.content} </p>
                  <a href="#" className='w-600 c-63'>{item.button} </a>
                </div>
              </div>
            </Card>
            ))
          }
        </Grid>
      </TabPanel>
    </Box>
  );
}