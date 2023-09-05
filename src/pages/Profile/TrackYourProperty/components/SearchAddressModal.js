import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

// For radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Divider } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [showMore, setShowMore] = React.useState(false);

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="0" control={<Radio className='py-2' />} label="As my home (I own it)" />
        <FormControlLabel value="1" control={<Radio className='py-2' />} label="As my investment property" />
        {!showMore && (<>
          <span className='c-63 pointer' onClick={() => setShowMore(true)}>
            Show more options <ExpandMore />
          </span>
        </>)}
        {showMore &&
          (<>
            <FormControlLabel value="2" control={<Radio className='py-2' />} label="As my rental (I live here)" />
            <FormControlLabel value="3" control={<Radio className='py-2' />} label="As my sharehouse" />
            <FormControlLabel value="4" control={<Radio className='py-2' />} label="As a place I'd like to buy" />
            <FormControlLabel value="5" control={<Radio className='py-2' />} label="As a place I'd like to rent" />
            <FormControlLabel value="6" control={<Radio className='py-2' />} label="Just curious" />
          </>)
        }
      </RadioGroup>
    </FormControl>
  );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  // onClose: PropTypes.func.isRequired,
};

export default function SearchAddressModal({
  handleClose, open, formattedAddress, actionCallback
}) {
  return (
    <div>
      <BootstrapDialog
        maxWidth='xs'
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
        <DialogContent sx={{px: '3rem !important'}}>
          <Typography variant='h5' gutterBottom>
            How would you like to track {formattedAddress}?
          </Typography>
          <Typography gutterBottom className='text-muted'>
            Knowing why you're tracking this property helps us show you information relevant to you.
          </Typography>
          <ControlledRadioButtonsGroup />
        </DialogContent>
        <Divider />
        <DialogActions>
          <button className='btn btn-info h-100 w-100 my-2 text-white' onClick={actionCallback}>
            View Property Insights
          </button>
        </DialogActions>
        <button className='btn btn-link text-muted'>Read our Privacy Policy</button>
      </BootstrapDialog>
    </div>
  );
}