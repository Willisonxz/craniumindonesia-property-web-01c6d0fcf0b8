import React,{useState} from 'react'
import Select from 'react-select'
import CardListInspection from './CardListInspection';
import IconButton from '@mui/material/IconButton';
import starLogo from "../../../assets/homepage/starLogo.png"
import locationImg from "../assets/Location Logo Black.png"
import PropertyShowCase from './PropertyShowCase';
import listBlack from "../assets/List Logo black.png"
import listBlue from "../assets/List Logo Blue.png"
import inspectionBlack from "../assets/Calendar Logo Black.png"
import inspectionBlue from "../assets/Calendar Logo blue.png"
import sortIcon from "../assets/sorting-order.png"
import { useNavigate, useLocation } from 'react-router-dom';

export default function TabInspections() {
    const navigate = useNavigate()
    const location = useLocation()
    const setStatus=(e)=>{
      navigate(`/list/${e}`)
      setStatus(e)
    }

    const options = [
        { value: '1', label: 'Date (Newest - Oldest)' },
        { value: '2', label: 'Date (Oldest - Newest)' },
        { value: '3', label: 'Price (Lowest - Highest)' },
        { value: '4', label: 'Price (Highest - Lowest)' },
        { value: '5', label: 'Next inspection' },
        { value: '6', label: 'Next auction' },
        
      ]

const path = location.pathname.toLowerCase()
  return (
    <>
    <div className='container-buylist'>
            <div className='d-flex justify-content-sm-between flex-lg-row flex-xs-column flex-sm-column col-sm-12'>
                <div className='d-flex flex-column left-box-bl'>
                    <div className='d-flex justify-content-between'>
                        <p className='c-3d s-18 w-700 m-auto0'>Real Estate & Property for sale in Australia</p>
                        <IconButton type="button" sx={{ p: '10px' }} className='bt-save' aria-label="search" onClick={(e)=>navigate("/buy/save-search")}>
                            <img src={starLogo} alt='' style={{marginRight:"5px"}}/>
                            <p className='w-700 s-16 c-3d ' style={{margin:"2px auto 0px"}}>Save search</p>
                        </IconButton>
                    </div>
                    <p className='col-sm-12 c-3d s-14 result mt-14'>1-3 of 120 results</p>
                    <p className='line-bc col-sm-12'/>
                    <div className='d-flex justify-content-between col-sm-12'>
                        <div className='d-flex '>
                            <div className='d-flex list-bl' onClick={(e)=>navigate("/buy/list")}>
                                <IconButton type="button" sx={{ p: '10px' }} className={`${path==="/buy/list"?"selected":""}`}  aria-label="search">
                                    <img src={path==="/buy/list"?listBlue:listBlack} alt='' style={{marginRight:"5px"}} className='list-20' />
                                    <p className='w-700 s-16 c-3d trans' style={{margin:"2px auto 0px"}}>List</p>
                                </IconButton>
                            </div>
                            <div className='d-flex list-bl' onClick={(e)=>navigate("/buy/map")}>
                                <IconButton type="button" sx={{ p: '10px' }} className={`${path==="/buy/map"?"selected":""}`} aria-label="search">
                                    <img src={locationImg} alt='' style={{marginRight:"5px"}} className='list-16'/>
                                    <p className='w-700 s-16 c-3d trans' style={{margin:"2px auto 0px"}}>Map</p>
                                </IconButton>
                            </div>
                            <div className='d-flex list-bl' onClick={(e)=>navigate("/buy/inspections")}>
                                <IconButton type="button" sx={{ p: '10px' }} className={`${path==="/buy/inspections"?"selected":""}`} aria-label="search">
                                    <img src={path==="/buy/inspections"?inspectionBlue:inspectionBlack} alt='' style={{marginRight:"5px"}} className='list-16'/>
                                    <p className='w-700 s-16 c-3d trans' style={{margin:"2px auto 0px"}}>Inspections</p>
                                </IconButton>
                            </div>
                        </div>
                        <div className='d-flex' style={{alignSelf:"end"}}>
                            <img src={sortIcon} alt='' className='bl-sort-icon d-md-none pointer' />
                            <p className='s-14 c-3d w-700 m-auto0 mr-8'>Sort</p>
                            <Select options={options} className='slc d-sm-none d-md-block' placeholder="Featured"  />
                        </div>
                    </div>
                    <p className='line-bc col-sm-12 mt-17 mb-28'/>
                    {/* <CardAgent /> */}
                    <CardListInspection />
                </div>
                <div className='d-flex flex-column right-box-bl'>
                    <PropertyShowCase />
                </div>
            </div>
            
        </div>
    </>
  )
}

