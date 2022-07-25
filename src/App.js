import { useEffect, useState } from 'react';
import './App.css';
import  validator  from 'validator';


function App() {

  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);


  const handleSubmit = () => {
 }

  useEffect( () => {
    if(username.length >=3 && password.length>=6){
      if(validator.isEmail(username)){
        if(validator.isStrongPassword(password)){
          setIsValid(true);
        }
        else{
          setIsValid(false);
        }
      }
      else{
        setIsValid(false);
      }
    }
    else{
      setIsValid(false);
    }
  },[isValid,username,password])

  return (
   <div className="wrapper">
    <div className="form">
      <div className="title">
        Login to Code with Aditya
      </div>

      <div className="input-wrap">
        <label htmlFor="input-text">Email or Username</label>
        <div className="input-field">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="input-text" className="input"/>
        </div>
      </div>

      <div className="input-wrap">
        <label htmlFor="input-text">Password</label>
        <div className="input-field">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="input-text" className="input"/>
        </div>
      </div>

      <div className="input-wrap">
        <span className="error_msg">Incorrect username or password Try again</span>
        <input type="submit" id="login-btn" onClick={() => handleSubmit()} className={(isValid)? "btn enabled" : "btn disabled "} value="Login"/>
      </div>
    </div>
   </div>
  );
}

export default App;
