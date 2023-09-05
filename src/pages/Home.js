import React, { useState } from 'react'
import Grid from "@mui/material/Grid"
import homepage_bg from "../assets/homepage_bg.png"
// import './Home.css'
import NavbarHomepage from '../components/NavbarHomepage'
import TabExplore from '../components/TabExplore'
import SearchBar from '../components/SearchBar'
import FiltersModal from '../components/FiltersModal'
import TabNews from '../components/TabNews'
import Footer from "../components/Footer"
import QuickSearch from '../components/QuickSearch'
import "../styles/home.css"


export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

 
  return (
    <div>
        <NavbarHomepage/>
        <div className='box-header' style={{backgroundImage:`url(${homepage_bg})`}}>
          <div className='text-banner'>
              <Grid className='box-content' container display={"flex"} direction="column">
                <h1 className='c-ff '>Find Real Estate <br/> and Get Your Dream Space</h1>
                <p className='c-72'>Find a variety of properties that suit you very easily<br/>
                forget all difficulties in finding a residence for you</p>
              </Grid>
          </div>
        </div>

        <div className='box-search col-sm-10'>
          <SearchBar setOpenModal={setModalOpen} />
        </div>
        {modalOpen && <FiltersModal setOpenModal={setModalOpen}  visible={modalOpen} />}
        
        <div className='explore-section'>
          <TabExplore />
        </div>
        
        <div className='news-section'>
          <TabNews  />
        </div>

        <div className='quickSearch-section'>
          <QuickSearch />
        </div>

        <div className='footer-section'>
          <Footer />
        </div>
    </div>
  )
}