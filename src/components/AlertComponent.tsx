import { Alert, AlertTitle,Collapse } from '@mui/material'
import ErrorIcon from "@mui/icons-material/Error";
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'
interface ShowProp {
  show: {
    succes: boolean,
    error: boolean
  }
}
export const AlertComponent = ({ show }: ShowProp) => {
  
  return (
    <Collapse in={show.succes || show.error}>
      {show.succes
        && <Alert
          sx={{ width: 300 }}
          icon={<CheckIcon />}
          severity="success"
          color="success"
          variant="filled">
          <AlertTitle >Success</AlertTitle>
          You successful add a new task 😍
        </Alert>}
      {show.error && <Alert
        sx={{ width: 300 }}
        icon={<ErrorIcon />}
        severity="error"
        color="error"
        variant="filled">
        <AlertTitle>Error</AlertTitle>
        Input can't be empty!
      </Alert>}
    </Collapse>

  )
}
