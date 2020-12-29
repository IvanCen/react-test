import React from "react";
import {Redirect} from "react-router-dom";

export default function Login({isLogin = false, onLogin = () => {}}) {
  if(isLogin) return <Redirect to='/'/>
  return <button onClick={onLogin}>login</button>
}
