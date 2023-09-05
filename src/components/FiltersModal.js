import React, { useState , useRef, useEffect}from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Grid, MenuItem, Typography, Radio, TextField, Button} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Modal from 'react-awesome-modal';
import Select from 'react-select'
import more from "../assets/homepage/moreLogo.png"
import { useNavigate, useLocation } from 'react-router-dom';
import { searchFilter } from '../services/api';



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// RENT 
const propertyTypeData = [
  { label: 'All types', id: 'type1' },
  { label: 'House', id: 'type2' },
  { label: 'Apartment & Unit', id: 'type3' },
  { label: 'Townhouse', id: 'type4' },
  { label: 'Villa', id: 'type5' },
  { label: 'Land', id: 'type6' },
  { label: 'Acreage', id: 'type7' },
  { label: 'Rural', id: 'type8' },
  { label: 'Block Of Units', id: 'type9' },
  { label: 'Retirement Living', id: 'type10' },
];

const date_avail = new Date().getDate()
const day_avail = new Date().getDay()
const month_avail = new Date().getMonth()

var date = new Date();

// add a day
const cekPlus = date.setDate(date.getDate() + 1);
console.log(day_avail, date_avail, month_avail,"cek today", new Date(cekPlus).toString().slice(0,10), new Date(cekPlus));

const availableDate = [
  {label :"Avail. Now", value:"1"},
  {label :"", value:""},
  {label :"", value:""},
  {label :"", value:""},
  {label :"", value:""},
  {label :"", value:""},
  {label :"", value:""},
]

const list_propertyRequirements =[
  {label :"Furnished", value:"1"},
  {label :"Pets considered", value:"2"}
]

const propertyTypeRent = [
  { label: 'All types', id: 'type1' },
  { label: 'House', id: 'type2' },
  { label: 'Apartment & Unit', id: 'type3' },
  { label: 'Townhouse', id: 'type4' },
  { label: 'Villa', id: 'type5' },
];

const outdoorList = [
  {label:"Swimming pool", value:1},
  {label:"Garage", value:2},
  {label:"Balcony", value:3},
  {label:"Outdoor area", value:4},
  {label:"Option 5", value:5},
  {label:"Option 6", value:6},
  {label:"Option 7", value:7},
]

const indoorList = [
  {label:"Ensuite", value:1},
  {label:"Dishwasher", value:2},
  {label:"Study", value:3},
  {label:"Built in robes", value:4},
  {label:"Option 5", value:5},
  {label:"Option 6", value:6},
  {label:"Option 7", value:7},
]

const climateList = [
  {label:"Air conditioning", value:1},
  {label:"Heating", value:2},
  {label:"Solar panels", value:3},
  {label:"High energy efficiency", value:4},
  {label:"Option 5", value:5},
  {label:"Option 6", value:6},
  {label:"Option 7", value:7},
]


