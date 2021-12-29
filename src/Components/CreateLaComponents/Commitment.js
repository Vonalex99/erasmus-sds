import * as React from "react";
import {useRef} from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SignaturePad from "react-signature-canvas"

export default function Commitment() {

  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  return (
    <div style={{width: '660px'}}>

      <div style={{fontSize: '11px', lineHeight: '15px', marginTop: "30px"}}>
      By digitally signing this document, the student, the Sending Institution and the Receiving Institution confirm that they approve the Learning Agreement and that they will comply with all the arrangements agreed by all parties Sending and Receiving institutions undertake to apply all the principles of the Erasmus Charter for Higher Education relating to mobility for studies (or the principles agreed in the Inter-Institutional Agreement for institutions located in Partner Countries). The Beneficiary Institution and the student should also commit to what is set out in the Erasmus+ grant agreement. The Receiving Institution confirms that the educational components listed are in line with its course catalogue and should be available to the student. The Sending Institution commits to recognise all the credits or equivalent units gained at the Receiving Institution for the successfully completed educational componentsland to count them towards the student's degree. The student and the Receiving Institution will communicate to the Sending Institution any problems or changes regarding the study programme, responsible persons and/or study period.
      </div>


      <div style={{border: "1px solid #ccc", borderRadius: "10px",   marginTop: "10px", width: '400px', height: '120px', display: 'flex'}}>
        <SignaturePad ref={sigCanvas} canvasProps={{width: "400px", height: '120px'}} >

        </SignaturePad>
        <div style={{marginTop: "64px"}}>
          <button style={{marginLeft: '15px',  width: '200px', borderRadius: "10px"}} onClick={clear}>Clear Signature</button>
        </div>
      </div>

    </div>
  );
}
