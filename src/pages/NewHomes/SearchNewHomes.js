import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderNewHomes from './components/HeaderNewHomes'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Container, Link, Typography, Card, CardMedia, CardContent, CardActions, Button, Grid, useMediaQuery } from '@mui/material'
import { listSample, branchExample } from './assets';
import '../../styles/new-homes.css'
import Maps from './components/Maps';
import Footer from '../../components/Footer'
import QuickSearch from '../../components/QuickSearch'

const SearchNewHomes = (props) => {
  // get params
  const { id_apartment, id_land }  = useParams()

  // states
  const [ list, setList ] = useState([1,2,3,4,5,6])
  const [button, setButton] = useState("list")
  const mobileSize = useMediaQuery('(max-width: 700px)')

  // change title
  document.title = "New Homes - " + typeof id_apartment !== "undefined" ? "New Apartments" : "New Land Estates";

  const changeButton = (e, currentButton) => {
    setButton(currentButton)
  }

  return (
    <div style={{ backgroundColor: '#F0F2F5' }}>
      <HeaderNewHomes menu={props.route} idLand={id_land} idApartment={id_apartment} button={button} changeButton={changeButton}/>
      {button === "list" ? <Container sx={{ display: button === "list" ? 'block' : 'none' }}>
        <Link href={'/' + props.route} className='back-to-new-homes' sx={{ textDecoration: 'none', paddingTop: '200px', color: '#697684' }}>
          <KeyboardArrowLeftIcon /> Back to home page
        </Link>
        <p style={{ fontWeight: 700, marginTop: '30px' }}>{props.route === "new-apartments" ? "New apartment" : "New land estates"} for sale in Inner West, NSW</p>
        <p style={{ fontWeight: 500, color: '#697684', marginTop: '-10px' }}>{props.menu === "new-apartments" ? "6 off the plan apartments" : "6 new land estates"}</p>

        <Grid container spacing={2} sx={{ marginTop: '10px', marginBottom: '100px' }}>
          {list.map(d => (
            <Grid item xs={mobileSize ? 12 : 4} sx={{ marginTop: '10px' }}>
              <Card sx={{ position: 'relative' }}>
                <Box sx={{ backgroundColor: '#000' }}>
                  <CardMedia 
                    image={branchExample}
                    sx={{ height: '35px', width: '145px', marginLeft: '10px' }}
                  />
                </Box>
                <CardMedia
                  sx={{ height: '240px' }}
                  image={listSample}
                  title="green iguana"
                />
                <div style={{ position: 'absolute', top: '220px', left: '20px', right: '20px', color: 'white', fontWeight: 700 }}>
                  Be part of the vibrant Wicks Place, developed and built by TOGA.
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    186 Victoria Road, Marrickville, NSW 2204
                  </Typography>
                  <Typography variant="body2" color="text.secondary"sx={{ marginTop: '13px' }}>
                    From $649,000
                  </Typography>
                </CardContent>
                <CardActions >
                  <img src={branchExample} alt="brand" style={{ float: 'left' }} />
                  <Button onClick={() => window.location.href = props.route === "new-apartments" ? `/project/${props.route}/${id_apartment}` : `/project/${props.route}/${id_land}`} style={{ marginLeft: '70px' }} size="small">Details <ChevronRightIcon/></Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> : <Maps />}
      {button === "list" ? 
      <>
        <div className='quickSearch-section'>
          <QuickSearch />
        </div>

        <div className='footer-section'>
          <Footer />
        </div>
      </>
      : ""}
    </div>
  )
}

export default SearchNewHomes