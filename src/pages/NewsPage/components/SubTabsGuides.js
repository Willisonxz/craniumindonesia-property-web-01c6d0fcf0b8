import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import RoutesPage from '../../../Routes';
import { useNavigate } from 'react-router-dom';

const SubTabsGuides = () => {
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
            style={{ paddingLeft: "0px", width: "70px" }}
          >
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesBuying)}
              style={{ ...check_path("/guides/buying"),
                padding: "13px 0 10px",
              }}
            >
              Buying
            </button>
          </div>
          <div
            className="col-1 lg-1 md-2 sm-3"
            style={{ paddingLeft: "0px", width: "65px" }}
          >
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesSelling)}
              style={{ ...check_path("/guides/selling"),
                padding: "13px 0 10px",
              }}
            >
              Selling
            </button>
          </div>
          <div
            className="col-1 lg-1 md-2 sm-3"
            style={{ paddingLeft: "0px", width: "90px" }}
          >
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesInvesting)}
              style={{ ...check_path("/guides/investing"),
                padding: "13px 0 10px",
              }}
            >
              Investing
            </button>
          </div>
          <div
            className="col-1 lg-1 md-2 sm-3"
            style={{ paddingLeft: "0px", width: "75px" }}
          >
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesRenting)}
              style={{ ...check_path("/guides/renting"),
                padding: "13px 0 10px",
              }}
            >
              Renting
            </button>
          </div>
          <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: "75px" }}>
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesBuilding)}
              style={{ ...check_path("/guides/building"),
                padding: "13px 0 10px",
              }}
            >
              Building
            </button>
          </div>
          <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: "75px" }}>
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesFinance)}
              style={{ ...check_path("/guides/finance"),
                padding: "13px 0 10px",
              }}
            >
              Finance
            </button>
          </div>
          <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: "85px" }}>
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesInsurance)}
              style={{ ...check_path("/guides/insurance"),
                padding: "13px 0 10px",
              }}
            >
              Insurance
            </button>
          </div>
          <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: "75px" }}>
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesMoving)}
              style={{ ...check_path("/guides/moving"),
                padding: "13px 0 10px",
              }}
            >
              Moving
            </button>
          </div>
          <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: "120px" }}>
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesSustainbility)}
              style={{ ...check_path("/guides/sustainbility"),
                padding: "13px 0 10px",
              }}
            >
              Sustainability
            </button>
          </div>
          <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: "150px" }}>
            <button
              className="nav-link"
              onClick={() => navigate(RoutesPage.RouteGuidesSafeSecurity)}
              style={{ ...check_path("/guides/safe-security"),
                padding: "13px 0 10px",
              }}
            >
              Safety &amp; Security
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubTabsGuides;