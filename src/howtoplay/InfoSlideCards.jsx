import { useState } from "react";
import "./InfoSlideCards.css";

function InfoSlideCards({cardtypes}){
    var cards = [ { typename: 'hidden', imgSrc:''}];
    const [show, setShow] = useState( {validation: false, id: false});

    if (cardtypes == 'troops'){
        cards = [{ typename: 'soldier', imgSrc:'src/assets/imgs/resource_cards/soldier.png', descrip:'Soldado: Entrega uno de fuerza'}, { typename: 'tank', imgSrc:'src/assets/imgs/resource_cards/tank.png', descrip:'Tanque: Tiene la fuerza de cinco soldados'}];
    }
    if (cardtypes == 'resources'){
        cards = [{ typename: 'wheat', imgSrc:'src/assets/imgs/resource_cards/wheat.png', descrip:'Trigo: Permite reclutar soldados'}, { typename: 'iron', imgSrc:'src/assets/imgs/resource_cards/iron.png', descrip:'Hierro: Permite obtener soldados o tanques'}, { typename: 'oil', descrip:'Petroleo: Permite crear tanques', imgSrc:'src/assets/imgs/resource_cards/oil.png'}];
    }

    const validateId = ( hoverId, tooltipId) => {
        return hoverId == tooltipId;
    }

    return (
        <div className="item-card-container" >
            {cards.map((card, index) => (
                <div>
                    <div onMouseEnter={() => {setShow({ validation: true, id: index});}} onMouseLeave={() => {setShow({ validation: false, id: 0});}}>
                        <img src={card.imgSrc} id={card.typename}/>
                    </div>
                    <div className="hovering-descript" style={show.validation && validateId(show.id, index) ? { visibility: "visible" } : {visibility: "hidden"}}>
                        <div> {card.descrip}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default InfoSlideCards