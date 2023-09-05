import { useState } from "react";
import { Card, CardContent, TextField } from "@mui/material";
import DividerHorizontal from "../../../components/DividerHorizontal";
import StarIcon from '@mui/icons-material/Star';
import DividerVertical from "../../../components/DividerVertical";

const ItemContact = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [showEnquiry, setShowEnquiry] = useState(false)
    return (
        <>
            <Card className='p-0 sticky'>
                <CardContent className='p-0'>
                    <div className='w-100' style={{ height: '40px', backgroundColor: 'red' }}></div>
                    <div className="px-3">
                        <div className='h5 my-2'>Contact A & G Realty</div>
                        <div className="d-flex my-2">
                            <StarIcon sx={{ color: '#faaf00' }} />
                            <DividerVertical />
                            <div>
                                <span className="fw-bold">4.9</span> <span> (40 reviews)</span>
                            </div>
                        </div>
                        <DividerHorizontal />
                    </div>

                    {
                        showEnquiry === true ?

                            <div className="px-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="h5">Enquiry about selling a property</div>
                                    <div className="pointer" onClick={() => {
                                        setShowEnquiry(false)
                                        setSelectedItem(0)
                                    }}>Edit enquiry type</div>
                                </div>
                                <div className="my-3">
                                    <div className="fw-bold my-1">Property Adders</div>
                                    <TextField className="w-100" id="outlined-basic" placeholder="Enter your address" variant="outlined" type="email" />
                                </div>
                                <div className="my-3">
                                    <div className="fw-bold my-1">Write a message</div>
                                    <textarea class="form-control w-100" placeholder="Enter your message" style={{ height: '100px' }}></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="my-1"><span className="fw-bold ">How would you like to be contacted?</span> <span>(required)</span></div>
                                    <TextField className="w-100" id="outlined-basic" placeholder="Enter your address" variant="outlined" type="email" />
                                </div>
                                <div className="my-3">
                                    <div className="my-1"><span className="fw-bold ">Your number</span> <span>(required)</span></div>
                                    <TextField className="w-100" id="outlined-basic" placeholder="E.g. 0412 3456 789" variant="outlined" type="email" />
                                </div>
                                <div className="my-3">
                                    <div className="my-1"><span className="fw-bold ">Your name</span> <span>(required)</span></div>
                                    <TextField className="w-100" id="outlined-basic" placeholder="Enter your name" variant="outlined" type="email" />
                                </div>
                                <DividerHorizontal />
                                <div className=""></div>
                                <div className=""></div>
                            </div>
                            :
                            <div>
                                <div className='px-3'>
                                    <DividerHorizontal />
                                    <div className='row p-0 m-0 gy-2'>
                                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
                                            <button className={`btn border-dark py-2 w-100 my-2 ${selectedItem === 1 ? 'bg-dark text-white' : 'btn-outline-dark'}`} onClick={() => setSelectedItem(1)}>Request appraisal</button>
                                        </div>
                                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
                                            <button className={`btn border-dark py-2 w-100 my-2 ${selectedItem === 2 ? 'bg-dark text-white' : 'btn-outline-dark'}`} onClick={() => setSelectedItem(2)}>Property management</button>
                                        </div>
                                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
                                            <button className={`btn border-dark py-2 w-100 my-2 ${selectedItem === 3 ? 'bg-dark text-white' : 'btn-outline-dark'}`} onClick={() => setSelectedItem(3)}>An advertised property</button>
                                        </div>
                                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
                                            <button className={`btn border-dark py-2 w-100 my-2 ${selectedItem === 4 ? 'bg-dark text-white' : 'btn-outline-dark'}`} onClick={() => setSelectedItem(4)}>General enquiry</button>
                                        </div>
                                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 '>
                                            <button
                                                className={`btn btn-danger w-100 my-2 py-2`} onClick={() => {
                                                    if (selectedItem !== 0) setShowEnquiry(true)
                                                }}
                                                disabled={selectedItem === 0}

                                            >Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }

                </CardContent>
            </Card>
        </>
    )
}

export default ItemContact;