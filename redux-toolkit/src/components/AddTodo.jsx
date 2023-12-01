import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

// adding to store
// aadd is done using Dispatch
// dispatch uses reducer to store data or change data in the STORE
function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded text-lg bg-emerald-600"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo