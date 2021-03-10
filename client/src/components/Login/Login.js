import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";

const dialog = "https://www.facebook.com/v10.0/dialog/oauth?response_type=token&display=popup&client_id=180205343674622&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fusers%2Fsocialmedia&scope=email%2Cpublic_profile"

const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const history = useHistory();
  let myWindow;

  const onLoginFacebook = () => {

    myWindow = window.open(dialog, "", "width=600,height=800,left=400");

    // history.push('/');
  }

  const onLoginGoogle = () => {
    console.log('here')
  }

  return (
    <div className="joinOuterContainer">
      <div>
        <h1 className="heading">Login With Social Media</h1>
        <button className="button mt-20" onClick={onLoginFacebook}>With Facebook</button>
        <button className="button mt-20" onClick={onLoginGoogle}>With Google</button>
      </div>
    </div>
  )
}

export default Login;