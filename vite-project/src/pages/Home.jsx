
 import React from 'react'
 import Navbar from '../components/Navbar'
 import Footer from '../components/Footer'
 import './pagestyle.css'

 const Home = () => {
   return (
     <div>
         <Navbar />
         <div className="home-container">
          {/* Denna ska ligga i mitten av skärmen och ha box shadow*/}
         <h1 className='headline'>Welcome to ToDo!</h1>
         </div>
         <Footer/>
     </div>
   )
 }

 export default Home;