import Navbar from "../common/Navbar"

function AboutUS(){
    return(
        <>
        <Navbar/>
        <div className="grid-container">
            <div id="items-column">
                <div id="item-description-and-photo">
                    <div id="item-photo-container">
                        <img src="src/assets/imgs/musk.png"/>
                    </div>    
                    <div id="item-description-container">
                        <h1>Manuel</h1>
                        <div>Major: Software</div>
                            <p>Manuel es un joven chileno de 21 años que vive en Chile. Es difícil de describir debido a la falta de detalles específicos, pero podría decirse que es introvertido, interesado en la tecnología y los videojuegos, y de vez en cuando estudia y trabaja.</p>
                    </div>
                </div>
                    
                <div id="item-description-and-photo">
                    <div id="item-photo-container">
                        <img src="src/assets/imgs/zuk.png"/>
                    </div>    
                    <div id="item-description-container">
                        <h1>Vicente</h1>
                        <div>Major: Investigación Operativa</div>
                            <p>Vicente es un hombre chileno de 23 años que también vive en Chile. Al igual que Manuel, es difícil de describir sin detalles específicos, pero podría decirse que es amigable, apasionado por la música y deportes al aire libre, y que trabaja en el sector de servicios y estudia en una universidad.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUS