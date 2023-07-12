import InfoSlideCards from "./InfoSlideCards"
import BoardGame from '../common/BoardGame';
import BoardGame2 from '../common/BoardGame2';

function InfoSlide({titel, subtitel, imgTyp, imgSrc, elementtype, children}){
    return (
        <div id="item-description-and-photo5">    
           
            <div id="item-description-container5">
                <h1> {titel} </h1>
                <div> {subtitel} </div>
                <p> {children} </p>
            </div>
            <div id="item-photo-container5" >
                <img src={imgSrc} className={imgTyp}/>
            </div>
            <div id="item-gamecards-container">
                <InfoSlideCards cardtypes={elementtype}></InfoSlideCards>
            </div>
            <div id="boardGameRender">
            {elementtype === "renderBoard" ? <BoardGame/> : null}
            {elementtype === "renderBoard2" ? <BoardGame2/> : null}
            </div>
        </div>
    )
}
export default InfoSlide