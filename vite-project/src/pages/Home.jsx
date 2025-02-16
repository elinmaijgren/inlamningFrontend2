
 import React from 'react'
 import Navbar from '../components/Navbar'
 import Footer from '../components/Footer'
 import './pagestyle.css'

 const Home = () => {
   return (
     <div>
         <Navbar />
         <div className="home-container">
          <div className='home-text'>
         <h1 className='headline'>Welcome to ToDo!</h1>
         <p className='subtext'>Små steg leder till stora framgångar. Låt oss börja!</p>
         </div>
         </div>
         <Footer/>
     </div>
   )
 }

 export default Home;