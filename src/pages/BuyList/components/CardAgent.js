import React from 'react'
import Pagination from '@mui/material/Pagination';
import landsize from "../assets/Landsize Logo.png"
import bath from "../assets/Bathroom Logo.png"
import car from "../assets/Car spaces Logo.png"
import bed from "../assets/Bedroom Logo.png"
import starLogo2 from "../assets/Star Logo.png"
import propertyImage from "../assets/Property Image.png"
import property2 from "../assets/Property Image1.png"
import property3 from "../assets/Property Image2.png"
import logoAgent from "../assets/Ray White Logo.png"
import agent from "../assets/Agent.svg"
import agent2 from "../assets/Agent2.png"
import agent3 from "../assets/Agent3.png"
import prevIcon from "../assets/Arrow Back Logo.png"
import nextIcon from "../assets/Arrow Next Logo.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CardAgent(props) {
    const list_agent = [agent, agent2, agent3]
    const list_property = [propertyImage,property2,property3]
    const settings = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<img src={prevIcon} alt=''/>,
        nextArrow:<img src={nextIcon} alt=''/>,
    }
  return (
    <>
    {list_agent.map((item,i)=>(
    <div className='col-sm-12 card-buylist'>
        <div className='header-card col-sm-12 d-flex flex-column '>
            <div className='d-flex col-sm-12 h-100 align-items-center justify-content-between'>
                <img src={logoAgent} className='logo-agent' alt='' />
                <p className='c-3d w-700 s-14 m-0'>Joey Malunich</p>
            </div>
            <img src={item} alt='' className='profile-agent' />
        </div>
        <div className='col-sm-12'>
        <Slider {...settings}>
            {list_property.map((item,i)=>(
            <img key={i} src={item} alt='' className='col-sm-12 img-slide' />
            ))}
            </Slider>
        </div>
        
        <div  className='desc-card-buylist shadow col-sm-12'>
            <div className='col-sm-12 d-flex align-items-center justify-content-between'>
                <p className='m-0 s-20 w-700 c-00'>$2,350,000</p>
                <img src={starLogo2} alt='' className='fav-bl pointer'/>
            </div>
            <p className='c-72 s-16 w-400 mt-7'>Amaroo Farm,  75 Caledonia Drive, Relbia</p>
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
                <div className=' c-bc s-16 w-400 mr-12' style={{marginBottom:"0px",color:"#BCBCBC"}}>|</div>
                <p className='m-0 c-00 s-16 w-400'>&nbsp;House</p>
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
    </>
  )
}
