import * as React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";


import SignInModal from './SignInModal';
import RegisterInModal from './RegisterInModal';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { ref, onValue} from "firebase/database";


export default function CourseModal(props) {
    const [open, setOpen] = React.useState(false);
    const [openReg, setOpenReg] = React.useState(false);
    const [user, setUser] = React.useState("");

    const closeLogIn = ()=> {
      setOpen(false)
    }

    const closeRegisterIn = ()=> {
      setOpenReg(false)
    }

    const change = () => {
      setOpen(false)
      setOpenReg(true)

    }

    const change2 = () => {
      setOpen(true)
      setOpenReg(false)

    }

    const logIn = async (email, pass) => {
      console.log(email)
      console.log(pass)

      try {
        const user = await signInWithEmailAndPassword(
          props.auth,
          email,
          pass
        );
        console.log(user);
        setUser(user)
      } catch (error) {
        alert(error.message);
      }
    };

  
    const logout = async () => {
      await signOut(props.auth);
      setUser("")

    };

  return (
    <>
    {user === "" ? (    <>        <li>
              <div style={{ marginRight: "-100px" }}>
                  <button
                  onClick={()=>{setOpen(true)}}
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      marginLeft: "100px",
                    }}
                  >
                    Log In
                  </button>
                  

                  <button
                      onClick={()=>{setOpenReg(true)}}

                    style={{ backgroundColor: "transparent", color: "white" }}
                  >
                    Register
                  </button>
              </div>
            </li>

            {open && <SignInModal logIn={logIn} change={change} open={open} close={closeLogIn}></SignInModal>}
            {openReg && <RegisterInModal change={change2} open={openReg} close={closeRegisterIn}></RegisterInModal>}
            </>
            )
            : 
            <>
            <li>
            <div style={{marginLeft: "80px", display: "flex"}}>

            <div style={{marginTop:"20px"}}>{user.user.email.split("@")[0]}
              </div>
              <button
                      onClick={()=>{logout()}}

                    style={{ backgroundColor: "transparent", color: "white" }}
                  >
                    Log Out
                  </button>
                  
            </div>
            


            </li>
            
            </>
            }
    </>
  );
}
