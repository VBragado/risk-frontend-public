import './RightInfobar.css'
import {useContext, useState} from 'react'
import {GameContext} from "./GameRoom.jsx";

export default function RightInfobar( {handleUpdate} ){
  const {
    username1,
      color1,
      iron1,
      wheat1,
      oil1,
      username2,
      color2,
      iron2,
      wheat2,
      oil2,
      username3,
      color3,
      iron3,
      wheat3,
      oil3,
      gameType,
  } = useContext(GameContext);

  return(
    
    <div className="infobar infobar-right">
      <div className="player-segment">
        <div className="player-info">
          <div className="player-name">Player Name: {username1}</div>
          <div className="player-color">Player Color: {color1}</div>
          <div className="iron-quantity">Iron: {iron1}</div>
          <div className="wheat-quantity">Wheat: {wheat1}</div>
          <div className="oil-quantity">Oil: {oil1}</div>
        </div>
      </div>
      <div className="player-segment">
        <div className="player-info">
          <div className="player-name">Player Name: {username2}</div>
          <div className="player-color">Player Color: {color2}</div>
          <div className="iron-quantity">Iron: {iron2}</div>
          <div className="wheat-quantity">Wheat: {wheat2}</div>
          <div className="oil-quantity">Oil: {oil2}</div>
        </div>
      </div>

      {gameType === 'three' && (
        <div className="player-segment">
        <div className="player-info">
          <div className="player-name">Player Name: {username3}</div>
          <div className="player-color">Player Color: {color3}</div>
          <div className="iron-quantity">Iron: {iron3}</div>
          <div className="wheat-quantity">Wheat: {wheat3}</div>
          <div className="oil-quantity">Oil: {oil3}</div>
        </div>
      </div>
        
      )}

      <button className="end-turn-btn" onClick={handleUpdate}>
        UPDATE ENTIRE VIEW
      </button>
    </div>
    
  )
}