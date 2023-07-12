import React, { useState, useEffect } from 'react';
import oilImage from "../assets/imgs/oil.png";
import ironImage from '../assets/imgs/iron.png';
import foodImage from '../assets/imgs/food.png';

const BoardGame = () => {
  const [seconds, setSeconds] = useState(0);
  const [gridElements, setGridElements] = useState([]);
  const [isGridHovered, setIsGridHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 10000);

    if (isGridHovered) {
      // Add grid elements with a delay of 3 seconds between each one
      setTimeout(() => {
        setGridElements(prevState => [...prevState, <div className="grid-element" style={element1Style}></div>]);
      }, 500);

      setTimeout(() => {
        setGridElements(prevState => [...prevState, <div className="grid-element" style={element2Style}></div>]);
      }, 2500);

      setTimeout(() => {
        setGridElements(prevState => [...prevState, <div className="grid-element" style={element3Style}></div>]);
      }, 4500);
    }

    return () => clearInterval(interval);
  }, [isGridHovered]);

  const gridStyle = {
    opacity: 1,
    backgroundImage: `url('https://cdn.matthewhaeck.com/content/images/2015/02/risk.jpg')`,
    backgroundSize: '1120px 550px',
    width: '1100px',
    height: '530px',
    display: 'grid',
    gridTemplateColumns: 'repeat(18, 1fr)',
    gridTemplateRows: 'repeat(8, 1fr)',
    gap: '10px',
    padding: '10px'
  };

  const element1Style = {
    backgroundImage: `url(${oilImage})`,
    backgroundSize: '25px 70px',
    width: '50px',
    height: '50px',
    gridArea: '6 / 7 / 7 / 8'
  };

  const element2Style = {
    backgroundImage: `url(${ironImage})`,
    backgroundSize: '70px 70px',
    width: '50px',
    height: '50px',
    gridArea: '4 / 5 / 5 / 6'
  };

  const element3Style = {
    backgroundImage: `url(${foodImage})`,
    backgroundSize: '50px 50px',
    width: '50px',
    height: '50px',
    gridArea: '3 / 11 / 5 / 12'
  };

  return (
    <div style={gridStyle} onMouseEnter={() => setIsGridHovered(true)}>
      {gridElements}
    </div>
  );
};

export default BoardGame;