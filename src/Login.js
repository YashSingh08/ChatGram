import React from 'react';
import { Button } from '@mui/material';
import "./Login.css";
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })
    })
    .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
        <div className="login_container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Whatsapp_logo_2022.jpg" alt="whatsapplogo"/>
            <div className="login_text">
                <h1>Sign in to ChatGram</h1>
            </div>

            <Button onClick={signIn}>
                Sign in with Google
            </Button>
        </div>
    </div>
  );
}

export default Login;