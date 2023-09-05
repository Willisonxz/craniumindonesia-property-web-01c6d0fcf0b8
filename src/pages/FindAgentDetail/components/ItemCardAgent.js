import { Box, Button, Card, CardContent, Divider, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import * as React from 'react';
import DividerHorizontal from '../../../components/DividerHorizontal';
import DividerVertical from '../../../components/DividerVertical';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RoutesPage from '../../../Routes';
const ItemCardAgent = ({ ...props }) => {

    const {
        // value
        id,
        name,
        video,
        videoThumbnail,
        star,
        reviews,
        position,
        code,
        titleData,
        propertiesSold,
        medianSoldPrice,
        medianDaysAdvertised,
        allSuburbs,
        properties,
        // function
    } = props.item;
    // function
    const { AddAgentFunction, RemoveAgentFunction } = props
    // 
    const { index, setSelectedIndexShowModal, setOpen } = props
    const [value, setValue] = React.useState(5);

    const agentsDataCompared = useSelector((state) => state.findAgentDetail.selectedAgentCompared)

    let conditionAgentAddedToCompare = false;

    const navigate = useNavigate();

    agentsDataCompared?.forEach((itemAgent) => {
        if (itemAgent.id === id) conditionAgentAddedToCompare = true
    })
    return (
        <div className='my-2'>
            <div
                className='d-flex align-items-center px-3'
                style={{
                    minHeight: '40px',
                    backgroundColor: 'lightblue',
                    padding: '10px 0px'
                }}>
                {name}
            </div>
            <Box className='row m-0 gy-2 bg-white'>
                <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pointer' onClick={() => navigate(`${RoutesPage.RouteAgent}/${id}`)}>
                    <div className='d-flex'>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 100, height: 100 }}
                        />
                        <Divider orientation="vertical" className='mx-1' />
                        <div>
                            <div className='h5 text-ellipsis-150px'>{name}</div>
                            <Typography variant="body2" gutterBottom className='text-muted d-flex align-items-center align-content-stretch'>


                                <StarIcon sx={{
                                    color: '#faaf00'

                                }} />
                                <DividerVertical />

                                {star} ({reviews.length} reviews)
                            </Typography>
                            <div className='text-ellipsis-150px font-sz-12px'>{position}</div>
                            <div className='text-ellipsis-150px font-sz-12px'>{position}</div>
                            <div className='text-ellipsis-150px font-sz-12px'>{code}</div>
                        </div>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
                    <div className='d-flex justify-content-between align-content-stretch'>
                        <Card className='flex-grow-1'>
                            <CardContent>
                                <div className='h5 my-1 text-muted'>Magna qui nisi .</div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center' style={{ width: 50 }} >
                                        <div className='text-center h4 my-1'>{allSuburbs}</div>
                                    </div>
                                    <DividerVertical />
                                    <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center' style={{ width: 50 }} >
                                        <div className='text-center h4 my-1'>{allSuburbs}</div>
                                    </div>
                                    <DividerVertical />
                                    <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center' style={{ width: 50 }} >
                                        <div className='text-center h4 my-1'>{allSuburbs}</div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center' style={{ width: 50 }} >
                                        <div className='text-center form-text font-sz-10px'>Properties sold (as lead agent)</div>
                                    </div>
                                    <DividerVertical />
                                    <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center' style={{ width: 50 }} >
                                        <div className='text-center form-text font-sz-10px'>Median sold price</div>
                                    </div>
                                    <DividerVertical />
                                    <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center' style={{ width: 50 }} >
                                        <div className='text-center form-text font-sz-10px'>Median days advertised</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Divider orientation="vertical" className='mx-1' />
                        <div className='' style={{ minWidth: '130px' }}>
                            <Card className='h-100'>
                                <CardContent className='h-100'>
                                    <div className='h5 my-1 text-muted text-center'>ALL SUBURBS</div>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <div className='text-center h4 my-1'>{allSuburbs}</div>
                                        <div className='text-center form-text font-sz-10px'>Properties sold</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <Divider orientation="vertical" className='mx-1' />
                        <div className='flex-grow-2 d-flex flex-column justify-content-between'>
                            <Button

                                variant="contained"
                                onClick={() => navigate(RoutesPage.RouteFindAgentAppraisal)}
                                className='w-100 flex-grow-1'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 1,
                                }}
                            >
                                Request a free market appraisal
                            </Button>
                            <Divider orientation="horizontal" className='my-1' />
                            {
                                conditionAgentAddedToCompare === true ?
                                    <div className='btn w-100 flex-grow-1 bg-white text-dark border-dark d-flex align-items-center justify-content-center' onClick={RemoveAgentFunction}>
                                        Remove from compare
                                    </div>
                                    :
                                    <Button
                                        variant="contained"
                                        onClick={AddAgentFunction}
                                        className='w-100 flex-grow-1'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 1,
                                        }}
                                    >
                                        Add to compare
                                    </Button>
                            }

                        </div>
                    </div>
                    <Divider orientation="horizontal" className='my-1' />
                    <div className='d-flex justify-content-between'>
                        <Card className='flex-grow-1'>
                            <CardContent>
                                <div className='d-flex align-items-center'>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                    <DividerVertical />
                                    Rating from Seller / Buyer
                                </div>

                                <DividerHorizontal />
                                <Typography variant="body2" gutterBottom>
                                    {reviews[0].description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <Divider orientation="horizontal" className='my-1' />
                    <div className='d-flex'>
                        <div className=''>

                            <Typography variant="body2" gutterBottom>
                                AGENT VIDEO
                            </Typography>
                            <Card
                                onClick={() => {
                                    setSelectedIndexShowModal(index);
                                    setOpen(true)
                                }}
                            >

                                <CardContent>
                                    <div
                                        component="img"
                                        style={{
                                            height: '67px',
                                            display: 'block',
                                            maxWidth: '116px',
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}

                                    >
                                        <img
                                            src={videoThumbnail}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <Divider orientation="vertical" className='mx-1' />
                        <div className='flex-grow-1'
                            style={{
                                overflowX: 'auto'
                            }}
                        >
                            <Typography variant="body2" gutterBottom>
                                RECENTLY SOLD
                            </Typography>
                            <Card >
                                <CardContent>
                                    <div className='d-flex'
                                        style={{
                                            overflowX: 'auto',
                                        }}
                                    >
                                        {
                                            properties.map((itemProperties) => {
                                                return (
                                                    <>
                                                        <div style={{
                                                            flex: 'none',
                                                        }}>
                                                            <div
                                                                component="img"
                                                                style={{
                                                                    height: '67px',
                                                                    display: 'block',
                                                                    maxWidth: '116px',
                                                                    overflow: 'hidden',
                                                                    width: '100%',
                                                                }}

                                                            >
                                                                <img
                                                                    src={itemProperties.imagePath}
                                                                    alt={itemProperties.name}
                                                                />
                                                            </div>
                                                        </div>
                                                        <DividerVertical />

                                                    </>


                                                )
                                            })
                                        }

                                    </div>


                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </Box >

        </div>
    )


}
export default ItemCardAgent;