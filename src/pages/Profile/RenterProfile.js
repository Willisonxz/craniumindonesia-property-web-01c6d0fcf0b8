import "./assets/profile.css";
import HeaderComponentNotSettle from "../../components/HeaderComponentNotSettle";
import FooterProfile from "./components/FooterProfile";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import NavbarAfterLogin from "./components/NavbarAfterLogin";

export default function RenterProfile() {
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
    {
      id : 8,
      name : "Tenant check (recommended)",
      desc : 'Give yourself a better chance. Help property managers evaluate you faster',
      linkUrl : '/rent/renter-profile/tenant-check',
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
    <>
      <NavbarAfterLogin />
      <Box className="full-height bg-content-detail" sx={{
        borderBottom: 1,
        borderColor: 'divider',
      }}>
        <div className="py-4">
          <div className="box-content-profile">
            <div className="mb-2">
              <NavLink to="/me" style={{textDecoration: 'none'}}><Typography fontSize={"14px"}><ChevronLeft></ChevronLeft>Back to overview</Typography></NavLink>
            </div>
            <div className="row mx-0 px-0 my-2 gy-2 gx-4">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h1>Renter Profile</h1>
                </div>
                <div className="mb-4"> Create your Renter Profile once and reuse it for all your applications.</div>
              </div>
            </div>
            <Box maxWidth={'700px'}>
              <div className="mb-5">
                <h3><strong>Personal</strong></h3>
                <div className="mb-3">Details to help property managers validate who you are and assess your identity, employment and income.</div>
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
      <FooterProfile />
    </>
  )
}