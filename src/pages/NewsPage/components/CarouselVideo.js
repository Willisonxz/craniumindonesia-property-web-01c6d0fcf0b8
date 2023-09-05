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
import { DUMMY_VIDEO } from '../dummy_data'


const CarouselVideo = () => {
    const reactScrollComponent = React.useRef(null)
    const maxSteps = DUMMY_VIDEO.length;
    const handleNext = () => {
        reactScrollComponent.current.scrollLeft += reactScrollComponent.current.clientWidth; // Scroll one content item width
    };

    const handleBack = () => {
        reactScrollComponent.current.scrollLeft -= reactScrollComponent.current.clientWidth; // Scroll back one content item width
    };


    return (
        <div
            className='align-items-center'
            style={{
                marginRight: '0',  // Adjusted marginLeft
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey'),
                maxWidth: '100%',
                position: 'relative',
                padding: 0,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',  // Center-align content horizontally
            }}
        >
            <div
                ref={reactScrollComponent}
                className='d-flex flex-row'
                style={{
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey'),
                    overflowX: 'hidden',
                    height: '145px',
                    padding: 0,
                    MarginRight: '-67px',
                    MarginRight: '-67px',
                    width: '863px',
                }}
            >
                {DUMMY_VIDEO.map((item) => {
                    return (
                        <div
                            className=''
                            style={{
                                width: '145px',
                                flex: 'none',
                                margin: 0,
                                height: '82px',
                                padding: 0
                            }}
                        >
                            <Card
                                className='d-flex align-items-center justify-content-center' sx={{
                                    padding: 0,
                                    borderRadius: 0,
                                }}
                            >
                                <CardContent style={{
                                    padding: 0,
                                }}
                                >
                                    <Box
                                        style={{
                                            padding: 0,
                                        }}
                                        component="img"
                                        sx={{
                                            height: 128,
                                            display: 'block',
                                            maxWidth: 224,
                                            overflow: 'hidden',
                                            width: '100%',
                                            padding: 0,
                                            paddingBottom: 0,
                                        }}
                                        src={item.thumbnailUrl}
                                        alt={item.title}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>

            <div
                style={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
            >
                <Button
                    size="small"
                    onClick={handleNext}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'white',  // Set the initial background color to white
                        borderRadius: '50%',  // Make the button circular
                        width: '50px',
                        height: '50px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Add a shadow
                        transition: 'background-color 0.3s ease',  // Smooth transition on hover
                        '&:hover': {
                            bgcolor: '#333',  // Change the background color on hover
                        },
                    }}
                >
                    <KeyboardArrowRight />
                </Button>
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
            >
                <Button
                    size="small"
                    onClick={handleBack}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'white',  // Set the initial background color to white
                        borderRadius: '50%',  // Make the button circular
                        width: '50px',
                        height: '50px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  // Add a shadow
                        transition: 'background-color 0.3s ease',  // Smooth transition on hover
                        '&:hover': {
                            bgcolor: '#333',  // Change the background color on hover
                        },
                    }}
                >
                    <KeyboardArrowLeft />
                </Button>
            </div>
        </div>

    );
}

export default CarouselVideo;