import React, {useState, useEffect} from 'react';
import './App.scss';
import LandingPage from "./pages/LandingPage";
import {ToastContainer} from "react-toastify";
import {isUserLoggedApi} from "./api/auth";
import Routing from "./routes/Routing";
import { ConfigureStore } from "./redux/configureStore";
import {Provider} from "react-redux";
import {auth} from "./firebase";


function App() {
  const [usuario, setUsuario] = useState(false);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);
  const store = ConfigureStore();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        //var uid = user.uid;
        setUsuario(user);
        setLoadUser(true);
        // ...
      } else {
        // User is signed out
        setUsuario();
        setLoadUser(true);
        console.log("sin sesión");
        // ...
      }
    });
  }, []);

  //con esto hacemos que esta vista se ejecute solo al inicio
  if (!loadUser) return null;

  
  return (
    <Provider store={store}>
      <div className="App">
        {usuario ? <Routing/>:<LandingPage setRefreshLogin={setRefreshCheckLogin}/>}
        <ToastContainer
          position="top-right" 
          autoClose={5000}
          hideProgressBar/>
      </div>
    </Provider>
  );
}

export default App;
