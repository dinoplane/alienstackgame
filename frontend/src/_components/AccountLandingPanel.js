

'use client'
 
import React, {useState} from "react";

import CreateUser from "./features/api/CreateUser";

function AccountCreationErrorPanel({error}){
  if (error.status > 0){
    return (
      <div className="account-creation-error-panel">
        <h4 className="account-creation-error-header">Error</h4>
        <p className="account-creation-error-message">{error.message}</p>
      </div>
    );
  }
  return null;
}

function AccountLandingPanel(){
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState({status: null, message: null});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }


    const validateUsername = (username) => {
      let ret = true;

      if (username.length < 4) {
        setError({ status: 400, message: "Username must be at least 4 characters long" });
        console.log("Username must be at least 4 characters long");
        ret = false;
      }else if (username.length > 20) {
        setError({ status: 400, message: "Username must be at most 20 characters long" });
        console.log("Username must be at most 20 characters long");
        ret = false;
      }
      return ret;
    }

    const validatePassword = (password, passwordConfirm) => {
      let ret = true;

      if (password.length < 8) {
        setError({ status: 400, message: "Password must be at least 8 characters long" });
        console.log("Password must be at least 8 characters long");
        ret = false;
      } else if (password.length > 72) {
        setError({ status: 400, message: "Password must be at most 72 characters long" });
        console.log("Password must be at most 72 characters long");
        ret = false;
      } else if (password !== passwordConfirm) {
        console.log(passwordConfirm, password);
        setError({ status: 400, message: "Passwords do not match" });
        console.log("Passwords do not match");
        ret = false;
      }

      return ret;
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      if (!validateUsername(inputs.username)){
        return;
      } else if (!validatePassword(inputs.password, inputs.passwordConfirm)){
        return;
      } 
      
      setError({status: null, message: null});
      const username = inputs.username;
      const password = inputs.password;

      CreateUser(username, password);
    }


    return (
      <div className="account-landing-panel">
        {/* <h4 className="account-landing-panel-header">Account Creation</h4> */}
        <AccountCreationErrorPanel error={error} />
        <form className="create-player-form" onSubmit={handleSubmit}>
          <label className="username-label">
            Username
          </label> 
          <input 
            name="username" 
            className="account-input"
            value={inputs.username || ""}
            onChange={handleChange} 
          /> <br />
          <label className="password-label">
            Password
          </label> 
          <input 
            name="password" 
            type="password" 
            className="account-input" 
            value={inputs.password || ""}
            onChange={handleChange}   
          /> <br />
          <label className="password-label">
            Confirm Password
          </label> 
          <input 
            name="passwordConfirm" 
            type="password" 
            className="account-input" 
            value={inputs.passwordConfirm || ""}
            onChange={handleChange} 
          /> <br />
          <input type="submit" value="Create Account" />
        </form>

      </div>
    );
}

export default AccountLandingPanel;