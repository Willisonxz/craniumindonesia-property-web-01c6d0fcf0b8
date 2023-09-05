import React from 'react'
import agency from "../assets/Agency Logo.png"
import propertyImage from "../assets/Property Image.png"
import property2 from "../assets/Property Image1.png"
import property3 from "../assets/Property Image2.png"
import landsize from "../assets/Landsize Logo.png"
import bath from "../assets/Bathroom Logo.png"
import car from "../assets/Car spaces Logo.png"
import bed from "../assets/Bedroom Logo.png"
import matt from "../assets/Agent Matt.png"
import { useNavigate } from 'react-router-dom';


export default function PropertyShowCase() {
    const navigate = useNavigate()
  return (
    <div className='col-sm-12'>
        <p className='c-3d w-700 s-12' style={{marginBottom:"5px"}}>PROPERTY SHOWCASE</p>
        <div className='col-sm-12 card-showCase'>
            <div className='col-sm-12 sc-header align-items-center d-flex justify-content-center'>
                <img src={agency} alt='' />
            </div>
            <div className='col-sm-12 show-case-bl'>
                <div className='col-sm-12 grid-sc'>
                    <img src={propertyImage} alt='' className='col-sm-12' style={{borderBottom:"1px solid #FFF"}} />
                    <div className='col-sm-12 p-20 sizing-box '>
                        <p className='s-18 w-700 c-ff' >RENOVATION DELIGHT!</p>
                        <p className='s-18 w-400 c-ff '>Open Sat 3 Jun</p>
                    </div>
                </div>
                <div className='col-sm-12 d-flex justify-content-between col-xs-12'>
                    <img src={property2} alt='' className='col-sm-6 ' style={{borderRight:".5px solid #FFF"}}/>
                    <img src={property3} alt='' className='col-sm-6' style={{borderLeft:".5px solid #FFF"}}/>
                </div>
            </div>
            <div className='col-sm-12 footer-sc'>
                <p className='c-3d s-15 w-400 col-sm-12'>5 Scott Lane, Basin Pocket</p>
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
                        <p className='m-0 c-3d s-16 w-400'>&nbsp;2.35ha</p>
                    </div>
                </div>
                <button className='w-700 s-14 c-3d'>View Property</button>
            </div>
            <div className='col-sm-12 d-flex justify-content-end' >
                <p className='c-ff s-14 w-700 '>Matt Drayton</p>
                <img src={matt} alt='' className='profile-agent-sc' />
            </div>
            <div>
                <button className='w-700 s-14 c-3d' onClick={() => {navigate("/rent/:id/apply")}}>View Property</button>
            </div>
        </div>
    </div>
  )
}
