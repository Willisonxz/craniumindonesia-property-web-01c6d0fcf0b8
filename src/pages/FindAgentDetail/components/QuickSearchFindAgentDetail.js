import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DividerHorizontal from '../../../components/DividerHorizontal';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function QuickSearchFindAgentDetail() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
    }} >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0px',
          margin: '0px',
          width: '100%',

        }}
      >
        <Tabs
          sx={{
            padding: '0px !important',
            margin: '0px !important',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
          variant="scrollable"
          className='w-100 p-0 m-0'
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              padding: '0px',
              margin: '0px',
              borderBottom: 1,
              borderColor: 'divider',
            }}
            className='flex-grow-1' label="Item One" {...a11yProps(0)} />
          <Tab
            sx={{
              padding: '0px',
              margin: '0px',
              borderBottom: 1,
              borderColor: 'divider',
            }}
            className='flex-grow-1' label="Item Two" {...a11yProps(1)} />
          <Tab
            sx={{
              padding: '0px',
              margin: '0px',
              borderBottom: 1,
              borderColor: 'divider',
            }}
            className='flex-grow-1' label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}
        sx={{
          padding: '0px',
          margin: '0px'
        }}
      >
        <div className='my-3'>Browse agents in Australia</div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
            <div className='my-2 footer-find-agent-font'>How to choose a real estate agent</div>
            <div className='my-2 footer-find-agent-font'>Rental ledger</div>
            <div className='my-2 footer-find-agent-font'>Property management fees</div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
            <div className='my-2 footer-find-agent-font'>Australian housing market trends</div>
            <div className='my-2 footer-find-agent-font'>How to avoid capital gains (CGT)</div>
            <div className='my-2 footer-find-agent-font'>How to sell and buy a house at the same time</div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
            <div className='my-2 footer-find-agent-font'>How much does it cost to sell a house</div>
            <div className='my-2 footer-find-agent-font'>What makes a good real estate agent</div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='my-3'>Browse agents in Australia</div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
            <div className='my-2 footer-find-agent-font'>How to choose a real estate agent</div>
            <div className='my-2 footer-find-agent-font'>Rental ledger</div>
            <div className='my-2 footer-find-agent-font'>Property management fees</div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
            <div className='my-2 footer-find-agent-font'>Australian housing market trends</div>
            <div className='my-2 footer-find-agent-font'>How to avoid capital gains (CGT)</div>
            <div className='my-2 footer-find-agent-font'>How to sell and buy a house at the same time</div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
            <div className='my-2 footer-find-agent-font'>How much does it cost to sell a house</div>
            <div className='my-2 footer-find-agent-font'>What makes a good real estate agent</div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='my-3'>Browse agents in Australia</div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
            <div className='my-2 footer-find-agent-font'>How to choose a real estate agent</div>
            <div className='my-2 footer-find-agent-font'>Rental ledger</div>
            <div className='my-2 footer-find-agent-font'>Property management fees</div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
            <div className='my-2 footer-find-agent-font'>Australian housing market trends</div>
            <div className='my-2 footer-find-agent-font'>How to avoid capital gains (CGT)</div>
            <div className='my-2 footer-find-agent-font'>How to sell and buy a house at the same time</div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0 m-0'>
            <div className='my-2 footer-find-agent-font'>How much does it cost to sell a house</div>
            <div className='my-2 footer-find-agent-font'>What makes a good real estate agent</div>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}