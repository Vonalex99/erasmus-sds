import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function LaComponent(props) {

  const download = () => {
      alert("The Learning agreement is not yet available for download")
  }

  return (
    <div style={{width: '1000px', backgroundColor: "grey", borderRadius: "8px", height: '60px', marginTop:"10px"}}>

      <div style={{display: "flex", justifyContent: "space-between", color: "black", marginLeft: '20px',  marginRight: '20px'}}>
        
            <div style={{marginTop:"15px", width: "360px"}}>{props.name}</div>
            <div style={{marginTop:"15px", fontWeight: "bold", width: "280px"}}>{props.date}</div>
            <div style={{marginTop:"15px", width: "150px", cursor: "pointer", color: "black"}} onClick={download}><a><div style={{color: "#0563bf"}}>Click To Download</div></a></div>


      </div> 



    </div>
  );
}
