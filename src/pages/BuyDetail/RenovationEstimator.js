import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FontRoboto from "../../components/FontRoboto"
import CloseIcon from '@mui/icons-material/Close';
import { Card, CardContent, Container, useMediaQuery } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DividerHorizontal from "../../components/DividerHorizontal";


const RenovationEstimator = () => {
    const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
    const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
    const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
    const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
    const xLargeDeviceSize = useMediaQuery('(max-width: 1399.98px)')
    // state component
    const [selectedItem, setSelectedItem] = useState(null)


    // state modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>


            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    overflow: 'auto'
                }}
            >
                <Container sx={{
                    position: 'relative',
                    padding: 0,
                }}>
                    <Box sx={{
                        position: 'absolute',
                        left: 0,
                        top: xSmallDevice || smallDeviceSize || mediumDeviceSize || largeDeviceSize ? 0 : 0,
                        top: xSmallDevice || smallDeviceSize || mediumDeviceSize || largeDeviceSize ? 0 : 0,
                        marginY: xSmallDevice || smallDeviceSize || mediumDeviceSize  ? 0 : 10,
                        width: xSmallDevice || smallDeviceSize ? '100%' : '800px',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                    }}>
                        <div className="px-4 bg-light" style={{ minHeight: 100 }}>
                            <div className="d-flex justify-content-between align-items-center " style={{ height: 100 }}>
                                <img style={{ height: 20, width: 20 }}></img>
                                <CloseIcon onClick={() => setOpen(false)} />
                            </div>
                        </div>
                        <div className="px-4 bg-white py-4" style={{ minHeight: 100 }}>
                            <FontRoboto text={`What would you like to renovate?`} className={`my-2 fw-bold`} />
                            <div className="row">
                                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                    <div className="row gy-4">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <div className={`btn btn-light w-100 ${selectedItem === 'Kitchen' ? 'border-dark' : ''}`} onClick={() => setSelectedItem('Kitchen')} >
                                                <div className="d-flex flex-column justify-content-content align-items-center py-2" style={{ gap: 20 }}>
                                                    <img style={{ height: 40, width: 40 }}></img>
                                                    <FontRoboto text={`Kitchen`} className={``} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <div className={`btn btn-light w-100 ${selectedItem === 'Bathroom' ? 'border-dark' : ''}`} onClick={() => setSelectedItem('Bathroom')} >
                                                <div className="d-flex flex-column justify-content-content align-items-center py-2" style={{ gap: 20 }}>
                                                    <img style={{ height: 40, width: 40 }}></img>
                                                    <FontRoboto text={`Bathroom`} className={``} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <div className={`btn btn-light w-100 ${selectedItem === 'Paint exterior' ? 'border-dark' : ''}`} onClick={() => setSelectedItem('Paint exterior')}  >
                                                <div className="d-flex flex-column justify-content-content align-items-center py-2" style={{ gap: 20 }}>
                                                    <img style={{ height: 40, width: 40 }}></img>
                                                    <FontRoboto text={`Paint exterior`} className={``} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <div className={`btn btn-light w-100 ${selectedItem === 'Paint interior' ? 'border-dark' : ''}`} onClick={() => setSelectedItem('Paint interior')}  >
                                                <div className="d-flex flex-column justify-content-content align-items-center py-2" style={{ gap: 20 }}>
                                                    <img style={{ height: 40, width: 40 }}></img>
                                                    <FontRoboto text={`Paint interior`} className={``} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <FontRoboto text={`Select your measurements (m²)`} className={`my-2 fw-bold`} />
                                            <FormControl fullWidth>
                                                <Select
                                                    value={age}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <FontRoboto text={`Choose your quality`} className={`my-2 fw-bold`} />
                                            <input type="text" className="w-100 p-3"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                    <Card>
                                        <CardContent>
                                            <FontRoboto text={`Your kitchen renovation estimate`} className={`font-sz-20px`} />
                                            <FontRoboto text={`$44,663 - $60,427`} className={`font-sz-26px fw-bold my-3`} />
                                            <FontRoboto text={`Disclaimer`} className={`text-muted font-sz-10px`} />
                                            <hr />
                                            <FontRoboto text={`SEE HOW TO GET STARTED`} className={``} />
                                            <FontRoboto text={`Our expert tips will help you make the most out of your next renovation.`} className={``} />
                                            <br />
                                            <div className="btn btn-dark font-sz-20px w-100">View guide</div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>


                        </div>

                        <div className="px-4 bg-light" style={{ minHeight: 100 }}>
                            <div className="d-flex justify-content-between align-items-center " style={{ height: 100 }}>
                                <div>
                                    <FontRoboto text={`Renovation Tips and Advice`} className={`font-sz-16px`} />
                                    <FontRoboto text={`Find inspiration, clever styling hacks, advice and help for DIY on any budget.`} className={`font-sz-14px text-muted my-1`} />
                                </div>
                                <div className="">
                                    <div className="btn btn-light border-dark">Find out more</div>
                                </div>
                            </div>
                        </div>

                    </Box>
                </Container>

            </Modal>
            <FontRoboto text={`Renovation estimator`} className={`font-sz-18px fw-bold`} />
            <FontRoboto text={`Select the area you want to transform`} className={`font-sz-14px text-muted`} />
            <div className="row gy-2">
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                    <div className={`btn btn-light w-100 ${selectedItem === 'Kitchen' ? 'border-dark' : ''}`} onClick={() => setSelectedItem('Kitchen')} >
                        <div className={`d-flex flex-column justify-content-content align-items-center py-2`} style={{ gap: 20 }}>
                            <img style={{ height: 40, width: 40 }}></img>
                            <FontRoboto text={`Kitchen`} className={``} />
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                    <div className={`btn btn-light w-100 ${selectedItem === 'Bathroom' ? 'border-dark' : ''}`} onClick={() => setSelectedItem('Bathroom')} >
                        <div className={`d-flex flex-column justify-content-content align-items-center py-2`} style={{ gap: 20 }}>
                            <img style={{ height: 40, width: 40 }}></img>
                            <FontRoboto text={`Bathroom`} className={``} />
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                    <div className={`btn btn-light w-100 ${selectedItem === 'Paint exterior' ? 'border-dark' : ''}`} onClick={() => setSelectedItem('Paint exterior')}  >
                        <div className={`d-flex flex-column justify-content-content align-items-center py-2`} style={{ gap: 20 }}>
                            <img style={{ height: 40, width: 40 }}></img>
                            <FontRoboto text={`Paint exterior`} className={``} />
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                    <div className={`btn btn-light w-100 ${selectedItem === 'Paint interior' ? 'border-dark' : ''}`} onClick={() => setSelectedItem('Paint interior')}  >
                        <div className={`d-flex flex-column justify-content-content align-items-center py-2`} style={{ gap: 20 }}>
                            <img style={{ height: 40, width: 40 }}></img>
                            <FontRoboto text={`Paint interior`} className={``} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <div className="btn btn-dark px-5" onClick={() => setOpen(true)}>Continue</div>
            </div>
        </>
    )
}

export default RenovationEstimator
    ;