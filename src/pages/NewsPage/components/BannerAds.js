import { Box, Card } from "@mui/material";
import React from 'react';

const BannerAds = ({ imageUrl }) => {
    return (
        <div className="p-0" style={{ marginTop: '60px', width: 900 }}>
            <Card sx={{ display: 'flex' }}>
                <Box>
                    <img style={{ width: 500, height: 248, objectFit: 'cover' }} src='https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: 20 }}>
                        <h1 className="mt-1"
                            style={{
                                color: '#6E6E6E',
                                fontFamily: 'Roboto',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 300,
                                lineHeight: 'normal',
                                marginBottom: 15,
                            }}>
                            GUIDES MOVING
                        </h1>
                        <h4 style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '32px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                            marginBottom: 15,
                        }}>
                            12 ways to put the good times into your next move
                        </h4>
                        <a href="#" size="medium">Read More</a>
                    </div>
                </Box>
                <Box style={{ textAlign: '-webkit-right', alignSelf: 'end' }}>
                    <div style={{ padding: 20 }}>
                        <img style={{ height: 35 }} src="https://content.aimatch.com/rea/13813/rea_logo.svg" />
                    </div>
                </Box>
            </Card >
        </div>
    )
}
export default BannerAds;