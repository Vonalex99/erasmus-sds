import * as React from "react";


import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

export default function Item(props) {

    const changeColor = () => {
        props.select(props.id, props.name, props.ects)
    }

  return (
      <div onClick={changeColor} style={{cursor:"pointer",border: "1px solid #ccc",borderRadius: '8px', width: '235px', backgroundColor: props.idSel === props.id ? "grey" : "white", display: 'flex',alignItems: 'center', justifyContent: 'center', fontSize: '12px', minHeight: '35px', overflowWrap: 'break-word'}}>
        {<Avatar sx={{height: '25px', width: '25px', marginLeft: '5px' }}>{props.name.substring(0,1).toUpperCase()}</Avatar>} 
        <div style={{marginLeft: '8px', overflowWrap: 'break-word', width: '200px'}}>
         {props.name}

        </div>
      </div>
  );
}
