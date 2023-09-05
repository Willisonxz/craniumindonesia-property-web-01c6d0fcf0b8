import { Autocomplete, Box, TextField, createFilterOptions, styled } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoutesPage from '../../../../Routes';
import { top100Films } from '../dummy_data';

function SearchProperties(props) {
  const { sx, btnLabel } = props;
  const [value, setValue] = React.useState(null);
  const navigate = useNavigate();
  const filter = createFilterOptions();
  const Item = styled('div')(({ theme }) => ({
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    borderRadius: '4px',
    width: '100%',
  }));

  return (
    <Box sx={{...sx}}>
      <Grid container>
        <Grid xs={12} md={8} >
          <Item>
            <Autocomplete
              size='small'
              value={value}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderRadius: 1,
                textAlign: 'center',

              }}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                  setValue({
                    title: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setValue({ title: newValue.inputValue });
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
                <TextField className='pe-0 pe-md-3 mb-2' {...params} label="Search address" />
              )}
            />
          </Item>
        </Grid>
        <Grid xs={12} md={4} sx={{height: '100%'}}>
          <Item>
            <button className='btn btn-info h-100 w-100 text-white text-nowrap'
              onClick={() => navigate(RoutesPage.RouteProfileTrackYourPropertyDetails)}>{btnLabel || 'Search'}</button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchProperties;