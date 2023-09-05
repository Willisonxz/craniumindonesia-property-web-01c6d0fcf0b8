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

const IMAGES = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'TESTING 5',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },

    {
        label: 'TESTING 6',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'TESTING 7',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const Carousel = () => {
    const maxSteps = IMAGES.length;
    const reactScrollComponent = React.useRef(null)
    const handleNext = () => reactScrollComponent.current.scrollLeft = reactScrollComponent.current.scrollLeft + 320;
    const handleBack = () => reactScrollComponent.current.scrollLeft = reactScrollComponent.current.scrollLeft - 330;
    

    return (
        <div
            className='d-flex align-items-center'
            style={{
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                maxWidth: '100%',
                height: '270px',
                position: 'relative',
            }}>
            <div
                ref={reactScrollComponent}
                className='d-flex flex-row'
                style={{
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                    overflowX: 'hidden',
                }}>
                {IMAGES.map((item) => {
                    return (
                        <div
                            className=''
                            style={{
                                width: '224px',
                                flex: 'none',
                                marginRight: '20px',
                                height: '270px',

                            }} >
                            <Card
                                className='d-flex align-items-center justify-content-center'
                            >
                                <CardContent>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 128,
                                            display: 'block',
                                            maxWidth: 224,
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                        src={item.imgPath}
                                        alt={item.label}
                                    />
                                    <div style={{
                                        height: '82px',

                                    }}>
                                        <Typography gutterBottom variant="subtitle2" component="div">
                                            {item.label}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Search an agency by their name and explore the agents that work there.
                                        </Typography>

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
                    height: '270px',
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
                    height: '270px',
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

export default Carousel;