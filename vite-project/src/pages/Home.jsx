
 import React from 'react'
 import Navbar from '../components/Navbar'
 import Footer from '../components/Footer'
 import './style.css'

 const Home = () => {
   return (
     <div className="home-container">
         <Navbar />
         <h1>Home</h1>
         <Footer/>
     </div>
   )
 }

 export default Home;