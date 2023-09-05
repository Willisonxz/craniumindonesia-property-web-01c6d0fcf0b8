import "./assets/profile.css";
import buildings from "./assets/buildings.jpg"
import HeaderComponentNotSettle from "../../components/HeaderComponentNotSettle";
import FooterProfile from "./components/FooterProfile";
import { Box, Card, CardContent, Typography } from "@mui/material";
import {useNavigate } from 'react-router-dom';
import DividerHorizontal from "../../components/DividerHorizontal";
import DividerVertical from "../../components/DividerVertical";
import { DeleteOutline, Notifications } from "@mui/icons-material";
import bedIcon from '../../assets/icons/bed.png';
import bathroomIcon from '../../assets/icons/bathroom.png';
import carsIcon from '../../assets/icons/cars.png';
import NavbarAfterLogin from "./components/NavbarAfterLogin";

const ItemCardSavedSearches = ({...props}) => {
  const {id, title, description, action, linkUrl} = props.item
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };
  
  return (
      <>
          <div key={id} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 px-8" >
              <Card className="mx-0">
                  <CardContent className="mx-0">
                      <div className="px-2 pt-3">
                          <div className="h5 my-2 pointer hover-text-link" onClick={() => {handleCardClick(linkUrl)}}><strong>{title}</strong></div>
                          <hr></hr>
                          <div className="my-4">
                            <div className="d-flex w-50 justify-content-between align-items-center my-2">
                              <Box className="flex-grow-1" borderRight='1px solid lightgrey'>
                                <Typography fontSize={"16px"}>{action}</Typography>
                                </Box>
                              <Box className="flex-grow-1" textAlign="end">
                                <Typography fontSize={"16px"}>Any price</Typography>
                              </Box>
                            </div>
                            <Box display='flex' alignItems='center' className="icons-group my-3">
                              <img style={{ width: '16px', height: '16px' }} src={bedIcon} alt="feature" /> <Box display='inline' mx='12px'>-</Box>
                              <img style={{ width: '16px', height: '16px' }} src={bathroomIcon} alt="feature" /> <Box display='inline' mx='12px'>-</Box>
                              <img style={{ width: '16px', height: '16px' }} src={carsIcon} alt="feature" /> <Box display='inline' mx='12px'>-</Box>
                            </Box>
                            <Typography fontSize={"16px"} className="fs-6 text-muted">{title}; {description}</Typography>
                          </div>
                          <hr></hr>
                          <div className="d-flex w-100 justify-content-between align-items-center" mt="auto">
                            <button className="btn flex-grow-1"><DeleteOutline /></button>
                            <DividerVertical />
                            <button className="btn flex-grow-1"><Notifications /> <strong>Notify me</strong></button>
                          </div>
                      </div>
                  </CardContent>
              </Card>
          </div>

      </>
  )
}

const DATA_SAVED_SEARCHES = [
  {
      id : 1,
      title: 'Adelaide - Greater Region, SA',
      description : 'including sorrounding suburbs',
      action : 'Rent',
      linkUrl : '',
  },
  {
      id : 2,
      title: 'Adelaide - Greater Region, SA',
      description : 'including sorrounding suburbs',
      action : 'Buy',
      linkUrl : '',
  }, 
  {
      id : 3,
      title: 'Adelaide - Greater Region, SA',
      description : 'including sorrounding suburbs',
      action : 'Sold',
      linkUrl : '',
  }, 
  {
      id : 4,
      title: 'Adelaide - Greater Region, SA',
      description : 'including sorrounding suburbs',
      action : 'Sold',
      linkUrl : '',
  },
]
export default function SavedSearches() {
    return(
        <>
            <NavbarAfterLogin />
            <Box className="full-height bg-content-detail" sx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}>
              <div className="py-5">
                  <div className="box-content-profile">
                      <div className="row mx-0 px-0 my-2 gy-2 gx-4">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0" >
                              <div className="d-flex justify-content-between align-items-center w-100">
                                  <div className="h4 h-100 p-0"><strong>Saved Searches</strong></div>
                              </div>

                          </div>
                      </div>
                      {DATA_SAVED_SEARCHES && <div className="row mx-0 px-0 my-2 gy-4 gx-4">
                          {
                              DATA_SAVED_SEARCHES.map((item) => {
                                  return  <ItemCardSavedSearches item={item} />
                              })
                          }
                      </div>}
                      {/* Content */}
                      {DATA_SAVED_SEARCHES.length === 0 && <div className="row mx-0 px-0 my-2 gy-4 gx-4">
                        <div className="center-container">
                          <div className="center-content">
                            <div className="my-3">
                              You don't have any saved searches yet.
                            </div>
                            <div className="mb-5">
                              Save your frequent searches after you perform a search
                            </div>
                            <button className='btn btn-info my-2 text-white' style={{color:"#FFFFFF", fontFamily:"Roboto-600", fontWeight:"700", backgroundColor:"#17C2ED"}}>Search Properties</button>
                          </div>
                        </div>
                      </div>}
                  </div>
              </div>
              <Box className="bg-content-detail" mt="auto">
                <Box className="box-content-profile" display='flex' justifyContent='center'>
                  <img src={buildings} alt='' width='100%'/>
                </Box>
              </Box>
            </Box>
            <FooterProfile />
        </>
    )
}