import React, { useState } from 'react'
import axios from 'axios'
import { Box, Button, TextField, InputAdornment} from "@mui/material"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import GoogleLogo from "../assets/google_logo.png"
import FacebookLogo from "../assets/facebook_logo.png"
import AppleLogo from "../assets/apple_logo.png"
import WebsiteLogo from "../assets/Cranium.svg"
import Website1 from "../assets/realestate.com.au_logo.svg"
import Website2 from "../assets/realcommercial.com.au_logo.svg"


export default function Signup() {

    // Untuk menyimpan email dan password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const [status,setStatus] = useState("login")
    // const [token, setToken] = useState("")
  
    // Event handler untuk memperbarui nilai state email dan password saat input diubah
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    // Mengirim API request saat tombol login diklik
    const login = (e) => {
      e.preventDefault();
      const data = { email: email, password: password };
      axios.post("https://property-api.cranium.id/user/login", data)
        .then((res) => {
          console.log(res.data, "ini res data");
          sessionStorage.setItem("token", res.data.data.token);
          window.location.href="/"
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <div className='signin-card'>
      <form>
        <div>
        <Box  
          display="flex"
          flexDirection="column"
          maxWidth={500}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          padding="24px 48px 0px"
          borderRadius="10px 10px 0 0"
          boxShadow="0 0 5px 0 #ccc"
          sx={{
            ":hover":{
              boxShadow: "0 0 10px 0 #ccc",
            },
          }}
        >
            <div style={{ width:"404px", height: "28px", display: "flex", justifyContent: "center", alignItems: "center", margin: "8px 0px 24px" }}>
              <img src={WebsiteLogo} alt="Website Logo"/>
            </div>

            <div  style={{ width:"404px", height: "28px", textAlign:"center", fontWeight:"bold", fontSize: "24px", marginBottom:"16px" }}>
              Sign in
            </div>

            <div  style={{ width:"404px", height: "24px", textAlign:"center", fontSize: "16px", marginBottom:"16px" }}>
              Sign in with this account across the following sites.
            </div>

            <div style={{ width:"404px", height: "42.4px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={Website1} alt="Website 1" style={{ margin: "0px 12px 16px 12px" }} />
              <img src={Website2} alt="Website 2" style={{ margin: "0px 12px 16px 12px" }} />
            </div>

            <TextField className='input-property'
              margin="normal"
              type={"type"}
              variant="outlined"
              placeholder="Email address"
              sx={{ width: "100%" }}
              value={email}
              onChange={handleEmailChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon style={{fontSize: "16px"}} />
                  </InputAdornment>
                ),
              }}
            />
            
            <TextField className='input-property'
              margin="normal"
              type={showPassword ? "text": "password"}
              variant="outlined"
              placeholder="Password"
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

            <Button
              sx={{
                width: '404px',
                height: '49.6px',
                margin: "24px 0",
                padding:"12px 24px",
                borderRadius: "5px",
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#17C2ED",
              }}
              variant="contained"
              onClick={(e)=>login(e)}
            >
              Sign in
            </Button>
            
            <div style={{ width:"404px", height: "28px", textAlign:"center",  marginBottom:"24px" }}>
            <Button sx={{ fontSize: "16px", fontWeight: "bold", textTransform: "none" }}>Forgot your password?</Button>
            </div>

            <div style={{ width:"404px", height: "28px", display: "flex", textAlign:"center", justifyContent: "center", marginBottom:"24px" }}>
              <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <div style={{ flex: 1, borderTop: "1px solid #D7D7D7" }}></div>
                  <p style={{ margin: "0 10px", fontWeight: "bold" }}>OR</p>
                <div style={{ flex: 1, borderTop: "1px solid #D7D7D7" }}></div>
              </div>
            </div>

            <Button
              to="#"
              variant="outlined"
              sx={{
                width: '404px',
                height: '49.6px',
                color: "#3d3b40",
                fontWeight: "bold",
                textAlign: 'center',
                marginBottom: "16px",
                textTransform: "none",
                borderColor: 'rgba(61, 59, 64, 0.5)',
                position: "relative",
                padding: "12px 24px",
              }}
            >
              <img
                src={GoogleLogo}
                alt="Google Logo"
                style={{
                  position: "absolute",
                  left: "24px", 
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "32px",
                  height: "32px"
                }}
              />
              <span>Continue with Google</span>
            </Button>
            
            <Button
              to="#"
              variant="outlined"
              sx={{
                width: '404px',
                height: '49.6px',
                color: "#FFFFFF",
                backgroundColor: "#1877F2",
                fontWeight: "bold",
                textAlign: 'center',
                marginBottom: "16px",
                textTransform: "none",
                position: "relative",
                padding: "12px 24px",
                "&:hover": {
                  background: "#1877F2",
                },
              }}
            >
              <img
                src={FacebookLogo}
                alt="Facebook Logo"
                style={{
                  position: "absolute",
                  left: "24px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "23px",
                  height: "23px"
                }}
              />
              <span>Continue with Facebook</span>
            </Button>

            <Button 
              to="#"
              variant="outlined"
              sx={{
                width: '404px',
                height: '49.6px',
                color: "#FFFFFF",
                backgroundColor: "#181818",
                fontWeight: "bold",
                textAlign: 'center',
                // marginBottom: "16px",
                textTransform: "none",
                position: "relative",
                padding: "12px 24px",
                "&:hover": {
                  background: "#181818",
                },
              }}
            >
              <img
                src={AppleLogo}
                alt="Apple Logo"
                style={{
                  position: "absolute",
                  left: "24px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "22px",
                  height: "26.37px"
                }}
                />
              <span>Continue with Apple</span>
            </Button>
            
            <div style={{ width:"404px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", textAlign:"center",  margin:"24px 0px" }}>
            Not signed up?<Button onClick={(e) => window.location.href="/login"} sx={{ fontSize: "16px", fontWeight: "bold", textTransform: "none" }}>Create an account.</Button>
            </div>
        </Box>

        <Box  
          display="flex"
          flexDirection="column"
          maxWidth={500}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          borderRadius="0 0 10px 10px"
          boxShadow="0 0 5px 0 #ccc"
          sx={{
            ":hover":{
              boxShadow: "0 0 10px 0 #ccc",
            },
            borderTop: "1px solid #D7D7D7",
          }}
        >

          <div
            style={{
              fontSize: "12px",
              width:"500px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign:"center",
              cursor: "pointer",
            }}
          >
            Personal Information Collection Statement.
          </div>
        </Box>

        </div>
        
      </form>
    </div>
  )
}
