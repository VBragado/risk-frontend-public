import Navbar from "../common/Navbar"
import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';

function SalaEspera(){

  const { token, username } = useContext(AuthContext);



  const joinGame = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/joingame`, {
        username: username
      }).then((response) => {
        console.log('Entrando a juego');
        window.location.href = '/gameroom';
      }).catch((error) => {
        console.error('Error entrando a juego:', error);
      })

  };

  const joinGame3 = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/joingamethree`, {
        username: username
      }).then((response) => {
        console.log('Entrando a juego');
        window.location.href = '/gameroom';
      }).catch((error) => {
        console.error('Error entrando a juego:', error);
      })

  };

    return(
        <>
        <Navbar/>
        <div className='menu'>
        <div className="menu-links">
        <div><a href="#" onClick={joinGame}>JOIN GAME (1v1) </a></div>
        <div><a href="#" onClick={joinGame3}>JOIN GAME (1v1v1)</a></div>

        </div>
        </div>
        
        </>
    )
}

export default SalaEspera

