import "./assets/profile.css";
import React, { useState } from 'react'
import HeaderComponentNotSettle from "../../components/HeaderComponentNotSettle";
import FooterProfile from "./components/FooterProfile";
import { Box, Typography } from "@mui/material";
import people from "./assets/people.svg";
import plus from "./assets/plus_sign.svg"
import ProfileModal from "./components/ProfileModal";
import NavbarAfterLogin from "./components/NavbarAfterLogin";

export default function MyProfile() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
      <>
        <NavbarAfterLogin />
        <Box className="full-height" sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}>
          <div className="py-2">
            <div className="box-content-profile-2">
              <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                  <div className="align-items-center w-100">
                    <div className="h2 h-100 p-0"><strong>Profile</strong></div>
                    <div className="h-100 p-0">Personalise your experience and reach your property goals</div>
                  </div>
                </div>
              </div>
              <Box maxWidth={'700px'}>
                <div className="mt-5 mb-2">
                  <strong>Name</strong>
                </div>
                <div className="mb-5">
                  <button className="btn" onClick={() => {setModalOpen(true)}}><img src={plus}></img> <strong> Add to fill forms faster</strong></button>
                  <ProfileModal onClose={() => setModalOpen(false)} open={modalOpen} />
                </div>
                <Box display="flex">
                  <div className="me-4">
                    <img src={people}></img>
                  </div>
                  <div>
                    <Typography fontSize={"14px"} display={"block"} fontWeight={"700"} className="mb-2">Respecting your information privacy</Typography>
                    <Typography fontSize={"12px"} display={"block"}>We recognise the importance of protecting personal information.</Typography>
                    <Typography fontSize={"12px"} display={"block"}><a href="" className="text-decoration-none">Full privacy policy</a></Typography>
                  </div>
                </Box>
              </Box>
            </div>
          </div>
        </Box>
        <div className="mt-auto">
          <FooterProfile />
        </div>
      </>
  )
}