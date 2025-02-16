import React from 'react'
import './Todo.css'

const TodoItem = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? "completed" : ""}
    onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      <button className="delete-item-btn" onClick={(e) => {
        e.stopPropagation();
        deleteTodo(todo.id);
      }}>
        ❌
      </button>
    </li>
  )
}

export default TodoItem;