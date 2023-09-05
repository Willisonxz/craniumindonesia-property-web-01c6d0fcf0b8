import "./assets/collections.css";
import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Container, Tab, Tabs, Typography } from "@mui/material";
import FooterCollections from "./components/FooterCollections";
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import getDateAndDay from "../../utils/GetDateAndDay";
import { useLocation, useNavigate } from 'react-router-dom';
import CreateCollectionModal from "./components/CreateCollectionModal"
import { CalendarTodayOutlined } from "@mui/icons-material";
import Maps from "../NewHomes/components/Maps";
import saved_property from './assets/saved_property.png';
import NavbarAfterLogin from "../Profile/components/NavbarAfterLogin";
import RoutesPage from "../../Routes";
import InspectionTimesSection from "./components/InspectionTimesSection";
import { inspectionData as mockInspectionResponse } from "./assets/mock-data";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Page = () => {
  const [value, setValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false)

  const [calenderData, setCalenderData] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  const [collections, setCollections] = useState([{ name: 'My Saved Properties' }]);
  const handleAddNewCollection = (newCollectionName) => {
    const newCollection = [...collections];
    newCollection.push({ name: newCollectionName });
    setCollections(newCollection);
  }

  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [inspectionData, setInspectionData] = useState(null);
  const availableInspectionDates = []; // string[] --> ['2023-08-22', 2023-08-25]

  // Data initiation
  useEffect(() => {
    let dataArrayCalender = []
    for (let index = 0; index <= 13; index++) {
      dataArrayCalender.push(getDateAndDay(index));
    }
    setCalenderData(dataArrayCalender);

    const currentPath = location.pathname;
    if (currentPath.includes('/collections/planner')) {
      setValue(1);
    }
  }, []);

  // Query inspection data based on selected date
  useEffect(() => {
    // Mock flow
    setInspectionData(selectedDateIndex !== 0 ? mockInspectionResponse : null);
  }, [selectedDateIndex]);

  return (
    <>
      <NavbarAfterLogin />
      <div className="bg-light" style={{ minHeight: 1200 }}>
        <div className="bg-white">

          <div className="box-content-collections">
            <Typography fontSize={"34px"} fontWeight={"700"} className="my-4">Collections</Typography>
            <div className="">
              <Box sx={{
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0px',
                margin: '0px',
                width: '100%',
              }} className='w-100'>
                <Tabs
                  sx={{
                    padding: '0px !important',
                    margin: '0px !important',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                >
                  <Tab
                    onClick={() => {
                      handleTabClick('/collections/saved-properties')
                    }}
                    sx={{
                      padding: '0px 30px',
                      margin: '0px',
                      borderBottom: 1,
                      borderColor: 'divider',
                      textTransform: "none",
                      fontSize: "16px",
                    }}
                    label="Properties"
                    {...a11yProps(0)}
                  />
                  <Tab
                    onClick={() => {
                      handleTabClick('/collections/planner')
                    }}
                    sx={{
                      padding: '0px 30px',
                      margin: '0px',
                      borderBottom: 1,
                      borderColor: 'divider',
                      textTransform: "none",
                      fontSize: "16px",
                    }}
                    label="Inspections"
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
            </div>
          </div>
        </div>
        <Box sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }} >

        </Box>
        <div className="mt-5 mb-1">
          <div className="box-content-collections">

            {/* PROPERTIES  */}
            <CustomTabPanel value={value} index={0}>
              <>
                <div className="d-flex w-100 justify-content-end">
                  <button onClick={() => { setModalOpen(true) }} className='btn btn-info my-2 text-white' style={{ color: "#FFFFFF", fontFamily: "Roboto-600", fontWeight: "700", backgroundColor: "#17C2ED" }}><AddIcon /> Create</button>
                  <CreateCollectionModal callback={handleAddNewCollection} setOpenModal={setModalOpen} visible={modalOpen} />
                </div>

                <div className="row mx-0 px-0">
                  {collections.map((collection) => {
                    return (
                      <div className="col-12 col-sm-6 col-md-4 mx-0 p-2">
                        <Card className="m-0 p-0 pointer" onClick={() => navigate(RoutesPage.RouteCollectionItems)}>
                          <CardContent className="m-0 p-0">
                            <div className="bg-light"
                              style={{
                                backgroundImage: `url(${saved_property})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
                                height: '200px'
                              }}>
                              {/* <img src={saved_property}></img> */}
                            </div>
                            <div className="bg-white p-3">
                              <Typography fontWeight={"700"}>{collection.name}</Typography>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </>

            </CustomTabPanel>
            {/* INSPECTIONS */}
            <CustomTabPanel value={value} index={1}>
              <>
                <div className="d-flex justify-content-between align-items-center my-5 box-content-collections mx-0" style={{ overflowX: 'hidden' }}>
                  {
                    calenderData === null ?
                      <></>
                      :
                      <>
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
                                <div onClick={() => {
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
                            )
                          })
                        }
                      </>
                  }
                </div>

                <div className="d-flex justify-content-center align-items-center flex-column mt-5 mb-1 ">
                  {(!inspectionData || inspectionData.total === 0) &&
                    <Typography fontSize={"24px"} fontWeight={"600"} className="text-center">Looks like this day's completely free!</Typography>
                  }
                  <div className="btn btn-light border border-dark mt-3" onClick={() => { navigate("/collections/inspections") }}><CalendarTodayOutlined /> All inspection time</div>
                </div>

                <Container>
                  <InspectionTimesSection inspectionsData={inspectionData} />
                </Container>
              </>
            </CustomTabPanel>
          </div>
        </div>
      </div>
      <FooterCollections />
    </>
  )
}
export default Page;