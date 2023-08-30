import React from 'react';
import './App.css';
import { useState } from 'react';
import usePasswordGenerator from './Hooks/use-password-generator';
import gif from './Asests/passwordgif.gif';
// import PasswordStrengthIndicator from './Component/strength';


function App() {
  const [length, setLength] = useState(5);

  const [checkboxData, setCheckboxData] = useState([
    // { 'name' : 'Include Numbers', checked: "false" },
    { title: 'Include Numbers', state: false },
    { title: 'Include Uppercase Letters', state: false },
    { title: 'Include Lowercase Letters', state: false },
    { title: 'Include Symbols', state: false }
  ]);


  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(false);
    setTimeout(()=>{
      setCopied(true);
    },1000)

  }

  const handlechange = (index) => {

    //Take the original array 
    const updatedCheckboxData = [...checkboxData];
    checkboxData[index].state = !updatedCheckboxData[index].state;
    setCheckboxData(updatedCheckboxData);
  }
  const [copied,setCopied] = useState("false");

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <div className="App">

      <div className='top'>

        <div className='top_logo'><img src={gif}/>
        </div>

        <div className='top_info'>
          <h1>PASSWORD GENERATOR</h1>
          <h3>Create strong and secure passwords to keep your account safe online.</h3>
        </div>

      </div>

      {/* Password */}
      <div className='container'>
        {
          password && (
        <div className='header'>
          <div className='title'>{password}</div>
          <button className='copyBtn' onClick={handleCopy}>
            {copied?"Copy":"Copied"}
          </button>
        </div>
          )
        }

      </div>

      {/* Character Length */}
      <div className='charLength'>
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          min={5}
          max={30}
          type='range'
          value={length}
          onChange={(e) => setLength(e.target.value)}
        // value={}
        ></input>
      </div>

      {/* Checkboxes */}

      <div className='checkboxes'>
        {
          checkboxData.map((checkbox, index) => {
            return <div className='list' key={index}>
              {checkbox.title}
              <input
                onChange={() => handlechange(index)}
                type='checkbox'
                state={checkbox.state}
              ></input>
            </div>
          })
        }
      </div>
      {/* Strength */}
      {/* {
        !errorMessage && <PasswordStrengthIndicator password='password'></PasswordStrengthIndicator>
      } */}
      

      {/* Error Handling */}
      {errorMessage && <div className='errorMessage'>{errorMessage}</div>}

      {/* Generate Button */}
      <button className='generateBtn' onClick={() => generatePassword(checkboxData, length)}> Generate Password</button>
    </div>
  );
}

export default App;
