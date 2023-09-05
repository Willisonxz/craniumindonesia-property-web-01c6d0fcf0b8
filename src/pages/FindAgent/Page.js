
import * as React from 'react';

// assets
import ImageJumbotron from './assets/image-jumbotron-find-agent.png';
import ImagePhone from './assets/image-phone-find-agent.png';
import homeIcon from "./assets/home_icon.svg"

// material UI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// data
import { ITEM_CARD, top100Films } from './dummy_data';
import Carousel from './components/Carousel';
import ItemCard from './components/ItemCard';
import Footer from '../../components/Footer';
import QuickSearchFindAgent from './components/QuickSearchFindAgent';
import FooterFindAgent from './components/FooterFindAgent';
import { useNavigate } from 'react-router-dom';
import RoutesPage from '../../Routes';
import HeaderComponentNotSettle from '../../components/HeaderComponentNotSettle';
import FontRoboto from '../../components/FontRoboto';
import AutoCompleteCustom from '../../components/AutoCompleteCustom';
import DividerVertical from '../../components/DividerVertical';


const filter = createFilterOptions();
const Item = styled('div')(({ theme }) => ({
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    borderRadius: '4px',
    width: '100%',
}));




const JumbotronComponent = () => {
    const [value, setValue] = React.useState(null);
    const navigate = useNavigate();
    return (
        <div className='box-content-find-agents mb-5'>
            <Box
                sx={{
                    p: 5,
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                    borderRadius: 1,
                }}
            >
                <div className='row g-2'>
                    <div className='col-xs-12 col-sm-12 col-md-5  col-lg-5 col-xl-5 col-xxl-5' style={{height: 419}}>
                        <div className='d-flex align-items-center w-100 h-100'>
                            <div className=''>
                                <div className='my-1'>
                                    <div className='h2 fw-bold'><FontRoboto text={'Search and compare real estate agents'} /> </div>
                                    <div className='text-muted'>
                                        <FontRoboto text={'Whether you\'re starting your search or already have someone in mind, you can compare sales agents, property managers or agencies before making your decision.'} />
                                    </div>
                                </div>
                                <div className='my-1' style={{ width: '100%' }}>
                                    <AutoCompleteCustom />
                                </div>
                                <button className='btn btn-info h-100 w-100 my-2 text-white' onClick={() => navigate(RoutesPage.RouteFindAgentDetail)} >Search</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-1  col-lg-1 col-xl-1 col-xxl-1'>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6  col-lg-6 col-xl-6 col-xxl-6'>
                        <img src={ImageJumbotron} style={{ width: '100%', height: 419 }}></img>
                    </div>
                </div>
            </Box>
            <Box className='my-5'>
                <FontRoboto text={`Selling your place?`} className={'h3 fw-bold'} />
                <FontRoboto text={`Compare real estate agents before you’re sold on one.`} className={'text-muted my-3'} />
                <div className='row'>
                    {
                        ITEM_CARD.map((itemCard) => {
                            const { id, title, description } = itemCard
                            return (
                                <div key={id} className='col-xs-12 col-sm-12 col-md-4  col-lg-4 col-xl-4 col-xxl-4'>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <div className='d-flex justify-content-center align-items-center my-3 text-center' style={{
                                                backgroundColor: 'blueviolet',
                                                borderRadius: 1,
                                                height: '30px',
                                                width: '30px',
                                                borderRadius: '50%',
                                            }}>
                                                <FontRoboto text={id} className={'h5 fw-bold text-white m-0'} />
                                            </div>
                                            <FontRoboto text={title} className={'h4 fw-bold my-3'} />
                                            <FontRoboto text={description} className={'text-muted'} />
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
                <Card sx={{ maxWidth: 875 }}>
                    <CardContent>
                        <FontRoboto text={`Already have an agency in mind?`} className={'h4 fw-bold'} />
                        <FontRoboto text={`Search an agency by their name and explore the agents that work there.`} className={'text-muted'} />
                        <div className='row my-2 gy-2'>
                            <div className='col-xs-12 col-sm-12 col-md-9  col-lg-9 col-xl-9 col-xxl-9'>
                                <AutoCompleteCustom />
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-3  col-lg-3 col-xl-3 col-xxl-3'>
                                <button className='btn btn-info h-100 w-100  text-white' onClick={() => navigate(`${RoutesPage.RouteAgency}/1`)} >Search</button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Box>

        </div >
    )
}

const FindAgent = () => {
    return (
        <>
            <HeaderComponentNotSettle />
            <JumbotronComponent />
            <Box sx={{
                width: '100%',
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                margin: '120px 0px 75px 0px'
            }}>
                <div
                    className='box-content-find-agents'
                    style={{ position: 'relative', minHeight: '480px' }}
                >
                    <img src={ImagePhone} className='mobile-image'></img>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                            <div className='d-flex justify-content-center w-100 flex-column' style={{ minHeight: '480px' }}>
                                <div>
                                    <FontRoboto text={`Stay on top of market trends by tracking your property`} className={'h3 fw-bold'} />
                                    <FontRoboto text={`With property specific market leading insights from realestate.com.au, use your property dashboard to stay informed on market trends:`} className={'text-muted my-2'} />
                                    <FontRoboto text={`See your property dashboard`} className={''} />
                                </div>
                                <div className='w-100'>
                                    <div className='row g-2'>
                                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                                            <Card >
                                                <CardContent>
                                                    <div style={{ backgroundImage: `url(${homeIcon})`, height: '24px', width: '24px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        Track how much your property is worth
                                                    </Typography>
                                                    <Typography gutterBottom variant="subtitle1" component="div">
                                                        Find out your estimated property value in less than a minute.
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                                            <Card >
                                                <CardContent>
                                                    <div style={{ backgroundImage: `url(${homeIcon})`, height: '24px', width: '24px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        Make data informed, savvy property decisions
                                                    </Typography>
                                                    <Typography gutterBottom variant="subtitle1" component="div">
                                                        Understand market performance, buyer demand and property supply.
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Box>
            <div className='box-content-find-agents' >
                <Carousel />
            </div >
            <div className='box-content-find-agents d-flex justify-content-center align-items-center' style={{ marginBottom: '100px' }}>
                <div className='d-flex pointer align-items-center'>
                    <FontRoboto text={`Explore more article about selling your property`} className={''} />
                    <KeyboardArrowRight />
                </div>
            </div >


            {/* 
            <div className='box-content-find-agents' style={{ position: 'relative' }}>
                <QuickSearchFindAgent />
            </div> 
            */}

            <div className='box-content-find-agents'>
                <FooterFindAgent />
            </div>
        </>
    )
}

export default FindAgent;