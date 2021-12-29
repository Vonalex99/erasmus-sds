import * as React from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function StudentInformation(props) {

  const [gender, setGender] = React.useState(10);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const [firstName, setfirstName] = React.useState("");
  const [secondName, setsecondName] = React.useState("");

  const changeFirst = (event) => {
    setfirstName(event.target.value);
    props.setfirstName(event.target.value)
  }
  
  const changeSecond = (event) => {
    setsecondName(event.target.value);
    props.setsecondName(event.target.value)

  }

  const [study, setstudy] = React.useState(10);


  const handleChangeStudy = (event) => {
    setstudy(event.target.value)
  }

  return (
    <div style={{width: '660px'}}>

      <div style={{marginTop: "50px", display: "flex", justifyContent: "center",  height: '78px'}}>
        
        <div style={{fontSize: "13px", color: "black", width: '100%'}}>
            <div style={{display:"flex"}}>Academic Year<div style={{color:"red"}}>*</div></div>
            <input type="text" placeholder="2021/2022" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "lightGrey", height: '10px',width: '100%',color: "black"}}/>
        </div>

      </div> 


      <div style={{marginTop: "10px", display: "flex", justifyContent: "center", height: '78px'}}>
        
        <div style={{fontSize: "13px", color: "black", width: '300px'}}>
        <div style={{display:"flex"}}>First Name(s)<div style={{color:"red"}}>*</div></div>
          
          <input value={firstName} onChange={changeFirst} type="text" placeholder="Your" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px', width: '100%', color: "black"}}/>
        </div>
        <div style={{fontSize: "13px", color: "black", width: '300px', marginLeft: '60px'}}>
        <div style={{display:"flex"}}>Last Name(s)<div style={{color:"red"}}>*</div></div>
          
          <input value={secondName} onChange={changeSecond} type="text" placeholder="Name" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
        </div>



      </div> 

      <div style={{display: "flex", justifyContent: "center",height: '78px'}}>
        
        <div style={{fontSize: "13px", color: "black", width: '100%'}}>
        <div style={{display:"flex"}}>Email<div style={{color:"red"}}>*</div></div>
            
            <input type="text" placeholder="Email" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
        </div>

      </div> 

      <div style={{display: "flex", width: '100%'}}>
        
        <div style={{fontSize: "13px", color: "black", width: '160px'}}>
        <div style={{display:"flex"}}>Date of birth<div style={{color:"red"}}>*</div></div>
         
          <input type="date" placeholder="Your" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '37px', width: '160px', color: "black"}}/>
        </div>
        <div style={{fontSize: "13px", color: "black", width: '190px', marginLeft: '30px', marginTop: '0px'}}>
        <div style={{display:"flex"}}>Gender<div style={{color:"red"}}>*</div></div>
          
          <Box sx={{ width: '210px', height: '10px' }}>
            <FormControl fullWidth>
              <Select
              sx={{ height: '37px'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>




        <div style={{fontSize: "13px", color: "black", width: '200px', marginLeft: '55px'}}>
        <div style={{display:"flex"}}>Nationality<div style={{color:"red"}}>*</div></div>
          
          <input type="text" placeholder="Nationality" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '200px',color: "black"}}/>
        </div>




      </div> 
      
      <div style={{display:"flex"}}>Study cycle<div style={{color:"red"}}>*</div></div>
        <Box sx={{ width: '100%', height: '10px' }}>
            <FormControl fullWidth>
              <Select
              sx={{ height: '37px'}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={study}
                label="Age"
                onChange={handleChangeStudy}
              >
                <MenuItem value={10}>Short cycle (EQF level 5)</MenuItem>
                <MenuItem value={20}>Bachelor or equivalent first cycle (EQF level 6)</MenuItem>
                <MenuItem value={30}>Master or equivalent second cycle (EQF level 7)</MenuItem>
                <MenuItem value={40}>Doctorate or equivalent third cycle (EQF level 8)</MenuItem>

              </Select>
            </FormControl>
          </Box>



    </div>
  );
}
