export const saveTodo=(todos:TodoItemType[])=>{
    localStorage.setItem("Todos",JSON.stringify(todos))
}
export const  getTodo=()=>{
const todo =localStorage.getItem("Todos")
  return  todo?JSON.parse(todo):[]
}