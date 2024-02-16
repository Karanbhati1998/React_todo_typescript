import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { getTodo } from "./utils/Features";

const initialState:TodoItemType[]=getTodo()
const rootSlice=createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<TodoItemType>)=>{
            state.push(action.payload)
        },
        deleteTodo:(state,action:PayloadAction<TodoItemType>)=>{
           return  state.filter(todo=>(
                todo.id!==action.payload.id
            ))
        },
        isChecked:(state,action:PayloadAction<TodoItemType>)=>{
           return state.map(todo=>{
                if(todo.id==action.payload.id) {
                  return   {...todo,isCompleted:!todo.isCompleted}
                }
                return todo
            }
            )
        },
        editTodo:(state,action:PayloadAction<TodoItemType>)=>{
          return  state.map(todo=>{
                if(todo.id==action.payload.id) {
                  return   {...todo,title:action.payload.title}
                }
                return todo
            }
            )
        },

    }
})

export const {addTodo,deleteTodo,editTodo,isChecked}=rootSlice.actions

const store =configureStore({
    reducer:{
        todo:rootSlice.reducer
    }
})

export type StoreType=ReturnType<typeof store.getState>
export default store