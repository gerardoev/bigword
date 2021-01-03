import React, {useState, useEffect} from 'react';
import './App.scss';
import HomePage from "./components/HomePage/HomePage";
import {ToastContainer} from "react-toastify";
import {isUserLoggedApi} from "./api/auth";
import Routing from "./routes/Routing";
import { ConfigureStore } from "./redux/configureStore";
import {Provider} from "react-redux";


function App() {
  const [usuario, setUsuario] = useState(false);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);
  const store = ConfigureStore();

  useEffect(() => {
    //isUserLoggedApi devuelve el usuario decodificado si existe token
    //setUsuario(isUserLoggedApi());
    setUsuario({})
    setRefreshCheckLogin(false); //lo ponemos a default
    setLoadUser(true);
  }, [refreshCheckLogin]);

  //con esto hacemos que esta vista se ejecute solo al inicio
  if (!loadUser) return null;

  return (
    <Provider store={store}>
      <div className="App">
        {usuario ? <Routing/>: <HomePage setRefreshCheckLogin={setRefreshCheckLogin}/>}
        <ToastContainer
          position="top-right" 
          autoClose={5000}
          hideProgressBar/>
      </div>
    </Provider>
  );
}

export default App;
