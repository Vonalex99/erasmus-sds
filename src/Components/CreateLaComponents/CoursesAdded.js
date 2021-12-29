import * as React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function CoursesAdded(props) {

    const deleteId = () => {
        props.onDelete(props.id)
    }

  return (
      <div style={{width: '600px', height: '30px', display:'flex', color: "black", fontSize:"12px"}}>
          <div style={{width: '270px', height: '30px',   border: "1px solid #ccc"}}>
            <div style={{marginLeft: "5px",}}>
                {props.courseA.length > 30 ? <>{props.courseA.substring(0,30)}...</> : props.courseA}
                {props.courseAECTS.length !== 0  &&
                    <> ({props.courseAECTS})</>
                }
            </div>
          </div>
          <div style={{width: '290px', height: '30x', border: "1px solid #ccc" }}>
            
            <div style={{marginLeft: "5px",}}>
            {   props.courseB.length > 30 ? <>{props.courseB.substring(0,30)}...</> : props.courseB}
                {console.log(props.courseBECTS)}
                {props.courseBECTS.length !== 0 &&
                    <> ({props.courseBECTS})</>
                }
                       
            </div>

          </div>
          <div style={{width: '30px', height: '30px',marginLeft: "10px"}}>
            <DeleteIcon sx={{width: '25px', height: '25px', marginTop:"2px", cursor: 'pointer'}} onClick={deleteId}></DeleteIcon>
          </div>
      </div>
  );
}
