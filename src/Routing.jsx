import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Instructions from './howtoplay/Instructions'
import AboutUS from './statics/AboutUs'
import GameDescription from './statics/thegame'
import Login from './profile/Login'
import SignUp from './profile/SignUp'
import SalaEspera from './salaespera/SalaEspera'
import GameRoom from './game/GameRoom'






function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/howtoplay'} element={<Instructions/>}/>
                <Route path={'/aboutus'} element={<AboutUS/>}/>
                <Route path={'/thegame'} element={<GameDescription/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<SignUp/>}/>
                <Route path={'/salaespera'} element={<SalaEspera/>}/>
                <Route path={'/gameroom'} element={<GameRoom/>}/>


            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing