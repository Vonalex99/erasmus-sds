import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SendingInfo() {
  return (
    <div style={{width: '660px', marginTop: "30px"}}>

      <div style={{display: "flex", justifyContent: "center",height: '78px'}}>
        
        <div style={{fontSize: "13px", color: "black", width: '100%'}}>
            
            <div style={{display:"flex"}}>Sending Institution Country<div style={{color:"red"}}>*</div></div>
            <input type="text" placeholder="Country" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
        </div>

      </div> 

      <div style={{display: "flex", justifyContent: "center",height: '78px'}}>
        
        <div style={{fontSize: "13px", color: "black", width: '100%'}}>
            
            <div style={{display:"flex"}}>Sending Institution Name<div style={{color:"red"}}>*</div></div>
            <input type="text" placeholder="Institution name" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
        </div>

      </div> 

      <div style={{display: "flex", justifyContent: "center",height: '78px'}}>
        
        <div style={{fontSize: "13px", color: "black", width: '100%'}}>
            
            <div style={{display:"flex"}}>Faculty/Department<div style={{color:"red"}}>*</div></div>
            <input type="text" placeholder="Faculty/Department name" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
        </div>

      </div> 

      <div style={{display: "flex", height: '78px'}}>
        
        <div style={{fontSize: "13px", color: "black", width: '63%'}}>
            
            <div style={{display:"flex"}}>Address<div style={{color:"red"}}>*</div></div>
            <input type="text" placeholder="Address" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
        </div>
        <div style={{fontSize: "13px", color: "black", width: '15%', marginLeft: "20px"}}>
            
            <div style={{display:"flex"}}>Erasmus code<div style={{color:"red"}}>*</div></div>
            <input type="text" placeholder="Erasmus code" style={{borderRadius: "4px", border: "1px solid #ccc",boxSizing: "border-box", backgroundColor: "white", height: '20px',width: '100%',color: "black"}}/>
        </div>

      </div> 

    </div>
  );
}
