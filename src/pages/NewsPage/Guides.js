import { Autocomplete, Box, Button, Card, CardContent, CardMedia, FormControl, FormHelperText, Grid, InputBase, MenuItem, Pagination, PaginationItem, Select, Stack, TextField } from "@mui/material";
import MainTabs from "./components/MainTabs";
import SubTabsGuides from "./components/SubTabsGuides";
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import img from '../NewsPage/assets/image_2.png'
import Divider from '@mui/material/Divider';
import QuickSearch from "../../components/QuickSearch";
import Footer from "../../components/Footer";
import HeaderNews from "./components/HeaderNews";
import Search from "./components/Search";

const customStyle = {
    color: '#dc3545', // Set the color to red
    fontWeight: 'bold', // You can add more styles as needed

};

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

export default function Guides() {
    const [guides, setGuides] = React.useState('');

    const handleChange = (event) => {
        setGuides(event.target.value);
    };

    return (
        <div>
            {<HeaderNews />}
            <div className='box-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container direction="row" justifyContent={"space-between"} display="flex" className='box-content'>
                    <MainTabs />
                    <Search />
                </Grid>
                <SubTabsGuides />
                <div className="center" style={{
                    textAlign: 'center',
                    marginBottom: "52px",
                    marginTop: "52px"
                }}>
                    <h1 style={{
                        color: '#3F3F3F',
                        fontFamily: 'Roboto',
                        fontSize: '72px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        marginBottom: 5,
                    }}>
                        Property Guides</h1>
                    <p style={{
                        color: '#6E6E6E',
                        fontFamily: 'Roboto',
                        fontSize: '28px',
                        fontStyle: 'normal',
                        fontWeight: 300,
                        lineHeight: 'normal',
                        marginTop: 10,
                    }}>
                        Read the latest property how-to guides, and information and tips for buying, selling, investing, renting, building and sorting your finances.
                    </p>
                </div>
            </div>
            <div className="" style={{ background: '#f5f5f6' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
                    <div>
                        <div className="row">
                            <div className="col-3" style={{ width: '200px' }}>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select
                                        value={guides}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        style={{ width: 175, backgroundColor: 'white' }}
                                    >
                                        <MenuItem value="">
                                            <em>ALL GUIDES</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Buying</MenuItem>
                                        <MenuItem value={20}>Selling</MenuItem>
                                        <MenuItem value={30}>Investing</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-5" style={{ alignSelf: 'center', width: '360px' }}>
                                <div className='' style={{ border: '3px solid #d2d5da', borderRadius: 4, backgroundColor: 'white', height: '56px' }}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputBase
                                            startAdornment={<SearchIcon style={{ color: '#abb8c3', marginRight: 10, }} />}
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-2" style={{ alignSelf: 'center' }}>
                                <Button style={{ border: '3px solid #dc3545', color: 'white', backgroundColor: '#dc3545', height: '53px' }} variant="contained">Search</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* content  */}
            <div className='box-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="" style={{ marginTop: 50 }}>
                    <div className="row align-items-center gap-2">
                        {threeData.map(item => (
                            <div className="col" style={{ background: '', }}>
                                <div style={{
                                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${item.image})`,
                                    width: '350px',
                                    height: '192px',
                                    backgroundSize: 'cover',
                                }}>
                                    <div style={{ padding: "57px 15px 0px", color: 'white', textAlign: 'center' }}>
                                        <h2>
                                            {item.location}
                                        </h2>
                                        <p className="m-0">250 ARTICLES</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row align-items-center gap-2 mt-4">
                        {threeData.map(item => (
                            <div className="col" style={{ background: '', }}>
                                <div style={{
                                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${item.image})`,
                                    width: '350px',
                                    height: '192px',
                                    backgroundSize: 'cover',
                                }}>
                                    <div style={{ padding: "57px 15px 0px", color: 'white', textAlign: 'center' }}>
                                        <h2>
                                            {item.location}
                                        </h2>
                                        <p className="m-0">250 ARTICLES</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row align-items-center gap-2 mt-4">
                        {threeData.map(item => (
                            <div className="col" style={{ background: '', }}>
                                <div style={{
                                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${item.image})`,
                                    width: '350px',
                                    height: '192px',
                                    backgroundSize: 'cover',
                                }}>
                                    <div style={{ padding: "57px 15px 0px", color: 'white', textAlign: 'center' }}>
                                        <h2>
                                            {item.location}
                                        </h2>
                                        <p className="m-0">250 ARTICLES</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ads  */}
                <div className="p-0" style={{ marginTop: '60px', width: 750 }}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <img src="https://content.aimatch.com/rea/216/realestate-housead-realestimate-728x90.gif" />
                        </Box>
                    </Card >
                </div>

                <div className='box-content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ color: 'black', marginTop: 15, marginBottom: 10 }}>Editor’s Picks</h2>
                        <hr style={{ width: '100px', border: '2px solid black', margin: 'auto' }}></hr>
                        <br></br>
                        <div container>
                            <div className="row align-items-center gap-2">
                                {threeData.map(item => (
                                    <div className="col" style={{ alignSelf: 'start' }}>
                                        <a href="#" style={{ textDecoration: 'none' }}>
                                            <Card sx={{ maxWidth: '100%' }}>
                                                <CardMedia
                                                    sx={{ height: 223, width: 298 }}
                                                    image={img}
                                                    title="green iguana"
                                                />
                                                <CardContent>
                                                    <div style={{ padding: "0px 0px 0px", textAlign: "center" }}>
                                                        <h1 className="mt-1"
                                                            style={{
                                                                color: '#6E6E6E',
                                                                fontFamily: 'Roboto',
                                                                fontSize: '12px',
                                                                fontStyle: 'normal',
                                                                fontWeight: 300,
                                                                lineHeight: 'normal',
                                                            }}>
                                                            {item.location}
                                                        </h1>
                                                        <h4 style={{
                                                            color: '#000',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '24px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 400,
                                                            lineHeight: 'normal',
                                                        }}>
                                                            {item.title}
                                                        </h4>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50, backgroundColor: '#333f48', height: 450 }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white', marginTop: 15, marginBottom: 10 }}>Most Popular Videos</h2>
                    <hr style={{ width: '100px', border: '2px solid white', margin: 'auto' }}></hr>
                    <br></br>
                    <div container>
                        <div className="row align-items-center gap-2">
                            {threeData.map(item => (
                                <div className="col" style={{ alignSelf: 'start' }}>
                                    <a href="#" style={{ textDecoration: 'none' }}>
                                        <Card sx={{ maxWidth: '100%' }}>
                                            <CardMedia
                                                sx={{ height: 223, width: 298 }}
                                                image={img}
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <div style={{ padding: "0px 0px 0px", textAlign: "center" }}>
                                                    <h1 className="mt-1"
                                                        style={{
                                                            color: '#6E6E6E',
                                                            fontFamily: 'Roboto',
                                                            fontSize: '12px',
                                                            fontStyle: 'normal',
                                                            fontWeight: 300,
                                                            lineHeight: 'normal',
                                                        }}>
                                                        {item.location}
                                                    </h1>
                                                    <h4 style={{
                                                        color: '#000',
                                                        fontFamily: 'Roboto',
                                                        fontSize: '24px',
                                                        fontStyle: 'normal',
                                                        fontWeight: 400,
                                                        lineHeight: 'normal',
                                                    }}>
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="box-content align-items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="pagination" style={{ margin: '60px' }}>
                    <Stack spacing={2}>
                        <Pagination
                            count={6}
                            variant="outlined"
                            shape="rounded"
                            showFirstButton
                            showLastButton
                            boundaryCount={2} // Display First and Last buttons
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
            {/* </div> */}
        </div>
    )
}

