import { Autocomplete, Box, Breadcrumbs, Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Grid, Pagination, PaginationItem, Paper, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import NavbarHomepage from "../../../components/NavbarHomepage";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import MainTabs from "../components/MainTabs";
import img from '../../NewsPage/assets/image_2.png'
import SubTabs from "../components/SubTabs";
import CardAds from "../components/CardAds";
import QuickSearch from "../../../components/QuickSearch";
import Footer from "../../../components/Footer";
import Search from "../components/Search";
import HeaderNews from "../components/HeaderNews";
import { config } from "../../../services/config";
import axios from "axios";
import SubTabsGuides from "../components/SubTabsGuides";
import RoutesPage from '../../../Routes';
import { useNavigate } from 'react-router-dom';

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

export default function Investing() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState([]);
  const [detailDTO, setDetailDTO] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dataInterestRates(true)
  }, []);

  const dataInterestRates = async (needRefreshPage) => {
    try {
      const response = await axios.get(`${config.baseURL}/article?offset=0&limit=10&articleHeader=1&articleSubHeader=3`);
      setData(response.data.data);
      setDetailDTO(response.data.detailDTO);

      console.log('response', response)
      if (needRefreshPage) {
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log('data', data)
  console.log('detailDTO', detailDTO)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const breadcrumbs = [
    <button className="nav-link" onClick={() => navigate(RoutesPage.RouteGuidesBuying)} style={{ padding: '13px 0 10px' }}>
      Investing guide
    </button>,
    <button className="nav-link" onClick={() => navigate(RoutesPage.RouteGuidesBuying)} style={{ padding: '13px 0 10px' }}>
      How to invest in property
    </button>,
    <button className="nav-link" onClick={() => navigate(RoutesPage.RouteGuidesBuying)} style={{ padding: '13px 0 10px' }}>
      Negative gearing
    </button>,
    <button className="nav-link" onClick={() => navigate(RoutesPage.RouteGuidesBuying)} style={{ padding: '13px 0 10px' }}>
      Landlord
    </button>,
    <button className="nav-link" onClick={() => navigate(RoutesPage.RouteGuidesBuying)} style={{ padding: '13px 0 10px' }}>
      Capital gains
    </button>,
  ];

  return (
    <div>
      {<HeaderNews />}
      <div className='box-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid container direction="row" justifyContent={"space-between"} display="flex" className='box-content'>
          <MainTabs />
          <Search />
        </Grid>
        <SubTabsGuides />
      </div>
      {/* banner  */}
      <div className="center object-fit-cover" style={{
        textAlign: 'center',
        height: '450px',
        marginTop: 2,
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://www.realestate.com.au/news-image/w_1400,h_700/v1669639106/news-lifestyle-content-assets/wp-content/production/hero-invest.jpg?_i=AA)`,
      }}>
        <div className="container" style={{ paddingTop: '130px' }}>
          <h1 style={{
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '72px',
            fontStyle: 'bold',
            fontWeight: 500,
            lineHeight: 'bold',
            marginBottom: 5,
            // marginTop: '140px',
          }}>
            Investing</h1>
          <p style={{
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: 'normal',
            marginTop: 10,
            paddingRight: '100px',
            paddingLeft: '100px',
          }}>
            Negative gearing, capital gains, depreciation, yields or investment mortgages – whether you’re a novice uncertain of investment property jargon or already building an empire, we have the insights and explanations to help you achieve your goals.
          </p>

        </div>
      </div>
      <div className="text-center" style={{ background: '#d3d7dd', marginBottom: "30px", height: 56 }}>
        <div className="container-md text-center">
          <div className="d-flex justify-content-center align-items-center">
            <Breadcrumbs separator="|" style={{ color: "grey" }} aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <div className="box-content">
        {/* content 1 */}
        <div className="col p-0 m-0" style={{ height: '600px' }}>
          <div className="row d-flex align-items-center gap-2">
            <div className="col-lg-4 order-lg-1 order-sm-2" style={{ alignSelf: 'start' }}>
              <div className="row p-0 m-0">
                {fiveData.map(item => (
                  <div key={item.id} className="col-12" style={{ marginBottom: '20px' }}>
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
            <div className="col-lg-5 order-lg-2 order-sm-1" style={{ alignSelf: 'start' }}>
              <div className="row d-flex row-gap-3">
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
                <div className="col-6">
                  <img src={img} style={{ height: 'auto', width: '100%', }} />
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
                      MELBOURNE
                    </h1>
                    <h4 style={{
                      color: '#000',
                      fontFamily: 'Roboto',
                      fontSize: '18px',
                      fontStyle: 'bold',
                      fontWeight: 600,
                      lineHeight: 'bold',
                    }}>
                      Victoria ‘the worst stateto be a landlord’
                    </h4>
                  </div>
                </div>
                <div className="col-6">
                  <img src={img} style={{ height: 'auto', width: '100%', }} />
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
                      MELBOURNE
                    </h1>
                    <h4 style={{
                      color: '#000',
                      fontFamily: 'Roboto',
                      fontSize: '18px',
                      fontStyle: 'bold',
                      fontWeight: 600,
                      lineHeight: 'bold',
                    }}>
                      Victoria ‘the worst stateto be a landlord’
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col order-lg-3 d-lg-block d-sm-none" style={{ alignSelf: 'start' }}>
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

        {/* content 2 */}
        <div className="p-0" style={{ marginTop: '60px', }}>
          <h3>New homes in New South Wales</h3>
          <div className="row">
            {data.map(item => (
              <div key={item.articleId} className="col-lg-4 col-md-12 mb-5">
                <img src={item.image1} style={{ height: '240px', width: '100%', }} />
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
                    {item.areaName}
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
                    {item.articleTitle}
                  </h4>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-12">
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

        {/* content 2 */}
        <div className="p-0" style={{ marginTop: '60px', }}>
          <h3>New homes in Victoria</h3>
          <div className="row">
            {data.map(item => (
              <div key={item.articleId} className="col-lg-4 col-md-12 mb-5">
                <img src={item.image1} style={{ height: '240px', width: '100%', }} />
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
                    {item.areaName}
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
                    {item.articleTitle}
                  </h4>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-12">
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
          <h3>How to build your next home</h3>
          <div className="row">
            {data.map(item => (
              <div key={item.articleId} className="col-lg-4 col-md-12 mb-5">
                <img src={item.image1} style={{ height: '240px', width: '100%', }} />
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
                    {item.areaName}
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
                    {item.articleTitle}
                  </h4>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-12">
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