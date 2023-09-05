import { Autocomplete, Box, Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Grid, Pagination, PaginationItem, Paper, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import * as React from 'react';
import NavbarHomepage from "../../../components/NavbarHomepage";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import MainTabs from "../../NewsPage/components/MainTabs";
import img from '../../NewsPage/assets/image_2.png'
import SubTabs from "../../NewsPage/components/SubTabs";
import CardAds from "../../NewsPage/components/CardAds";
import QuickSearch from "../../../components/QuickSearch";
import Footer from "../../../components/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const dummyData = [
  { id: 1, title: 'Editor’s Picks 1', location: 'melburne 1', newsTitle: 'Victoria ‘the worst stateto be a landlord 1', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60' },
  { id: 2, title: 'Editor’s Picks 2', location: 'melburne 2', newsTitle: 'Victoria ‘the worst stateto be a landlord 2', image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
  { id: 3, title: 'Editor’s Picks 3', location: 'melburne 3', newsTitle: 'Victoria ‘the worst stateto be a landlord 3', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
  { id: 4, title: 'Editor’s Picks 4', location: 'melburne 4', newsTitle: 'Victoria ‘the worst stateto be a landlord 4', image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
  { id: 5, title: 'Editor’s Picks 5', location: 'melburne 5', newsTitle: 'Victoria ‘the worst stateto be a landlord 5', image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
  { id: 6, title: 'Editor’s Picks 6', location: 'melburne 6', newsTitle: 'Victoria ‘the worst stateto be a landlord 6', image: 'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
  // Add more data here
];

const fiveData = dummyData.slice(-5);
const threeData = dummyData.slice(-3);
const twoData = dummyData.slice(-2);

const customStyle = {
  color: '#dc3545', // Set the color to red
  fontWeight: 'bold', // You can add more styles as needed

};

const path = window.location.pathname;
const check_path = (e) => {
  let color = "#6C6C6C";
  if (e === path) {
    color = "3F3F3F";
  }
  return color;
};

export default function Nsw() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <NavbarHomepage /> */}
      <div className='box-content' style={{ paddingTop: 100, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid container direction="row" justifyContent={"space-between"} display="flex" className='box-content'>
          <MainTabs />
          <div>
            <div style={{
              width: '250px',
              height: '25px',
              marginTop: '5px',
              padding: 0,
            }}>
              <div className="row">
                <div className="col pr-2">
                  <input className="Search p-2" type="text" placeholder="Search by address, region or agent" maxWidth={150}
                    style={{
                      width: '200px',
                      height: '25px',
                      marginTop: '5px',
                      padding: 0,
                    }} />
                </div>
                <div className="col p-0" style={{ marginTop: 1.5 }}>
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <SubTabs />
        {/* Main Title */}
        <div className="center" style={{
          textAlign: 'center',
          height: '300px',
          marginBottom: "30px",
          backgroundImage:`url(${img})`
        }}>
          <h1 style={{
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '72px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            marginBottom: 5,
            marginTop: 30,
          }}>
            Interest Rate News</h1>
          <p style={{
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '28px',
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: 'normal',
            marginTop: 10,
          }}>
            Keep up to date with all the latest interest rate news include RBA cash rate rises and mortgage news. Get interest rate predictions from PropTrack’s own economists and find out how the latest rate hike will affect Australian families.
          </p>
        </div>

        {/* Modal 1 */}
        <div className="p-0 m-0" style={{ height: '600px' }}>
          <div className="row align-items-center gap-2">
            <div className="col-8" style={{ alignSelf: 'start' }}>
              <div className="row">
                <div className="col-12" style={{ background: '', }}>
                  <div style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60)',
                    width: '100%',
                    height: '343px',
                  }}>
                    <div style={{ padding: "184px 15px 0px", color: 'white', }}>
                      <p className="m-0">SYDNEY</p>
                      <h2>
                        ‘Worst house, best street’ : $3.5m hoarder home for sale
                      </h2>
                    </div>
                  </div>
                </div>
                {threeData.map(item => (
                  <div key={item.id} className="col-4 mt-4">
                    <img src={item.image} style={{ height: '120px', width: '100%', }} />
                    <div style={{ padding: "0px 0px 0px" }}>
                      <h1 className="mt-1"
                        style={{
                          color: '#6E6E6E',
                          fontFamily: 'Roboto',
                          fontSize: '12px',
                          fontStyle: 'normal',
                          fontWeight: 300,
                          lineHeight: 'normal',
                        }}>
                        {item.location}
                      </h1>
                      <h4 style={{
                        color: '#000',
                        fontFamily: 'Roboto',
                        fontSize: '18px',
                        fontStyle: 'bold',
                        fontWeight: 600,
                        lineHeight: 'bold',
                      }}>
                        {item.newsTitle}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col" style={{ alignSelf: 'start' }}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: '100%' }}>
                  <CardMedia
                    sx={{ height: 400 }}
                    image={img}
                    title="green iguana"
                  />
                  <CardContent>
                    <div style={{ padding: "0px 0px 0px" }}>
                      <h1 className="mt-1"
                        style={{
                          color: '#6E6E6E',
                          fontFamily: 'Roboto',
                          fontSize: '12px',
                          fontStyle: 'normal',
                          fontWeight: 300,
                          lineHeight: 'normal',
                        }}>
                        GUIDES MOVING
                      </h1>
                      <h4 style={{
                        color: '#000',
                        fontFamily: 'Roboto',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                      }}>
                        12 ways to put the good times into your next move
                      </h4>
                      <a href="#" size="small">Read More</a>
                    </div>
                  </CardContent>
                  <CardContent style={{ textAlign: '-webkit-right' }}>
                    <img style={{ height: 35 }} src="https://content.aimatch.com/rea/13813/rea_logo.svg" />
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>

        {/* Modal 2 */}
        <div className="p-0" style={{ marginTop: '60px', }}>
          <h1>Editor’s Picks</h1>
          <div className="row">
            {twoData.map(item => (
              <div key={item.id} className="col-4">
                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                <div style={{ padding: "0px 0px 0px" }}>
                  <h1 className="mt-4 text-center"
                    style={{
                      color: '#6E6E6E',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 300,
                      lineHeight: 'normal',
                      textTransform: 'uppercase',
                    }}>
                    {item.location}
                  </h1>
                  <h4 className=" mt-3 text-center" style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'bold',
                    fontWeight: 600,
                    lineHeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                    {item.newsTitle}
                  </h4>
                </div>
              </div>
            ))}
            <div className="col-4">
              <div className="row">
                {threeData.map(item => (
                  <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                    <Paper
                      sx={{
                        padding: 0,
                        margin: 0,
                        maxWidth: 300,
                        flexGrow: 1,
                        boxShadow: 'none',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item sm={5} style={{ paddingRight: 7 }}>
                          <ButtonBase sx={{ width: 128, height: 90 }}>
                            <img alt="complex" src={item.image}
                              style={{
                                maxWidth: '100%',
                                height: '100%'
                              }} />
                          </ButtonBase>
                        </Grid>
                        <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                          <h1 className="mt-1"
                            style={{
                              color: '#6E6E6E',
                              fontFamily: 'Roboto',
                              fontSize: '12px',
                              fontStyle: 'normal',
                              fontWeight: 300,
                              lineHeight: 'normal',
                              textTransform: 'uppercase',
                              width: '210px',
                            }}>
                            {item.location}
                          </h1>
                          <h4 style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '18px',
                            fontStyle: 'bold',
                            fontWeight: 600,
                            lineHeight: 'bold',
                            textTransform: 'capitalize',
                            width: '210px',
                          }}>
                            {item.newsTitle}
                          </h4>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ads */}
        <div className="p-0" style={{ marginTop: '60px', width: 900 }}>
          <Card sx={{ display: 'flex' }}>
            <Box>
              <img style={{ width: 500, height: 248, objectFit: 'cover' }} src='https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: 20 }}>
                <h1 className="mt-1"
                  style={{
                    color: '#6E6E6E',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: 'normal',
                    marginBottom: 15,
                  }}>
                  GUIDES MOVING
                </h1>
                <h4 style={{
                  color: '#000',
                  fontFamily: 'Roboto',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  marginBottom: 15,
                }}>
                  12 ways to put the good times into your next move
                </h4>
                <a href="#" size="medium">Read More</a>
              </div>
            </Box>
            <Box style={{ textAlign: '-webkit-right', alignSelf: 'end' }}>
              <div style={{ padding: 20 }}>
                <img style={{ height: 35 }} src="https://content.aimatch.com/rea/13813/rea_logo.svg" />
              </div>
            </Box>
          </Card >
        </div>

        <div className="p-0" style={{ marginTop: '60px', }}>
          <h1>Editor’s Picks</h1>
          <div className="row">
            {twoData.map(item => (
              <div key={item.id} className="col-4">
                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                <div style={{ padding: "0px 0px 0px" }}>
                  <h1 className="mt-4 text-center"
                    style={{
                      color: '#6E6E6E',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 300,
                      lineHeight: 'normal',
                      textTransform: 'uppercase',
                    }}>
                    {item.location}
                  </h1>
                  <h4 className=" mt-3 text-center" style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'bold',
                    fontWeight: 600,
                    lineHeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                    {item.newsTitle}
                  </h4>
                </div>
              </div>
            ))}
            <div className="col-4">
              <div className="row">
                {threeData.map(item => (
                  <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                    <Paper
                      sx={{
                        padding: 0,
                        margin: 0,
                        maxWidth: 300,
                        flexGrow: 1,
                        boxShadow: 'none',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item sm={5} style={{ paddingRight: 7 }}>
                          <ButtonBase sx={{ width: 128, height: 90 }}>
                            <img alt="complex" src={item.image}
                              style={{
                                maxWidth: '100%',
                                height: '100%'
                              }} />
                          </ButtonBase>
                        </Grid>
                        <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                          <h1 className="mt-1"
                            style={{
                              color: '#6E6E6E',
                              fontFamily: 'Roboto',
                              fontSize: '12px',
                              fontStyle: 'normal',
                              fontWeight: 300,
                              lineHeight: 'normal',
                              textTransform: 'uppercase',
                              width: '210px',
                            }}>
                            {item.location}
                          </h1>
                          <h4 style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '18px',
                            fontStyle: 'bold',
                            fontWeight: 600,
                            lineHeight: 'bold',
                            textTransform: 'capitalize',
                            width: '210px',
                          }}>
                            {item.newsTitle}
                          </h4>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-0" style={{ marginTop: '60px', }}>
          <h1>Editor’s Picks</h1>
          <div className="row">
            {twoData.map(item => (
              <div key={item.id} className="col-4">
                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                <div style={{ padding: "0px 0px 0px" }}>
                  <h1 className="mt-4 text-center"
                    style={{
                      color: '#6E6E6E',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 300,
                      lineHeight: 'normal',
                      textTransform: 'uppercase',
                    }}>
                    {item.location}
                  </h1>
                  <h4 className=" mt-3 text-center" style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'bold',
                    fontWeight: 600,
                    lineHeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                    {item.newsTitle}
                  </h4>
                </div>
              </div>
            ))}
            <div className="col-4">
              <div className="row">
                {threeData.map(item => (
                  <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                    <Paper
                      sx={{
                        padding: 0,
                        margin: 0,
                        maxWidth: 300,
                        flexGrow: 1,
                        boxShadow: 'none',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item sm={5} style={{ paddingRight: 7 }}>
                          <ButtonBase sx={{ width: 128, height: 90 }}>
                            <img alt="complex" src={item.image}
                              style={{
                                maxWidth: '100%',
                                height: '100%'
                              }} />
                          </ButtonBase>
                        </Grid>
                        <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                          <h1 className="mt-1"
                            style={{
                              color: '#6E6E6E',
                              fontFamily: 'Roboto',
                              fontSize: '12px',
                              fontStyle: 'normal',
                              fontWeight: 300,
                              lineHeight: 'normal',
                              textTransform: 'uppercase',
                              width: '210px',
                            }}>
                            {item.location}
                          </h1>
                          <h4 style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '18px',
                            fontStyle: 'bold',
                            fontWeight: 600,
                            lineHeight: 'bold',
                            textTransform: 'capitalize',
                            width: '210px',
                          }}>
                            {item.newsTitle}
                          </h4>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-0" style={{ marginTop: '60px', }}>
          <h1>Editor’s Picks</h1>
          <div className="row">
            {twoData.map(item => (
              <div key={item.id} className="col-4">
                <img src={item.image} style={{ height: '240px', width: '100%', }} />
                <div style={{ padding: "0px 0px 0px" }}>
                  <h1 className="mt-4 text-center"
                    style={{
                      color: '#6E6E6E',
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 300,
                      lineHeight: 'normal',
                      textTransform: 'uppercase',
                    }}>
                    {item.location}
                  </h1>
                  <h4 className=" mt-3 text-center" style={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'bold',
                    fontWeight: 600,
                    lineHeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                    {item.newsTitle}
                  </h4>
                </div>
              </div>
            ))}
            <div className="col-4">
              <div className="row">
                {threeData.map(item => (
                  <div key={item.id} className="col-12 pb-1" style={{ marginBottom: '20px' }}>
                    <Paper
                      sx={{
                        padding: 0,
                        margin: 0,
                        maxWidth: 300,
                        flexGrow: 1,
                        boxShadow: 'none',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item sm={5} style={{ paddingRight: 7 }}>
                          <ButtonBase sx={{ width: 128, height: 90 }}>
                            <img alt="complex" src={item.image}
                              style={{
                                maxWidth: '100%',
                                height: '100%'
                              }} />
                          </ButtonBase>
                        </Grid>
                        <Grid item sm={7} style={{ width: 128, height: 100, paddingLeft: 20 }}>
                          <h1 className="mt-1"
                            style={{
                              color: '#6E6E6E',
                              fontFamily: 'Roboto',
                              fontSize: '12px',
                              fontStyle: 'normal',
                              fontWeight: 300,
                              lineHeight: 'normal',
                              textTransform: 'uppercase',
                              width: '210px',
                            }}>
                            {item.location}
                          </h1>
                          <h4 style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '18px',
                            fontStyle: 'bold',
                            fontWeight: 600,
                            lineHeight: 'bold',
                            textTransform: 'capitalize',
                            width: '210px',
                          }}>
                            {item.newsTitle}
                          </h4>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pagination" style={{ margin: '60px' }}>
          <Stack spacing={2}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              showFirstButton
              showLastButton
              boundaryCount={1} // Display First and Last buttons
              style={customStyle}
              renderItem={(item) =>
                item.type === 'previous' ? (
                  <PaginationItem {...item} style={{ height: '50px', width: '50px', color: '#dc3545', fontWeight: 'bold', }} icon="First" />
                ) : item.type === 'next' ? (
                  <PaginationItem {...item} style={{ height: '50px', width: '50px', color: '#dc3545', fontWeight: 'bold', }} icon="Last" />
                ) : (
                  <PaginationItem {...item} style={{ height: '50px', width: '50px', color: '#dc3545', fontWeight: 'bold', }} />
                )}
            />
          </Stack>
        </div>
      </div>

      <div className='quickSearch-section'>
        <QuickSearch />
      </div>
      <Footer />
    </div >
  )
}