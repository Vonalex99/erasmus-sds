import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignIn from './SignIn';


export default function CourseModal(props) {

  console.log(props.open)

  const [open, setOpen] = React.useState(props.open);



  const handleClose = (email, pass) => {
    props.close()

    console.log(email)
    props.logIn(email,pass)

    
  };


  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{fontSize:"20px"}}>{""}</DialogTitle>
        <DialogContent>
          <SignIn change={props.change} logIn={props.logIn} close={handleClose}></SignIn>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
