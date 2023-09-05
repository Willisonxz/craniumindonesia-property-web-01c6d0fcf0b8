import * as React from 'react';
// material UI
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import StarIcon from '@mui/icons-material/Star';
import TuneIcon from '@mui/icons-material/Tune';
import { Avatar, Box, Button, Card, CardContent, useMediaQuery } from '@mui/material';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// components
import DividerHorizontal from '../../components/DividerHorizontal';
import DividerVertical from '../../components/DividerVertical';
import FooterFindAgentDetail from './components/FooterFindAgentDetail';
import ItemCardAgent from './components/ItemCardAgent';


// dummy data
import { useDispatch, useSelector } from 'react-redux';
import AutoCompleteCustom from '../../components/AutoCompleteCustom';
import HeaderComponentSettle from '../../components/HeaderComponentSettle';
import { DATA_AGENTS, PROPERTY_SALES_TYPE } from './dummy_data';
import { AddAgent, RemoveAgent } from '../../store/pages/find_agent_detail';



const Item = styled('div')(({ theme }) => ({
    // borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    borderRadius: '4px',
    width: '100%',
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
};

const ItemComparedAgent = ({ ...props }) => {
    const {
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
    const { RemoveAgentFunction } = props;
    return (
        <>
            < div className='d-flex align-items-center h-100' style={{ flex: 'none', width: '350px' }}>
                <Card className='m-0 p-0'>
                    <CardContent className='m-0 p-1 d-flex align-items-center h-100'>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 80, height: 80 }}
                        />
                        <div>
                            <div className='' style={{ paddingLeft: '20px' }}>
                                <div className='h4 ' >{name}</div>
                                <div className='body2 ' >Haris Real Estate - Kent... </div>
                                <div className='fs-5 text-muted  d-flex align-items-center align-content-stretch' >
                                    <StarIcon sx={{ color: '#faaf00' }} />
                                    <DividerVertical />
                                    <div className='fs-5 ' >{5} ({4} reviews)</div>
                                </div>
                            </div>
                            <DividerHorizontal />
                            <div className='body2 '>40 reviews in last 12 Months</div>
                        </div>
                        <DividerVertical />
                        <div className='h-100 d-flex align-items-start'>
                            <div className='btn bg-dark' onClick={RemoveAgentFunction}>
                                <HighlightOffIcon className=' pointer text-white' />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}


const ComponentAgent = ({ ...props }) => {
    const { selectedIndexShowModal, setSelectedIndexShowModal, open, setOpen, option, setOption, } = props;

    const [value, setValue] = React.useState(null); // search auto complete
    const [modal, setModal] = React.useState(false);

    const matches = useMediaQuery("(max-width:770px)");

    // global state
    const agentsDataCompared = useSelector((state) => state.findAgentDetail.selectedAgentCompared)
    const dispatchGlobal = useDispatch();

    const AddAgentFunction = (item) => {
        dispatchGlobal(AddAgent(item))
    }
    const RemoveAgentFunction = (item) => {
        dispatchGlobal(RemoveAgent(item))
    }




    const reactScrollComponent = React.useRef(null)
    const handleNext = () => reactScrollComponent.current.scrollLeft = reactScrollComponent.current.scrollLeft + 320;
    const handleBack = () => reactScrollComponent.current.scrollLeft = reactScrollComponent.current.scrollLeft - 330;


    return (
        <>
            {/* Header components */}
            <HeaderComponentSettle />
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
            {/* Header components */}
            {/* DATA OPTIONS LIST AGENT */}
            {
                DATA_AGENTS.map((itemAgent, index) => {
                    if (selectedIndexShowModal === index) {
                        return (
                            <>
                                <Modal
                                    open={open}
                                    onClose={() => setOpen(false)}
                                >
                                    <Box sx={style}>
                                        <iframe width="560" height="315" src={itemAgent.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </Box>
                                </Modal>
                            </>
                        )
                    }

                })
            }
            {/* DATA OPTIONS LIST AGENT */}
            {/* options for dekstop */}
            < div className='d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block' style={{ backgroundColor: 'white' }}>
                <div className='box-content-find-agents'>
                    <h3>Real estate agents in Melbourne, VIC</h3>
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
                        <div className='flex-grow-1 d-flex justify-content-center align-items-center my-2'>
                            <Item>
                                <AutoCompleteCustom />

                            </Item>
                        </div>
                        <DividerVertical />
                        <div className='flex-grow-1 d-flex justify-content-center align-items-center my-2'>
                            <Item>
                                <AutoCompleteCustom />
                            </Item>
                        </div>
                    </div>
                    <DividerHorizontal />
                    <h5>Property sales type</h5>
                    <div className='d-flex align-items-center my-2 flex-wrap'>
                        {
                            PROPERTY_SALES_TYPE.map((item) => {
                                return (
                                    <>
                                        <div className='d-flex justify-content-center align-items-center px-2 my-2'
                                            style={{
                                                height: '40px',
                                                borderRadius: '5px',
                                                border: '1px solid rgb(210, 213, 218)'
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
                    <DividerHorizontal />
                </div>
            </div >
            {/* options for mobile */}
            <div className='sticky d-none d-xs-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none' style={{ backgroundColor: 'white' }}>
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
            {/* DATA LIST AGENT */}
            <Box className='py-2' sx={{ backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100') }}>
                <div className='box-content-find-agents'>
                    <div className="">
                        {
                            DATA_AGENTS.map((item, index) => {
                                return (
                                    <ItemCardAgent item={item} index={index} setSelectedIndexShowModal={setSelectedIndexShowModal} setOpen={setOpen} AddAgentFunction={() => AddAgentFunction(item)} RemoveAgentFunction={() => RemoveAgentFunction(item)} />
                                )
                            })
                        }
                    </div>
                    <div className='d-flex justify-content-center align-items-center my-2'>
                        <Button
                            onClick={null}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 1,
                                width: '100%'
                            }}
                        >
                            Page 1 of 18
                        </Button>
                    </div>
                </div>
            </Box>
            {/* DATA LIST AGENT */}
            {
                agentsDataCompared?.length > 0 ?
                    <div className='fixed-bottom'>
                        <div className='bg-dark w-100' style={{ height: 150 }}>
                            <div className='box-content-find-agents h-100'>
                                <div className='d-flex justify-content-between align-items-center h-100'>
                                    <div className='d-flex align-items-center w-100'
                                        style={{
                                            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                                            maxWidth: '100%',
                                            height: '270px',
                                            position: 'relative',
                                        }}>
                                        <div ref={reactScrollComponent} className='flex-grow-1 d-flex align-items-center h-100 py-3' style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                                            {
                                                agentsDataCompared?.map((itemDataAgent) => {
                                                    return (
                                                        <>
                                                            <ItemComparedAgent item={itemDataAgent} RemoveAgentFunction={() => RemoveAgentFunction(itemDataAgent)} />
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        {
                                            agentsDataCompared?.length > 3 ?
                                                <>
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            right: '0px',
                                                            top: '0px',
                                                            height: '270px',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'

                                                        }}
                                                    >

                                                        <Button
                                                            size="small"
                                                            onClick={handleNext}
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                                                                borderRadius: 1,
                                                                height: '50px',
                                                                width: '50px',
                                                            }}
                                                        >
                                                            <KeyboardArrowRight />
                                                        </Button>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            left: '0px',
                                                            height: '270px',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'

                                                        }}
                                                    >
                                                        <Button
                                                            size="small"
                                                            onClick={handleBack}
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                                                                borderRadius: 1,
                                                                height: '50px',
                                                                width: '50px',
                                                            }}
                                                        >
                                                            <KeyboardArrowLeft />
                                                        </Button>
                                                    </div>
                                                </>
                                                :
                                                <></>
                                        }


                                    </div>
                                    <DividerVertical />
                                    <div className='px-2'>
                                        <div className='btn btn-info text-white' style={{ width: 120 }}>Compare ({agentsDataCompared?.length})</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }
            <FooterFindAgentDetail />
            <div style={{ height: '150px' }}></div>

        </>

    )

}

export default ComponentAgent;

