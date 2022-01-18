import * as React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";

export default function Example(props) {
  const [commentarios, setcomments] = React.useState(props.comment);
  const [comentValue, setcomentValue] = React.useState("");

  const onchangecomment = (event) => {
    setcomentValue(event.target.value)
  }

  const onAddComment = () => {


    if(props.user !== "") {




      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
  const dateObj = new Date();
  const month = monthNames[dateObj.getMonth()];

  const teste = dateObj.getMonth() + 1

  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const output = day + "/0"+ teste  + "/" +  year;

      const allComents = commentarios.push({comment: comentValue,
                                        comment_date: output,
                                        comment_person: props.user.split("@")[0]                                 
      })
      setcomentValue("")
      //setcomments(allComents)

      console.log(commentarios)


      
  } else {
      alert("No user is logged in")
  }
  }

  console.log(props.comment.length)
  console.log(commentarios.length)

  return (

  <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <div style={{ padding: 14 }} className="App">
      <div style={{ boxShadow: '9px 0px 19px -10px rgba(66, 68, 90, 1)', borderRadius: "10px",  }} >

        {commentarios.map((info)=> {
          
          if(info.comment?.includes("test")) {
            return <></>
          }else {
  
          return(
            <div style={{marginTop: "5px", marginLeft: '15px'}}>
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={"https://react.semantic-ui.com/images/avatar/small/matt.jpg"} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth style={{height: "80px"}}>
              <div style={{display: 'flex'}}>
              <h4 style={{ margin: 0, textAlign: "left" }}>{info.comment_person !== null ? info.comment_person : "Maria" }</h4>
              <h7 style={{ marginLeft: "10px",  }}>{info.comment_date}</h7>

              </div>
              <p style={{ textAlign: "left", height: '25px'}}>
                {info.comment}
              </p>
  
            </Grid>
  
  
          </Grid>
            <Divider variant="fullWidth" style={{ marginTop: "10px", marginBottom: "15px" }} />
          </div>
          )}
        })}


{props.comment.length <= 1 && commentarios.length === 1 ? 
      "No comments"
      :
      ""
      }
      </div>

      <div style={{marginTop: "15px"}}>

      <input value={comentValue} onChange={onchangecomment} style={{borderRadius: "10px",height: '45px', marginBottom: "15px", width:'100%', placeholder: "Write Comment"}}/>
      <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={onAddComment}/>
      </div>

     
    </div>

   
  </Comment.Group>
  )
}

