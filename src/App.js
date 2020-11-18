import React, {useState, useEffect} from 'react';
import './App.scss';
import HomePage from "./components/HomePage/HomePage";
import {ToastContainer} from "react-toastify";
import {AuthContext} from "./utils/contexts";
import {isUserLoggedApi} from "./api/auth";

function App() {
  const [usuario, setUsuario] = useState(false);
  useEffect(() => {
    //isUserLoggedApi devuelve el usuario decodificado si existe token
    setUsuario(isUserLoggedApi());
  }, [])

  return (
    <AuthContext.Provider value={usuario}>
      <div className="App">
        {usuario ? <h1>Loageado</h1>: <HomePage/>}
        <ToastContainer
          position="top-right" 
          autoClose="5000"
          hideProgressBar/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
