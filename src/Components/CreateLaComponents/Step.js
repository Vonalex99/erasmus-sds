import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Student Information',
  'Sending Institution Information',
  'Receiving Institution Information',
  'Proposed Mobility Programme',
  'Commitment'

];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel><div style={{fontSize: '12px'}}>{label}</div></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
