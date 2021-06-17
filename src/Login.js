import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
    return (
    
    <div className="login">

        <a className="linkstyle" href={loginUrl}>Login with Spotify</a>

    </div>
    
    
    );
  }
  
  export default Login;