import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
    return (
    
    <div className="login">
    
    <form action={loginUrl}>
        <button className="linkstyle">Login</button>
    </form>

    </div>
    
    
    );
  }
  
  export default Login;