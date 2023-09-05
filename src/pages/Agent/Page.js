import { useEffect, useState } from 'react';
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
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarIcon from '@mui/icons-material/Star';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import RoutesPage from '../../Routes';
import { ApiComponent } from '../../services/ApiComponent';
import FontRoboto from '../../components/FontRoboto';

const Page = () => {
    // navigate and params
    const navigate = useNavigate();
    const location = useLocation();
    // use /:id
    const { id } = useParams();
    // use params ?
    const searchParams = new URLSearchParams(location.search);
    const batchProgId = searchParams.get('agentId');
    // state
    const [dataAgent, setDataAgent] = useState(null)

    const GetDataAgent = async () => {
        const url = 'agent'
        const finalURL = `${url}/${id}`
        try {
            const response = await ApiComponent.Get({
                useToken: false,
                pathAPI: finalURL,
                body: null,
                loading: false,
                notification: false,
            })
            const { data } = response.data;
            console.log(response)
            console.log(data)
            setDataAgent(data)
        } catch (error) {

        }
    }
    useEffect(() => {
        GetDataAgent()
        return () => {
        };
    }, []);

    return (
        <>
            <HeaderComponentNotSettle />
            <div class="rounded-3 bg-white">
                <div class="container-fluid" style={{ height: '25rem', backgroundImage: `url(${bgJumbotron})`, backgroundSize: 'cover' }}>
                </div>
            </div>
            <div className="box-content-agency bg-white">
                <div className="row m-0 p-0 gy-2 py-4">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8" style={{ position: 'relative', minHeight: 180 }}>
                        <div className='row' style={{}}>
                            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4' style={{ position: 'relative' }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ position: 'relative', top: -50, height: 200, width: 200 }} />
                            </div>
                            <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 d-flex flex-column' style={{ gap: 10 }}>
                                <FontRoboto text={dataAgent?.name} className={'h3'} />
                                <FontRoboto text={dataAgent?.description} className={'text-muted'} />
                                <div className='d-flex align-items-center align-content-stretch'>
                                    <StarIcon className='font-sz-16px fw-bold' sx={{ color: '#faaf00' }} />
                                    <DividerVertical />
                                    <div className='font-sz-16px fw-bold text-muted'>{5} ({100} reviews)</div>
                                </div>
                                <div className='d-flex flex-wrap' style={{ gap: 10 }}>
                                    <button className='btn bg-light' disabled={true}><FontRoboto text={'Professional (98)'} className={'fw-bold'} /></button>
                                    <button className='btn bg-light' disabled={true}><FontRoboto text={'Genuine (97)'} className={'fw-bold'} /></button>
                                    <button className='btn bg-light' disabled={true}><FontRoboto text={'Great communicator (78)'} className={'fw-bold'} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className='d-flex flex-column h-100'>
                            <div className=''>
                                <button className="btn btn-danger w-100 py-3" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)} ><MailOutlineIcon /> <FontRoboto text={'Request a free appraisal'} className={'fw-bold'} /></button>
                            </div>
                            <div className=''>
                                <div className="d-flex w-100 justify-content-between align-items-center my-2 h-100">
                                    <button className="btn  flex-grow-1  border-dark py-3"><MailOutlineIcon /> <FontRoboto text={'Enquire'} className={'fw-bold'} /></button>
                                    <DividerVertical />
                                    <button className="btn  flex-grow-1  border-dark py-3"><CallIcon /> <FontRoboto text={'Call'} className={'fw-bold'} /></button>
                                </div>

                            </div>
                        </div>
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
                            <div className='row p-0 m-0 gy-4'>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0 my-0">
                                    <ItemOverview />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <ItemProperties />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <ItemPerformance />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <ItemAboutTeam />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <ItemContact />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 mx-0">
                                    <ItemRatingAndReview />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-sm-none d-md-block d-lg-block">
                            <Card className='p-0 sticky'>
                                <CardContent className='p-0'>
                                    <div className='w-100' style={{ height: '40px', backgroundColor: 'red' }}></div>
                                    <div className='px-3 d-flex flex-column py-4' style={{ gap: 10 }}>
                                        <div className='d-flex align-items-center' style={{gap: 10, marginBottom: 20}}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ height: 80, width: 80 }} />
                                            <div className='flex-column' style={{ gap: 10 }}>
                                                <FontRoboto text={dataAgent?.name} className={'h3'} />
                                                <div className='d-flex align-items-center align-content-stretch' style={{ gap: 10 }}>
                                                    <StarIcon className='font-sz-16px fw-bold' sx={{ color: '#faaf00' }} />
                                                    <div className='font-sz-16px fw-bold text-muted'>{5} ({100} reviews)</div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-danger w-100 py-3" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)} ><MailOutlineIcon /> <FontRoboto text={'Request a free appraisal'} className={'fw-bold'} /></button>
                                        <button className="btn  border-dark py-3 w-100"><MailOutlineIcon /> <FontRoboto text={'Enquire'} className={'fw-bold'} /></button>
                                        <button className="btn  border-dark py-3 w-100"><CallIcon /> <FontRoboto text={'Call'} className={'fw-bold'} /></button>
                                        <div className="my-2 d-flex align-items-center justify-content-center" style={{ minHeight: 40, gap: 10 }}>
                                            <FacebookIcon />
                                            <LinkedInIcon />
                                        </div>
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