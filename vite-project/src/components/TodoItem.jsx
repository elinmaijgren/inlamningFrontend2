import React from 'react'
import './Todo.css'

const TodoItem = ({todo, toggleComplete}) => {
  return (
    <li className={todo.completed ? "completed" : ""}
    onClick={() => toggleComplete(todo.id)}>
        {todo.text}
    </li>
  )
}

export default TodoItem;