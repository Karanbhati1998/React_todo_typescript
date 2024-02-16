import { Delete, Done, Edit } from '@mui/icons-material';
import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, isChecked } from '../redux';

type PropType={
    todo:TodoItemType
}
const TodoItems = ({todo}:PropType) => {
    const[title,setTitle]=useState<string>(todo.title)
    const[edit,setEdit]=useState<boolean>(false)
   const dispatch=useDispatch()
   const handleDelete=()=>{
    dispatch(deleteTodo(todo))
   }
   const handleIsChecked=()=>{
    dispatch(isChecked(todo))
   }
   function  showEditTask(){
    setEdit(true)
   }
   const handleEditTask=()=>{
    if(title.length>0){
        dispatch(editTodo({
            id:todo.id,
            title:title,
            isCompleted:todo.isCompleted
        })) 
        setTitle('')
        setEdit(false)
    }
   }
   
  return (
    <Paper sx={{
        padding:"1rem"
    }}>
        <Stack direction={"row"} alignItems={'center'}>
            {
                edit?
                <TextField  fullWidth label="Edit Task"
                    focused
                    value={title}
                    onChange={(e)=>{
                       return setTitle(e.target.value)
                    }}
                    onKeyDown={(e)=>{
                        if(e.key=="Enter"){
                             handleEditTask()
                         }
                    }}
          />:
        <Typography marginRight={'auto'} style={{
            textDecoration:todo.isCompleted?  "line-through":""
        }}>{todo.title}</Typography>
            }
        <Checkbox onChange={handleIsChecked}/>
        {
            !edit ?
        <Button onClick={showEditTask}>
            <Edit/>
        </Button>:
        <Button disabled={title.length==0} onClick={handleEditTask} color={title.length>0?'success':'primary'} size='large'>
            <Done/>
        </Button>
        }
        <Button onClick={handleDelete} color='error'>
            <Delete/>
        </Button>
        </Stack>
    </Paper>
  )
}

export default TodoItems