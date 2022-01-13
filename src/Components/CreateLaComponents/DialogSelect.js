import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Courses from './Courses.json';
import Item from './Item';

export default function DialogSelect(props) {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [courses, setCourses] = React.useState(props.database);


  const handleChange = (event) => {
    console.log(event.target.value)

    console.log(props.database['AI'])


    console.log(props.database[event.target.value])

    setAge((event.target.value) || '');

  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleCloseDone = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
    props.finish(select, selectName, ects)
  };

  const [select, setSelect] = React.useState('');
  const [selectName, setSelectName] = React.useState('');
  const [ects, setEcts] = React.useState('');

  const changeSelect = (id,name,ects) => {
    setSelect(id);
    setSelectName(name);
    setEcts(ects);
  };

  return (
    <div>
      <Button sx={{ width: '280px', height: '38px', border: "1px solid #ccc", borderRadius: "9px", fontSize: '10px','&:hover': {
       background: "grey",
    }}} onClick={handleClickOpen}>Click to select a course from PUT</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} sx={{ }}>
        <DialogTitle sx={{fontSize: '16px'}}>Select a course from PUT</DialogTitle>
        <DialogContent>
          <div style={{fontSize: '13px', marginLeft: '10px'}}>Select the field of Studies</div>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, width: 520, }}>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                { age === '' && <option aria-label="None" value="">Select the field of Studies</option>}
                <option value={'AI'}>Artificial Inteligence</option>
                <option value={'SE'}>Software Engineering</option>
              </Select>
            </FormControl>
          </Box>

          {age !== '' && 
            <div style={{marginLeft: '10px', display: 'flex', width: 520, flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
              {props.database[age].map((item) => {
                return <Item name={item.course_name} id={item.course_id} select={changeSelect} idSel={select} ects={item.course_ects}></Item>
              })}
              
            </div>
          }


        </DialogContent>
        <DialogActions>
          <Button sx={{ '&:hover': {background: "grey"}}} onClick={handleClose}>Cancel</Button>
          <Button sx={{ '&:hover': {background: "grey"}}} onClick={handleCloseDone}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
