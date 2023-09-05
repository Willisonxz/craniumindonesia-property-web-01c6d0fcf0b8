import "./assets/profile.css";
import HeaderComponentNotSettle from "../../components/HeaderComponentNotSettle";
import FooterProfile from "./components/FooterProfile";
import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom'
import { ChevronLeft } from "@mui/icons-material";
import NavbarAfterLogin from "./components/NavbarAfterLogin";

export default function RentalApplication() {
  return (
    <>
      <NavbarAfterLogin />
      <Box className="full-height bg-content-detail" sx={{
        borderBottom: 1,
        borderColor: 'divider',
      }}>
        <div className="py-4">
          <div className="box-content-profile">
            <div className="mb-3">
              <NavLink to="/me" style={{textDecoration: 'none'}}><Typography fontSize={"14px"}><ChevronLeft></ChevronLeft>Back to overview</Typography></NavLink>
            </div>
            <div className="row mx-0 px-0 my-2 gy-2 gx-4">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h2><strong>Rental Applications</strong></h2>
                </div>
              </div>
            </div>
            <Grid container spacing={0} sx={{ flexGrow: 1 }}>
              <Grid item xs={12} md={8}>
                <Box maxWidth={'700px'}>
                  <Typography fontWeight={"700"} className="my-3">
                    Create a Renter Profile and apply for as many properties as you like
                  </Typography>
                  <div className="mb-4">
                    <ul className="custom-list-checkmark px-0">
                      <li className="pb-2">Create your Renter Profile once and use it for all your rental applications for properties supported on cranium</li>
                      <li className="pb-2">Apply instantly, even if you're on the go</li>
                      <li className="pb-2">Easily add other people to a joint application</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <button className='btn btn-info my-2' style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}><NavLink to='/rent/renter-profile' className="text-white" style={{textDecoration: 'none'}}>Manage Renter Profile</NavLink></button>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <div>
                  <Typography fontSize={"12px"} className="mt-3 mb-1">
                    <strong>NEED HELP?</strong>
                  </Typography>
                  <Typography fontSize={"14px"}>
                    Search and find answers in <a href="">our help centre</a>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
      <FooterProfile />
    </>
  )
}