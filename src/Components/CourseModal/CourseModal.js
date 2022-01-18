import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { Container } from "semantic-ui-react";

import Example from './Example'


export default function CourseModal(props) {
  const [open, setOpen] = React.useState(props.toShow !== "" ? "true" : "false");
  const [info, setInfo] = React.useState(props.toShow);

  const handleClose = () => {
    setOpen(false);
    props.closeModal()
  };

  console.log(props.toShow)

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{fontSize:"20px"}}>{info.course_name}</DialogTitle>
        <DialogContent>
          


          <Example comment={info.course_comments}></Example>



        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
