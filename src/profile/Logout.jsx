import React, {useContext, useState} from 'react';
import './Login.css';
import { AuthContext } from '../auth/AuthContext';

const LogoutButton = () => {
  const {logout} = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  const handleLogout = () => {
    logout();
    setMsg("Has hecho logout con éxito!")
  }

  return (
    <>
    {msg.length > 0 && <div className="successMsg"> {msg} </div>}
    <div className='logout_button'>
        <button onClick={handleLogout}>
        LOGOUT
        </button>
        </div>
    </>
  );
}

export default LogoutButton;