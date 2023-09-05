import React, { useState } from 'react'
import '../../../styles/new-homes.css'
import { Grid, Container, Link, Breadcrumbs, Typography, TextField, InputAdornment, ButtonGroup, Button, Autocomplete, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ArrowDropUp, KeyboardArrowDown } from '@mui/icons-material'
import axios from 'axios'
import { config } from '../../../services/config'

function HeroWithSearch(props) {
  const { region, listRegion, choosedLink, searchValue, chooseRegion, closeListRegion, openList, openSearchRegion, breadcrumbsTitle } = props;
  const mobileSize        = useMediaQuery('(max-width:700px)')
  const websiteMediumSize = useMediaQuery('(max-width: 1440px)')

  return (
    <>
      <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid item sx={{ zIndex: '2', marginTop: mobileSize ? '70px' : '-20px' }}>
          <Breadcrumbs aria-label="breadcrumb" separator=">" className='breadcrumbs-content'>
            <Link underline="hover" color="inherit" href="/new-homes">
              New Homes
            </Link>
            <Typography color="text.white">New Apartments</Typography>
          </Breadcrumbs>
          <hr style={{ color: '#fff' }} />
          <Typography variant='p' color="white" style={{ zIndex: 1, fontSize: '20px', display: openSearchRegion ? 'none' : 'block' }}>
            {breadcrumbsTitle} in Indonesia
          </Typography>
          <Typography variant='p' textTransform={'capitalize'} color="white" style={{ zIndex: 1, fontSize: '20px', display: openSearchRegion ? 'flex' : 'none', alignItems: 'center' }} onClick={closeListRegion}>
            {breadcrumbsTitle} in <Typography id="region-text" variant='p' color="white" style={{ zIndex: 1, fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', cursor: 'pointer' }}>{region}</Typography><KeyboardArrowDown sx={{ cursor: 'pointer' }} id="arrow-region"/>
          </Typography>
          <List sx={{ backgroundColor: 'white', position: 'absolute', left: mobileSize ? '130px' : websiteMediumSize ? '260px' : '560px', top: mobileSize ? '185px' : websiteMediumSize ? '160px' : '190px', padding: '0px', width: '270px', boxShadow: '1', display: openList ? 'block' : 'none' }}>
            <ArrowDropUp sx={{ position: 'absolute', left: '110px', top: '-23px', color: 'white', fontSize: '40px' }}/>
            {listRegion.map(d => (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={chooseRegion}>
                    <ListItemText primary={d.areaName}/>
                  </ListItemButton>
                </ListItem>
                <Divider light/>
              </>
            ))}
          </List>
        </Grid>
        <Grid item className='hero-content-link' sx={{ maxWidth: mobileSize ? '400px' : '700px', overflowX: 'auto', whiteSpace: 'nowrap', zIndex: '1', marginTop: '20px' }}>
          <NavLink onClick={() => props.handleChangeSubMenu(1)} className={choosedLink("/new-homes")} to={"/new-homes"}>EXPLORE</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(2)} className={choosedLink("/new-apartments")} to={"/new-apartments"}>NEW APARTMENTS</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(3)} className={choosedLink("/new-land")} to={"/new-land"}>LAND</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(4)} className={choosedLink("/new-home-and-land")} to={"/new-home-and-land"}>HOUSE & LAND</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(5)} className={choosedLink("/new-builder")} to={"/new-builder"}>BUILDERS</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(6)} className={choosedLink("/new-home-design")} to={"/new-home-design"}>HOME DESIGNS</NavLink>
        </Grid>
        <ButtonGroup sx={{ marginTop: '10px' }}>
          <Autocomplete
            freeSolo
            id='search-input'
            options={searchValue}
            onKeyUp={props.handleSearchValue}
            renderInput={(params) => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment style={{ marginRight: '20px' }}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                name='search'
                sx={{
                  backgroundColor: "#fff",
                  height: '60px',
                  '.MuiOutlinedInput-notchedOutline': { border: 'none' }
                }}
                placeholder='Search by region, suburb or postcode'
              />
            )}
            fullWidth={!mobileSize}
            sx={{
              width: mobileSize ? '310px' : '100%'
            }}
          />
          <Button style={{ backgroundColor: '#17C2ED', color: '#fff', width: mobileSize ? '' : '120px', height: '60px', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} onClick={props.searching}>Search</Button>
        </ButtonGroup>
      </Grid>
    </>
  )
}

