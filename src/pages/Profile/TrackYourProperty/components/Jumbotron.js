import React from 'react';
import { useNavigate } from 'react-router-dom';
import Youtube from 'react-youtube';
// material UI
import { Autocomplete, Box, Card, CardContent, Typography, TextField } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import '../assets/track_property.css';

// data
import { top100Films } from '../dummy_data';
import ItemCard from './ItemCard';
import RoutesPage from '../../../../Routes';
import HomeImage from '../assets/Home.png';
import GraphImage from '../assets/Graph.png';
import CurrencyImage from '../assets/Currency.png';
import SoldImage from '../assets/Sold.png';
import PreviewImage from '../assets/preview-figure.png';
import SearchAddressModal from './SearchAddressModal';
import SearchProperties from './SearchProperties';

const JumbotronComponent = () => {
  const [value, setValue] = React.useState(null);
  const navigate = useNavigate();
  const filter = createFilterOptions();
  const Item = styled('div')(({ theme }) => ({
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    borderRadius: '4px',
    width: '100%',
  }));
  const ICON_MAP = {
    home: HomeImage,
    graph: GraphImage,
    currency: CurrencyImage,
    sold: SoldImage,
  }
  const ITEM_CARD = [
    {
      id: 1,
      iconName: 'home',
      title: 'How much your property\'s worth',
      description: 'A realEstimate™ can provide your estimated property value in less than a minute.',
    },
    {
      id: 2,
      iconName: 'graph',
      title: 'Latest insights and data on the property market',
      description: 'Monitor the market to make informed property decisions.',
    },
    {
      id: 3,
      iconName: 'sold',
      title: 'What homes like yours are selling for',
      description: 'Check out recently sold and currently listed properties in your area.',
    },
    {
      id: 4,
      iconName: 'currency',
      title: 'Whether your home loan\'s competitive',
      description: 'Track your loan to receive updates for better home loan rates and equity.',
    },
  ];

  const [openSearchDialog, setOpenSearchDialog] = React.useState(false);
  const handleOpenSearch = () => {
    setOpenSearchDialog(true);
  };
  const handleCloseSearch = () => {
    setOpenSearchDialog(false);
  };

  function handleSearchAddress() {
    handleOpenSearch();
  }

  return (
    <div className='box-content-find-agents mb-5'>
      <SearchAddressModal
        actionCallback={() => navigate(RoutesPage.RouteProfileTrackYourPropertyDetails)}
        formattedAddress={value && value.title || ''}
        handleClose={handleCloseSearch}
        open={openSearchDialog} />
      <Box
        sx={{
          p: 5,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          borderRadius: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} md={6} className='d-flex align-items-center'>
            <Item>
              <Box alignItems='start' className='container-find-agent w-100'>
                <Box className='mb-4'>
                  <Typography variant='h4' sx={{ fontWeight: 700 }}>Monitor your property value</Typography>
                </Box>
                <Box className='mb-4'>
                  <Typography>Ever wondered what your property's worth? Get market leading insights and data by tracking it.</Typography>
                </Box>
                <Box className='w-100'>
                  <div className='mb-1' style={{ width: '100%' }}>
                    <Autocomplete
                      value={value}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        width: '100%',
                        textAlign: 'center',
                        backgroundColor: 'white',
                        border: 'none'
                      }}
                      onChange={(event, newValue) => {
                        if (typeof newValue === 'string') {
                          setValue({
                            title: newValue,
                          });
                        } else if (newValue && newValue.inputValue) {
                          // Create a new value from the user input
                          setValue({
                            title: newValue.inputValue,
                          });
                        } else {
                          setValue(newValue);
                        }
                      }}
                      filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        const { inputValue } = params;
                        // Suggest the creation of a new value
                        const isExisting = options.some((option) => inputValue === option.title);
                        if (inputValue !== '' && !isExisting) {
                          filtered.push({
                            inputValue,
                            title: `Add "${inputValue}"`,
                          });
                        }

                        return filtered;
                      }}
                      selectOnFocus
                      clearOnBlur
                      handleHomeEndKeys
                      id="free-solo-with-text-demo"
                      options={top100Films}
                      getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === 'string') {
                          return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                          return option.inputValue;
                        }
                        // Regular option
                        return option.title;
                      }}
                      renderOption={(props, option) => <li {...props}>{option.title}</li>}
                      freeSolo
                      renderInput={(params) => (
                        <TextField {...params} placeholder="Search your address" />
                      )}
                    />
                  </div>
                  <button className='btn btn-info h-100 w-100 my-2 text-white' onClick={handleSearchAddress}>Search</button>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid xs={12} md={6} >
            <Item>
              <Youtube
                videoId={'Vnse_NKYD5k'}
                id={'property-video'}
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
                iframeClassName='preview-video'
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box className='container'>
        <Box className='my-5 row'>
          <Box className='col-12 col-md-8' pe="2rem">
            <Box maxWidth={'500px'}>
              <h3>When it comes to owning a property, knowledge is power</h3>
              <p>With market leading insights from Cranium, use your property dashboard to stay on top of:</p>
            </Box>
            <Grid container spacing={2} >
              {
                ITEM_CARD.map((itemCard) => {
                  return (
                    <Grid item xs={12} md={6} key={itemCard.id}>
                      <Item>
                        <ItemCard itemCard={itemCard} iconSrc={ICON_MAP[itemCard.iconName]} />
                      </Item>
                    </Grid>
                  )
                })
              }
            </Grid>
          </Box>
          <Box className='col-12 col-md-4'>
            <img className='w-100' src={PreviewImage} alt="preview-property"></img>
          </Box>
        </Box>
      </Box>
      <Box className='row' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
        <Card className='col-12 col-md-8' sx={{ width: '100%', maxWidth: 875 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              What if I don't own the property?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Search for a property to uncover its value.
            </Typography>
            <Box marginTop='1rem'>
              <SearchProperties />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}
export default JumbotronComponent;