import { useState } from "react";
import { Card, CardContent, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ImageJumbotron from '../../assets/bg_1.jpg';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DividerVertical from "../../../../components/DividerVertical";
import DividerHorizontal from "../../../../components/DividerHorizontal";

const ItemCardOurProperties = () => {
    return (
        <>
            <div className="col-12 mx-0 px-0">
                <Card className="m-0 p-0">
                    <CardContent className="m-0 p-0">
                        <div className="row mx-0 my-0">
                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mx-0 px-0">
                                <div
                                    style={{
                                        maxWidth: '100%',
                                        height: '200px',
                                        backgroundSize: 'cover',
                                        backgroundImage: `url(${ImageJumbotron})`
                                    }}
                                >
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 px-3">
                                <div className="h-100 d-flex align-items-center">
                                    <div className="w-100">
                                        <div className="h4">875,000</div>
                                        <div className="text-muted">8 Apanina Way Rostrevor, SA</div>
                                        <div className="d-flex my-3">
                                            <div className="h6 d-flex align-items-end"><DirectionsCarIcon /><DividerVertical /> 3</div>
                                            <DividerVertical />
                                            <div className="h6 d-flex align-items-end"><DirectionsCarIcon /><DividerVertical /> 3</div>
                                            <DividerVertical />
                                            <div className="h6 d-flex align-items-end"><DirectionsCarIcon /><DividerVertical /> 3</div>
                                            <DividerVertical />
                                            <DividerVertical />
                                            <div>House</div>
                                        </div>
                                        <div className="text-muted">8 Apanina Way Rostrevor, SA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default ItemCardOurProperties;
