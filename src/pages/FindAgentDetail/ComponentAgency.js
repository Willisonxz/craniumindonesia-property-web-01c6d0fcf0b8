import * as React from 'react';
// material UI
import CloseIcon from '@mui/icons-material/Close';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, useMediaQuery } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// components
import DividerHorizontal from '../../components/DividerHorizontal';
import DividerVertical from '../../components/DividerVertical';
import FooterFindAgentDetail from './components/FooterFindAgentDetail';
import ItemCardAgency from './components/ItemCardAgency';


// dummy data
import AutoCompleteCustom from '../../components/AutoCompleteCustom';
import HeaderComponentNotSettle from '../../components/HeaderComponentNotSettle';
import { DATA_AGENCIES, PROPERTY_SALES_TYPE } from './dummy_data';



const Item = styled('div')(({ theme }) => ({
    borderRadius: '4px',
    width: '100%',
}));


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ComponentAgency = ({ ...props }) => {
    const { selectedIndexShowModal, setSelectedIndexShowModal, open, setOpen, option, setOption, } = props;
    // 
    const [value, setValue] = React.useState(null); // search auto complete
    const [age, setAge] = React.useState(''); // select material UI
    const [modal, setModal] = React.useState(false);
    // 
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const matches = useMediaQuery("(max-width:770px)");
    return (
        <>
            <HeaderComponentNotSettle />
            {
                matches === true && modal === true ?
                    <Modal
                        open={modal}
                        onClose={() => setModal(false)}
                        className='d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none'
                        keepMounted
                    >
                        <>
                            <div className='h-100 w-100 bg-white py-2 '>
                                <div className='d-flex flex-column justify-content-between h-100'>
                                    <div className='w-100'>
                                        <Box className='px-4 h4 py-3' sx={{
                                            borderBottom: 1,
                                            borderColor: 'divider',
                                        }}>
                                            <div className='d-flex justify-content-between'>
                                                <div> Filter Search</div>
                                                <div className='pointer' onClick={() => setModal(false)}><CloseIcon /></div>
                                            </div>
                                        </Box>
                                        <div className='px-4'>
                                            <div className=''>
                                                <AutoCompleteCustom />

                                            </div>
                                        </div>
                                        <DividerHorizontal />
                                        <div className='px-4'>
                                            <div className='h5'>Property sales type</div>
                                            <div className='d-flex align-items-center my-2' style={{ overflowX: 'auto' }}>
                                                {
                                                    PROPERTY_SALES_TYPE.map((item) => {
                                                        return (
                                                            <>
                                                                <div className='d-flex justify-content-center align-items-center px-2 my-2'
                                                                    style={{
                                                                        height: '40px',
                                                                        borderRadius: '5px',
                                                                        border: '1px solid rgb(210, 213, 218)',
                                                                        flex: 'none'
                                                                    }}
                                                                >
                                                                    {item.label}
                                                                </div>
                                                                <DividerVertical />
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <DividerHorizontal />
                                        <div className='px-4'>
                                            <div className='h5'>Timeframe</div>
                                            <div className=''>
                                                <AutoCompleteCustom />

                                            </div>
                                        </div>
                                        <DividerHorizontal />

                                        <div className='px-4'>
                                            <div className='h5'>Sort by</div>
                                            <div className=''>
                                                <AutoCompleteCustom />

                                            </div>
                                        </div>
                                        <DividerHorizontal />
                                        <div className='px-4 w-100'>
                                            <div className='btn btn-light border-dark w-100'>Reset filters</div>
                                        </div>
                                    </div>
                                    <div className='w-100 px-3'>
                                        <div className='btn btn-danger text-white w-100'>Apply Filters</div>
                                    </div>
                                </div>


                            </div>
                        </>
                    </Modal >
                    :
                    <></>

            }
            {/* options for dekstop */}
            <div className='sticky d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block bg-white'>
                <div className='bg-white'  >
                    <div className='box-content-find-agents' >
                        <div className='d-flex justify-content-center align-items-center my-2 flex-wrap'>
                            <div className='d-flex justify-content-center align-items-center my-2'
                                style={{
                                    height: '50px',
                                    borderRadius: '40px',
                                    border: '0.2px solid rgb(210, 213, 218)',
                                }}
                            >
                                <div className='d-flex justify-content-center align-items-center flex-grow-1 btn'
                                    onClick={() => setOption('Agent')}
                                    style={{
                                        height: '50px',
                                        padding: '0px 40px',
                                        backgroundColor: option === 'Agent' ? 'lightblue' : 'transparent',
                                        borderRadius: '20px',
                                        color: option === 'Agent' ? 'white' : 'black',
                                    }}

                                >Agents</div>
                                <div className='d-flex justify-content-center align-items-center btn'
                                    onClick={() => setOption('Agency')}
                                    style={{
                                        height: '50px',
                                        padding: '0px 40px',
                                        backgroundColor: option === 'Agency' ? 'lightblue' : 'transparent',
                                        borderRadius: '20px',
                                        color: option === 'Agency' ? 'white' : 'black',
                                    }}

                                >Agencies</div>
                            </div>
                            <DividerVertical />
                            <div className='flex-grow-1 my-2'>
                                <Item>
                                    <AutoCompleteCustom />
                                </Item>
                            </div>
                            <DividerVertical />
                            <div className='d-flex justify-content-center align-items-center my-2'>
                                <Item>
                                    <FormControl
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row'
                                        }}

                                    >
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                                border: '1px solid black'
                                            }}
                                            placeholder='none'
                                        >
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
                                </Item>
                            </div>
                        </div>
                        <DividerHorizontal />
                        <Checkbox {...label} defaultChecked /> <span className='text-muted'>Offices located in this area</span>
                    </div>
                </div>
            </div>
            {/* options for mobile */}
            <div className='sticky d-none d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none bg-white'>
                <div className='bg-white'  >
                    <div className='box-content-find-agents' >
                        <div className='d-flex justify-content-between align-items-center my-2 flex-wrap'>
                            <div className='flex-grow-1 d-flex justify-content-center align-items-center my-2'
                                style={{
                                    height: '50px',
                                    borderRadius: '40px',
                                    border: '0.2px solid rgb(210, 213, 218)',
                                }}
                            >
                                <div className='d-flex justify-content-center align-items-center flex-grow-1 btn'
                                    onClick={() => setOption('Agent')}
                                    style={{
                                        height: '50px',
                                        padding: '0px 40px',
                                        backgroundColor: option === 'Agent' ? 'lightblue' : 'transparent',
                                        borderRadius: '20px',
                                        color: option === 'Agent' ? 'white' : 'black',
                                    }}

                                >Agents</div>
                                <div className='d-flex justify-content-center align-items-center btn'
                                    onClick={() => setOption('Agency')}
                                    style={{
                                        height: '50px',
                                        padding: '0px 40px',
                                        backgroundColor: option === 'Agency' ? 'lightblue' : 'transparent',
                                        borderRadius: '20px',
                                        color: option === 'Agency' ? 'white' : 'black',
                                    }}

                                >Agencies</div>
                            </div>
                            <DividerVertical />
                            <div className='h-100'>
                                <div className='btn border-dark h-100' onClick={() => setModal(true)}><TuneIcon /> Filters</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Box
                className='py-2'
                sx={{
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                    marginTop: '85px'
                    // width: '100%'
                }}>
                <div className='box-content-find-agents'>
                    <h3>Real estate agents in Melbourne, VIC</h3>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <div className=''>Showing <span className='fw-bold'>1 - 12 of 184</span> results</div>
                        <div className=''>
                            <span className='fw-bold'>Sorted by:</span>  Number of properties sold in the last 12 months</div>
                    </div>
                    {
                        DATA_AGENCIES.map((itemAgency) => {
                            return <ItemCardAgency />
                        })
                    }
                    <div className='d-flex justify-content-center align-items-center my-2'>
                        <Stack spacing={2}>
                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </Stack>
                    </div>
                </div>
            </Box>
            <FooterFindAgentDetail />

        </>
    )
}
export default ComponentAgency;
