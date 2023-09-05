import React from 'react';
import Footer from '../../../components/Footer';
import Jumbotron from './components/Jumbotron';
import TabNews from '../../../components/TabNews';
import QuickSearch from '../../../components/QuickSearch';
import NavbarAfterLogin from '../components/NavbarAfterLogin';

function TrackYourProperty(props) {
  return (
    <>
      <NavbarAfterLogin />
      <Jumbotron />

      <div className='news-section'>
        <TabNews />
      </div>

      <div className='quickSearch-section'>
          <QuickSearch />
        </div>
      <Footer />
    </>
  );
}

export default TrackYourProperty;