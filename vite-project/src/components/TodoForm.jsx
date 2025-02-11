import React, { useState } from 'react'
import './Todo.css'

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
      setText(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return;
        addTodo(text);
        setText("");
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' className='input-field' value={text} onChange={handleChange} placeholder='Lägg till en uppgift...'/>
        <button type='submit' className='input-btn'>Lägg till</button>
    </form>
  )
}

export default TodoForm;