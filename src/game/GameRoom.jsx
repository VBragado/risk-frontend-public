import './GameRoom.css'
import Navbar from "../common/Navbar"
import React, {createContext, useContext , useState, useEffect} from "react";
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';

import LeftInfobar from "./LeftInfobar"
import RightInfobar from "./RightInfobar"
import Board from "./Board"


export const GameContext = createContext(null);

function GameRoom() {
  const { token, username, userId } = useContext(AuthContext);

 
 // para board
  const [flags, setFlags] = useState(['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']);
  const [soldiers, setSoldiers] = useState([]);

  // para left infobar
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");
  const [allTerritories, setAllTerritories] = useState([]);
  const [myTerritories, setMyTerritories] = useState([]);
  const [enemyTerritories, setEnemyTerritories] = useState([]);
  const [turnSoldiers, setTurnSoldiers] = useState(5);



  // para rightinfobar
  const [gameType, setGameType] = useState("");

  const [username1, setUsername1] = useState("");
  const [color1, setColor1] = useState("");
  const [iron1, setIron1] = useState(0);
  const [wheat1, setWheat1] = useState(0);
  const [oil1, setOil1] = useState(0);

  const [username2, setUsername2] = useState("");
  const [color2, setColor2] = useState("");
  const [iron2, setIron2] = useState(0);
  const [wheat2, setWheat2] = useState(0);
  const [oil2, setOil2] = useState(0);

  const [username3, setUsername3] = useState("");
  const [color3, setColor3] = useState("");
  const [iron3, setIron3] = useState(0);
  const [wheat3, setWheat3] = useState(0);
  const [oil3, setOil3] = useState(0);





  useEffect(() => {
    // API call to fetch data for LeftInfobar
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/leftinfobar?username=${username}`)
      .then(response => {
        setColor(response.data.color);
        setStatus(response.data.status);
        setAllTerritories(response.data.allTerritories);
        console.log("TERRITORIO ZERO: " + allTerritories[0]);

      })
      .catch(error => {
        console.log('Error fetching LeftInfobar data:', error);
      });

    
    // API call to fetch data for RightInfobar
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/rightinfobar?username=${username}`)
      .then(response => {
        setGameType(response.data.gameType);
        setUsername1(response.data.username1);
        setColor1(response.data.color1);
        setIron1(response.data.iron1);
        setWheat1(response.data.wheat1);
        setOil1(response.data.oil1);
        setUsername2(response.data.username2);
        setColor2(response.data.color2);
        setIron2(response.data.iron2);
        setWheat2(response.data.wheat2);
        setOil2(response.data.oil2);
        setUsername3(response.data.username3);
        setColor3(response.data.color3);
        setIron3(response.data.iron3);
        setWheat3(response.data.wheat3);
        setOil3(response.data.oil3);


      })
      .catch(error => {
        console.log('Error fetching RightInfobar data:', error);
      });

    // Board update:
    console.log("pre fetchboard");
    fetchBoard();
      
  }, []);

  const updateView = () => {
    console.log("in updateView");
    fetchBoard();
    console.log("past fetchboard");
    fetchRightInfobar();
    console.log("past rightinfobar");
    fetchPlayerInfo();
    console.log("past playerinfo");
    // FIX username2 y color2

  };


  // funcion para actualizar board data
  const fetchBoard = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/updateboard?username=${username}`)
      .then(response => {
        console.log("fetchBoard debug 1");
        const { flags, soldiers } = response.data;
        setFlags(flags);
        setSoldiers(soldiers);
        console.log("fetchBoard debug");

      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  };

  // funcion para actualizar datos rightInfobar
  const fetchRightInfobar = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/rightinfobar?username=${username}`)
      .then(response => {
        setIron1(response.data.iron1);
        setWheat1(response.data.wheat1);
        setOil1(response.data.oil1);
        setIron2(response.data.iron2);
        setWheat2(response.data.wheat2);
        setOil2(response.data.oil2);

        setUsername2(response.data.username2);
        setColor2(response.data.color2);

        setIron3(response.data.iron3);
        setWheat3(response.data.wheat3);
        setOil3(response.data.oil3);

        setUsername3(response.data.username3);
        setColor3(response.data.color3);


      })
      .catch(error => {
        console.log('Error fetching RightInfobar data:', error);
      });
  };

  const selectTerritory = (selectedTerritory) => {

    console.log('ejecutando SELECTTERRITORY');
    console.log(selectedTerritory);
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/selectterritory`, {
        username: username,
        userId: userId,
        territory: selectedTerritory || 'none'
      })
      .then(response => {
        console.log('territory selected');
        fetchBoard();
        fetchRightInfobar();
        fetchPlayerInfo();
        /*
        if (response.data.gameStart === 'true') {
            fetchPlayerInfo();
        }
        if (response.data.result === 'successful') {
            fetchBoard();
            fetchRightInfobar();
        }
        */
      })
      .catch(error => {
        console.log('Error fetching LeftInfobar data:', error);
      });

  };

  const fetchPlayerInfo = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/playerinfo?username=${username}`)
    .then(response => {
      setStatus(response.data.status);
      setMyTerritories(response.data.myTerritories);
      setEnemyTerritories(response.data.enemyTerritories);
      setTurnSoldiers(response.data.turnSoldiers);

    })
    .catch(error => {
      console.log('Error fetching playerInfo data:', error);
    });
  }

  const addSoldier = (selectedTerritory) => {

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/addsoldier`, {
        username: username,
        userId: userId,
        territory: selectedTerritory || 'none'
      })
      .then(response => {
        fetchPlayerInfo();
        fetchBoard();
      })
      .catch(error => {
        console.log('Error  addingSoldier:', error);
      });

  };

  const attack = (attackFrom, selectedEnemyTerritory) => {

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/attack`, {
        username: username,
        userId: userId,
        myTerritory: attackFrom || 'none',
        enemyTerritory: selectedEnemyTerritory || 'none'
      })
      .then(response => {
        fetchPlayerInfo();
        fetchBoard();
      })
      .catch(error => {
        console.log('Error  attacking:', error);
      });

  };
  

  return (
    <GameContext.Provider
    value={{
      flags,
      setFlags,
      soldiers,
      setSoldiers,
      status,
      setStatus,
      color,
      setColor,
      allTerritories,
      setAllTerritories,
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
      myTerritories,
      enemyTerritories,
      turnSoldiers,
      gameType

    }}
    >
    <Navbar/>

    <div className="container">
    <LeftInfobar data={{ username, userId }}
      handlePregameSelect={selectTerritory} 
      handleSoldierButton={addSoldier} 
      handleAttackButton={attack} 

      ></LeftInfobar>
    <Board  />
  
    
    <RightInfobar handleUpdate={updateView}></RightInfobar>
    </div>
    
    
    
    
      </GameContext.Provider>
  )
}

export default GameRoom