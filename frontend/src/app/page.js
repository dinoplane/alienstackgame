

'use client'
 

import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Canvas from "../_components/Canvas.js";
import AccountLandingPanel from "../_components/AccountLandingPanel.js";

// import { create, globals } from 'webgpu';

function App() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Canvas />
        <div className="AppUiOverlay">
          <AccountLandingPanel />
        </div>
      </header>
    </div>
  );
}

export default App;
