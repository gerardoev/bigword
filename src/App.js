import React, {useState, useEffect} from 'react';
import './App.scss';
import HomePage from "./components/HomePage/HomePage";
import {ToastContainer} from "react-toastify";
import {AuthContext} from "./utils/contexts";
import {isUserLoggedApi} from "./api/auth";

function App() {
  const [usuario, setUsuario] = useState(false);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    //isUserLoggedApi devuelve el usuario decodificado si existe token
    setUsuario(isUserLoggedApi());
    setRefreshCheckLogin(false); //lo ponemos a default
    setLoadUser(true);
    console.log("Se ha entrado al useeffect");
  }, [refreshCheckLogin]);

  //con esto hacemos que esta vista se ejecute solo al inicio
  if (!loadUser) return null;

  return (
    <AuthContext.Provider value={usuario}>
      <div className="App">
        {usuario ? <h1>Loageado</h1>: <HomePage setRefreshCheckLogin={setRefreshCheckLogin}/>}
        <ToastContainer
          position="top-right" 
          autoClose="5000"
          hideProgressBar/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
