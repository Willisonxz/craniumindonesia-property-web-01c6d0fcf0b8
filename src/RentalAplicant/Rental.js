import { Box, Button, Card, Grid, Typography, Radio ,InputAdornment} from "@mui/material";
import { NavLink } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import NavbarAfterLogin from "../../pages/Profile/components/NavbarAfterLogin"
import AgencyImage from "../BuyList/assets/Agency Image.png"
import bath from "../BuyList/assets/Bathroom Logo.png"
import car from "../BuyList/assets/Car spaces Logo.png"
import bed from "../BuyList/assets/Bedroom Logo.png"
import propertyImage from "../BuyList/assets/Property Image.png"
import React, { useState , useRef, useEffect}from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


export default function Rental() {
const RenterProfileItem = ({...props}) => {
  const {id, name, desc, linkUrl} = props.item
  const navigate = useNavigate();

  const handleRenterProfileItemClick = (path) => {
    navigate(path);
  };
  
  return (
    <div key={id} className="my-2">
      <Card className="p-2" onClick={() => {handleRenterProfileItemClick(linkUrl)}}>
        <Button className="btn w-100" sx={{textTransform: "none", color: "black", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <Typography align="left">{name}</Typography>
            {desc && <Typography fontSize={"12px"} align="left">{desc}</Typography>}
          </div>
          <div>
            <ChevronRight />
          </div>
        </Button>
      </Card>
    </div>
  )
}
const [inspectMethod ,setinspectMethod ]= useState("")
const [inspect_Method ,set_inspect_Method]  =  useState("")
const [selectedDate, setSelectedDate] = useState(null);
const [email, setEmail] = useState("");
const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const inspect_list = [{label:"Yes, i have or plan to inspect the property", value:1},{label:"No, i accept the property as is", value:2}]
  const DATA_PERSONAL_MENU = [
    {
      id : 1,
      name : "Personal details",
      desc : '',
      linkUrl : '/rent/renter-profile/personal-details',
    },
    {
      id : 2,
      name : "About me",
      desc : '',
      linkUrl : '/rent/renter-profile/about-me',
    },
    {
      id : 3,
      name : "Address history",
      desc : '',
      linkUrl : '/rent/renter-profile/address-history',
    },
    {
      id : 4,
      name : "Employment",
      desc : '',
      linkUrl : '/rent/renter-profile/employment',
    },
    {
      id : 5,
      name : "Income",
      desc : '',
      linkUrl : '/rent/renter-profile/income',
    },
    {
      id : 6,
      name : "Identity documents",
      desc : '',
      linkUrl : '/rent/renter-profile/identity-documents',
    },
    {
      id : 7,
      name : "Emergency contact",
      desc : '',
      linkUrl : '/rent/renter-profile/emergency-contact',
    },
   
  ]

  const DATA_HOUSEHOLD_MENU = [
    {
      id : 1,
      name : "People",
      desc : '',
      linkUrl : '/rent/renter-profile/people',
    },
    {
      id : 2,
      name : "Pets",
      desc : '',
      linkUrl : '/rent/renter-profile/pets',
    },
    {
      id : 3,
      name : "Utility connection service",
      desc : '',
      linkUrl : '/rent/renter-profile/utility-connection-service',
    },
  ]
  return (
    
    <div>
   
   <NavbarAfterLogin />
   <div className='Rental-container' >
   <div className="left">
   <div className="left-content">
      <div className="link-rental">
        <NavLink to="/buy/list" style={{textDecoration: 'none'}}><Typography fontSize={"14px"}><ChevronLeft></ChevronLeft>Back to overview</Typography></NavLink>
     </div>
     <div className="Title-content">
      <h5 className="title-rental">Rental Application</h5>
      <p className="title-card">Level 25/81 Harbour Street,Haymarket</p>
     </div>
     <div className="Property-Container">
     <div className="card-rentallist">
     <div className="HeaderCard">
     <div className="image-container">
     <img src={AgencyImage} alt='' className='agentimage' />
     </div>
     <div className="imageproperty">
     <img  src={propertyImage} alt='' className='col-sm-12 img-slide' />
     </div>
     </div>
     <div  className='desc-card-rental'>
     <div className="rent-detailitems">
     <p className='rentdetails c-72 s-16 w-400 '>Rent</p>
     <p className='c-34 s-14 w-700 '>$1,150 pw</p>
     
     </div>
     <div className="rent-detailitems">
     <p className='rentdetails c-72 s-16 w-400 '>Bond</p>
     <p className='c-34 s-14 w-700 '>$4,600</p>
     </div>
     <div className="rent-detailitems">
     <p className='rentdetails c-72 s-16 w-400 '>Available</p>
     <p className='c-34 s-14 w-700 '>22 June 2023</p>
     </div>
            
            <div className='d-flex rent-items col-sm-12'>
                <div className='d-flex mr-12 align-items-center'>
                    <img src={bed} alt='' />
                    <p className='m-0 c-3d s-14 w-400'>&nbsp;7</p>
                </div>
                <div className='d-flex mr-12 align-items-center'>
                    <img src={bath} alt='' />
                    <p className='m-0 c-3d s-14 w-400'>&nbsp;3</p>
                </div>
                <div className='d-flex mr-12 align-items-center'>
                    <img src={car} alt='' />
                    <p className='m-0 c-3d s-14 w-400'>&nbsp;5</p>
                </div>
           
            </div>
        </div>
     </div>
     <div className="lesser-Property">
     <div className="Lesser-Container">
     <div className="Inspected-Property">
      <div className="Text-Inspected s-16 w-700">
      <p>Have you inspected the property?</p>
      </div>
                <Grid container className='inspection-container radio'flexDirection={"row"} display={"flex"} justifyContent={"flex-start"} mb={"0px"}>
                  {inspect_list.map((item,i)=>(
                  <FormControlLabel key={i} value={item.value} onChange={(e)=>setinspectMethod(e.target.value)}  control={<Radio size="medium" checked={inspectMethod==item.value?true:false} />} label={item.label} />))}
                </Grid>
     </div>
     <div>
     <div className="Text-Inspected s-16 w-700">
      <p>Preferred lease start date</p>
      </div>
     <LocalizationProvider dateAdapter={AdapterDayjs}>

      <DatePicker
        label="Day Month Year"
        value={selectedDate}
        format="DD MMMM YYYY"
        onChange={(newDate) => setSelectedDate(newDate)}
        renderInput={(params) => <TextField {...params} />}
      />
       </LocalizationProvider>
    </div>
   <div>
   <div className="Text-Inspected s-16 w-700">
      <p>Initial lease term (months)</p>
      </div>
      <div className="row-button">

      </div>
      </div>
      <div>
   <div className="Text-Inspected s-16 w-700">
      <p>Rent per week</p>
      <TextField className='input-property'
              color="primary"
              type={"type"}
              variant="outlined"
              placeholder="520"
              sx={{ width: "50%" }}
              value={email}
              onChange={handleEmailChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MonetizationOnIcon style={{fontSize: "16px"}} />
                  </InputAdornment>
                ),
              }}
            />
      </div>
      </div>
     </div>

     </div>
</div>
     </div>

   </div>
      <Box className="right" sx={{
        borderBottom: 1,
        borderColor: 'divider',
      }}>
        <div className="py-4">
          <div className="box-content-profile">
            
            <div className="row mx-0 px-0 my-2 gy-2 gx-4">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h1>Your Application</h1>
                </div>
              </div>
            </div>
            <Box maxWidth={'675.84px'} maxHeight={'826px'}>
              <div className="mb-5">
                <h3><strong>Personal</strong></h3>
                {
                    DATA_PERSONAL_MENU.map((item) => {
                        return <RenterProfileItem key={item.id} item={item}/>
                    })
                }
              </div>
              <div className="mb-4">
                <h3><strong>Household</strong></h3>
                <div className="mb-3">Details of who you'll live with, pets & utility preferences. Adding 'People' and 'Pets' here allows you to easily add them to any future application.</div>
                {
                    DATA_HOUSEHOLD_MENU.map((item) => {
                        return <RenterProfileItem key={item.id} item={item}/>
                    })
                }
              </div>
            </Box>
          </div>
        </div>
      </Box>
      </div>
     
      </div>
    
  )
}