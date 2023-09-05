import "./assets/profile.css";
import React, { useState } from 'react'
import FooterProfile from "./components/FooterProfile";
import { Box, Card, Typography } from "@mui/material";
import NavbarAfterLogin from "./components/NavbarAfterLogin";
import { ChevronRight } from "@mui/icons-material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import DataPrivacyModal from "./components/DataPrivacyModal";
import NotifSettingsModal from "./components/NotifSettingsModal";
import { useNavigate } from "react-router-dom";
import RoutesPage from "../../Routes";

export default function AccountSettings() {
  const navigate = useNavigate();

  const [dataPrivacyModalOpen, setDataPrivacyModalOpen] = useState('')
  const [notifSettingsModalOpen, setNotifSettingsModalOpen] = useState('')

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

  return (
      <>
        <NavbarAfterLogin />
        <Box className="full-height" sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}>
          <div className="py-2">
            <div className="box-content-profile-2">
              <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                  <div className="align-items-center w-100 mb-5">
                    <Typography fontSize={"34px"} fontWeight={"700"} display={"block"}>Account overview</Typography>
                  </div>
                  <div className="mb-4">
                    <Typography>Email</Typography>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <EmailOutlinedIcon style={{fontSize: "18px"}} className="me-3" />
                        <Typography>(Your email)</Typography>
                      </div>
                      <div>
                        <button className="btn" onClick={() => navigate(RoutesPage.RouteProfileUpdateEmail)}>Update</button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <Typography>Password</Typography>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <PasswordOutlinedIcon style={{fontSize: "18px"}} className="me-3" />
                        <Typography>********</Typography>
                      </div>
                      <div>
                        <button className="btn" onClick={() => navigate(RoutesPage.RouteProfileUpdatePassword)}>Update</button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Typography className="mb-2" fontWeight={"600"}>Sign out on all devices</Typography>
                    <Typography className=" mb-4 text-muted">Lost a device or recently used a public computer? Protect your account by signing out on all devices.</Typography>
                    <div>
                      <button className="btn btn-outline-secondary">Sign out on all devices</button>
                    </div>
                    <div className="my-5">
                      <button className="btn" style={{color: "#A8420D"}}>Delete account</button>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="align-items-center w-100 mt-5">
                    <Typography fontSize={"34px"} fontWeight={"700"} display={"block"}>Notification settings</Typography>
                    <div className="mb-5">
                      <div>
                        <Typography fontWeight={"500"} fontSize={"20px"} className="mt-4 mb-2">Property journey</Typography>
                      </div>
                        <Card className="p-2">
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setNotifSettingsModalOpen('PropertyJourney')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Your property journey</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On: Email</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <NotifSettingsModal onClose={() => setNotifSettingsModalOpen(false)} open={notifSettingsModalOpen === 'PropertyJourney'} showEmail={true} showPush={false} showManageSavedSearches={false}
                            title={"Your property journey"}
                            desc={"Recommended property information and tools based on your searches and activity."} />
                        </Card>
                    </div>
                    <div className="mb-5">
                      <div>
                        <Typography fontWeight={"500"} fontSize={"20px"} className="mt-4 mb-2">Properties</Typography>
                      </div>
                        <Card className="p-2">
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setNotifSettingsModalOpen('SavedSearchAlerts')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Saved search alerts</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On: Email</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <NotifSettingsModal onClose={() => setNotifSettingsModalOpen(false)} open={notifSettingsModalOpen === 'SavedSearchAlerts'} showEmail={true} showPush={true} showManageSavedSearches={true}
                            title={"Saved search alerts"}
                            desc={"Manage what alerts you get when you've saved a search."} />
                          <hr></hr>
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setNotifSettingsModalOpen('PropertyUpdates')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Property updates</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">Off</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <NotifSettingsModal onClose={() => setNotifSettingsModalOpen(false)} open={notifSettingsModalOpen === 'PropertyUpdates'} showEmail={false} showPush={true} showManageSavedSearches={false}
                            title={"Property updates"}
                            desc={"Notifications about properties you've shown interest in."} />
                          <hr></hr>
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setNotifSettingsModalOpen('PromotedResidentialProperties')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Promoted residential properties</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On: Email</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <NotifSettingsModal onClose={() => setNotifSettingsModalOpen(false)} open={notifSettingsModalOpen === 'PromotedResidentialProperties'} showEmail={true} showPush={false} showManageSavedSearches={false}
                            title={"Promoted residential properties"}
                            desc={"Notifications about residential properties relevant to your search."} />
                          <hr></hr>
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setNotifSettingsModalOpen('PromotedNewDevelopments')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Promoted new developments</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On: Email</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <NotifSettingsModal onClose={() => setNotifSettingsModalOpen(false)} open={notifSettingsModalOpen === 'PromotedNewDevelopments'} showEmail={true} showPush={false} showManageSavedSearches={false}
                            title={"Promoted new developments"}
                            desc={"Recommended new developments and property projects based on your searches and activity."} />
                        </Card>
                    </div>
                    <div className="mb-5">
                      <div>
                        <Typography fontWeight={"500"} fontSize={"20px"} className="mt-4 mb-2">Property market</Typography>
                      </div>
                        <Card className="p-2">
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setNotifSettingsModalOpen('MarketUpdates')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Market updates</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On: Email</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <NotifSettingsModal onClose={() => setNotifSettingsModalOpen(false)} open={notifSettingsModalOpen === 'MarketUpdates'} showEmail={true} showPush={false} showManageSavedSearches={false}
                            title={"Market updates"}
                            desc={"Market data, recent sales, auction results and updates on properties you like."} />
                          <hr></hr>
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setNotifSettingsModalOpen('SalesAndAuctionResults')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Sales and auction results</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">Off</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <NotifSettingsModal onClose={() => setNotifSettingsModalOpen(false)} open={notifSettingsModalOpen === 'SalesAndAuctionResults'} showEmail={false} showPush={true} showManageSavedSearches={false}
                            title={"Sales and auction results"}
                            desc={"Latest auction results and property sales."} />
                          <hr></hr>
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setNotifSettingsModalOpen('PropertyNewsAndGuides')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Property news and guides</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On: Email</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <NotifSettingsModal onClose={() => setNotifSettingsModalOpen(false)} open={notifSettingsModalOpen === 'PropertyNewsAndGuides'} showEmail={true} showPush={false} showManageSavedSearches={false}
                            title={"Property news and guides"}
                            desc={"The latest property news, guides and inspiration."} />
                        </Card>
                    </div>
                    <div className="mb-5">
                      <div>
                        <Typography fontWeight={"500"} fontSize={"20px"} className="mt-4 mb-2">Finance</Typography>
                      </div>
                        <Card className="p-2">
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setNotifSettingsModalOpen('PropertyFinance')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Property finance</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On: Email</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <NotifSettingsModal onClose={() => setNotifSettingsModalOpen(false)} open={notifSettingsModalOpen === 'PropertyFinance'} showEmail={true} showPush={false} showManageSavedSearches={false}
                            title={"Property finance"}
                            desc={"Finance updates and tools like calculators and guides."} />
                          <hr></hr>
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer">
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Home loan and equity tracker</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">Manage notification in <span className="text-link"><strong>My Finances</strong></span></Typography>
                            </div>
                          </div>
                        </Card>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="align-items-center w-100 my-5">
                    <Typography fontSize={"34px"} fontWeight={"700"} display={"block"}>Data privacy</Typography>
                    <div className="mt-4 mb-2">
                        <Card className="p-2">
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setDataPrivacyModalOpen('PersonalisedAds')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Personalised advertising</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <DataPrivacyModal onClose={() => setDataPrivacyModalOpen(false)} open={dataPrivacyModalOpen === 'PersonalisedAds'} title={"Personalised ads"}
                            desc={"Advertising tailored to you based on your activity and the information you've provided. If you opt out, you'll still get ads but they won't be tailored to you."} />
                          <hr></hr>
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setDataPrivacyModalOpen('SuggestedProperties')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Suggested properties</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <DataPrivacyModal onClose={() => setDataPrivacyModalOpen(false)} open={dataPrivacyModalOpen === 'SuggestedProperties'} title={"Suggested properties"}
                            desc={"Property suggestions that match your activity and searches."} />
                          <hr></hr>
                          <div className="d-flex justify-content-between align-items-center w-100 p-2 pointer" onClick={() => {setDataPrivacyModalOpen('PropertyUpdates')}}>
                            <div>
                              <Typography fontSize={"16px"} fontWeight={"500"} align="left">Property updates</Typography>
                              <Typography fontSize={"16px"} fontWeight={"400"} align="left">On</Typography>
                            </div>
                            <div>
                              <ChevronRight />
                            </div>
                          </div>
                          <DataPrivacyModal onClose={() => setDataPrivacyModalOpen(false)} open={dataPrivacyModalOpen === 'PropertyUpdates'} title={"Property updates"}
                            desc={"Relates to the bell icon and notifications about your saved properties you've shown interest in."} />
                        </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <FooterProfile />
      </>
  )
}