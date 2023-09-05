import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Card, CardContent, useMediaQuery } from '@mui/material';

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
];

const Carousel = () => {
    const reactScrollComponent = React.useRef(null)
    const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
    const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
    const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
    const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
    const xLargeDeviceSize = useMediaQuery('(max-width: 1399.98px)')


    return (
        <div
            className='d-flex align-items-center'
            style={{
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                maxWidth: '100%',
                position: 'relative',
            }}>
            <div
                ref={reactScrollComponent}
                className='d-flex flex-row w-100'
                style={{
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                    overflowX: 'auto',
                    gap: 15
                }}>
                {IMAGES.map((item) => {
                    return (
                        <Card
                            className='flex-grow-1 d-flex align-items-center justify-content-between'
                            sx={{
                                flex: xSmallDevice || smallDeviceSize ? 'none' : '',

                            }}
                        >
                            <CardContent className='flex-grow-1'>
                                <Box
                                    component="img"
                                    sx={{
                                        display: 'block',
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={item.imgPath}
                                    alt={item.label}
                                />
                                <div style={{ height: '82px' }}>
                                    <Typography gutterBottom variant="subtitle2" component="div">
                                        {item.label}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Search an agency by their name and explore the agents that work there.
                                    </Typography>

                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>



        </div>
    );
}

export default Carousel;