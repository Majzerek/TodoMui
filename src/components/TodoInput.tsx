import React, { FC, useEffect, useState } from 'react'
import { Todo } from '../App';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { AlertComponent } from './AlertComponent';


export const TodoInput: FC<{ setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, todos: Todo[] }> = ({ setTodos, todos }) => {


  const [text, setText] = useState('');
  const [show, setShow] = useState({
    success: false,
    error: false
  });

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), completed: false, text }]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value)
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!text) {
      return setShow({ success: false, error: true }), setTimeout((prev: typeof show) => setShow({ ...prev, error: false }), 5000)
    };
    addTodo(text);
    setText('');
    setShow({ success: true, error: false })
  };

  useEffect(() => {
    setTimeout((prev: typeof show) => setShow({ ...prev, success: false }), 5000)
  }, [todos]);

  return (
    <Box
      component={'form'}
      display={'flex'}
      flexDirection={'column'}
      noValidate>
      <FormControl sx={{ width: 300 }}>
        <TextField
          title='Add Task'
          label="Add New Task"
          value={text}
          type='text'
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        <Button
          type='submit'
          variant='contained'
          disableTouchRipple
          onClick={(e) => handleClick(e)}
        >Add</Button>

        <AlertComponent
          show={show}
          errorMsg="Input can't be empty!"
          successMsg='You successful add a new task 😍' />
      </FormControl>
    </Box>
  )
}
