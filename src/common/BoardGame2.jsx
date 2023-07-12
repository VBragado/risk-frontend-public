import React, { useState, useEffect } from 'react';
import oilImage from "../assets/imgs/oil.png";
import ironImage from '../assets/imgs/iron.png';
import foodImage from '../assets/imgs/food.png';
import brazilFlag from '../assets/imgs/brazil_flag.png';


const BoardGame2 = () => {
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
      }, 2000);

      setTimeout(() => {
        setGridElements(prevState => [...prevState, <div className="grid-element" style={element2Style}></div>]);
      }, 4000);

      setTimeout(() => {
        setGridElements(prevState => [...prevState, <div className="grid-element" style={element3Style}></div>]);
      }, 6000);
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
    backgroundImage: `url(${brazilFlag})`,
    backgroundSize: '25px 50px',
    width: '50px',
    height: '50px',
    gridArea: '7 / 7 / 8 / 8'
  };

  const element2Style = {
    
    backgroundImage: `url(${brazilFlag})`,
    backgroundSize: '25px 50px',
    width: '50px',
    height: '50px',
    gridArea: '7 / 6 / 8 / 7'
  };

  const element3Style = {
    backgroundImage: `url(${brazilFlag})`,
    backgroundSize: '25px 50px',
    width: '50px',
    height: '50px',
    gridArea: '6 / 6 / 7 / 7'
  };

  const element4Style = {
    backgroundImage: `url(${oilImage})`,
    backgroundSize: '25px 70px',
    width: '50px',
    height: '50px',
    gridArea: '6 / 7 / 7 / 8'
  };

  const element5Style = {
    
    backgroundImage: `url(${ironImage})`,
    backgroundSize: '70px 70px',
    width: '50px',
    height: '50px',
    gridArea: '4 / 5 / 5 / 6'
  };

  const element6Style = {
    backgroundImage: `url(${foodImage})`,
    backgroundSize: '50px 50px',
    width: '50px',
    height: '50px',
    gridArea: '3 / 11 / 5 / 12'
  };

  return (
    <div style={gridStyle} onMouseEnter={() => setIsGridHovered(true)}>
        <div style={element4Style} className="grid-element"></div>
      <div style={element5Style} className="grid-element"></div>
      <div style={element6Style} className="grid-element"></div>
      {gridElements}
    </div>
  );
};

export default BoardGame2;
