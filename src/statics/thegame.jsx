import Navbar from '../common/Navbar'
import LeaderboardTable from '../common/leaderboard'

function GameDescription(){
    return(
        <>
        <Navbar/>
        <div className="grid-container2">
            <div id="items-column">
                <div id="item-description-and-photo">
                      
                    <div id="item-description-container2">
                        <h1>Risk</h1>
                        <p>Risk es un juego de mesa estratégico para 2-6 jugadores, en el que el objetivo es conquistar territorios y derrotar a los ejércitos enemigos. El tablero representa un mapa del mundo dividido en regiones, cada una de las cuales se puede ocupar con ejércitos. Los jugadores reciben un número de ejércitos al inicio del juego y pueden agregar más ejércitos en sus turnos.</p>
                        <p>El juego se desarrolla por turnos, y cada turno un jugador puede atacar un territorio enemigo con sus ejércitos y, si tiene éxito, ocupar ese territorio. El defensor puede optar por luchar o retirarse, lo que significa perder el territorio. El juego también incluye cartas de bonificación que se obtienen por conquistar territorios específicos, y estas cartas pueden canjearse por ejércitos adicionales.</p>
                        <p>El juego termina cuando un jugador conquista todos los territorios o cuando se acuerda un número de turnos para jugar. Risk es un juego emocionante que requiere estrategia y planificación para tener éxito.</p>
                    </div>
                </div>
                <div className='leaderboard'><LeaderboardTable/></div>
     
            </div>

            

        </div>
        <nav>
                <a href="/howtoplay"> CÓMO JUGAR </a>
            </nav>  
        </>
    )
}

export default GameDescription