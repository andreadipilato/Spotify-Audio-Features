import './App.css';
import React, { useEffect, useState } from "react";
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import Home from './Home';
import  logo from './img/Spotify_Logo_RGB_White.png';

function App() {

  const [token, setToken] = useState();

  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token);
    }

    console.log("token", token);

  }, []);
  

  return (
    <div className="App">
        <div className="App-header">
          <img className="App-logo" src={logo}></img>     
          <h1 className="App-title">Audio Features</h1>       
        </div>
        
        {token ? <Home mytoken={token}/> : <Login /> }

    </div>
  );
}

export default App;
