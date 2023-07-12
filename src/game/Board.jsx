import './Board.css'
import {useContext, useState} from 'react'
import {GameContext} from "./GameRoom.jsx";
import blackFlag from '../assets/imgs/brazil_flag.png';
import redFlag from '../assets/imgs/red_pin.png';
import blueFlag from '../assets/imgs/oil.png';



function Board() {
    const {
        flags,
        soldiers
      } = useContext(GameContext);


  return (

    <div className = "game-board">
    <div className="box"></div>
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 

    <div className="box"></div>
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 

    <div className="box"></div>
    <div className="flag">
    <img
  src={flags[0] === 'redFlag' ? redFlag : flags[0] === 'blackFlag' ? blackFlag :  flags[0] === 'blueFlag' ? blueFlag : ''}
  alt={flags[0] === 'none' ? 'NA' : ''}
/>  {/* aqui va norte-america flag*/}
          </div>
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="value">{soldiers[3]}</div>  {/* aqui va europa count*/}
    <div className="flag">
    <img
  src={flags[3] === 'redFlag' ? redFlag : flags[3] === 'blackFlag' ? blackFlag : flags[3] === 'blueFlag' ? blueFlag : ''}
  alt={flags[3] === 'none' ? 'EU' : ''}
/>  {/* aqui va europa flag*/}
          </div>
          <div className="flag">
    <img
  src={flags[5] === 'redFlag' ? redFlag : flags[5] === 'blackFlag' ? blackFlag : flags[5] === 'blueFlag' ? blueFlag : ''}
  alt={flags[5] === 'none' ? 'RUS' : ''}
/>  {/* aqui va rusia flag*/}
          </div>
    <div className="value">{soldiers[5]}</div>  {/* aqui va rusia count*/}
    <div className="box"></div> 
    <div className="box"></div> 

    <div className="box"></div>
    <div className="value">{soldiers[0]}</div> {/* aqui va norte-america count*/}
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 

    <div className="box"></div>
    <div className="flag">
    <img
  src={flags[1] === 'redFlag' ? redFlag : flags[1] === 'blackFlag' ? blackFlag : flags[1] === 'blueFlag' ? blueFlag : ''}
  alt={flags[1] === 'none' ? 'CA' : ''}
/>  {/* aqui va centro-america flag*/}
          </div>
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="flag">
    <img
  src={flags[6] === 'redFlag' ? redFlag : flags[6] === 'blackFlag' ? blackFlag : flags[6] === 'blueFlag' ? blueFlag : ''}
  alt={flags[6] === 'none' ? 'ASIA' : ''}
/>  {/* aqui va asia flag*/}
          </div>
    <div className="value">{soldiers[6]}</div>   {/* aqui va Asia count*/}
    <div className="box"></div> 

    <div className="box"></div>
    <div className="value">{soldiers[1]}</div>  {/* aqui va centro-america count*/}
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="flag">
    <img
  src={flags[4] === 'redFlag' ? redFlag : flags[4] === 'blackFlag' ? blackFlag : flags[4] === 'blueFlag' ? blueFlag : ''}
  alt={flags[4] === 'none' ? 'AF' : ''}
/>  {/* aqui va africa flag*/}
          </div>
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 

    <div className="box"></div>
    <div className="box"></div> 
    <div className="flag">
    <img
  src={flags[2] === 'redFlag' ? redFlag : flags[2] === 'blackFlag' ? blackFlag : flags[2] === 'blueFlag' ? blueFlag : ''}
  alt={flags[2] === 'none' ? 'SA' : ''}
/>  {/* aqui va sud-america flag*/}
          </div>
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="value">{soldiers[4]}</div>   {/* aqui va Africa count*/}
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 

    <div className="box"></div>
    <div className="box"></div> 
    <div className="value">{soldiers[2]}</div> {/* aqui va sud-america count*/}
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="value">{soldiers[7]}</div>  {/* aqui va Australia Count*/}
    <div className="box"></div> 

    <div className="box"></div>
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="flag">
    <img
  src={flags[7] === 'redFlag' ? redFlag : flags[7] === 'blackFlag' ? blackFlag : flags[7] === 'blueFlag' ? blueFlag : ''}
  alt={flags[7] === 'none' ? 'AUS' : ''}
/>  {/* aqui va australia flag*/}
          </div>
    <div className="box"></div> 

    <div className="box"></div>
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 
    <div className="box"></div> 




     
</div>

    
  )
}

export default Board
      