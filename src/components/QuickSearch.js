import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function QuickSearch() {

  const [value, setValue] = React.useState(0);
  const [tabHeading, setTabHeading] = React.useState('Cranium in Indonesia');
  const [tabLinks, setTabLinks] = React.useState([
    'Cranium Jakarta',
    'Cranium Kalimantan Timur',
    'Cranium Gorontalo',
    'Cranium Jawa Barat',
    'Cranium Kalimantan Selatan',
    'Cranium NTB',
    'Cranium Jawa Tengah',
    'Cranium Bali',
    'Cranium NTT',
    'Cranium Jawa Timur',
    'Cranium Riau',
    'Cranium Jambi',
    'Cranium Kalimantan Barat',
    'Cranium Bengkulu',
    'Cranium Sulawesi',
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setTabHeading('Cranium in Indonesia');
        setTabLinks([
          'Cranium Jakarta',
          'Cranium Kalimantan Timur',
          'Cranium Gorontalo',
          'Cranium Jawa Barat',
          'Cranium Kalimantan Selatan',
          'Cranium NTB',
          'Cranium Jawa Tengah',
          'Cranium Bali',
          'Cranium NTT',
          'Cranium Jawa Timur',
          'Cranium Riau',
          'Cranium Jambi',
          'Cranium Kalimantan Barat',
          'Cranium Bengkulu',
          'Cranium Sulawesi',
        ]);
        break;
      case 1:
        setTabHeading('Build new homes in Australia');
        setTabLinks([
          'Home builders',
          'Home designs',
          'New apartments',
          'House and land',
          'Land estates',
          'Home builders Melbourne',
          'Home builders Perth',
          'Home builders Sydney',
          'Home builders Brisbane',
          'Home builders Adelaide',
          'House and Land packages Melbourne',
          'House and Land packages Perth',
          'House and Land packages Sydney',
          'House and Land packages Brisbane',
          'House and Land packages Adelaide',
          'House and Land packages Canberra',
        ]);
        break;
        case 2:
          setTabHeading('Browse popular areas in Australia');
          setTabLinks([
            'Sydney house prices',
            'Perth house prices',
            'Melbourne house prices',
            'Brisbane house prices',
            'Adelaide house prices',
            'Hobart house prices',
            'Canberra house prices',
            'Suburb profiles',
          ]);
          break;
          case 3:
            setTabHeading('Browse popular property searches');
            setTabLinks([
              'Property news',
              'Commercial property news',
              'Stamp duty calculator',
              'Mortgage calculator',
              'Capital gains tax Australia',
              'Renovation',
              'Selling property',
              'Negative gearing',
              'How much can i borrow',
              'Property guides',
              'How much is my house worth',
              'The block',
              'Rent to buy',
              'How much does it cost to build a house',
              'Australia housing market',
              'Auction results',
            ]);
            break;
      default:
        break;
    }
  };

  const qsHeadings = () => {
    return <h2>{tabHeading}</h2>;
  };

  const qsLinks = () => {
    return tabLinks.map((item, index) => (
      <a key={index}>{item}</a>
    ));
  };

  return (
    <div className='quickSearch-container trans'>
      <div className='qs-inline'></div>
        <div className='qsBar-tab trans'>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Cranium" {...a11yProps(0)} />
            <Tab label="New homes" {...a11yProps(1)} />
            <Tab label="Popular areas"  {...a11yProps(2)} />
            <Tab label="Popular searches"  {...a11yProps(3)} />
          </Tabs>
        </div>
        <div className='qs-footer'>
            {qsHeadings()}
            <div className='qsFooter-content'>
              {qsLinks()}
            </div>
        </div>
    </div>
  )
}