function HeroWithoutSearch(props) {
  const { choosedLink } = props;
  const mobileSize = useMediaQuery('(max-width:700px)')

  return (
    <div style={{ marginTop: mobileSize ? '90px' : '10px' }}>
      <Grid container >
        <Grid item sx={{ color: 'white', zIndex: '2' }}>
          <Typography style={{ fontSize: mobileSize ? '29px' : '44px', fontWeight: 700, zIndex: '3' }}>New Homes Start Here.</Typography>
          <Typography style={{ fontSize: mobileSize ? '15px' : '22px', fontWeight: 400, zIndex: '3' }}>Explore new apartments, land estates, house and land, home designs, builders and more.</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: mobileSize ? '70px' : '50px' }}>
        <Grid item className='hero-content-link' sx={{ maxWidth: '700px', overflowX: 'auto', zIndex: '1', whiteSpace: 'nowrap' }}>
          <NavLink onClick={() => props.handleChangeSubMenu(1)} className={choosedLink("/new-homes")} to={"/new-homes"}>EXPLORE</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(2)} className={choosedLink("/new-apartments")} to={"/new-apartments"}>NEW APARTMENTS</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(1)} className={choosedLink("/new-land")} to={"/new-land"}>LAND</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(1)} className={choosedLink("/new-home-and-land")} to={"/new-home-and-land"}>HOUSE & LAND</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(1)} className={choosedLink("/new-builder")} to={"/new-builder"}>BUILDERS</NavLink>
          <NavLink onClick={() => props.handleChangeSubMenu(1)} className={choosedLink("/new-home-design")} to={"/new-home-design"}>HOME DESIGNS</NavLink>
        </Grid>
      </Grid>
    </div>
  )
}

export const Hero = (props) => {
  const path = window.location.pathname
  const [searchValue, setSearchValue] = useState([])
  const choosedLink = (e) => {
    let color = ""
    if (e === path) {
      color = "hero-content-link-choosed"
    }
    return color
  }

  const handleSearchValue = e => {
    setTimeout(() => {
      axios.post(config.baseURL + '/search/suggestion', {
        suggestion: typeof e.target.value === "undefined" ? "" : e.target.value
      })
      .then(data => setSearchValue(data.data.data.map(d => d.suggestion_location)))
      .catch(err => console.log(err))
    }, 1000)
  } 

  const { region, listRegion, banner, withSearch, chooseRegion, closeListRegion, openList, openSearchRegion, breadcrumbsTitle } = props;
  let component
  if (withSearch) {
    component = <HeroWithSearch region={region} listRegion={listRegion} handleSearchValue={handleSearchValue} handleChangeSubMenu={props.handleChangeSubMenu} openList={openList} breadcrumbsTitle={breadcrumbsTitle} openSearchRegion={openSearchRegion} closeListRegion={closeListRegion} chooseRegion={chooseRegion} choosedLink={choosedLink} searchValue={searchValue} searching={props.searching} />
  } else {
    component = <HeroWithoutSearch handleChangeSubMenu={props.handleChangeSubMenu} choosedLink={choosedLink} />
  }

  return (
    <div>
      <div className='hero-main-image' style={{ backgroundImage: `url(${banner})` }}>
        <div className="background-layer"></div>
        <Container style={{ paddingTop: '6%' }}>
          {component}
        </Container>
      </div>
    </div>
  )
}