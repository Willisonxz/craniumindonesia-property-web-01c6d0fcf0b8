import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import RoutesPage from '../../../Routes';
import { useNavigate } from 'react-router-dom';

const SubTabs = () => {
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
                    borderBottom: "6px solid #f7f8fa"
                }}
            >
                <div className="row p-0 m-0">
                    <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: '130px' }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsIntrestRates)} style={{ ...check_path("/news/interest-rate"), padding: '13px 0 10px' }}>
                            Interest Rates
                        </button>
                    </div>
                    <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: '155px' }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsPropertyMarket)} style={{ ...check_path("/news/property-market"), padding: '13px 0 10px' }}>
                            Property Market
                        </button>
                    </div>
                    <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: '185px' }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsBuyingBuilding)} style={{ ...check_path("/news/buying-building"), padding: '13px 0 10px' }}>
                            Buying &amp; building new
                        </button>
                    </div>
                    <div className="col-1 lg-1 md-2 sm-3" style={{ paddingLeft: "0px", width: '175px' }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsSustainableHome)} style={{ ...check_path("/news/sustainable-home"), padding: '13px 0 10px' }}>
                            Sustainable Homes
                        </button>
                    </div>
                    {/* <div className="col lg-1 md-2 sm-3" style={{ paddingLeft: "0px" }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsNsw)} style={{ ...check_path("/news/nsw"), padding: '13px 0 10px' }}>
                            NSW
                        </button>
                    </div>
                    <div className="col lg-1 md-2 sm-3" style={{ paddingLeft: "0px" }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsVic)} style={{ ...check_path("/news/vic"), padding: '13px 0 10px' }}>
                            VIC
                        </button>
                    </div>
                    <div className="col lg-1 md-2 sm-3" style={{ paddingLeft: "0px" }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsQld)} style={{ ...check_path("/news/qld"), padding: '13px 0 10px' }}>
                            QLD
                        </button>
                    </div>
                    <div className="col lg-1 md-2 sm-3" style={{ paddingLeft: "0px" }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsSa)} style={{ ...check_path("/news/sa"), padding: '13px 0 10px' }}>
                            SA
                        </button>
                    </div>
                    <div className="col lg-1 md-2 sm-3" style={{ paddingLeft: "0px" }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsTas)} style={{ ...check_path("/news/tas"), padding: '13px 0 10px' }}>
                            TAS
                        </button>
                    </div>
                    <div className="col lg-1 md-2 sm-3" style={{ paddingLeft: "0px" }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsNt)} style={{ ...check_path("/news/nt"), padding: '13px 0 10px' }}>
                            NT
                        </button>
                    </div>
                    <div className="col lg-1 md-2 sm-3" style={{ paddingLeft: "0px" }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsAct)} style={{ ...check_path("/news/act"), padding: '13px 0 10px' }}>
                            ACT
                        </button>
                    </div>
                    <div className="col lg-1 md-2 sm-3" style={{ paddingLeft: "0px" }}>
                        <button className="nav-link" onClick={() => navigate(RoutesPage.RouteNewsWa)} style={{ ...check_path("/news/wa"), padding: '13px 0 10px' }}>
                            WA
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default SubTabs;