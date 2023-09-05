import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Card, CardContent, Rating } from '@mui/material';
import DividerHorizontal from '../../../components/DividerHorizontal';
import DividerVertical from '../../../components/DividerVertical';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const ItemCardReview = () => {
    return (
        <>
            <Card className='my-2'>
                <CardContent className='bg-light'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-center align-items-center'><Rating name="read-only" value={5} readOnly /> <DividerVertical /> <div>5.0</div></div>
                        <div>Verified review</div>
                    </div>
                    <DividerHorizontal />
                    <div>
                        <span className='fw-bold'>Seller of House</span><span>in Maryborough, Qld</span>
                        <div className=''></div>
                        <DividerHorizontal />
                        <div className='my-2'>Steve listened and was mindful of our wants - he had to work to a tight sell timeframe and he delivered- always called back always showed up so couldn’t be happier</div>
                        <DividerHorizontal />
                        <div className='d-flex align-items-center' >
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 35, height: 35 }}
                            />
                            <DividerVertical />
                            <div className='text-center'>ssr</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default function ItemRatingAndReview() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Card>
                <CardContent>
                    <div className="h5">Rhys' reviews</div>
                    <div> Read the latest client reviews of Rhys Digance, real estate agent at Belle Property - GLENELG.</div>
                    <div> Clients say Rhys is...</div>
                    <div className='d-flex flex-wrap my-2' style={{gap : 10}}>
                        <button className='btn bg-light' disabled={true}>Professional (98)</button>
                        <button className='btn bg-light' disabled={true}>Genuine (97)</button>
                        <button className='btn bg-light' disabled={true}>Great communicator (78)</button>
                        <button className='btn bg-light' disabled={true}>Great communicator (78)</button>
                        <button className='btn bg-light' disabled={true}>Great communicator (78)</button>
                        <button className='btn bg-light' disabled={true}>Great communicator (78)</button>
                        <button className='btn bg-light' disabled={true}>Great communicator (78)</button>
                    </div>
                    <Box sx={{ width: '100%' }}>
                        <ItemCardReview />
                        <ItemCardReview />
                        <ItemCardReview />
                        <ItemCardReview />
                        <ItemCardReview />
                    </Box>
                </CardContent>
            </Card>
        </>

    );
}
