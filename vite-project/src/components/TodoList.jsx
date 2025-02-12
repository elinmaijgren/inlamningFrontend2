import React from 'react'
import TodoItem from './TodoItem';
import './Todo.css'

const TodoList = ({todos, toggleComplete}) => {
  const allCompleted = todos.length > 0 && todos.every(todo => todo.completed);

  return (
    <div>
      {allCompleted && <p>🎉 Alla uppgifter är klara! Bra jobbat! 🎉</p>}
    
        <ul className='todo-list'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
            ))}
        </ul>
      </div>
  )
}

export default TodoList;
