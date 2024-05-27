/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const TodoContext= createContext({
    todos:[
        {
        id:1,
        todo:"Todo Message",
        completed:false
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const useTodo =() =>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider