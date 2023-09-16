import React from 'react';
import "./Login.css";
import {
  auth,
  signInWithPopup,
  provider
} from "../../firebase";
import { useUserContext } from "../../contextApi/User";

function Login() {

  const userInfo = useUserContext();

  const signIn = ()=>{
    signInWithPopup(auth, provider)
    .then(({user})=>{
      userInfo.setUser({
        userData : user
      })
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  return (
    <div className='login'>
        <div className='login-box'>
            <img src='https://static.vecteezy.com/system/resources/previews/022/100/870/non_2x/whatsapp-logo-transparent-free-png.png' alt='login-pic'/>
            <h2>Sign in to WhatsApp</h2>
            <button onClick={signIn}>Login with Gmail</button>
        </div>
    </div>
  )
}

export default Login;