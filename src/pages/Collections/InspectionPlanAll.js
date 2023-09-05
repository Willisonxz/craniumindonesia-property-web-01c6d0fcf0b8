import "./assets/collections.css";
import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Tab, Tabs, Typography } from "@mui/material";
import FooterCollections from "./components/FooterCollections";
import HeaderComponentNotSettle from "../../components/HeaderComponentNotSettle";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Maps from "../NewHomes/components/Maps";
import star from "./assets/star.svg"
import { ChevronLeft } from "@mui/icons-material";
import getDateAndDay from "../../utils/GetDateAndDay";
import NavbarAfterLogin from "../Profile/components/NavbarAfterLogin";
import { propertiesData as mockPropertiesResponse } from './assets/mock-data';
import InspectionPropertyItemCard from "./components/InspectionPropertyItemCard";

export default function EnquiredProperties() {
  const [tabValue, setTabValue] = useState(0);
  const [calenderData, setCalenderData] = useState(null);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const location = useLocation();
  const navigate = useNavigate();

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [inspectionData, setInspectionData] = useState(null);
  const availableInspectionDates = []; // string[] --> ['2023-08-22', 2023-08-25]

  useEffect(() => {
    let dataArrayCalender = []
    for (let index = 0; index <= 13; index++) {
      dataArrayCalender.push(getDateAndDay(index));
    }
    setCalenderData(dataArrayCalender);

    const currentPath = location.pathname;
    if (currentPath.includes('/collections/planner')) {
      setTabValue(1);
    }
  }, [])

  useEffect(() => {
    setInspectionData(tabValue === 0 ? mockPropertiesResponse : null);
  }, [tabValue]);

  return (
    <>
      <NavbarAfterLogin />
      <Box className="full-height bg-content-detail" sx={{
        borderBottom: 1,
        borderColor: 'divider',
      }}>
        <div className="py-5">
          <div className="box-content-collections">
            <div className="mb-4">
              <NavLink to="/collections/planner" style={{ textDecoration: 'none' }}><Typography fontSize={"14px"}><ChevronLeft></ChevronLeft>Back to Inspections</Typography></NavLink>
            </div>
            <div className="row mx-0 px-0 my-2 gy-2 gx-4">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                <div className="align-items-center w-100">
                  <Typography fontSize={"34px"} fontWeight={"600"}>All inspections</Typography>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="d-flex justify-content-between align-items-center my-5 box-content-collections mx-0" style={{ overflowX: 'hidden' }}>
              {
                calenderData === null ?
                  <></>
                  :
                  <>
                    <div
                      onClick={() => {
                        setSelectedDateIndex(null);
                      }}
                      className={`d-flex flex-column justify-content-center align-items-center py-2 px-1
                        inspection-date inspection-available ${selectedDateIndex === null && 'selected'}`}
                      style={{ flex: 'none', width: 64, fontWeight: 700, minHeight: '76px' }}>
                      <Box sx={{ fontSize: '1rem' }} className={`${!selectedDateIndex === null && 'text-muted'}`}>All</Box>
                    </div>
                    {
                      calenderData.map((item, index) => {
                        let getDate = item.formattedDate?.split('-')[2]
                        let dayName = ''
                        if (index === 0) {
                          dayName = 'Today'
                        } else {
                          dayName = item.dayOfWeek.toString().substring(0, 3)
                        }

                        // For dummy data
                        if (index === 2) {
                          availableInspectionDates.push(item.formattedDate);
                        }

                        const inspectionAvailable = index === 0 || availableInspectionDates.indexOf(item.formattedDate) !== -1;
                        const isSelected = selectedDateIndex === index;
                        return (
                          <>
                            <div
                              onClick={() => {
                                if (inspectionAvailable) {
                                  setSelectedDateIndex(index);
                                }
                              }}
                              className={`d-flex flex-column justify-content-center align-items-center py-2 px-1 inspection-date
                                      ${inspectionAvailable && 'inspection-available'} ${isSelected && 'selected'}`}
                              style={{ flex: 'none', width: 64, fontWeight: 700 }}>
                              <Box sx={{ fontSize: '1rem' }} className={`${!isSelected && 'text-muted'}`}>{dayName}</Box>
                              <Box sx={{ fontSize: '1.5rem' }} className={`${!isSelected && 'text-muted'}`}>{getDate}</Box>
                            </div>
                          </>
                          // <>
                          //     <div className="d-flex flex-column justify-content-center align-items-center" style={{ flex: 'none', width: 60 }}>
                          //         <div className="h4 text-muted">{dayName}</div>
                          //         <div className="h4 text-muted">{getDate}</div>
                          //     </div>
                          // </>
                        )
                      })
                    }
                  </>
              }
            </div>

            <Box marginBottom='1rem' height='300px' position='relative'>
              <Maps style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                margin: 0,
                height: '100%',
                top: 0,
              }} />
            </Box>

            {/* Tabs */}
            <div className="my-5">
              <Box sx={{
                bgcolor: 'bg-content-detail',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0px',
                margin: '0px',
                width: '100%',
              }} className='w-100'>
                <Tabs
                  sx={{
                    '.MuiTabs-flexContainer': {
                      justifyContent: 'center',
                    },
                    padding: '0px !important',
                    margin: '0px !important',
                    width: '100%',
                    flexDirection: 'column',
                    display: 'flex',
                  }}
                  value={tabValue}
                  onChange={handleChange}
                  variant="scrollable"
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                >
                  <Tab
                    sx={{
                      padding: '0px 30px',
                      margin: '0px',
                      borderBottom: 1,
                      borderColor: 'divider',
                      textTransform: "none",
                      fontSize: "16px",
                    }}
                    label="All"
                  />
                  <Tab
                    sx={{
                      padding: '0px 30px',
                      margin: '0px',
                      borderBottom: 1,
                      borderColor: 'divider',
                      textTransform: "none",
                      fontSize: "16px",
                    }}
                    label="Buy"
                  />
                  <Tab
                    sx={{
                      padding: '0px 30px',
                      margin: '0px',
                      borderBottom: 1,
                      borderColor: 'divider',
                      textTransform: "none",
                      fontSize: "16px",
                    }}
                    label="Rent"
                  />
                  <Tab
                    sx={{
                      padding: '0px 30px',
                      margin: '0px',
                      borderBottom: 1,
                      borderColor: 'divider',
                      textTransform: "none",
                      fontSize: "16px",
                    }}
                    label="Sold"
                  />
                </Tabs>
              </Box>
            </div>

            <Box className='row mt-5'>
              {inspectionData && inspectionData.properties.map((property) =>
                <Box className='col-12 col-md-6 col-lg-4 mb-4'>
                  <InspectionPropertyItemCard property={property} />
                </Box>
              )}
            </Box>

            {/* Display Properties */}
            <div className={`row mx-0 px-0 my-2 gy-4 gx-4 ${(inspectionData && inspectionData.properties && inspectionData.properties.length) && 'd-none'}`}>
              <div className="center-container">
                <div className="center-content" style={{ padding: "10rem" }}>
                  <div>
                    <Typography fontSize={"20px"} fontWeight={"700"}>No Properties to display</Typography>
                  </div>
                  <div>
                    <Typography fontSize={"18px"}>Select the <img src={star}></img> on any property to add it to My Saved Properties</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <FooterCollections />
    </>
  )
}