import { Box, Card, CardContent, Typography } from "@mui/material";
import React from 'react';

const CardAds = ({ imageUrl }) => {
    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <Box
                    component="img"
                    sx={{ width: 151 }}
                >
                    <img src={imageUrl} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    </Box>
                </Box>

            </Card >
        </>
    )
}
export default CardAds;