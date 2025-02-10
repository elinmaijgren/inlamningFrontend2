
 import React, { useState } from 'react'
 import Navbar from '../components/Navbar'
 import Footer from '../components/Footer'
 import TodoForm from "../components/TodoForm";
 import TodoList from "../components/TodoList";
 import '../components/Todo.css'

 const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleComplete = (id) => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, completed: !todo.completed } : todo
        )
      );
    };

    const deleteLastTodo = () => {
      if (todos.length === 0) return; // Om listan är tom, gör inget
      setTodos(todos.slice(0, -1)); // Tar bort det sista itemet
    };

   return (
     <div>
         <Navbar />
         <div>
          <h1>Min Todo-lista</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleComplete={toggleComplete} />
          <button className="delete-btn" onClick={deleteLastTodo}>
        Radera senaste
      </button>
         </div>
         <Footer/>
     </div>
   )
 };

 export default Todo;