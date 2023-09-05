import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import collection from '../assets/collection.svg'

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

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
  onClose: PropTypes.func.isRequired,
};

// export default function CustomizedDialogs() {
export default function CreateCollectionModal({ setOpenModal: setOpen, visible: open, callback }) {
  const handleClose = () => setOpen(false);
  const [collectionName, setCollectionName] = useState();

  const nameInputRef = useRef(null);
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        nameInputRef.current?.focus();
      });
    }
  }, [open]);

  return (
    <BootstrapDialog
      maxWidth='xs'
      fullWidth={true}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography align='center' variant='h6' fontWeight='700'>Create new collection</Typography>
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Box display='flex'>
          <img src={collection}></img>
          <Box paddingLeft='1rem'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='end'
            flexGrow='1'
            paddingTop='1rem'>
            <TextField
              inputRef={nameInputRef}
              autoFocus={true}
              value={collectionName}
              onChange={(e) => {
                let newName = e.target.value;
                if (newName.length > 100) {
                  newName = newName.slice(0, 100);
                }
                setCollectionName(newName);
              }}
              size='small'
              variant="outlined"
              label=""
              placeholder="e.g Near work, Renovations"
              sx={{ width: "100%" }}
            />
            <Typography color='gray' variant='caption'>{collectionName?.length || 0}/100</Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' sx={{ textTransform: "none" }} className="flex-grow-1" onClick={handleClose}>Cancel</Button>
        <button className="text-white flex-grow-1 btn btn-info" onClick={() => callback && callback(collectionName)}>Create</button>
      </DialogActions>
    </BootstrapDialog>
  );
}