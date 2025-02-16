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

    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };

   return (
     <div>
         <Navbar />
         <div className='todo-container'>
          <h1>Min Todo-lista</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
         </div>
         <Footer/>
     </div>
   )
};

 export default Todo;