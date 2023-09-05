
import * as React from 'react';

import { Card, CardContent, Checkbox, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import imageJumbotron from "./assets/image_bg.png";
import iconGraph from "./assets/graph_icon.png";
import iconRealEstateAgent from "./assets/real_estate_agent_icon.png";
import HeaderComponentNotSettle from "../../components/HeaderComponentNotSettle";
import DividerVertical from "../../components/DividerVertical";
import AutoCompleteCustom from "../../components/AutoCompleteCustom";
import { useNavigate } from 'react-router-dom';
import RoutesPage from '../../Routes';
import DividerHorizontal from '../../components/DividerHorizontal';
import { CheckBox } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
const Page = () => {
    const [age, setAge] = React.useState('');
    const navigate = useNavigate()

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <HeaderComponentNotSettle />
            {/* PAGE OPTIONS 1 */}
            <div className="d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                <div className='w-100 px-4 '>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="" style={{ width: 450 }}>
                            <div className="h3">Which property would you like to get appraised?</div>
                            <div className='my-4'>
                                <AutoCompleteCustom />
                            </div>
                            <div className='my-4'>
                                <div className=''>This will help the agent provide information that is most relevant to your needs.</div>
                                <div className="my-2">
                                    <FormControl fullWidth >
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            sx={{
                                                borderColor: 'divider',
                                                border: 1
                                            }}

                                        >
                                            <MenuItem disabled value="">
                                                <em>Please select</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className=''>Can't find your address?</div>
                            <div className=''>Enter address manually</div>
                            <div className="d-flex justify-content-between align-items-center w-100 my-4">
                                <div className="btn text-dark border-dark">
                                    <div className="px-2 py-1" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)}>
                                        Previous
                                    </div>
                                </div>
                                <div className="btn bg-light text-dark border-dark" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                    <div className="px-2 py-1">
                                        Continue
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="my-5" style={{ width: 450 }}>
                        <div className="h3">Which property would you like to get appraised?</div>
                        <div className='my-4'>
                            <AutoCompleteCustom />
                        </div>
                        <div className='my-4'>
                            <div className=''>Select a property type</div>
                            <div className="my-2">
                                <FormControl fullWidth >
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        sx={{
                                            borderColor: 'divider',
                                            border: 1
                                        }}

                                    >
                                        <MenuItem disabled value="">
                                            <em>Please select</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className=''>Can't find your address?</div>
                        <div className=''>Enter address manually</div>
                        <div className="d-flex justify-content-between align-items-center w-100 my-4">
                            <div className="btn text-dark border-dark" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)}>
                                <div className="px-2 py-1">
                                    Previous
                                </div>
                            </div>
                            <div className="btn bg-light text-dark border-dark" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                <div className="px-2 py-1">
                                    Continue
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PAGE OPTIONS 1 */}
            {/* PAGE OPTIONS 2 */}

            <div className="d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                <div className='w-100 px-4 '>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="" style={{ width: 450 }}>
                            <div className="h3">How is this property being used?</div>
                            <div className='my-4'>
                            </div>
                            <div className='my-4'>
                                <div className=''>This will help the agent provide information that is most relevant to your needs.</div>
                                <div className="my-2">
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>As my primary residence</div>
                                                <DividerHorizontal />
                                                <div className='font-sz-14px'>I own and live in this property</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>As my investment property</div>
                                                <DividerHorizontal />
                                                <div className='font-sz-14px'>I own but don’t live in this property</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center w-100 my-4">
                                <div className="btn text-dark border-dark">
                                    <div className="px-2 py-1" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)}>
                                        Previous
                                    </div>
                                </div>
                                <div className="btn bg-danger text-white " onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                    <div className="px-2 py-1 fw-bold">
                                        Continue
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="my-5" style={{ width: 450 }}>
                        <div className="h3">How is this property being used?</div>
                        <div className='my-4'>
                        </div>
                        <div className='my-4'>
                            <div className=''>This will help the agent provide information that is most relevant to your needs.</div>
                            <div className="my-2">
                                <div className='btn border-dark p-4 w-100 my-2'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                            <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                            </div>
                                        </div>
                                        <DividerVertical />
                                        <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                            <div className='font-sz-16px fw-bold'>As my primary residence</div>
                                            <DividerHorizontal />
                                            <div className='font-sz-14px'>I own and live in this property</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='btn border-dark p-4 w-100 my-2'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                            <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                            </div>
                                        </div>
                                        <DividerVertical />
                                        <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                            <div className='font-sz-16px fw-bold'>As my investment property</div>
                                            <DividerHorizontal />
                                            <div className='font-sz-14px'>I own but don’t live in this property</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center w-100 my-4">
                            <div className="btn text-dark border-dark" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)}>
                                <div className="px-2 py-1">
                                    Previous
                                </div>
                            </div>
                            <div className="btn bg-danger text-white " onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                <div className="px-2 py-1 fw-bold">
                                    Continue
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PAGE OPTIONS 2 */}
            {/* PAGE OPTIONS 3 */}
            <div className="d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                <div className='w-100 px-4 '>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="" style={{ width: 450 }}>
                            <div className="h3">Why are you looking for an appraisal?</div>
                            <div className='my-4'>
                            </div>
                            <div className='my-4'>
                                <div className=''>This will help the agent provide information that is most relevant to your needs.</div>
                                <div className="my-2">
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>I'm thinking about selling</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>I'm thinking about leasing</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>I'm after a bank valuation</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>I'm just curious</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center w-100 my-4">
                                <div className="btn text-dark border-dark">
                                    <div className="px-2 py-1" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)}>
                                        Previous
                                    </div>
                                </div>
                                <div className="btn bg-danger text-white " onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                    <div className="px-2 py-1 fw-bold">
                                        Continue
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="my-5" style={{ width: 450 }}>
                        <div className="h3">Why are you looking for an appraisal?</div>
                        <div className='my-4'>
                        </div>
                        <div className='my-4'>
                            <div className=''>This will help the agent provide information that is most relevant to your needs.</div>
                            <div className="my-2">
                                <div className='btn border-dark p-4 w-100 my-2'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                            <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                            </div>
                                        </div>
                                        <DividerVertical />
                                        <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                            <div className='font-sz-16px fw-bold'>I'm thinking about selling</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='btn border-dark p-4 w-100 my-2'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                            <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                            </div>
                                        </div>
                                        <DividerVertical />
                                        <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                            <div className='font-sz-16px fw-bold'>I'm thinking about leasing</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='btn border-dark p-4 w-100 my-2'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                            <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                            </div>
                                        </div>
                                        <DividerVertical />
                                        <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                            <div className='font-sz-16px fw-bold'>I'm after a bank valuation</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='btn border-dark p-4 w-100 my-2'>
                                    <div className='d-flex'>
                                        <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                            <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                            </div>
                                        </div>
                                        <DividerVertical />
                                        <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                            <div className='font-sz-16px fw-bold'>I'm just curious</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center w-100 my-4">
                            <div className="btn text-dark border-dark" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)}>
                                <div className="px-2 py-1">
                                    Previous
                                </div>
                            </div>
                            <div className="btn bg-danger text-white " onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                <div className="px-2 py-1 fw-bold">
                                    Continue
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PAGE OPTIONS 3 */}
            {/* PAGE OPTIONS 4 */}
            <div className="d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">
                <div className='w-100 px-4 '>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="" style={{ width: 450 }}>
                            <div className="h3">How can the agent reach you?</div>
                            <div className='my-4'>
                            </div>
                            <div className='my-4'>
                                <div className="my-2">
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>I'm thinking about selling</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>I'm thinking about leasing</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>I'm after a bank valuation</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn border-dark p-4 w-100 my-2'>
                                        <div className='d-flex'>
                                            <div className='d-flex align-items-center' style={{ minWidth: 30 }}>
                                                <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                                    <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                                </div>
                                            </div>
                                            <DividerVertical />
                                            <div className='flex-grow-1 d-flex justify-content-start flex-column align-items-start'>
                                                <div className='font-sz-16px fw-bold'>I'm just curious</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center w-100 my-4">
                                <div className="btn text-dark border-dark">
                                    <div className="px-2 py-1" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)}>
                                        Previous
                                    </div>
                                </div>
                                <div className="btn bg-danger text-white " onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                    <div className="px-2 py-1 fw-bold">
                                        Continue
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="my-5" style={{ width: 450 }}>
                        <div className="h3">How can the agent reach you?</div>
                        <div className='my-4'>
                        </div>
                        <div className='my-4'>
                            <div className="my-2">
                                <div className='my-2'>
                                    <div className='font-sz-16px fw-bold my-2'>Full name</div>
                                    <input className='w-100  border-dark p-3 w-100 rounded' placeholder='name' type='text'></input>
                                </div>

                                <div className='my-2'>
                                    <div className='font-sz-16px fw-bold my-2'>Email address</div>
                                    <input className='w-100  border-dark p-3 w-100 rounded' placeholder='Email address' type='email'></input>
                                </div>

                                <div className='my-2'>
                                    <div className='font-sz-16px fw-bold my-2'>Mobile number</div>
                                    <input className='w-100  border-dark p-3 w-100 rounded' placeholder='Mobile number' type='text'></input>
                                </div>
                                <div className='my-2'>
                                    <div className='font-sz-16px fw-bold my-2'>Preferred contact method(s)</div>
                                    <div className='d-flex w-100'>
                                        <div className='btn btn-light d-flex border border-dark rounded flex-grow-1 justify-content-start align-items-center px-2 py-2'>
                                            <div className=''> <Checkbox defaultChecked sx={{
                                                color: grey[800],
                                                '&.Mui-checked': {
                                                    color: grey[600],
                                                },

                                            }} /></div>
                                            <div className=''>Email</div>
                                        </div>
                                        <DividerVertical />
                                        <div className='btn btn-light d-flex border border-dark rounded flex-grow-1 justify-content-start align-items-center px-2 py-2'>
                                            <div className=''> <Checkbox defaultChecked sx={{
                                                color: grey[800],
                                                '&.Mui-checked': {
                                                    color: grey[600],
                                                },

                                            }} /></div>
                                            <div className=''>Email</div>
                                        </div>
                                        <DividerVertical />
                                        <div className='btn btn-light d-flex border border-dark rounded flex-grow-1 justify-content-start align-items-center px-2 py-2'>
                                            <div className=''> <Checkbox defaultChecked sx={{
                                                color: grey[800],
                                                '&.Mui-checked': {
                                                    color: grey[600],
                                                },

                                            }} /></div>
                                            <div className=''>Email</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='font-sz-10px text-muted'>
                                    Your contact details and declared data will not be shared with any third parties other than in relation to your property appraisal. See our
                                    Personal Information Collection Statement
                                    for more information.
                                </div>

                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center w-100 my-4">
                            <div className="btn text-dark border-dark" onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)}>
                                <div className="px-2 py-1">
                                    Previous
                                </div>
                            </div>
                            <div className="btn bg-danger text-white " onClick={() => navigate(RoutesPage.RouteFindAgentAppraisalDetail)}>
                                <div className="px-2 py-1 fw-bold">
                                    Continue
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PAGE OPTIONS 4 */}


        </>
    )

}

export default Page;
