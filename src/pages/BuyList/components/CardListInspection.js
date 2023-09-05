import React from 'react'
import agencyLogo from "../assets/agencyIns.png"
import calendarLogo from "../assets/Calendar Add Logo.png"
import propertyImage from "../assets/Property Image.png"
import property2 from "../assets/Property Image1.png"
import property3 from "../assets/Property Image2.png"
import Pagination from '@mui/material/Pagination';
import landsize from "../assets/Landsize Logo.png"
import bath from "../assets/Bathroom Logo.png"
import car from "../assets/Car spaces Logo.png"
import bed from "../assets/Bedroom Logo.png"
import starLogo2 from "../assets/Star Logo.png"
import prevIcon from "../assets/Arrow Back Logo.png"
import nextIcon from "../assets/Arrow Next Logo.png"

export default function CardListInspection() {
    const time_list = ["Today","Thu 1","Fri 2","Sat 3","Sun 4","Mon 5","Tue 6"]
    const list_property = [propertyImage, property2, property3]
  return (
    <>
    <div className='col-sm-12 inspection'>
        <p className='col-sm-12 c-3d s-18 w-700'>Inspections this week</p>
        <div className='col-sm-12 d-flex justify-content-sm-between shadow bg-ff time-list'>
            {time_list.map((item,i)=>(
            <p key={i} className='c-72 w-700 s-16 m-0 d-flex justify-content-center'>{item} </p>))}
        </div>
        {list_property.map((item,i)=>(
        <div key={i} className='col-sm-12'>
            <p className='col-sm-12 c-3d w-700 s-16 m-0'>12:00 am-12:30 am</p>
            <div className='col-sm-12 card-inspection shadow bg-ff'>
                <div className='col-sm-12 header-ins'>
                    <img src={agencyLogo} alt='' />
                </div>
                <div className='col-sm-12 d-flex content-ins'>
                    <img src={item} alt='' className='ins-img' />
                    <div className='right-box d-flex flex-column'>
                        <p className='w-700 c-3d s-18 m-0'>$780.000 - $820.000</p>
                        <p className='w-400 c-3d s-16' style={{marginBottom:"4px"}}>139 Valley Road, Hazelbrook</p>
                        <div className='d-flex col-sm-12'>
                            <div className='d-flex mr-12 align-items-center'>
                                <img src={bed} alt='' />
                                <p className='m-0 c-3d s-16 w-400'>&nbsp;7</p>
                            </div>
                            <div className='d-flex mr-12 align-items-center'>
                                <img src={bath} alt='' />
                                <p className='m-0 c-3d s-16 w-400'>&nbsp;3</p>
                            </div>
                            <div className='d-flex mr-12 align-items-center'>
                                <img src={car} alt='' />
                                <p className='m-0 c-3d s-16 w-400'>&nbsp;5</p>
                            </div>
                            <div className='d-flex mr-12 align-items-center'>
                                <img src={landsize} alt='' />
                                <p className='m-0 c-3d s-16 w-400'>&nbsp;1,954m</p>
                            </div>
                            <div className=' c-bc s-16 w-400 mr-12' style={{marginBottom:"0px",color:"#BCBCBC"}}>|</div>
                            <p className='m-0 c-00 s-16 w-400'>&nbsp;House</p>
                        </div>
                    </div>
                </div>
                <div className='footer-ins col-sm-12 sizing-box d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <img src={calendarLogo} alt='' className='calender-ins contain' />
                        <p className='c-3d s-16 w-700 m-0'>Add to calendar</p>
                    </div>
                    <img src={starLogo2} alt='' />
                </div>
            </div>
        </div>))}
        <div className='col-sm-12'>
        <div className='col-sm-12 pagination-bl d-flex' >
            <button className='bt-prev w-700 s-14 c-ff'>
                <img src={prevIcon} alt=''  />
                &nbsp; Previous
            </button>
            <Pagination count={10} variant="outlined" shape="rounded" siblingCount={0} boundaryCount={1} />
            <button className='bt-next w-700 s-14 c-ff'>
            Next &nbsp;
            <img src={nextIcon} alt=''  />
            </button>
        </div>
        <div className='col-sm-12' style={{marginBottom:"32px"}}>
            <p className='c-72 s-16 w-400'>Viewing 6-9 of 120 results </p>
        </div>
    </div>
    </div>
    </>
  )
}
