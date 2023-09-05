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


export default function Login() {

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

  // Memperbarui password value agar setShowPassword aktif
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Mengirim API request saat tombol login diklik
  const login = (e) => {
    e.preventDefault(); 
    const data = { email: email, password: password };
    axios.post("https://property-api.cranium.id/user/sign-up", data)
      .then((res) => {
        console.log(res.data, "ini res.data");
        window.location.href = "/login"
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className='login-card'>
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
              Create account
            </div>

            <div  style={{ width:"404px", height: "24px", textAlign:"center", fontSize: "16px", marginBottom:"16px" }}>
              You can use this account across the following sites.
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
                width: '100%',
                height: '49.6px',
                margin: "24px 0 0 0",
                padding:"12px 24px",
                borderRadius: "5px",
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#17C2ED",
              }}
              variant="contained"
              onClick={(e)=>login(e)}
            >
              Create account
            </Button>

            <div style={{ width:"404px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", textAlign:"center",  margin:"24px 0px" }}>
              Already have an account?<Button onClick={(e) => window.location.href="/signup"} sx={{ fontSize: "16px", fontWeight: "bold", textTransform: "none" }}>Sign in</Button>
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
              <a href="https://www.google.com" target="Button" rel="noopener noreferrer"></a>
              <button className="link-button">Go to Google</button>
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
                marginBottom: "24px",
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

// import React,{ useEffect, useState } from 'react'
// import axios from 'axios'


// export default function Login() {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [status,setStatus] = useState("login")
//     const [token, setToken] = useState("")

//     const login = (e)=>{
//       e.preventDefault()
//       const data = {email:email,password:password}
//        axios.post("https://property-api.cranium.id/user/login",data).then((res) => {
//         console.log(res.data,"ini res data");
//         console.log(res.data.data, "ini res data.data");
//            sessionStorage.setItem("token",res.data.data.token)
//         }).catch((err) => {
//             console.log(err,"ini respon gagal")
//           })
//     }

//       console.log(email,password,"test");


//   return (
//     <div>
//       <div class="login-page">
//         <div class="form">
//         {status==="login" ?
//           <form class="login-form">
//             <input type="text" placeholder="username" onChange={(e)=>setEmail(e.target.value)} />
//             <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
//             <button onClick={(e)=>login(e)}>login</button>
//             <p class="message">Not registered? <a href="#" onClick={(e)=>setStatus("register")}>Create an account</a></p>
//           </form>:
//           <form class="register-form">
//             <input type="text" placeholder="name"/>
//             <input type="password" placeholder="password"/>
//             <input type="text" placeholder="email address"/>
//             <button>create</button>
//             <p class="message">Already registered? <a href="#" onClick={(e)=>setStatus("login")}>Sign In</a></p>
//           </form>}
//         </div>
//       </div>
//     </div>
//   )
// }