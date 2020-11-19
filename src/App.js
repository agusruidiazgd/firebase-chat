import React, {useEffect, useState} from 'react';
import './App.scss';
import LogIn from './components/Login/LogIn';
import Header from './components/Header/Header';
import {getMessages} from './services/firebase';


function App() {
  const [user, setUser] = useState();
  const [messages, setMessages]= useState([]);

  useEffect(()=>{
    if(user){
      getMessages().then(messages => setMessages(messages))
    }else{
      setMessages([]);
    }
  },[user]);

  return (
    <div className="App">
      <Header user={user}/>
      {
        user ?
        <div>
          {
            messages.map(message =>{
              return(
                <div>
                  <span>{message.date.toDate().toString()}:{message.messege} </span>
                </div>
              )
            })
          }
        </div>
        :
        <LogIn setUser={setUser} />
      }
      
    </div>
  );
}

export default App;
