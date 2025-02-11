import React from 'react'
import './Todo.css'

const TodoItem = ({todo, toggleComplete}) => {
  return (
    //kolla om jag kan skriva om detta på ett enklare sätt
    <li className={todo.completed ? "completed" : ""}
    onClick={() => toggleComplete(todo.id)}>
        {todo.text}
    </li>
  )
}

export default TodoItem;