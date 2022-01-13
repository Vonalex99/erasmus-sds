import * as React from "react";
import Button from "./Button";
import ButtonSum from "./ButtonSum";
import ButtonCourses from './ButtonCourses';


import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import IconButton from "@mui/material/IconButton";

export default function SeeCourses(props) {
  const [seeCourses, setseeCourses] = React.useState("");
  const [seeSem, setseeSem] = React.useState("");
  const [pos, setpos] = React.useState(0);
  const [databse, setdatabse] = React.useState(props.database);
  const [toSHhow, settoSHhow] = React.useState([]);

  console.log(props.database)

  const presentSemester = (sem) => {
    if (sem === "SE") {
      setseeCourses("Software Engineering");
    } else {
      setseeCourses("Artificial Intelligence");
    }
    setpos(1);
  };

  var toRetrive = []
  const presentCourses = (sem) => {
    setpos(2);
    setseeSem(sem)
    
    if(sem === "Summer semester") {
      props.database["SE"].filter(data => data["semester"] !== "winter").map((item)=>{
        toRetrive.push(item)
      })
    } else {
      props.database["AI"].filter(data => data["semester"] !== "summer").map((item)=>{
        toRetrive.push(item)
      })
    }

    settoSHhow(toRetrive)

  }

  const goBack = () => {
    setpos(1);

  }

  const reset = () => {
    setseeCourses("")
    setseeSem("")
    setpos(0)
  }

  return (
    <div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <div key={"education.school"}>
              <h3>{"Courses available in Politechnika Poznanska"}</h3>
              {pos === 1 && (
                <div style={{ display: "flex" }}>
                  {" "}
                  <IconButton
                    sx={{ width: "30px" }}
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={reset}
                  >
                    <ArrowBackIcon fontSize="large" />
                  </IconButton>
                  <h5 style={{marginTop: "3px"}}>{seeCourses}</h5>
                </div>
              )}

                {pos === 2 && (
                    <>
                <div style={{ display: "flex" }}>
                  {" "}
                  <IconButton
                    sx={{ width: "30px" }}
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={goBack}

                  >
                    <ArrowBackIcon fontSize="large" />
                  </IconButton>
                  <h5 style={{marginTop: "3px"}}>{seeCourses}</h5>
                  
    
                </div>
                              <div style={{width: "100%"}}>
                              <h6 style={{marginLeft: "31px"}}>{seeSem}</h6>
                            </div>
                            </>
              )}


              <p className="info">
                {pos === 0 && "Select the field of studies"}
                {pos === 1 && "Select the semester"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {pos === 0 && <Button presentSemester={presentSemester} />}
      {pos === 1 && <ButtonSum presentCourses={presentCourses} />}
      {pos === 2 && <ButtonCourses toRetrive={toSHhow}/>}

    </div>
  );
}