export default function FiltersModal({ setOpenModal, visible }) {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname
  const [value, setValue] = useState(0);
  const [showOutdoor, setShowOutdoor] = useState(false)
  const [showIndoor, setShowIndoor] = useState(false)
  const [showClimate, setShowClimate] = useState(false)
  const [statusClearFilters ,setStatusClearFilter] = useState(false)
  const [textList ,setTextList] = useState(["a1", "a2","a3"])
  // const [ ,set] = useState("")


  // data yang akan dikirim
  const [propertyType ,setPropertyType] = useState("")
  const [minPrice ,setMinPrice] = useState("")
  const [maxPrice ,setMaxPrice] = useState("")
  const [minBedRooms ,setMinBedRooms] = useState("")
  const [maxBedRooms ,setMaxBedRooms] = useState("")
  const [bathRooms ,setBathRooms] = useState("")
  const [carSpaces ,setCarSpaces] = useState("")
  const [minLandSize ,setMinLandSize] = useState("")
  const [maxLandSize ,setMaxLandSize] = useState("")
  const [establishedProperty ,setEstablishedProperty] = useState("")
  const [outdoorFeautures ,setOutdoorFeautures] = useState([])
  const [indoorFeautures ,setIndoorFeautures] = useState([])
  const [climateControl ,setClimateControl] = useState([])
  const [keywords ,setKeywords] = useState("")
  const [saleMethod ,setSaleMethod] = useState("")
  const [excludeProperty ,setExcludeProperty] = useState("")
  // rent 
  const [propertyRequirement, setPropertyRequirement] = useState("")

  // api 
  const [page ,set_page]  =  useState("1")
  const [search ,set_search]  =  useState("")
  const [property_type ,set_property_type]  =  useState("")
  const [category_all ,set_category_all]  =  useState("")
  const [category_apartment ,set_category_apartment]  =  useState("")
  const [category_villa ,set_category_villa]  =  useState("")
  const [category_acreage ,set_category_acreage]  =  useState("")
  const [category_block_of_units ,set_category_block_of_units]  =  useState("")
  const [category_house ,set_category_house]  =  useState("")
  const [category_townhouse ,set_category_townhouse]  =  useState("")
  const [category_land ,set_category_land]  =  useState("")
  const [category_rural ,set_category_rural]  =  useState("")
  const [category_retirement ,set_category_retirement]  =  useState("")
  const [price_min ,set_price_min]  =  useState("")
  const [price_max ,set_price_max]  =  useState("")
  const [price_only ,set_price_only]  =  useState("")
  const [bedrooms_min ,set_bedrooms_min]  =  useState("")
  const [bedrooms_max ,set_bedrooms_max]  =  useState("")
  const [bathrooms_min ,set_bathrooms_min]  =  useState("")
  const [car_space ,set_car_space]  =  useState("")
  const [land_size_min ,set_land_size_min]  =  useState("")
  const [land_size_max ,set_land_size_max]  =  useState("")
  const [new_established_property ,set_new_established_property]  =  useState("")
  const [outdoor_swimming_pool ,set_outdoor_swimming_pool]  =  useState("")
  const [outdoor_balcony ,set_outdoor_balcony]  =  useState("")
  const [outdoor_undercover_parking ,set_outdoor_undercover_parking]  =  useState("")
  const [outdoor_fully_fenced ,set_outdoor_fully_fenced]  =  useState("")
  const [outdoor_tennis_court ,set_outdoor_tennis_court]  =  useState("")
  const [outdoor_garage ,set_outdoor_garage]  =  useState("")
  const [outdoor_area ,set_outdoor_area]  =  useState("")
  const [outdoor_shed ,set_outdoor_shed]  =  useState("")
  const [outdoor_spa ,set_outdoor_spa]  =  useState("")
  const [indoor_ensuite ,set_indoor_ensuite]  =  useState("")
  const [indoor_dishwasher ,set_indoor_dishwasher]  =  useState("")
  const [indoor_study ,set_indoor_study]  =  useState("")
  const [indoor_built_in_robes ,set_indoor_built_in_robes]  =  useState("")
  const [indoor_alarm_system ,set_indoor_alarm_system]  =  useState("")
  const [indoor_broadband ,set_indoor_broadband]  =  useState("")
  const [indoor_floorboards ,set_indoor_floorboards]  =  useState("")
  const [indoor_gym ,set_indoor_gym]  =  useState("")
  const [indoor_rumpus_room ,set_indoor_rumpus_room]  =  useState("")
  const [indoor_workshop ,set_indoor_workshop]  =  useState("")
  const [climate_control_air_conditioning ,set_climate_control_air_conditioning]  =  useState("")
  const [climate_control_solar_panels ,set_climate_control_solar_panels]  =  useState("")
  const [climate_control_heating ,set_climate_control_heating]  =  useState("")
  const [climate_control_high_energy_efficiency ,set_climate_control_high_energy_efficiency]  =  useState("")
  const [climate_control_water_tank ,set_climate_control_water_tank]  =  useState("")
  const [climate_control_solar_hot_water ,set_climate_control_solar_hot_water]  =  useState("")
  const [specific_property ,set_specific_property]  =  useState("")
  const [sale_method ,set_sale_method]  =  useState("")
  const [exclude_contract ,set_exclude_contract]  =  useState("")

  useEffect(()=>{
    checkTab()
  })
  

  const handleArray = (e, x, y) =>{
    const index = x.indexOf(e)
    const data = [...x]
    if (index == -1){
      data.push(e)
    }else{
      data.pop(e,1)
    }
    y(data)
  }

  const checkTab = (e)=>{
    if (path.toLowerCase()==="/rent"){
      setValue(1)
    }
    if (path.toLowerCase()==="/"){
      setValue(0)
    }
     if (path.toLowerCase()==="/sold"){
      setValue(2)}
  }


  const  submitFilter= async(e)=>{
   const data = {
      page, search, property_type, category_all, category_apartment, category_villa, category_acreage, category_block_of_units, category_house, category_townhouse, category_land, category_rural, category_retirement,
      price_min, price_max, price_only, bedrooms_max,bedrooms_min, bathrooms_min, car_space, land_size_max, land_size_min, new_established_property, outdoor_swimming_pool, outdoor_balcony, outdoor_undercover_parking,
      outdoor_fully_fenced, outdoor_tennis_court, outdoor_garage, outdoor_area, outdoor_shed, outdoor_spa, indoor_alarm_system, indoor_ensuite, indoor_dishwasher, indoor_study, indoor_floorboards, indoor_built_in_robes,
      indoor_broadband, indoor_gym, indoor_rumpus_room, indoor_workshop, climate_control_air_conditioning, climate_control_heating, climate_control_high_energy_efficiency, climate_control_water_tank, climate_control_solar_panels,
      climate_control_solar_hot_water, specific_property, sale_method, exclude_contract
    }

    const res = await searchFilter(data)
    console.log(res,"ini res");
  }


  const height_window = useRef(window.innerHeight)
  const height = height_window.current - 68
  const price_list = [{value:"$50,000", label:"$50,000"},{value:"$75,000", label:"$75,000"},{value:"$100,000", label:"$100,000"},
  {value:"$125,000", label:"$125,000"},{value:"$150,000", label:"$150,000"},{value:"$175,000", label:"$175,000"},{value:"$200,000", label:"$200,000"},
  {value:"$225,000", label:"$225,000"},{value:"$250,000", label:"$250,000"},{value:"$300,000", label:"$300,000"},{value:"$500,000", label:"$500,000"}]

  const bed_types= [{label:"studio",value:"studio"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"}]
  const bath_types= [{label:"1+",value:"1"},{label:"2+",value:"2"},{label:"3+",value:"3"},{label:"4+",value:"4"},{label:"5+",value:"5"}]
  const landsize_list = [{label:"100 ㎡",value:"1"},{label:"200 ㎡",value:"2"},{label:"300 ㎡",value:"3"},{label:"400 ㎡",value:"4"},{label:"500 ㎡",value:"5"},{label:"600 ㎡",value:"6"}]
  const method_list = [{label:"All types", value:1},{label:"New", value:2},{label:"Established", value:3}]
  const established_list = [{label:"All types", value:1},{label:"New", value:2},{label:"Established", value:3}]


  return (
    <Modal visible={visible}  effect="fadeInUp" onClickAway={() =>  setOpenModal(false)}>
    <div className='modal-background' style={{height:`${height}px`}}>
      <div className='modal-header'>
          <Typography variant='h2'style={{fontFamily:"Roboto-600"}} mt={"19px"} mb={"21px"}>Filters</Typography>
          <button onClick={() => setOpenModal(false)}> ✖ </button> 
      </div>
      <div className='box-modal' >
        <div className='sc-modal'>
          <div className='filters-tab'  style={{ width: '100%', height: '61px' }}>
            <Tabs value={value}  aria-label="basic tabs example">
              <Tab label="Buy" {...a11yProps(0)} onClick={(e)=>navigate("/")}  />
              <Tab label="Rent" {...a11yProps(1)} onClick={(e)=>navigate("/rent")}  />
              <Tab label="Sold"  {...a11yProps(2)} onClick={(e)=>navigate("/sold")}  />
            </Tabs>
          </div>
          {value===0 &&
          <div className='modal-container'>
            <h2>Property type</h2>
              <div className='propertyType-container'>
                {propertyTypeData.map((item) => (
                    <div key={item.id} className='propertyType-item'>
                      <FormControlLabel
                        control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />}
                        label={item.label}
                      />
                    </div>
                ))
              }
              </div>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"32px 0px 23px"} />
              <Typography variant='h2'>Price</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                <Grid item sx={{width:`calc(50% - 8px)`}}>
                  <Typography variant='body1' >Min</Typography>
                  <Select options={price_list} value={minPrice} onChange={(e)=>setMinPrice( e["value"])} className='slc' />
                </Grid>
                <Grid item sx={{width:`calc(50% - 8px)`}}>
                  <Typography variant='body1'>Max</Typography>
                  <Select options={price_list} value={maxPrice} onChange={(e)=>setMaxPrice( e["value"])} className='slc' />
                </Grid>
              </Grid>
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                  />}
                  label="Only show properties with a price"
                />
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Bedrooms</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1' >Min</Typography>
                    <Select options={bed_types} value={minBedRooms} onChange={(e)=>setMinBedRooms( e["value"])} className='slc' />
                  </Grid>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1'>Max</Typography>
                    <Select options={bed_types} value={maxBedRooms} onChange={(e)=>setMaxBedRooms( e["value"])} className='slc' />
                  </Grid>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Bathrooms</Typography>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Select options={bath_types} value={bathRooms} onChange={(e)=>setBathRooms( e["value"])} className='slc' />
                  </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"32px 0px 23px"} />
                <Typography variant='h2'>Car spaces</Typography>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Select options={bath_types} value={carSpaces} onChange={(e)=>setCarSpaces( e["value"])} className='slc' />
                  </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"32px 0px 23px"} />
                <Typography variant='h2'>Land size</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1' >Min</Typography>
                    <Select options={landsize_list} value={minLandSize} onChange={(e)=>setMinLandSize( e["value"])} className='slc' />
                  </Grid>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1'>Max</Typography>
                    <Select options={landsize_list} value={maxLandSize} onChange={(e)=>setMaxLandSize( e["value"])} className='slc' />
                  </Grid>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2' >New or established property</Typography>
                <Grid container className='price-container radio'flexDirection={"row"} display={"flex"} justifyContent={"flex-start"} mb={"0px"}>
                  {established_list.map((item,i)=>(
                  <FormControlLabel key={i} value={item.value} onChange={(e)=>setEstablishedProperty(e.target.value)} control={<Radio size="medium" checked={establishedProperty== item.value?true:false} />} label="All types" />))}
                </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Outdoor features</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                    {outdoorList.map((item,i) => {
                      if (i < (showOutdoor?100:4)){
                      return(
                    <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                      <FormControlLabel value={item.value} checked={(outdoorFeautures.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, outdoorFeautures, setOutdoorFeautures)}
                          control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                          />}
                          label={item.label}
                        />
                    </Grid>)}})}
                    <Typography variant='body1' onClick={(e)=>setShowOutdoor(!showOutdoor)} className='w-700 c-006 show-more trans' style={{cursor:"pointer"}} mt={"16px"} >Show {showOutdoor?"less":"more"} outdoor features 
                    <img src={more} alt='' className={`${showOutdoor?"rotate":"flex"}`} style={{marginLeft:"8px"}} />
                    </Typography>
                </Grid>
             
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"28px 0px 23px"} />
                <Typography variant='h2'>Indoor features</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                  {indoorList.map((item,i) => {
                    if (i < (showIndoor?100:4)){
                    return(
                  <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                    <FormControlLabel value={item.value} checked={(indoorFeautures.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, indoorFeautures, setIndoorFeautures)}
                        control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />}
                        label={item.label}
                      />
                  </Grid>)}})}
                   <Typography variant='body1' onClick={(e)=>setShowIndoor(!showIndoor)} className='w-700 c-006 show-more trans' style={{cursor:"pointer"}} mt={"16px"} >Show {showIndoor?"less":"more"} indoor features
                   <img src={more} alt='' className={`${showIndoor?"rotate":"flex"}`} style={{marginLeft:"8px"}} />
                   </Typography>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Climate control & energy</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                  {climateList.map((item,i) => {
                    if (i < (showClimate?100:4)){
                    return(
                  <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                    <FormControlLabel value={item.value} checked={(climateControl.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, indoorFeautures, setIndoorFeautures)}
                        control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />}
                        label={item.label}
                      />
                  </Grid>)}})}
                   <Typography variant='body1' onClick={(e)=>setShowClimate(!showClimate)} className='w-700 c-006 show-more trans' style={{cursor:"pointer"}} mt={"16px"} >Show {showClimate?"less":"more"} climate control & energy
                   <img src={more} alt='' className={`${showClimate?"rotate":"flex"}`} style={{marginLeft:"8px"}} />
                   </Typography>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Keywords</Typography>
              <Grid container className='price-container'  mb={"15px"}>
                 <TextField sx={{width:"100%"}}  value={keywords} onChange={(e)=>setKeywords( e.target.value)} placeholder='Air con, pool, garage, solar, ensuite...' />
                 <Typography variant='body1' style={{fontSize:"14px"}}>Add specific property features to your search</Typography>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Sale method</Typography>
                <Grid container className='price-container radio'flexDirection={"row"} display={"flex"} justifyContent={"flex-start"} mb={"0px"}>
                  {method_list.map((item,i)=>(
                  <FormControlLabel key={i} value={item.value} onChange={(e)=>setSaleMethod(e.target.value)}  control={<Radio size="medium" checked={saleMethod==item.value?true:false} />} label={item.label} />))}
                </Grid>
                <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                  />}
                  label="Exclude properties under contract/offer"
                />
              </Grid>

          </div>}

          {value===1 &&
          <div className='modal-container'>
            <h2>Property type</h2>
              <div className='propertyType-container'>
                {propertyTypeRent.map((item) => (
                    <div key={item.id} className='propertyType-item'>
                      <FormControlLabel
                        control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />}
                        label={item.label}
                      />
                    </div>
                ))
              }
              </div>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"32px 0px 23px"} />
              <Typography variant='h2'>Price</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                <Grid item sx={{width:`calc(50% - 8px)`}}>
                  <Typography variant='body1' >Min</Typography>
                  <Select options={price_list} value={minPrice} onChange={(e)=>setMinPrice( e["value"])} className='slc' />
                </Grid>
                <Grid item sx={{width:`calc(50% - 8px)`}}>
                  <Typography variant='body1'>Max</Typography>
                  <Select options={price_list} value={maxPrice} onChange={(e)=>setMaxPrice( e["value"])} className='slc' />
                </Grid>
              </Grid>
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                  />}
                  label="Only show properties with a price"
                />
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Bedrooms</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1' >Min</Typography>
                    <Select options={bed_types} value={minBedRooms} onChange={(e)=>setMinBedRooms( e["value"])} className='slc' />
                  </Grid>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1'>Max</Typography>
                    <Select options={bed_types} value={maxBedRooms} onChange={(e)=>setMaxBedRooms( e["value"])} className='slc' />
                  </Grid>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Bathrooms</Typography>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Select options={bath_types} value={bathRooms} onChange={(e)=>setBathRooms( e["value"])} className='slc' />
                  </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"32px 0px 23px"} />
                <Typography variant='h2'>Car spaces</Typography>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Select options={bath_types} value={carSpaces} onChange={(e)=>setCarSpaces( e["value"])} className='slc' />
                  </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"32px 0px 23px"} />
                <Typography variant='h2'>Available Date</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Select options={landsize_list} value={minLandSize} onChange={(e)=>setMinLandSize( e["value"])} className='slc' />
                  </Grid>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2' >Property requirements</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                    {list_propertyRequirements.map((item,i) => {
                      return(
                    <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                      <FormControlLabel value={item.value} checked={(outdoorFeautures.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, outdoorFeautures, setOutdoorFeautures)}
                          control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                          />}
                          label={item.label}
                        />
                    </Grid>)})}
                </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Outdoor features</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                    {outdoorList.map((item,i) => {
                      if (i < (showOutdoor?100:4)){
                      return(
                    <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                      <FormControlLabel value={item.value} checked={(outdoorFeautures.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, outdoorFeautures, setOutdoorFeautures)}
                          control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                          />}
                          label={item.label}
                        />
                    </Grid>)}})}
                    <Typography variant='body1' onClick={(e)=>setShowOutdoor(!showOutdoor)} className='w-700 c-006 show-more trans' style={{cursor:"pointer"}} mt={"16px"} >Show {showOutdoor?"less":"more"} outdoor features 
                    <img src={more} alt='' className={`${showOutdoor?"rotate":"flex"}`} style={{marginLeft:"8px"}} />
                    </Typography>
                </Grid>
             
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"28px 0px 23px"} />
                <Typography variant='h2'>Indoor features</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                  {indoorList.map((item,i) => {
                    if (i < (showIndoor?100:4)){
                    return(
                  <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                    <FormControlLabel value={item.value} checked={(indoorFeautures.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, indoorFeautures, setIndoorFeautures)}
                        control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />}
                        label={item.label}
                      />
                  </Grid>)}})}
                   <Typography variant='body1' onClick={(e)=>setShowIndoor(!showIndoor)} className='w-700 c-006 show-more trans' style={{cursor:"pointer"}} mt={"16px"} >Show {showIndoor?"less":"more"} indoor features
                   <img src={more} alt='' className={`${showIndoor?"rotate":"flex"}`} style={{marginLeft:"8px"}} />
                   </Typography>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Climate control & energy</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                  {climateList.map((item,i) => {
                    if (i < (showClimate?100:4)){
                    return(
                  <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                    <FormControlLabel value={item.value} checked={(climateControl.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, indoorFeautures, setIndoorFeautures)}
                        control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />}
                        label={item.label}
                      />
                  </Grid>)}})}
                   <Typography variant='body1' onClick={(e)=>setShowClimate(!showClimate)} className='w-700 c-006 show-more trans' style={{cursor:"pointer"}} mt={"16px"} >Show {showClimate?"less":"more"} climate control & energy
                   <img src={more} alt='' className={`${showClimate?"rotate":"flex"}`} style={{marginLeft:"8px"}} />
                   </Typography>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Keywords</Typography>
              <Grid container className='price-container'  mb={"15px"}>
                 <TextField sx={{width:"100%"}}  value={keywords} onChange={(e)=>setKeywords( e.target.value)} placeholder='Air con, pool, garage, solar, ensuite...' />
                 <Typography variant='body1' style={{fontSize:"14px"}}>Add specific property features to your search</Typography>
              </Grid>
             <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                  />}
                  label="Exclude properties under contract/offer"
                />
              </Grid>

          </div>}

          {value===2 &&
          <div className='modal-container'>
            <h2>Property type</h2>
              <div className='propertyType-container'>
                {propertyTypeData.map((item) => (
                    <div key={item.id} className='propertyType-item'>
                      <FormControlLabel
                        control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />}
                        label={item.label}
                      />
                    </div>
                ))
              }
              </div>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"32px 0px 23px"} />
              <Typography variant='h2'>Price</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                <Grid item sx={{width:`calc(50% - 8px)`}}>
                  <Typography variant='body1' >Min</Typography>
                  <Select options={price_list} value={minPrice} onChange={(e)=>setMinPrice( e["value"])} className='slc' />
                </Grid>
                <Grid item sx={{width:`calc(50% - 8px)`}}>
                  <Typography variant='body1'>Max</Typography>
                  <Select options={price_list} value={maxPrice} onChange={(e)=>setMaxPrice( e["value"])} className='slc' />
                </Grid>
              </Grid>
              <Grid xs={12}>
                <FormControlLabel
                  control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                  />}
                  label="Only show properties with a price"
                />
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Sold Date</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Select options={bed_types} value={minBedRooms} onChange={(e)=>setMinBedRooms( e["value"])} className='slc' />
                  </Grid>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Bedrooms</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1' >Min</Typography>
                    <Select options={bed_types} value={minBedRooms} onChange={(e)=>setMinBedRooms( e["value"])} className='slc' />
                  </Grid>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1'>Max</Typography>
                    <Select options={bed_types} value={maxBedRooms} onChange={(e)=>setMaxBedRooms( e["value"])} className='slc' />
                  </Grid>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Bathrooms</Typography>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Select options={bath_types} value={bathRooms} onChange={(e)=>setBathRooms( e["value"])} className='slc' />
                  </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"32px 0px 23px"} />
                <Typography variant='h2'>Car spaces</Typography>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Select options={bath_types} value={carSpaces} onChange={(e)=>setCarSpaces( e["value"])} className='slc' />
                  </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"32px 0px 23px"} />
                <Typography variant='h2'>Land size</Typography>
              <Grid container className='price-container' justifyContent={"space-between"} mb={"15px"}>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1' >Min</Typography>
                    <Select options={landsize_list} value={minLandSize} onChange={(e)=>setMinLandSize( e["value"])} className='slc' />
                  </Grid>
                  <Grid item sx={{width:`calc(50% - 8px)`}}>
                    <Typography variant='body1'>Max</Typography>
                    <Select options={landsize_list} value={maxLandSize} onChange={(e)=>setMaxLandSize( e["value"])} className='slc' />
                  </Grid>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Outdoor features</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                    {outdoorList.map((item,i) => {
                      if (i < (showOutdoor?100:4)){
                      return(
                    <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                      <FormControlLabel value={item.value} checked={(outdoorFeautures.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, outdoorFeautures, setOutdoorFeautures)}
                          control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                          />}
                          label={item.label}
                        />
                    </Grid>)}})}
                    <Typography variant='body1' onClick={(e)=>setShowOutdoor(!showOutdoor)} className='w-700 c-006 show-more trans' style={{cursor:"pointer"}} mt={"16px"} >Show {showOutdoor?"less":"more"} outdoor features 
                    <img src={more} alt='' className={`${showOutdoor?"rotate":"flex"}`} style={{marginLeft:"8px"}} />
                    </Typography>
                </Grid>
             
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"28px 0px 23px"} />
                <Typography variant='h2'>Indoor features</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                  {indoorList.map((item,i) => {
                    if (i < (showIndoor?100:4)){
                    return(
                  <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                    <FormControlLabel value={item.value} checked={(indoorFeautures.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, indoorFeautures, setIndoorFeautures)}
                        control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />}
                        label={item.label}
                      />
                  </Grid>)}})}
                   <Typography variant='body1' onClick={(e)=>setShowIndoor(!showIndoor)} className='w-700 c-006 show-more trans' style={{cursor:"pointer"}} mt={"16px"} >Show {showIndoor?"less":"more"} indoor features
                   <img src={more} alt='' className={`${showIndoor?"rotate":"flex"}`} style={{marginLeft:"8px"}} />
                   </Typography>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Climate control & energy</Typography>
                <Grid container className='price-container' justifyContent={"space-between"} flexWrap={"wrap"} mb={"15px"}>
                  {climateList.map((item,i) => {
                    if (i < (showClimate?100:4)){
                    return(
                  <Grid key={i} item sx={{width:`calc(50% - 8px)`, transition:".3s"}}>
                    <FormControlLabel value={item.value} checked={(climateControl.indexOf(`${item.value}`)!=-1) ?true:false } onChange={(e)=>handleArray(e.target.value, indoorFeautures, setIndoorFeautures)}
                        control={<Checkbox value={item.value}  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                        />}
                        label={item.label}
                      />
                  </Grid>)}})}
                   <Typography variant='body1' onClick={(e)=>setShowClimate(!showClimate)} className='w-700 c-006 show-more trans' style={{cursor:"pointer"}} mt={"16px"} >Show {showClimate?"less":"more"} climate control & energy
                   <img src={more} alt='' className={`${showClimate?"rotate":"flex"}`} style={{marginLeft:"8px"}} />
                   </Typography>
              </Grid>
              <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"23px 0px 23px"} />
                <Typography variant='h2'>Keywords</Typography>
              <Grid container className='price-container'  mb={"15px"}>
                 <TextField sx={{width:"100%"}}  value={keywords} onChange={(e)=>setKeywords( e.target.value)} placeholder='Air con, pool, garage, solar, ensuite...' />
                 <Typography variant='body1' style={{fontSize:"14px"}}>Add specific property features to your search</Typography>
              </Grid>
          </div>}
        </div>
        <Grid  xs={12} sx={{backgroundColor:"#BCBCBC", height:"1px"}} m={"4px 0px 0px"} />
        <Grid container sx={{boxSizing:"border-box", height:"80px",alignContent:"center", justifyContent:"space-between"}} p={"0px 48px"} width={"100%"}>
            <Button style={{color:"#3D3B40", fontFamily:"Roboto-600", fontWeight:"700", textTransform:"capitalize"}} onClick={() => {setOpenModal(false)}}>Clear filters</Button>
            <Button style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED",textTransform:"capitalize", height:"48px", width:"97px"}} onClick={() => {navigate("/buy/list")}} >Search</Button>
        </Grid>
       
      </div>
     
    </div>
    
    {/* </div> */}
    </Modal>
  )
}
