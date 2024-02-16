import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from "@mui/material"
import TodoItems from "./components/TodoItems"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StoreType, addTodo } from "./redux"
import { saveTodo } from "./utils/Features"
const App = () => {
  const todos= useSelector((state:StoreType)=>{
    return state.todo
})
const dispatch=useDispatch()
  const[todo,setTodo]=useState<TodoItemType>(
    {title:"",
  isCompleted:false,
id:''}
  )
  useEffect(()=>{
saveTodo(todos)
  },[todos])
  const handleAddTodo=()=>{
    if(todo.title.length>0){
      dispatch(addTodo(todo))
      setTodo(prev=>{
        return {...prev,title:""}
      })
    }
  }
  return (
    <Container maxWidth="sm" sx={{
      height:"100vh"
    }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"75%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
      {
        todos.map(todo=>(
          <TodoItems todo={todo} key={todo.id}/>
        ))
      }
      </Stack>
      <TextField fullWidth label={"New Task"}
      value={todo.title}
      onChange={e=>(
        setTodo(prev=>{
          return {...prev,title:e.target.value,id:String(Math.random()*1000)}
        })
      )}
      onKeyDown={(e)=>{
        if(e.key=="Enter"){
          handleAddTodo()
        }
      }}
      />
      <Button fullWidth variant="contained" sx={{
        margin:"1rem 0"
      }}
      onClick={handleAddTodo}
      >Add</Button>
    </Container>
  )
}

export default App