import './LeftInfobar.css'
import { useContext, useState } from 'react'
import { GameContext } from "./GameRoom.jsx";
import axios from 'axios';
import { createContext } from 'react';

export default function LeftInfobar({ data, handlePregameSelect, handleSoldierButton, handleAttackButton }) {
    const {
        color,
        status,
        allTerritories,
        myTerritories,
        enemyTerritories,
        turnSoldiers,

      } = useContext(GameContext);

  const [selectedTerritory, setSelectedTerritory] = useState('');

  const [selectedEnemyTerritory, setSelectedEnemyTerritory] = useState('');

  const [attackFrom, setAttackFrom] = useState('');

  
  const handleTerritorySelection = (territory) => {
    setSelectedTerritory(territory);
  };

  const endTurn = () => {    
}

  return (
    <div className="infobar infobar-left">
      <div className="username">{data.username}</div>
      <div className="color">Color: {color}</div>
      <div className="status">Status: {status}</div>

      {status === 'inTurn' && (
        <div>
          <div className="reserve">Reserve: {turnSoldiers}</div>
          <div className="instructions">Seleccionar region para aumentar soldados</div>
          <select className="end-turn-btn" onChange={(e) => setSelectedTerritory(e.target.value)}>            <option disabled selected value="">Territorio Tuyo</option>
            {myTerritories.map((territory, index) => (
              <option key={index} value={territory}>{territory}</option>
            ))}
          </select>
          <button className="end-turn-btn" onClick={() => handleSoldierButton(selectedTerritory)}>
            Agregar Soldado
          </button>
          <div className="instructions">Seleccionar region para iniciar ataque</div>
          <select className="end-turn-btn" onChange={(e) => setAttackFrom(e.target.value)}>            <option disabled selected value="">Territorio Tuyo</option>
            {myTerritories.map((territory, index) => (
              <option key={index} value={territory}>{territory}</option>
            ))}
          </select>
          <div className="instructions">Seleccionar territorio para atacar</div>
          <select className="end-turn-btn" onChange={(e) => setSelectedEnemyTerritory(e.target.value)}>            <option disabled selected value="">Territorio Tuyo</option>
            <option disabled selected value="">Territorio Enemigo</option>
            {enemyTerritories.map((territory, index) => (
              <option key={index} value={territory}>{territory}</option>
            ))}
          </select>
          <button className="end-turn-btn" onClick={() => handleAttackButton(attackFrom, selectedEnemyTerritory)}>
        Atacar
      </button>
        </div>
      )}

    {status === 'wait' && (
        <div>
        <div className="instructions">Turno de oponente</div>
        </div>
        
      )}

      {status === 'pregame' && (
        <div>
        <div className="instructions">Seleccionar territorio para comenzar partida</div>
          <select className="end-turn-btn" onChange={(e) => setSelectedTerritory(e.target.value)}>
            <option disabled selected value="">Seleccionar Territorio</option>
            {allTerritories.map((territory, index) => (
              <option key={index} value={territory}>{territory}</option>
            ))}
          </select>
          <button className="end-turn-btn" onClick={() => handlePregameSelect(selectedTerritory)}>
        Seleccionar
      </button>
        </div>
        
      )}

    {status === 'winner' && (
        <div>
        <div className="instructions">Ganaste!!!</div>
        </div>
        
      )}

    {status === 'loser' && (
        <div>
        <div className="instructions">Perdiste...</div>
        </div>
        
      )}

    </div>
  );
}


