import * as React from 'react';
// material UI
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
// component
import DividerVertical from "../../components/DividerVertical";
import DividerHorizontal from '../../components/DividerHorizontal';
import { Card, CardContent } from '@mui/material';
// assets
import bgJumbotron from "./assets/bg_1.jpg";
import ItemOverview from './components/ItemOverview';
import ItemProperties from './components/ItemProperties';
import ItemAboutTeam from './components/ItemAboutTeam';
import ItemContact from './components/ItemContact';
import ItemPerformance from './components/ItemPerformance';
import HeaderComponentNotSettle from '../../components/HeaderComponentNotSettle';
import FooterSocialMedia from '../../components/FooterSocialMedia';
import ItemRatingAndReview from './components/ItemRatingAndReview';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
const Page = () => {
    const [value, setValue] = React.useState(0);
    const refAbout = React.useRef(null)
    const refContact = React.useRef(null)
    const refOverview = React.useRef(null)
    const refPerformance = React.useRef(null)
    const refProperties = React.useRef(null)
    const refRatingAndReview = React.useRef(null)

    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <HeaderComponentNotSettle />
            <div class="rounded-3 bg-white">
                <div class="container-fluid" style={{ height: '25rem', backgroundImage: `url(${bgJumbotron})`, backgroundSize: 'cover' }}>
                </div>
            </div>
            <div className="box-content-agency bg-white">
                <div className="row m-0 p-0 gy-2">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <h3>Real estate agents in Melbourne, VIC</h3>
                        <p className="text-muted">414 Atlas Building, 2-8 Brookhollow Ave, Baulkham Hills, NSW 2153</p>
                        <div className='d-flex align-items-start'>
                            <AvatarGroup max={3} total={24}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                            </AvatarGroup>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className='d-flex flex-column h-100'>
                            <div className='flex-grow-1 h-100'>
                                <button className="btn btn-danger w-100 h-100"><MailOutlineIcon /> Request a free appraisal</button>
                            </div>
                            <DividerHorizontal />
                            <div className='flex-grow-1 h-100'>
                                <div className="d-flex w-100 justify-content-between align-items-center my-2 h-100">
                                    <button className="btn  flex-grow-1 h-100 border-dark"><MailOutlineIcon /> Enquire</button>
                                    <DividerVertical />
                                    <button className="btn  flex-grow-1 h-100 border-dark"><CallIcon /> Call Agency</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className='row m-0 p-0 gy-2'>
                    <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8'>
                        <Box sx={{
                            bgcolor: 'background.paper',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '0px',
                            margin: '0px',
                            width: '100%',
                        }} className='w-100'>
                            <Tabs
                                sx={{
                                    padding: '0px !important',
                                    margin: '0px !important',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                allowScrollButtonsMobile
                                aria-label="scrollable force tabs example"
                            >
                                <Tab
                                    sx={{
                                        padding: '0px',
                                        margin: '0px',
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                        flexGrow: 1
                                    }}
                                    label="Overview"
                                    onClick={() => refOverview.current.scrollIntoView()}
                                />
                                <Tab
                                    sx={{
                                        padding: '0px',
                                        margin: '0px',
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                        flexGrow: 1
                                    }}
                                    label="Properties"
                                    onClick={() => refProperties.current.scrollIntoView()}
                                />
                                <Tab
                                    sx={{
                                        padding: '0px',
                                        margin: '0px',
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                        flexGrow: 1
                                    }}
                                    label="Performance"
                                    onClick={() => refPerformance.current.scrollIntoView()}
                                />
                                <Tab
                                    sx={{
                                        padding: '0px',
                                        margin: '0px',
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                        flexGrow: 1
                                    }}
                                    label="About"
                                    onClick={() => refAbout.current.scrollIntoView()}
                                />
                                <Tab
                                    sx={{
                                        padding: '0px',
                                        margin: '0px',
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                        flexGrow: 1
                                    }}
                                    label="Contact"
                                    onClick={() => refContact.current.scrollIntoView()}
                                />
                            </Tabs>
                        </Box>
                    </div>
                </div>
            </div >
            <Box
                sx={{

                    borderBottom: 1,
                    borderColor: 'divider',
                    padding: '20px 0px 50px 0px'
                }}
                className='bg-light'>
                <div className='box-content-agency'>
                    <div className='row p-0 m-0 gy-2'>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <div className='row p-0 m-0 gy-2'>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <div ref={refOverview}>
                                        <ItemOverview />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <div ref={refProperties}>
                                        <ItemProperties />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <div ref={refPerformance}>
                                        <ItemPerformance />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <div ref={refAbout}>
                                        <ItemAboutTeam />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <div ref={refContact}>
                                        <ItemContact />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <div ref={refRatingAndReview}>
                                        <ItemRatingAndReview />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-sm-none d-md-block d-lg-block">
                            <Card className='p-0 sticky'>
                                <CardContent className='p-0'>
                                    <div className='w-100' style={{ height: '40px', backgroundColor: 'red' }}></div>
                                    <div className='px-3'>
                                        <h5 className='text-center my-2'>Real estate agents in Melbourne, VIC</h5>
                                        <button className="btn btn-danger w-100 my-2 py-2"><MailOutlineIcon /> Selling a property</button>
                                        <button className="btn  w-100 my-2 border-dark py-2"><MailOutlineIcon /> Enquire</button>
                                        <button className="btn  w-100 my-2 border-dark py-2"><CallIcon /> Call Agency</button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </Box>
            <FooterSocialMedia />

        </>
    )
}

export default Page;