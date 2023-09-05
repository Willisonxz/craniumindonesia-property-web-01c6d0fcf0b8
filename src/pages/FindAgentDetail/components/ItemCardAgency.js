import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DividerHorizontal from '../../../components/DividerHorizontal';
import EmailIcon from '@mui/icons-material/Email';
import DividerVertical from '../../../components/DividerVertical';
import { useNavigate } from 'react-router-dom';
import RoutesPage from '../../../Routes';
const ItemCardAgency = ({ ...props }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='my-2'>
                <div
                    className='d-flex align-items-center px-3'
                    style={{
                        minHeight: '40px',
                        backgroundColor: 'lightblue',
                        padding: '10px 0px'
                    }}>
                    Id veniam nostrud elit culpa et consequat ex.
                </div>
                <div className='bg-white d-flex align-items-center' style={{minHeight: '300px'}}>
                <div className="row bg-white p-0 m-0 py-2" >
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h3>Consectetur mollit ex ea sunt mollit.</h3>
                        <p className="text-muted">Cupidatat cillum quis aliqua quis deserunt velit ullamco aliqua exercitation fugiat velit pariatur. Sit adipisicing labore velit nisi enim adipisicing officia laborum in adipisicing. Duis eiusmod velit amet anim nisi aute ipsum aute officia non nisi. Nostrud non nostrud eu exercitation incididunt qui elit ea ut et eiusmod enim. Cillum magna qui amet nulla quis irure labore sit. </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        {/* <div className='d-flex justify-content-center align-items-center h-100'> */}
                            <div className="row m-0 p-0">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-0 px-0">
                                    <div className="row m-0 p-0">
                                        <h5>Sales performance</h5>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <HomeIcon />
                                            <div className='h2'>413</div>
                                            <div className='text-muted'>Dolor amet sint Lorem pariatur cillum.</div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <AccessTimeIcon />
                                            <div className='h2'>413</div>
                                            <div className='text-muted'>Dolor amet sint Lorem pariatur cillum.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-0 px-0">
                                    <div className="row m-0 p-0">
                                        <h5>Rent performance</h5>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <HomeIcon />
                                            <div className='h2'>413</div>
                                            <div className='text-muted'>Dolor amet sint Lorem pariatur cillum.</div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <AccessTimeIcon />
                                            <div className='h2'>413</div>
                                            <div className='text-muted'>Dolor amet sint Lorem pariatur cillum.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0 p-0"></div>
                        {/* </div> */}
                    </div>
                </div>

                </div>
                <div className='row gx-2 bg-white m-0 py-0 bg-white '>
                    <DividerHorizontal />
                    <div className='col-xs-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 '></div>
                    <div className='col-xs-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 '></div>
                    <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 '>
                        <div className='btn btn-light w-100 d-flex justify-content-center align-items-center' onClick={() => navigate(RoutesPage.RouteAgency)}><EmailIcon /><DividerVertical /> Enquire</div>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 '>
                        <div className='btn btn-danger w-100 d-flex justify-content-center align-items-center' onClick={() => navigate(RoutesPage.RouteAgency)}><EmailIcon /><DividerVertical /> Request a free appraisal</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCardAgency;