import { useState, useEffect, useRef } from "react";
import InfoSlide from "./InfoSlide";
import BoardGame from '../common/BoardGame';
import BoardGame2 from '../common/BoardGame2';



function Slideshow() {
    const cards = [
        {titel:'Generación del mapa', thetext: 'El tablero de juego es un mapa divido en territorios. Antes de iniciar el juego se asigna aleatoriamente a cada 	territorio de este mapa un recurso entre comida, hierro y petróleo.', theimgsrc: null, elementtype: 'renderBoard'},

        {titel:'Posición de capitales', thetext: 'Lo primero que deben hacer los jugadores es escoger 3 territorios del mapa, uno de ellos para colocar su capital. Un territorio no puede tener más de una capital. Trata de escoger un territorio alejado de la capital de un rival, ya que si pierdes tu capital pierdes el juego.', theimgsrc: '', elementtype: 'renderBoard2'},

        {titel:'Obtener Recursos', thetext: 'Al inicio de tu turno recibirás recursos de tus territorios controlados. Puedes comerciar recursos con los otros jugadores.', theimgsrc: '', elementtype: 'resources'},

        {titel:'Atacar territorios', thetext: 'Tus recursos te permiten desplegar tropas o tanques en tus territorios, con estos puedes atacar un territorio vecino. Debes lanzar dados para ver si logras conquistar o se defienden de tu ataque. Si tu ejercito tiene más fuerza tienes más probabilidades de conquistar.', theimgsrc: '', elementtype: 'troops'},

        {titel:'Fin del Juego', thetext: 'Cuando una capital es conquistada su jugador pierde. Gana el último imperio en pie.', theimgsrc: 'src/assets/imgs/wiseman.png', elementtype: 'none'},
    ];
    const [index, setIndex] = useState(0);
    const delay = 10000;
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () => setIndex( 
            (prevIndex) => prevIndex === cards.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => { resetTimeout(); };
    }, [index]);

    return (
      <div className="slideshow">
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {cards.map((card, index) => (
                <div className="slide" key={index}>
                    <InfoSlide titel={card.titel} imgSrc={card.theimgsrc} elementtype={card.elementtype}>
                        {card.thetext}
                    </InfoSlide>
                        
                </div>
            ))}
        </div>
        <div className="slideshowDots">
            {cards.map((_, idx) => (
                <div 
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                    setIndex(idx);
                }}
                ></div>
            ))}
        </div>
      </div>
    );
}

export default Slideshow