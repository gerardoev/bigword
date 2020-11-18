import React, {useState} from 'react';
import './App.scss';
import HomePage from "./components/HomePage/HomePage";
import {ToastContainer} from "react-toastify";

function App() {
  const [usuario, setUsuario] = useState(false);
  return (
    <div className="App">
      {usuario ? <h1>Loageado</h1>: <HomePage/>}
      <ToastContainer
        position="top-right" 
        autoClose="5000"
        hideProgressBar/>
    </div>
  );
}

export default App;
