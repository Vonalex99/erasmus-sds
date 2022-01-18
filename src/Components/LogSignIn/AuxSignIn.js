import * as React from 'react';


import SignInModal from './SignInModal';
import RegisterInModal from './RegisterInModal';

import { ref, onValue} from "firebase/database";


export default function CourseModal(props) {
    const [open, setOpen] = React.useState(false);
    const [openReg, setOpenReg] = React.useState(false);

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

  return (
    <>
                <li>
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

            {open && <SignInModal change={change} open={open} close={closeLogIn}></SignInModal>}
            {openReg && <RegisterInModal change={change2} open={openReg} close={closeRegisterIn}></RegisterInModal>}

    </>
  );
}
