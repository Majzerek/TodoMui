import { Todo } from '../App'
import { Box, Button, Typography } from '@mui/material'
import { theme } from '../theme/theme';

type TodoListType = {
  todosList: Todo[],
  deleteTodo: (id: number) => void,
  toogleTodo: (id: number) => void,
}
export const TodoList = ({ todosList, deleteTodo, toogleTodo }: TodoListType) => {
  if(!todosList.length) {
    return (
      <Box>
        <Typography variant='h2' 
        sx={{[theme.breakpoints.down('md')]:{
          fontSize: "2rem"
        }}}>Please add some new task.</Typography>
      </Box>
    )
  }
  return (
    <>
      <Typography variant='h3' textAlign={'center'} mb={2}>Task List</Typography>
      <Box
        display={'flex'}
        flexDirection={'column'}
        width={"100%"}
        gap={1}
        border={`4px solid ${theme.palette.primary.main}`}
        borderRadius={5}
        p={6} >
        {todosList.map((todo) =>
          <Typography
            key={todo.id}
            display={'flex'}
            gap={2}
            variant='h6'
            whiteSpace={'nowrap'}
          ><Box component={'span'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            width={'40%'}
            flex={2}
            borderBottom={`4px solid ${theme.palette.secondary.main}`}
            borderRadius={3}
            p={0.7}
            sx={todo.completed ? { color: 'grey', textDecoration: 'line-through', borderColor: ' lightgray' } : undefined}
            title={todo.text}>{todo.text}</Box>
            <Box component={'span'} flex={0}>
              <Button color={'error'} sx={{ mr: 1 }} variant={'contained'} onClick={() => deleteTodo(todo.id)}>Delete</Button>
              <Button color='secondary' variant={'contained'} onClick={() => toogleTodo(todo.id)} disabled={todo.completed}>Finished</Button>
            </Box>
          </Typography>)}
      </Box>
    </>
  )
}
