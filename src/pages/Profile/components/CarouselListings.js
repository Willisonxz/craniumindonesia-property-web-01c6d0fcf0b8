import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Card, CardContent } from '@mui/material';

const CARD_TIPS_GUIDES = [
    {
        imgPath: 'https://dam-assets.au.reastatic.net/images/w_630,h_354,c_fit,fl_progressive/v1657306414/news-lifestyle-content-assets/wp-content/production/kitchen_596303b4edb/kitchen_596303b4edb.jpg?_i=AA',
        title: 'How to pick  the right tenant for your rental property',
        desc: '3 min read',
    },
    {
        imgPath: 'https://dam-assets.au.reastatic.net/images/w_630,h_354,c_fit,fl_progressive/v1657322621/news-lifestyle-content-assets/wp-content/production/Bondi-living-room/Bondi-living-room.jpg?_i=AA',
        title: 'How to pick  the right tenant for your rental property',
        desc: '3 min read',
    },
    {
        imgPath: 'https://dam-assets.au.reastatic.net/images/w_630,h_354,c_fit,fl_progressive/v1662048305/news-lifestyle-content-assets/wp-content/production/capi_a66b1137bf30f818ddff72d5d356a7a8_e7f199a386975bc608d1a7c035ed0faf_58322133588/capi_a66b1137bf30f818ddff72d5d356a7a8_e7f199a386975bc608d1a7c035ed0faf_58322133588.jpeg?_i=AA',
        title: 'How to pick  the right tenant for your rental property',
        desc: '3 min read',
    },
    {
        imgPath: 'https://dam-assets.au.reastatic.net/images/w_630,h_354,c_fit,fl_progressive/v1657289841/news-lifestyle-content-assets/wp-content/production/Tenant/Tenant.jpg?_i=AA',
        title: 'How to pick  the right tenant for your rental property',
        desc: '3 min read',
    },
    {
        imgPath: 'https://dam-assets.au.reastatic.net/images/w_630,h_354,c_fit,fl_progressive/v1659820438/news-lifestyle-content-assets/wp-content/production/facades/facades.jpg?_i=AA',
        title: 'How to pick  the right tenant for your rental property',
        desc: '3 min read',
    },

    {
        imgPath: 'https://dam-assets.au.reastatic.net/images/w_630,h_354,c_fit,fl_progressive/v1657322621/news-lifestyle-content-assets/wp-content/production/Bondi-living-room/Bondi-living-room.jpg?_i=AA',
        title: 'How to pick  the right tenant for your rental property',
        desc: '3 min read',
    },
    {
        imgPath: 'https://dam-assets.au.reastatic.net/images/w_630,h_354,c_fit,fl_progressive/v1657322621/news-lifestyle-content-assets/wp-content/production/Bondi-living-room/Bondi-living-room.jpg?_i=AA',
        title: 'How to pick  the right tenant for your rental property',
        desc: '3 min read',
    },
];

const CarouselListings = () => {
    const maxSteps = CARD_TIPS_GUIDES.length;
    const reactScrollComponent = React.useRef(null)
    const handleNext = () => reactScrollComponent.current.scrollLeft = reactScrollComponent.current.scrollLeft + 320;
    const handleBack = () => reactScrollComponent.current.scrollLeft = reactScrollComponent.current.scrollLeft - 330;
    

    return (
        <div
            className='d-flex align-items-center'
            style={{
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                maxWidth: '100%',
                height: '240px',
                position: 'relative',
            }}>
            <div
                ref={reactScrollComponent}
                className='d-flex flex-row'
                style={{
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                    overflowX: 'hidden',
                }}>
                {CARD_TIPS_GUIDES.map((item) => {
                    return (
                        <div
                            className=''
                            style={{
                                width: '224px',
                                flex: 'none',
                                marginRight: '20px',
                                height: '240px',

                            }} >
                            <Card
                                className='d-flex align-items-center justify-content-center'
                            >
                                <CardContent className='m-0 p-0'>
                                    <Box
                                        sx={{
                                            height: 128,
                                            display: 'block',
                                            maxWidth: 224,
                                            overflow: 'hidden',
                                            width: '100%',
                                            backgroundImage: `url(${item.imgPath})`,
                                            backgroundSize: 'contain'
                                        }}
                                        alt={item.title}
                                    />
                                    <div className='p-3'>
                                        <Typography fontSize={"14px"} display={"block"} fontWeight={"700"}>{item.title}</Typography>
                                        <Typography fontSize={"14px"} display={"block"} className="text-muted">{item.desc}</Typography>

                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </div>

            <div
                style={{
                    position: 'absolute',
                    right: '0px',
                    top: '0px',
                    height: '240px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >

                <Button
                    size="small"
                    onClick={handleNext}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                        borderRadius: 1,
                        height: '50px',
                        width: '50px',
                    }}
                >
                    <KeyboardArrowRight />
                </Button>
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: '0px',
                    height: '240px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >

                <Button
                    size="small"
                    onClick={handleBack}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                        borderRadius: 1,
                        height: '50px',
                        width: '50px',
                    }}
                >
                    <KeyboardArrowLeft />
                </Button>
            </div>

        </div>
    );
}

export default CarouselListings;