

'use client'
 

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Canvas from "./components/Canvas";
import AccountLandingPanel from "./AccountLandingPanel";

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
