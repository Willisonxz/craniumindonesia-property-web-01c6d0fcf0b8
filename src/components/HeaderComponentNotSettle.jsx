import * as React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// material UI
import MenuIcon from "@mui/icons-material/Menu";
import { Box, CardContent, useMediaQuery } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// components
import DividerVertical from "./DividerVertical";
import DividerHorizontal from "./DividerHorizontal";
import RoutesPage from "../Routes";
import { useDispatch, useSelector } from "react-redux";
import { setUserAndToken } from "../store/global/user";

const style = {
  position: "absolute",
  top: 75,
  left: 0,
  bottom: 0,
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};
const HeaderComponentNotSettle = () => {
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery("(max-width:770px)");
  // reducer global state and state global
  const dispatchGlobal = useDispatch();
  const userApp = useSelector((state) => state.userApp);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const HeaderMobile = useCallback(
    ({ ...props }) => {
      const { open, setOpen, handleClick } = props;
      return (
        <>
          {matches === true ? (
            <header className="d-xs-block d-sm-block d-md-none m-0 p-0 d-flex h1-00">
              <Modal open={open} onClose={handleClick}>
                <>
                  <Box
                    className="d-flex flex-column m-0 p-0 bg-white px-2 w-100"
                    sx={{
                      position: "absolute",
                      top: 0,
                      height: 75,
                      zIndex: 1000,
                    }}
                  >
                    <div
                      className="box-content-find-agents d-flex justify-content-between align-items-center "
                      style={{ minHeight: "75px" }}
                    >
                      <div
                        className="d-flex align-items-center btn btn-light"
                        onClick={handleClick}
                      >
                        <MenuIcon />
                        <DividerVertical />
                        <div style={{}}>Menu</div>
                      </div>
                      <div></div>
                      {userApp.status === true ? (
                        <>
                          <div className="d-flex">
                            <AccountCircleIcon fontSize="large" className="pointer" onClick={() => navigate(RoutesPage.RouteProfile)} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="d-flex">
                            <button
                              className="btn btn-light bg-white"
                              onClick={() =>
                                dispatchGlobal(
                                  setUserAndToken({
                                    name: "septian",
                                    email: "septian@gmail.com",
                                    token: "random token",
                                  })
                                )
                              }
                            >
                              Sign in
                            </button>
                            <DividerVertical />
                            <button
                              className="btn btn-danger px-4"
                              onClick={() =>
                                dispatchGlobal(
                                  setUserAndToken({
                                    name: "septian",
                                    email: "septian@gmail.com",
                                    token: "random token",
                                  })
                                )
                              }
                            >
                              Join
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </Box>
                  <Box sx={style}>
                    <div
                      className="d-flex justify-content-between align-items-center "
                      style={{
                        minHeight: "75px",
                        background: "rgba(108, 122, 137, 0.7)",
                      }}
                    >
                      <div
                        style={{ padding: "0px 30px" }}
                        className=" bg-white w-100"
                      >
                        <div>
                          <div
                            className="btn btn-light bg-white my-2"
                            onClick={() => navigate(RoutesPage.RouteBuy)}
                          >
                            Buy
                          </div>
                        </div>
                        <div>
                          <div
                            className="btn btn-light bg-white my-2"
                            onClick={() => navigate(RoutesPage.RouteRent)}
                          >
                            Rent
                          </div>
                        </div>
                        <div>
                          <div
                            className="btn btn-light bg-white my-2"
                            onClick={() => navigate(RoutesPage.RoutesSold)}
                          >
                            Sold
                          </div>
                        </div>
                        <div>
                          <div
                            className="btn btn-light bg-white my-2"
                            onClick={() => navigate(RoutesPage.RouteNewHomes)}
                          >
                            New homes
                          </div>
                        </div>
                        <div>
                          <div
                            className="btn btn-light bg-white my-2"
                            onClick={() => navigate(RoutesPage.RouteFindAgent)}
                          >
                            Find Agents
                          </div>
                        </div>
                        <div>
                          <div
                            className="btn btn-light bg-white my-2"
                            onClick={() => navigate(RoutesPage.RouteNews)}
                          >
                            News
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </>
              </Modal>
              <div className="w-100 d-flex m-0 p-0 h-100" style={{}}>
                <Box
                  className="d-flex flex-column m-0 p-0 bg-white px-2 w-100"
                  sx={{
                    position: "absolute",
                    top: 0,
                    height: 75,
                    zIndex: 1000,
                  }}
                >
                  <div
                    className="box-content-find-agents d-flex justify-content-between align-items-center "
                    style={{ minHeight: "75px" }}
                  >
                    <div
                      className="d-flex align-items-center btn btn-light"
                      onClick={handleClick}
                    >
                      <MenuIcon />
                      <DividerVertical />
                      <div style={{}}>Menu</div>
                    </div>
                    <div></div>
                    {userApp.status === true ? (
                        <>
                          <div className="d-flex">
                            <AccountCircleIcon fontSize="large" className="pointer" onClick={() => navigate(RoutesPage.RouteProfile)} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="d-flex">
                            <button
                              className="btn btn-light bg-white"
                              onClick={() =>
                                dispatchGlobal(
                                  setUserAndToken({
                                    name: "septian",
                                    email: "septian@gmail.com",
                                    token: "random token",
                                  })
                                )
                              }
                            >
                              Sign in
                            </button>
                            <DividerVertical />
                            <button
                              className="btn btn-danger px-4"
                              onClick={() =>
                                dispatchGlobal(
                                  setUserAndToken({
                                    name: "septian",
                                    email: "septian@gmail.com",
                                    token: "random token",
                                  })
                                )
                              }
                            >
                              Join
                            </button>
                          </div>
                        </>
                      )}
                  </div>
                </Box>
              </div>

              <div style={{ height: 80 }}></div>
            </header>
          ) : (
            <></>
          )}
        </>
      );
    },
    [open, matches, userApp?.status]
  );

  const HeaderDesktop = useCallback(
    ({ ...props }) => {
      const { open, setOpen, handleClick } = props;
      return (
        <>
          <header
            className="d-none d-sm-block d-sm-none d-md-block"
            style={{ minHeight: "75px" }}
          >
            <DividerHorizontal />
            <div className="">
              <div
                className="box-content-find-agents d-flex justify-content-between align-items-center "
                style={{ minHeight: "75px" }}
              >
                <div
                  className="d-flex align-items-center btn btn-light"
                  onClick={handleClick}
                >
                  <MenuIcon />
                  <DividerVertical />
                  <div style={{}}>Menu</div>
                </div>
                <div></div>
                {userApp.status === true ? (
                        <>
                          <div className="d-flex">
                            <AccountCircleIcon fontSize="large" className="pointer" onClick={() => navigate(RoutesPage.RouteProfile)} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="d-flex">
                            <button
                              className="btn btn-light bg-white"
                              onClick={() =>
                                dispatchGlobal(
                                  setUserAndToken({
                                    name: "septian",
                                    email: "septian@gmail.com",
                                    token: "random token",
                                  })
                                )
                              }
                            >
                              Sign in
                            </button>
                            <DividerVertical />
                            <button
                              className="btn btn-danger px-4"
                              onClick={() =>
                                dispatchGlobal(
                                  setUserAndToken({
                                    name: "septian",
                                    email: "septian@gmail.com",
                                    token: "random token",
                                  })
                                )
                              }
                            >
                              Join
                            </button>
                          </div>
                        </>
                      )}
              </div>
              <DividerHorizontal />
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                style={{ position: "relative" }}
              >
                <header className="" style={{ minHeight: "75px" }}>
                  <CardContent className="box-content-find-agents">
                    <Container sx={{}}>
                      <div className="d-flex justify-content-center align-items-center">
                        <div
                          className="btn btn-light bg-white mx-1"
                          onClick={() => navigate(RoutesPage.RouteBuy)}
                        >
                          Buy
                        </div>
                        <div
                          className="btn btn-light bg-white mx-1"
                          onClick={() => navigate(RoutesPage.RouteRent)}
                        >
                          Rent
                        </div>
                        <div
                          className="btn btn-light bg-white mx-1"
                          onClick={() => navigate(RoutesPage.RoutesSold)}
                        >
                          Sold
                        </div>
                        <div
                          className="btn btn-light bg-white mx-1"
                          onClick={() => navigate(RoutesPage.RouteNewHomes)}
                        >
                          New homes
                        </div>
                        <div
                          className="btn btn-light bg-white mx-1"
                          onClick={() => navigate(RoutesPage.RouteFindAgent)}
                        >
                          Find Agents
                        </div>
                        <div
                          className="btn btn-light bg-white mx-1"
                          onClick={() => navigate(RoutesPage.RouteNews)}
                        >
                          News
                        </div>
                      </div>
                    </Container>
                  </CardContent>
                </header>
                <DividerHorizontal />
              </Collapse>
            </div>
          </header>
        </>
      );
    },
    [open, matches, userApp?.status]
  );
  return (
    <>
      <HeaderMobile open={open} setOpen={setOpen} handleClick={handleClick} />
      <HeaderDesktop open={open} setOpen={setOpen} handleClick={handleClick} />
    </>
  );
};

export default HeaderComponentNotSettle;
