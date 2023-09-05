import { useState } from "react";
import { Card, CardContent, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import DividerVertical from "../../../components/DividerVertical";
import ImageJumbotron from '../assets/bg_1.jpg';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ItemCardOurProperties from "./cards/ItemCardOurProperties";
import Maps from "./Maps";


const ItemProperties = () => {
    const [age, setAge] = useState(''); // select material UI

    const [dataProperties, setDataProperties] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [maxShowDataProperty, setMaxShowDataProperty] = useState(3);
    // 
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleMaxShowDataProperty = (addCount) => {
        setMaxShowDataProperty((value) => value + addCount)
    }
    return (
        <>
            <Card>
                <CardContent>
                    <h4>Our properties</h4>
                    <p className='text-muted'>A & V Real Estate - Kellyville have sold 1 property of all time on realestate.com.au, have 1 property for sale and have 8 properties for rent.</p>

                    <div className="d-flex align-items-start ">
                        <FormControl
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                minWidth: '150px'
                            }}

                        >
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    minWidth: '150px'
                                }}
                            >

                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}  >
                                    <div className='d-flex align-items-center'>

                                        <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                            <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                        </div>
                                        <div className='align-self-stretch d-flex align-items-center px-2'>Sales Agency</div>
                                    </div>
                                </MenuItem>
                                <MenuItem value={20} className='' >
                                    <div className='d-flex align-items-center'>

                                        <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                            <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                        </div>
                                        <div className='align-self-stretch d-flex align-items-center px-2'>Property Management</div>
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <DividerVertical />
                        <FormControl
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                minWidth: '150px',

                            }}

                        >
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    minWidth: '150px',
                                }}
                            >

                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}  >
                                    <div className='d-flex align-items-center'>

                                        <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                            <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                        </div>
                                        <div className='align-self-stretch d-flex align-items-center px-2'>Sales Agency</div>
                                    </div>
                                </MenuItem>
                                <MenuItem value={20} className='' >
                                    <div className='d-flex align-items-center'>

                                        <div style={{ padding: '3px', borderRadius: '50%', border: '6px solid black' }}>
                                            <div style={{ height: '0px', width: '0px', borderRadius: '50%', backgroundColor: 'black', }}></div>
                                        </div>
                                        <div className='align-self-stretch d-flex align-items-center px-2'>Property Management</div>
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="my-3" >
                        <Maps />
                    </div>
                    <div>
                        <p className="text-muted">Showing 3 of 1574 properties sold on realestate.com.au in the last 12 months</p>
                    </div>
                    <div className="row gy-3 mx-1">
                        {
                            dataProperties.map((itemProperty, index) => {
                                if (index < maxShowDataProperty) {
                                    return (
                                        <ItemCardOurProperties />
                                    )
                                }
                            })
                        }
                    </div>
                    {
                        maxShowDataProperty > dataProperties.length ?
                            <></>
                            :
                            <div className="d-flex justify-content-center align-items-center my-3">
                                <button className="btn bg-white border-dark py-3" onClick={() => handleMaxShowDataProperty(3)}> Show more properties</button>
                            </div>
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default ItemProperties;