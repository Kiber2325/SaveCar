/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
/*import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

https://drive.google.com/file/d/1RPQmUElJ1jqJqVPMLodLHT_lvow-6MER/view?usp=sharing
<img src="./componentes/logo.png" alt="logo" style= width="30"
            height="24"/>
*/
import './App.css';
import Entrada from './componentes/Entrada';
import logo from './recursos/logo.png' ;

function App() {
  return (
  <div className="App">
    <header className="Encabezado">
      <img className="image" src={logo} />
    </header>
    <h1 className='title'><b>Iniciar Sesión</b></h1>
    <section className='Columnas'>
    <div className='Columnasx3'>
      <Entrada
        tituloEntrada='Usuario' 
        tipo='text'
        contenido='Escriba aqui su usuario'
      />
      <br></br>
      <Entrada
       tituloEntrada='Contraseña'
       tipo='text'
       contenido='Escriba aqui su contraseña'
      />
    </div>

   
    </section>
    <div >
          <div className='botones1'>
            <button className='ini'>Iniciar</button>
        
          </div>

          <div className='botones2'>
            <a href='/'className='vol'>Volver</a>
          </div>
    </div>

    <footer>
      <div>
     <p id='cont'>Contactos</p>
     </div>
    </footer>
  </div>
  );
}
export default App;
