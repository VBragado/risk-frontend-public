import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import LogoutButton from './profile/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <body>
        
        <div className='menu'>
        <div className="logo1">
          <img src="/src/assets/imgs/risk_logo.png" className="logo1" alt="RISK" />
        </div>
        <div className="logoName">
          RISK
      </div>
        <div className="phrase">
          Un juego de estrategia, diplomacia y conquista
      </div>
        <div className="menu-links">
        <div><a href="/salaespera">JUGAR</a></div>
          <div><a href="/thegame">EL JUEGO</a></div>
          <div><a href="/aboutus">ACERCA DE</a></div>
          <div><a href="/login">LOGIN</a></div>
          <div><a href="/signup">SIGNUP</a></div>
          <div><LogoutButton></LogoutButton></div>
          
          {/*
          <form className="username-form">
      <label htmlFor="username"></label>
      <input type="text" id="username" name="username" placeholder="Enter your username" />
    </form>
        */}
    
        </div>
      </div>        
      </body>
      
      
    </div>
  )
}

export default App
