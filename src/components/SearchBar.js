import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import {Tab, Tabs, Box, TextField, Autocomplete} from '@mui/material';
import filterLogo from "../assets/filter_logo.svg"
import propertyType from "../assets/homepage/propertyType.png"
import { searchSuggestions, searchFilter } from '../services/api';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SearchBar(props) {
  const navigate = useNavigate()
  const [value, setValue] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(()=>{
handleTab()
  })

  async function getSuggestions(e,y) {
    try {
      const response = await searchSuggestions({suggestion:e})
      let data = []
      response.data.map(item=>(
        data.push({title:item.suggestion_location})
      ))
    setSuggestions(data)
    console.log(e,"ini e yg dikirim", y);
    } catch (e) {
      console.log(e);
    }
  }

  const handleTab=(e,y)=>{
    const path = window.location.pathname.toLocaleLowerCase()
    if (path=="/" ){
      setValue(0)
    }else if (path=="/rent"){
      setValue(1)
    }else{setValue(2)}
  }

  return (
      <div>
        <div className='searchBar-tab'>
          <Tabs value={value}  aria-label="basic tabs example">
            <Tab onClick={(e)=>navigate(`/`)} label="Buy" {...a11yProps(0)} />
            <Tab onClick={(e)=>navigate(`/rent`)} label="Rent" {...a11yProps(1)} />
            <Tab onClick={(e)=>navigate(`/sold`)} label="Sold"  {...a11yProps(2)} />
          </Tabs>
        </div>

        <div className='search-bar'>
          <img src={propertyType} alt='' className='icon-property d-sm-none'/>
            <div className='searchBar-content'>
              {/* <input type='text' placeholder='Search by address, region or agent'/> */}
              <Autocomplete  sx={{width:"100%", padding:"0px", margin:"0px"}}
        freeSolo
        id="free-solo-2-demo"
      selectOnFocus  disableClearable
        options={suggestions.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params} onSelect={(e)=>console.log(e.target.value,"uu")}
            variant="standard"
            onChange={(e,y)=>getSuggestions(e.target.value, y)}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
            </div>
              
            <button
              className='filter d-xs-none'
              onClick={() => {
                props.setOpenModal(true);
            }}>
              <img src={filterLogo} alt='' />
              Filters
            </button>
          
            <button className='search' onClick={() => {
                props.setOpenModal(true);
            }}>Search</button>
        </div>
      </div>
  );
}