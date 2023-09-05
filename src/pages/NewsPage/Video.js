import { Autocomplete, Box, Button, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Pagination, PaginationItem, Paper, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MainTabs from "./components/MainTabs";

import img from '../NewsPage/assets/image_2.png'
import SubTabs from "./components/SubTabs";
import CardAds from "./components/CardAds";
import QuickSearch from "../../components/QuickSearch";
import Footer from "../../components/Footer";
import HeaderNews from "./components/HeaderNews";

//icon
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CarouselVideo from "./components/CarouselVideo";
import { DUMMY_VIDEO, DUMMY_DATA } from '../NewsPage/dummy_data'
import SideBar from "./components/SideBar";
import Search from "./components/Search";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const fiveData = DUMMY_DATA.slice(-5);
const threeData = DUMMY_DATA.slice(-3);
const twoData = DUMMY_DATA.slice(-2);
const twelveData = DUMMY_VIDEO.slice(-12);


export default function Video() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [isTruncated, setIsTruncated] = React.useState(true);

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };

    return (
        <div>
            <style>
                {`.css-ysvv6h-MuiPaper-root-MuiAppBar-root { margin: 0; }`}
            </style>
            <HeaderNews />
            <div className='box-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container direction="row" justifyContent={"space-between"} display="flex" className='box-content'>
                    <MainTabs />
                    <Search />
                </Grid>
            </div>
            <div className=" d-flex" style={{ paddingRight: 150, overflowX: "hidden" }}>
                <div className="row d-flex">
                    <div className="col-3" style={{ maxHeight: '100vh', overflowY: 'auto', top: 70 }}>
                        <SideBar />
                    </div>
                    <div className="col-9">
                        {/* content 1 */}
                        <div>
                            <div className="align-self-start" style={{ marginTop: 50, marginBottom: 50 }}>
                                <h1 style={{ fontWeight: "bold", fontFamily: "Merriweather, Georgia, Times, Times New Roman, serif" }}>Video Highlight</h1>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <Card sx={{ maxWidth: '100%' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                sx={{ height: 400 }}
                                                component="iframe"  // Change the component to iframe for embedding a video
                                                height="100%"  // Adjust the height for the video dimensions
                                                width="100%"
                                                src="https://www.youtube.com/embed/gp8JOmHEfos"  // Use the embed URL for the YouTube video
                                                title="Green Iguana Video"
                                            />
                                            <CardContent className="p-0" style={{ height: '100%' }}>
                                                < CarouselVideo />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <a href="#" style={{ fontSize: '34px', textDecoration: 'none', color: 'black' }}>What's behind the increase in investor interest?</a>
                                    <h6 className="mt-2">1:06</h6>
                                    <Stack
                                        direction={{ xs: 'column', sm: 'row' }}
                                        spacing={{ xs: 1, sm: 2, md: 2 }}
                                        marginTop={2}
                                    >
                                        <Item><FacebookIcon /></Item>
                                        <Item><TwitterIcon /></Item>
                                        <Item><LinkedInIcon /></Item>
                                        <Item><EmailIcon /></Item>
                                    </Stack>
                                    <p className="mt-4">PropTrack Senior Economist Angus Moore details why an increasing level of home loans have gone to investor buyers over the last month. </p>
                                </div>
                            </div>
                        </div>

                        {/* content 2 */}
                        <div>
                            <div className="align-self-start" style={{ marginTop: 50, marginBottom: 50 }}>
                                <h1 style={{ fontWeight: "bold", fontFamily: "Merriweather, Georgia, Times, Times New Roman, serif" }}>
                                    Most Recent
                                </h1>
                            </div>
                            <div className="align-self-start">
                                <Box sx={{ width: '100%' }}>
                                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                                        {DUMMY_VIDEO.map((element) => (
                                            <Card key={element.id} sx={{ width: 195, boxShadow: 'none' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="iframe"  // Change the component to iframe for embedding a video
                                                        height="140"
                                                        src={element.videoUrl + "?autoplay=0"}
                                                        alt="green iguana"
                                                        allow="encrypted-media"
                                                    />
                                                    <CardContent style={{ padding: 0 }}>
                                                        <Typography gutterBottom variant="h5" component="div" noWrap>
                                                            {element.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary" style={{ maxHeight: isTruncated ? '3em' : 'none', overflow: 'hidden' }}>
                                                            {element.description}
                                                        </Typography>
                                                        <Typography variant="body3" color="text.secondary" noWrap>
                                                            {element.duration}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        ))}
                                    </Stack>
                                </Box>
                            </div>
                        </div>

                        {/* content 3 */}
                        <div>
                            <div className="align-self-start" style={{ marginTop: 50, marginBottom: 50 }}>
                                <h1 style={{ fontWeight: "bold", fontFamily: "Merriweather, Georgia, Times, Times New Roman, serif" }}>
                                    Most Popular
                                </h1>
                            </div>
                            <div className="align-self-start">
                                <Box sx={{ width: '100%' }}>
                                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                                        {DUMMY_VIDEO.map((element) => (
                                            <Card key={element.id} sx={{ width: 195, boxShadow: 'none' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="iframe"  // Change the component to iframe for embedding a video
                                                        height="140"
                                                        src={element.videoUrl + "?autoplay=0"}
                                                        alt="green iguana"
                                                        allow="encrypted-media"
                                                    />
                                                    <CardContent style={{ padding: 0 }}>
                                                        <Typography gutterBottom variant="h5" component="div" noWrap>
                                                            {element.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary" style={{ maxHeight: isTruncated ? '3em' : 'none', overflow: 'hidden' }}>
                                                            {element.description}
                                                        </Typography>
                                                        <Typography variant="body3" color="text.secondary" noWrap>
                                                            {element.duration}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        ))}
                                    </Stack>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={0}
                    style={{ marginTop: 20, borderTop: '1px solid #c8c9c7', backgroundColor: '#f7f8fa', height: '144px', padding: '0 80px 20px' }}
                >
                    <a href="#" style={{ fontSize: '16px', fontWeight: 'bold', color: 'red' }}>All Video</a>
                </Stack>
            </div>
            <Footer />
        </div >
    )
}