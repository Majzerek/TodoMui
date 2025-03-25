import { Alert, AlertTitle,Collapse } from '@mui/material'
import ErrorIcon from "@mui/icons-material/Error";
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'
interface ShowProp {
  show: {
    success: boolean,
    error: boolean
  },
  errorMsg:string,
  successMsg:string,
}
export const AlertComponent = ({ show,errorMsg,successMsg }: ShowProp) => {
  
  return (
    <Collapse in={show.success || show.error}>
      {show.success
        && <Alert
          sx={{ width: 300 }}
          icon={<CheckIcon />}
          severity="success"
          color="success"
          variant="filled">
          <AlertTitle >Success</AlertTitle>
          {successMsg}
        </Alert>}
      {show.error && <Alert
        sx={{ width: 300 }}
        icon={<ErrorIcon />}
        severity="error"
        color="error"
        variant="filled">
        <AlertTitle>Error</AlertTitle>
       {errorMsg}
      </Alert>}
    </Collapse>

  )
}
