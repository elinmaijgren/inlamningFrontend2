
 import React from 'react'
 import Navbar from '../components/Navbar'
 import Footer from '../components/Footer'
 import './pagestyle.css'

 const Omoss = () => {
   return (
     <div>
         <Navbar />
         <div className='omoss-container'>
         <h1 className='rubrik'>Om oss</h1>
         <p>Välkommen till min To do app! Den är skapad för att hjälpa dig att organisera dina dagliga uppgifter på ett enkelt och effektivt sätt.
          Oavsett om du planerar din arbetsdag, studier eller personliga mål, gör vår app det smidigt att hålla koll på dina todos.</p>

          <h2 className='rubrik'>Funktioner</h2>
          <ul>
            <li>✅ Lägg till nya uppgifter snabbt och enkelt</li>
            <li>✅ Markera uppgifter som slutförda</li>
            <li>✅ Spara dina todos i webbläsaren så att de finns kvar nästa gång du öppnar appen</li>
            <li>✅ Modern och minimalistisk design för en smidig användarupplevelse</li>
          </ul>

          <h2 className='rubrik'>Vem har skapat denna app?</h2>
          <p>Denna Todo-app är utvecklad av Elin Maijgren som ett projekt inom Chas Academy.
            Syftet är att skapa en användarvänlig och responsiv applikation med React.</p>

          <h2 className='rubrik'>Feedback & Kontakt</h2>
          <p>Har du förslag på förbättringar eller har du hittat en bugg?
            Kontakta oss på <a>elin@todo.se</a> eller via GitHub.</p>
            </div>
         <Footer/>
     </div>
   )
 }

 export default Omoss;