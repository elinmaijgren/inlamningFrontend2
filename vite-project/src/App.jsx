import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Todo from './pages/Todo';
import Omoss from './pages/Omoss';
import Home from './pages/Home';

const App = () => {

  return (
    <>
       <div className="App">
       <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/Todo' element={<Todo/>} />
         <Route path='/Omoss' element={<Omoss/>} />
       </Routes>
     </div>
    </>
  )
}

export default App;
