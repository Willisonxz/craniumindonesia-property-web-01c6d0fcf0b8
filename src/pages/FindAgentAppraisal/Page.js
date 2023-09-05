
import { Card, CardContent } from "@mui/material";
import imageJumbotron from "./assets/image_bg.png";
import iconGraph from "./assets/graph_icon.png";
import iconRealEstateAgent from "./assets/real_estate_agent_icon.png";
import HeaderComponentNotSettle from "../../components/HeaderComponentNotSettle";
import DividerVertical from "../../components/DividerVertical";
import { useNavigate } from "react-router-dom";
import RoutesPage from "../../Routes";

const Page = () => {

    const navigate = useNavigate()
    return (
        <>
            <HeaderComponentNotSettle />
            <div className="d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="w-100 px-4" >

                            <img src={imageJumbotron} className="w-100" style={{minHeight : 100}} ></img>
                        <div className="h3">Request a free market appraisal in less than 5 minutes</div>
                        <div className="my-2">Answer some quick questions to connect with the right agent for a personalised appraisal.</div>
                        <div className="h5">What you'll get</div>
                        <div className="bg-light p-3 my-2 d-flex align-items-center justify-content-center">

                            <img src={iconRealEstateAgent} height={30} width={30}></img>
                            <DividerVertical />
                            <div>Recommendations on potential sale or rental price, plus marketing plans</div>
                        </div>
                        <div className="bg-light p-3 my-2 d-flex align-items-center justify-content-center">

                            <img src={iconGraph} height={30} width={30}></img>
                            <DividerVertical />
                            <div>Information on current demand trends and comparable properties on the market</div>
                        </div>
                        <div className="my-2">Extra information to help you get started</div>
                        <div className="d-flex justify-content-center align-items-center w-100 my-4">
                            <div className="btn bg-danger text-white" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                <div className="px-5">
                                    Get Started
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="" style={{ width: 450 }}>
                        <div
                            className="my-2"
                            style={{
                                background: `url(${imageJumbotron})`,
                                height: 150,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                        <div className="h3">Request a free market appraisal in less than 5 minutes</div>
                        <div className="my-2">Answer some quick questions to connect with the right agent for a personalised appraisal.</div>
                        <div className="h5">What you'll get</div>
                        <div className="bg-light p-3 my-2 d-flex align-items-center justify-content-center">

                            <img src={iconRealEstateAgent} height={30} width={30}></img>
                            <DividerVertical />
                            <div>Recommendations on potential sale or rental price, plus marketing plans</div>
                        </div>
                        <div className="bg-light p-3 my-2 d-flex align-items-center justify-content-center">

                            <img src={iconGraph} height={30} width={30}></img>
                            <DividerVertical />
                            <div>Information on current demand trends and comparable properties on the market</div>
                        </div>
                        <div className="my-2">Extra information to help you get started</div>
                        <div className="d-flex justify-content-center align-items-center w-100 my-4">
                            <div className="btn bg-danger text-white" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                <div className="px-5">
                                    Get Started
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Page;
