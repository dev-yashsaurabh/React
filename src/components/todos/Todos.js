import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../../features/todos/todoSlice'

function Todos() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <div className="flex mb-4">
          <input
            className="flex-1 border px-3 py-2 rounded-l-md outline-none"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add todo..."
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo.id} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md">
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`cursor-pointer flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todos;
