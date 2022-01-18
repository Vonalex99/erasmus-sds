import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Step from "./Step";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import StudentInformation from "./StudentInformation";
import SendingInfo from "./SendingInfo";
import ReceivingInfo from "./ReceivingInfo";
import ProposedMobility from "./ProposedMobility";
import Commitment from "./Commitment";
import LaComponent from "./LaComponent";

export default function MaxWidthDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [user, setuser] = React.useState("");

  const auth = props.auth
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.email;
      console.log(uid)
      setuser(uid)
      console.log("asdasdasdasdasdasdasdasdsa")
      // ...
    } else {
      console.log("User is signed out")
      setuser("")

      // User is signed out
      // ...
    }
  });



  const handleClickOpen = () => {
    if(user !== "") {
      setOpen(true);

    } else {
      alert("No user is logged in")
    }
  };

  const handleClose = () => {
    setOpen(false);
    setPage(0);
  };

  const [page, setPage] = React.useState(0);

  const passPage = () => {
    const newPage = page + 1;
    setPage(newPage);
  };

  const returnPage = () => {
    const newPage = page - 1;
    setPage(newPage);
  };

  const [firstName, setfirstName] = React.useState("");
  const [secondName, setsecondName] = React.useState("");

  const [laversions, setlaversions] = React.useState([]);

  const done = () => {
    setOpen(false);
    setPage(0);
    alert("Saving Learning Agreement");
    var today = new Date();
    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    setlaversions([
      ...laversions,
      {
        name: secondName + ", " + firstName,
        date: date + " " + time,
      },
    ]);
  };

  console.log(props.database)

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        style={{
          margin: "0 auto",
          display: "block",
          width: "550px",
          height: "70px",
          fontSize: "15px",
          marginBottom: "30px",
        }}
      >
        Click here to start your learning agreement online
      </Button>

      {console.log(laversions)}

      {laversions.length !== 0 && <div>Learning agreement Versions</div>}

      {laversions.length !== 0 &&
        laversions.map((item) => {
          return <LaComponent name={item.name} date={item.date}></LaComponent>;
        })}

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ fontSize: "19px" }}>
          Create the learning agreement
        </DialogTitle>
        <DialogContent>
          <Step page={page}></Step>

          <div style={{ width: "660px", margin: "0 auto" }}>
            {page == 0 && (
              <StudentInformation
                setfirstName={setfirstName}
                setsecondName={setsecondName}
              ></StudentInformation>
            )}

            {page == 1 && <SendingInfo></SendingInfo>}

            {page == 2 && <ReceivingInfo></ReceivingInfo>}

            {page == 3 && <ProposedMobility  database={props.database}></ProposedMobility>}

            {page == 4 && <Commitment></Commitment>}
          </div>
        </DialogContent>
        <DialogActions>
          {page != 4 && (
            <Button
              style={{
                fontSize: "15px",
                backgroundColor: "lightgrey",
                marginRight: "20px",
              }}
              onClick={passPage}
            >
              Next
            </Button>
          )}
          {page == 4 && (
            <Button
              style={{
                fontSize: "15px",
                backgroundColor: "lightgrey",
                marginRight: "20px",
              }}
              onClick={done}
            >
              Finish
            </Button>
          )}
          {/**page != 0 && <Button style={{position: "absolute", left: 0, fontSize: '15px', backgroundColor: "lightgrey"}} onClick={returnPage}>Back</Button>**/}
          {/**page != 0 && <Button style={{position: "absolute", left: 80, fontSize: '15px', }} onClick={handleClose}>Close</Button>**/}
          {
            /**page == 0 && **/ <Button
              style={{
                backgroundColor: "lightgrey",
                position: "absolute",
                left: 10,
                fontSize: "15px",
                "&:hover": {
                  background: "grey",
                },
              }}
              onClick={handleClose}
            >
              Close
            </Button>
          }
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
