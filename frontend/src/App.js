import React, { useState } from "react";
import "./App.css";

require('dotenv').config();

function App() {
  const url = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/tests/';  

  const [value, setValue] = useState("Type something!");

  const [message, setMessage] = useState("");

  const changeValue = async event => {
    if (event) {
      event.preventDefault();
    }

    const value = document.getElementById("input-value").value;

    if (!value) {
      setMessage("You must enter a value!");
      return;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ value }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => setMessage(error.message))
      .then(response => {
        setValue(response.message);
        setMessage("");
      });
  };

  return (
    <div className="main-container">
      <form className="wrapper" onSubmit={event => changeValue(event)}>
        <input
          type="text"
          name="input-value"
          className="input-value"
          id="input-value"
        />

        <button
          type="button"
          name="sendData"
          className="btn btn-default"
          onClick={() => changeValue()}
        >
          MAYUS
        </button>

        <label htmlFor="input-value" className="label label-info">
          {value}
        </label>

        {message && (
          <label htmlFor="message" className="label label-error">
            {message}
          </label>
        )}
      </form>
    </div>
  );
}

export default App;
