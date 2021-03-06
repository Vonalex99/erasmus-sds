import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function RegisterIn(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

    
  const change = () => {
    props.change()
  }
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
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

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
      <div style={{display: "flex", justifyContent: "center",height: '78px', marginTop:"20px"}}>
        
        <div style={{fontSize: "13px", color: "black", width: '100%'}}>
            
            <div style={{display:"flex"}}>Email Address<div style={{color:"red"}}>*</div></div>
            <input type="text" placeholder="email" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
        </div>

      </div> 

      <div style={{display: "flex", justifyContent: "center",height: '78px'}}>
    
        <div style={{fontSize: "13px", color: "black", width: '100%'}}>
            
            <div style={{display:"flex"}}>Password<div style={{color:"red"}}>*</div></div>
            <input  type="password" placeholder="password" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
        </div>

      </div> 

            <Grid container spacing={2}>
        
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive updates about courses in PUT via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={change}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}