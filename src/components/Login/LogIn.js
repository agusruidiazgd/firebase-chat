import React,{useState} from 'react';
import './LogIn.scss';
import {signWithGoogle,createUser,signInWithMail} from '../../services/firebase';

const LogIn = ({setUser}) =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInGoogle = () => {
        signWithGoogle().then(user=> {
            console.log(user)
            setUser(user)
        })
    }
    
    const signInEmail = () => {
        signInWithMail(email, password).then(user=> setUser(user))
    }
    
    const createNewUser = () => {
        createUser(email, password).then(user=> setUser(user))
    }
    

    return(
        <form>
            <input type="text" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
            <button type="button" className="mail-btn" onClick={createNewUser}> Crear Usuario </button>
            <button type="button" className="mail-btn" onClick={signInEmail}>Log In </button>
            <button type="button" className="google-btn" onClick={signInGoogle}>Sign In with Google</button>
            
        </form>
    )
}

export default LogIn;
