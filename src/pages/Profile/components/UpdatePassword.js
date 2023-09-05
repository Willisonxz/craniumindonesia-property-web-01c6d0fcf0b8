import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, InputAdornment, TextField, Typography } from "@mui/material"
import '../assets/profile.css'
import RoutesPage from '../../../Routes';
import PasswordOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function UpdatePassword() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <>
            <div className='bg-content-detail d-flex' style={{ height: "100vh" }}>
                <Card sx={{ width: "480px" }} className='m-auto'>
                    <CardContent sx={{ textAlign: "center" }} className='m-3'>
                        <Typography fontSize={"20px"} fontWeight={"700"} className='mb-3'>Cranium</Typography>
                        <Typography fontSize={"24px"} fontWeight={"600"} className='mb-2'>Forgot your password?</Typography>
                        <Typography fontSize={"16px"} className='mb-3'>Enter your email and we'll send you a code you can use to update your password.</Typography>
                        <div className='px-2 pt-4 pb-5'>
                            <TextField className='input-property'
                                size='small'
                                type={showPassword ? "text": "password"}
                                variant="outlined"
                                placeholder="Current password"
                                sx={{ width: "100%", mb: 2}}
                                value={password}
                                onChange={handlePasswordChange}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <PasswordOutlinedIcon style={{fontSize: "16px"}} />
                                    </InputAdornment>
                                    ),
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        {showPassword? (
                                        <VisibilityOffOutlinedIcon style={{fontSize: "16px", cursor: "pointer"}}  onClick={togglePasswordVisibility}/>
                                        ) : (
                                        <VisibilityOutlinedIcon style={{fontSize: "16px", cursor: "pointer"}}  onClick={togglePasswordVisibility}/>
                                        )}
                                    </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField className='input-property'
                                size='small'
                                type={showPassword ? "text": "password"}
                                variant="outlined"
                                placeholder="New password"
                                sx={{ width: "100%"}}
                                value={password}
                                onChange={handlePasswordChange}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <PasswordOutlinedIcon style={{fontSize: "16px"}} />
                                    </InputAdornment>
                                    ),
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        {showPassword? (
                                        <VisibilityOffOutlinedIcon style={{fontSize: "16px", cursor: "pointer"}}  onClick={togglePasswordVisibility}/>
                                        ) : (
                                        <VisibilityOutlinedIcon style={{fontSize: "16px", cursor: "pointer"}}  onClick={togglePasswordVisibility}/>
                                        )}
                                    </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className="w-100 align-items-center p-2">
                            <button className='btn btn-info mt-2 text-white w-100' style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>Update password</button>
                        </div>
                        <div className="w-100 align-items-center p-2">
                            <button className='btn btn-outline-secondary w-100' onClick={() => navigate(RoutesPage.RouteProfileAccountSettings)}>Cancel</button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}