
 import React, { useState, useEffect } from 'react'
 import Navbar from '../components/Navbar'
 import Footer from '../components/Footer'
 import TodoForm from "../components/TodoForm";
 import TodoList from "../components/TodoList";
 import '../components/Todo.css'
 import './pagestyle.css'

 const Todo = () => {

    const [todos, setTodos] = useState(() => {
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      return savedTodos || [];
    });
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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

    //lös så att knappen inte följer med utan har en fast plats, överväg en knapp för varje item
    const deleteLastTodo = () => {
      if (todos.length === 0) return; 
      setTodos(todos.slice(0, -1));
    };

   return (
     <div>
         <Navbar />
         <div className='todo-container'>
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