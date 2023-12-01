import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid generates unique ids

// how store will look initially
const initialState={
    todos:[{id:1, text:"Start with you first todo!!"}]
}


// reducer is a functionality and slice is bigger version of reducer
// creatESlice is method
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        // state gives us the current situation or state
        // action gives the data that is being passed
        addTodo: (state, action)=>{
            // adding todo to todos
            const todo={
                id:nanoid(), 
                text:action.payload
            }
            // pushing the new todo to initial state
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            const { id, text } = action.payload;
            state.todos=state.todos.map((todo)=>todo.id==id? {...todo,text}:todo )
        },
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer