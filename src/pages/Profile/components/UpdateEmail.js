import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography } from "@mui/material"
import '../assets/profile.css'
import DividerHorizontal from '../../../components/DividerHorizontal';
import RoutesPage from '../../../Routes';

export default function UpdateEmail() {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg-content-detail d-flex' style={{ height: "100vh" }}>
                <Card sx={{ width: "480px" }} className='m-auto'>
                    <CardContent sx={{ textAlign: "center" }} className='mx-3 mt-3'>
                        <Typography fontSize={"20px"} fontWeight={"700"} className='mb-3'>Cranium</Typography>
                        <Typography fontSize={"24px"} fontWeight={"600"} className='mb-2'>Verify your current email address</Typography>
                        <Typography fontSize={"16px"} className='mb-3'>We'll email you a code to confirm that you own this account.</Typography>
                        <div className="w-100 align-items-center p-2">
                            <button className='btn btn-info mt-2 text-white w-100' style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>Continue</button>
                        </div>
                        <div className="w-100 align-items-center p-2">
                            <button className='btn btn-outline-secondary my-2 w-100' onClick={() => navigate(RoutesPage.RouteProfileAccountSettings)}>Cancel</button>
                        </div>
                        <div className='py-3'>
                            <DividerHorizontal />
                        </div>
                        <Typography fontSize={"12px"}>Personal Information Collection Statement.</Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}