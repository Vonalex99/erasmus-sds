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

  console.log("here")
  console.log(props.toShow)

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{fontSize:"26px", fontWeight:"bold"}}>{info.course_name[0].toUpperCase() + info.course_name.slice(1)}</DialogTitle>
        <DialogTitle sx={{fontSize:"20px"}}><strong>Degree of Education: </strong>{info.level[0].toUpperCase() + info.level.slice(1)}</DialogTitle>
        <DialogTitle sx={{fontSize:"20px"}}><strong>ECTS:</strong> {info.course_ects}</DialogTitle>
        <DialogTitle sx={{fontSize:"20px"}}><strong>Semester: </strong> {info.semester[0].toUpperCase() + info.semester.slice(1)}</DialogTitle>
        <DialogTitle sx={{fontSize:"20px"}}><strong>Number of hours: </strong> {info.number_of_hours}</DialogTitle>

        <DialogTitle sx={{fontSize:"20px"}}>{<a href = {info.course_card_link}>Further Details</a>}</DialogTitle>


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
