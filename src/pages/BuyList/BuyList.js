import React from 'react'
import NavbarBuyList from '../../components/NavbarBuyList'
import TabList from './components/TabList';
import TabInspections from './components/TabInspections';
import TabMap from './components/TabMap';
import Footer from '../../components/Footer';
import FiltersModal from './components/FiltersModal';
import { useLocation } from 'react-router-dom';
import SaveSearch from './components/SaveSearch';

export default function BuyList() {
    const location = useLocation()
    const path = location.pathname.toLowerCase()


  return (
    <div className='col-sm-12 buylist' style={{backgroundColor:"#F5F6F7"}}>
        <NavbarBuyList/>
            {path==="/buy/list" &&
            <TabList/> }
            {path==="/buy/map" &&
            <TabMap/>}
            {path==="/buy/inspections" &&
            <TabInspections />}
             {path==="/buy/save-search" &&
            <SaveSearch />}
        <div className='col-sm-12 footer-buylist'>
            <Footer/>
            <FiltersModal />
        </div>
    </div>
  )
}
