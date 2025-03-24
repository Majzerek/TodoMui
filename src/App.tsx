import { useMemo, useState } from 'react'
import { Box, CssBaseline, Typography } from "@mui/material"
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

export interface Todo {
  id: number,
  text: string,
  completed: boolean,
}
function App() {
  const save = localStorage.getItem("TODO")
  const [todos, setTodos] = useState<Todo[]>(save ? JSON.parse(save) : [])


  const deleteTodo = (taskId: number) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== taskId));
  }

  const toogleTodo = (taskId: number) => {
    setTodos((prev) =>
      prev.map((todo) => todo.id === taskId ? { ...todo, completed: !todo.completed } : todo))
  }
  useMemo(() => {
    localStorage.setItem("TODO", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <CssBaseline />
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'start'}
        alignItems={'center'}
        alignContent={'center'}
        width={'100vw'}
        height={'100vh'}
        overflow={'auto'}
        sx={{ background: "linear-gradient(black,rgb(81, 53, 15)) padding-box,linear-gradient(90deg, #FF512F, #F09819) border-box" }}
        borderRadius={10}
        border={'5px solid transparent'}>
        
        <Typography
          variant='h1'
          textAlign={'center'}
          color='primary'
          p={5}>
          Todo App
        </Typography>
        <Box
          flex={1}
          my={2}>
          <TodoInput setTodos={setTodos} todos={todos} />
        </Box>
        <Box
          flex={3}
          maxWidth={'80%'}
          overflow={'auto'}>
          <TodoList todosList={todos} deleteTodo={deleteTodo} toogleTodo={toogleTodo} />
        </Box>
      </Box>

    </>
  )
}

export default App
