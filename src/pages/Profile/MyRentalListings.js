import "./assets/profile.css";
import FooterProfile from "./components/FooterProfile";
import { Box, Card, CardContent, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import bg_listings from "./assets/bg_listings.svg"
import person from "./assets/person.svg"
import house from "./assets/house.svg"
import { SearchOutlined } from "@mui/icons-material";
import FindPropertyManagerModal from "./components/FindPropertyManagerModal";
import { useState } from "react";
import NavbarAfterLogin from "./components/NavbarAfterLogin";
import CarouselListings from "./components/CarouselListings";
import DividerHorizontal from "../../components/DividerHorizontal";

export default function MyRentalListings() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <NavbarAfterLogin />
      <Box className="full-height" sx={{
        borderBottom: 1,
        borderColor: 'divider',
      }}>
        <div className="pt-4 pb-5">
          <div className="box-content-profile">
            <div className="row mx-0 px-0 my-2 gy-2 gx-4">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                <div className="align-items-center w-100">
                  <Typography fontSize={"48px"} display={"block"} className="mb-4">My Listings</Typography>
                  <div>
                    <Typography fontSize={"16px"} fontWeight={"700"} className="mb-2">Explore options to list your property for rent</Typography>
                    <Grid container spacing={0} sx={{ flexGrow: 1 }}>
                      <Grid item xs={12} md={10}>
                        <div className="d-flex justify-content-center align-item-center">
                          <TextField
                              size='small'
                              variant="outlined"
                              placeholder="Enter suburb of property to rent"
                              sx={{
                                width: '100%',
                                textAlign: 'center',
                                backgroundColor: 'white',
                                border: 'none'
                              }}
                              InputProps={{
                                  startAdornment: (
                                  <InputAdornment position="start"><SearchOutlined />
                                  </InputAdornment>
                                  ),
                              }}
                          />
                          
                        </div>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <div className="d-flex justify-content-start align-item-center">
                          <button className='btn btn-info m-btn-form w-100' style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>See options</button>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 bg-content-detail">
          <div className="box-content-profile">
            <div className="row mx-0 px-0 my-2 gy-2 gx-4">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                <div className="align-items-center w-100">
                  <div className="mb-2">
                    <Card sx={{ p: 2}}>
                      <Grid container spacing={0} sx={{ flexGrow: 1 }}>
                        <Grid item xs={4} md={4}>
                          <Typography fontSize={"14px"}>Property details</Typography>
                        </Grid>
                        <Grid item xs={2} md={2}>
                          <Typography fontSize={"14px"}>Listing status</Typography>
                        </Grid>
                        <Grid item xs={2} md={2}>
                          <Typography fontSize={"14px"}>Listing views</Typography>
                        </Grid>
                        <Grid item xs={2} md={2}>
                          <Typography fontSize={"14px"}>Clicks to call</Typography>
                        </Grid>
                        <Grid item xs={2} md={2}>
                          <Typography fontSize={"14px"}>Email enquiries</Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </div>
                  <div>
                    <Card sx={{ p: 2}}>
                      <div>
                          <Typography fontSize={"14px"}>You currently have no active or draft listings.</Typography>
                      </div>
                      <hr></hr>
                      <div>
                        <Grid container spacing={0} sx={{ flexGrow: 1 }}>
                          <Grid item xs={4} md={4}>
                            <div className="d-flex">
                              <div className="bg-content-detail" style={{ width: "8.75rem", height: "6.26rem"}}></div>
                              <div className="bg-content-detail" style={{ marginLeft: "0.75rem", marginRight: "0.75rem"}}>
                                <div className="bg-content-detail" style={{ width: "5rem", height: "1rem", marginBottom: "1.5rem"}}></div>
                                <div className="bg-content-detail" style={{ width: "5rem", height: "1rem", marginBottom: "1.5rem"}}></div>
                                <div className="bg-content-detail" style={{ width: "8rem", height: "1rem"}}></div>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={2} md={2}>
                            <div className="bg-content-detail" style={{ width: "5rem", height: "1rem"}}></div>
                          </Grid>
                          <Grid item xs={2} md={2}>
                            <div className="bg-content-detail" style={{ width: "1.5rem", height: "1rem"}}></div>
                          </Grid>
                          <Grid item xs={2} md={2}>
                            <div className="bg-content-detail" style={{ width: "1.5rem", height: "1rem"}}></div>
                          </Grid>
                          <Grid item xs={2} md={2}>
                            <div className="bg-content-detail" style={{ width: "1.5rem", height: "1rem"}}></div>
                          </Grid>
                        </Grid>
                      </div>
                    </Card>
                  </div>
                  <Box className="bg-content-detail" mt="auto">
                    <Box className="box-content-profile" display='flex' justifyContent='center'>
                      <img src={bg_listings} alt='' width='100%'/>
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="box-content-profile">
            <div className="row mx-0 px-0 my-2 gy-2 gx-4">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                <div className="d-flex justify-content-center align-items-center w-100">
                  <Typography fontSize={"24px"} display={"block"} fontWeight={"700"} className="mb-4">Tips & guides</Typography>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-4">
                  <CarouselListings />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-outline-secondary">See all tips & guides</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 bg-content-listing bg-listings-img">
          <div className="box-content-profile">
            <div className="row mx-0 px-0 my-2 gy-2 gx-4">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                <div className="align-items-center w-100">
                  <Typography fontSize={"34px"} display={"block"} fontWeight={"700"}>Ready to list your property?</Typography>
                  <Typography display={"block"} fontWeight={"700"} className="mt-4 mb-5 text-muted">Reach Australia's largest audience of renters</Typography>
                </div>
                <Card className="bg-white w-form">
                    <CardContent className="py-5 px-4">
                      <Grid container spacing={0} sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={5} 
                          sx={{
                            '@media (max-width: 1128px)': {
                                mx: 0,
                                my: 0
                            },
                            '@media (min-width: 1129px)': {
                                mx: 2,
                                my: 0
                            },
                          }}>
                          <img src={person}></img>
                          <Typography fontSize={"24px"} display={"block"} fontWeight={"700"} className="my-3">I'm looking for a property manager</Typography>
                          <div className="d-flex justify-content-center align-item-center">
                            <button onClick={() => {setModalOpen(true)}} className='btn btn-info w-100' style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>Find a property manager</button>
                            <FindPropertyManagerModal onClose={() => setModalOpen(false)} open={modalOpen} />
                          </div>
                        </Grid>
                        <Grid item xs={12} md={5} 
                          sx={{
                            '@media (max-width: 1128px)': {
                                mx: 0,
                                my: 3
                            },
                            '@media (min-width: 1129px)': {
                                mx: 3,
                                my: 0
                            },
                          }}>
                          <img src={house}></img>
                          <Typography fontSize={"24px"} display={"block"} fontWeight={"700"} className="my-3">I want to advertise my own property</Typography>
                          <div className="d-flex justify-content-center align-item-center">
                            <button className='btn btn-dark w-100' style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700"}}>Advertise now</button>
                          </div>
                        </Grid>
                      </Grid>
                    </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <FooterProfile />
    </>
  )
}