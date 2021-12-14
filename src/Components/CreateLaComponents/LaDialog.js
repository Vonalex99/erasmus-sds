import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Step from './Step';

import StudentInformation from './StudentInformation';


export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} variant="contained" style={{margin:'0 auto', display:'block', width: '550px', height: '70px', fontSize: '15px'}}>Click here to start your learning agreement online</Button>

      <Dialog
        fullWidth={true}
        maxWidth={"xl"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{fontSize: '19px'}}>Create the learning agreement</DialogTitle>
        <DialogContent>
          <Step></Step>

        <div style={{width: '60%', margin: '0 auto'}}>

          <StudentInformation></StudentInformation>
        </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}