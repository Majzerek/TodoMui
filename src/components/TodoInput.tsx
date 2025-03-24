import React, { FC, useEffect, useState } from 'react'
import { Todo } from '../App';
import { Alert, AlertTitle, Box, Button, Collapse, FormControl, TextField } from '@mui/material';
import ErrorIcon from "@mui/icons-material/Error";
import CheckIcon from '@mui/icons-material/Check';

export const TodoInput: FC<{ setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, todos:Todo[] }> = ({ setTodos,todos }) => {


  const [text, setText] = useState('');
  const [show, setShow] = useState({
    succes: false,
    error: false
  })
  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), completed: false, text }]);
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value)
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!text) {
      return setShow({succes:false, error:true}), setTimeout(()=>setShow({succes:false, error:false}), 2000)};
    addTodo(text);
    setText('');
    setShow({succes:true, error:false})
    
  };
  useEffect(() => {
    setTimeout(()=>setShow({succes:false, error:false}), 5000)
  },[todos,text])
  return (
    <Box component={'form'} display={'flex'} flexDirection={'column'} noValidate>
      <FormControl>
        <TextField title='Add Task' label="Add New Task" value={text} type='text' onChange={(e) => handleChange(e)} />
        <Button type='submit' variant='contained' disableTouchRipple onClick={(e) => handleClick(e)} >Add</Button>
        <Collapse in={show.succes}> 
        <Alert icon={<CheckIcon />} severity="success" color="success" variant="filled">
          <AlertTitle>Success</AlertTitle> 
          You successful add a new task 😍
        </Alert>
      </Collapse>
      <Collapse in={show.error}> 
        <Alert icon={<ErrorIcon />} severity="error" color="error" variant="filled">
          <AlertTitle>Error</AlertTitle> 
          Input can't be empty!
        </Alert>
      </Collapse>
      </FormControl>
    </Box>
  )
}
