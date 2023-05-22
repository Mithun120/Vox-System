import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import Page from "./page"
import {auth,provider} from "../src/config/firebase";
const Login=()=>{
    const [result,setResult]=useState()
    const login=async()=>{
        console.log("test");
       const result=await (signInWithPopup(auth, provider))
    }
  
    useEffect(() => {
        const login = async () => {
          const result = await signInWithPopup(auth, provider);
          console.log(result);
          alert("Login");
          Navigate('/mainpage');
        };
        login();
      }, []);
    return(
        <>
        <button onClick={login}>Login</button>
        {(result!=null)?<Page/>:(<h1>Wrong Login</h1>)}
        </>
    )
    }
export default Login;