import React, { useState } from 'react';
import './App.css';

function App() {

  const url = `https://ag-react-backend.herokuapp.com/api/tests/`;
  
  const [value, setValue] = useState("Type something!");

  const [message, setMessage] = useState("");

  const changeValue = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const value = document.getElementById("input-value").value;

    if (!value) {
      setMessage("You must enter a value!");
      return;
    }
    
    let data = await fetch(url+value);
    
    let response = await data.json();
    
    setValue(response.data.message);
    setMessage("");
  }

  return (
    <div className="main-container">
      <form className="wrapper"
            onSubmit={ (event) => changeValue(event) }>
        <input  type="text"
                name="input-value"
                className="input-value"
                id="input-value" />

        <button type="button"
                name="sendData"
                className="btn btn-default"
                onClick={ () => changeValue() }
                >MAYUS
        </button>

        <label  htmlFor="input-value"
                className="label label-info"
                >{ value }
        </label>
        
        {message && <label  htmlFor="message"
                            className="label label-error"
                            >{ message }</label>}
        </form>
    </div>
  );
}

export default App;
