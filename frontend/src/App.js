import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Canvas from "./Canvas";

// import { create, globals } from 'webgpu';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
       
      <header className="App-header">
        
      <Canvas />

        <div className="AppUiOverlay">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{!data ? "Loading..." : data}</p>  
        </div>
        
      </header>


    </div>
  );
}

export default App;
