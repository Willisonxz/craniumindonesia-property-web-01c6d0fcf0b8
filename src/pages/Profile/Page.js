import { Box, Card, CardContent } from "@mui/material";
import iconTrack from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/icon5.svg";
import icon6 from "./assets/icon6.svg";
import icon7 from "./assets/icon7.svg";
import icon8 from "./assets/icon8.svg";
import "./assets/profile.css";
import FooterProfile from "./components/FooterProfile";
import DividerVertical from "../../components/DividerVertical";
import HeaderComponentNotSettle from "../../components/HeaderComponentNotSettle";
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarAfterLogin from "./components/NavbarAfterLogin";

const ItemCardProfile = ({...props}) => {
    const {id, iconPath, title, description, linkUrl} = props.item
    const navigate = useNavigate();

    const handleCardClick = (path) => {
      navigate(path);
    };
    return (
        <>
            <div key={id} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 px-8" >
                <Card
                    className="mx-0 pointer" style={{ height: 200 }}
                    onClick={() => {
                        handleCardClick(linkUrl)
                    }}
                >
                    <CardContent className="mx-0 d-flex align-items-center" style={{ height: 200 }}>
                        <div>
                            <img className="my-2" src={iconPath} style={{ height: 50, width: 45 }}></img>
                            <div className="h5 my-2"><strong>{title}</strong></div>
                            <div className="fs-6 text-muted">{description}</div>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </>
    )
}
const DATA_PROFILE_LIST =[
    {
        id : 1,
        iconPath : iconTrack,
        linkUrl : '/property',
        title: 'Track your property',
        description : 'Stay up to date with your home or properties you own.'
    },
    {
        id : 2,
        iconPath : icon2,
        linkUrl : '/collections/saved-properties',
        title: 'My saved properties',
        description : 'View open times and auctions for properties you\'ve saved.'
    }, 
    {
        id : 3,
        iconPath : icon3,
        linkUrl : '/saved-searches',
        title: 'Saved searches & alerts',
        description : 'View your saved searches and configure their alerts.'
    }, 
    {
        id : 4,
        iconPath : icon4,
        linkUrl : '/rent/renter-profile',
        title: 'Renter Profile',
        description : 'Create or update your Renter Profile.'
    }, 
    {
        id : 5,
        iconPath : icon5,
        linkUrl : '/rent/applications',
        title: 'Rental applications',
        description : 'Track the status and view your rental applications.'
    }, 
    {
        id : 6,
        iconPath : icon6,
        linkUrl : '/advertise-property-for-rent/manage-listings',
        title: 'My rental listings',
        description : 'Create and manage your rental property listings.'
    }, 
    {
        id : 7,
        iconPath : icon7,
        linkUrl : '/my-real-estate/account',
        title: 'Account settings',
        description : 'Manage your password, email subscriptions and privacy settings.'
    }, 
    {
        id : 8,
        iconPath : icon8,
        linkUrl : '/profile',
        title: 'My profile',
        description : 'Manage your personal details and property needs.'
    }, 
    // {
    //     id : 9,
    //     iconPath : iconTrack,
    //     linkUrl : '/advertise-property-for-rent/manage-listings',
    //     title: 'My rental listings',
    //     description : 'Create and manage your rental property listings.'
    // }, 
]

const Page = () => {
    return (
        <>
            <NavbarAfterLogin />
            <Box sx={{

                borderBottom: 1,
                borderColor: 'divider',
            }}>
                <div className="py-5 bg-light">
                    <div className="box-content-profile">
                        <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div className="h2 h-100 p-0"><strong>Profile</strong></div>
                                    <div className="btn btn-dark h-100">Log out</div>
                                </div>

                            </div>
                        </div>
                        <div className="row mx-0 px-0 my-2 gy-4 gx-4">
                            {
                                DATA_PROFILE_LIST.map((item) => {
                                    return  <ItemCardProfile key={item.id} item={item} />
                                })
                            }
                        </div>

                    </div>

                </div>
            </Box>
            <FooterProfile />

        </>
    )
}

export default Page;