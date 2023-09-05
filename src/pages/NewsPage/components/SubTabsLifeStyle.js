import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import RoutesPage from '../../../Routes';
import { useNavigate } from 'react-router-dom';

const SubTabsLifeStyle = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [activePath, setActivePath] = useState('');
  
  useEffect(() => {
    const path = window.location.pathname;
    setActivePath(path);
  }, []); 


  const check_path = (e) => {
      return e === activePath
          ? { color: "#212529", fontWeight: "bold" }
          : { color: "#6C6C6C" };
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          borderTop: "1px solid #d2d5da",
          borderBottom: "6px solid #f7f8fa",
        }}
      >
        <div className="row p-0 m-0">
          <div
            className="col-1 lg-1 md-2 sm-3"
            style={{ paddingLeft: "0px", width: "115px" }}
          >
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteLifeStyleIndoorStyle)}
              style={{ ...check_path("/lifestyle/indoor-style"),
                padding: "13px 0 10px",
              }}
            >
              Indoor Style
            </button>
          </div>
          <div
            className="col-1 lg-1 md-2 sm-3"
            style={{ paddingLeft: "0px", width: "125px" }}
          >
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteLifeStyleOutdoorLiving)}
              style={{ ...check_path("/lifestyle/outdoor-living"),
                padding: "13px 0 10px",
              }}
            >
              Outdoor Living
            </button>
          </div>
          <div
            className="col-1 lg-1 md-2 sm-3"
            style={{ paddingLeft: "0px", width: "95px" }}
          >
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteLifeStyleRenovating)}
              style={{ ...check_path("/lifestyle/renovating"),
                padding: "13px 0 10px",
              }}
            >
              Renovating
            </button>
          </div>
          <div
            className="col-1 lg-1 md-2 sm-3"
            style={{ paddingLeft: "0px", width: "125px" }}
          >
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteLifeStyleDreamHouse)}
              style={{ ...check_path("/lifestyle/dream-house"),
                padding: "13px 0 10px",
              }}
            >
              Dream Homes
            </button>
          </div>
          <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: "195px" }}>
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteLifeStyleOrganisingCleaning)}
              style={{ ...check_path("/lifestyle/organising-cleaning"),
                padding: "13px 0 10px",
              }}
            >
              Organising & Cleaning
            </button>
          </div>
          <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: "75px" }}>
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteLifeStyleTravel)}
              style={{ ...check_path("/lifestyle/travel"),
                padding: "13px 0 10px",
              }}
            >
              Travel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubTabsLifeStyle;