import React from "react";

import CreatePlayer from "./features/api/CreateUser";

function AccountLandingPanel(){
    return (
      <div className="account-landing-panel">
        {/* <h4 className="account-landing-panel-header">Account Creation</h4> */}
      <form className="create-player-form">
        <label className="username-label">
          Username
        </label> 
         <input name="username" className="account-input" /> <br />
         <label className="password-label">
          Password
        </label> 
         <input name="password" type="password" className="account-input" /> <br />
         <label className="password-label">
          Confirm Password
        </label> 
         <input name="password-confirm" type="password" className="account-input" /> <br />
        <button className="submit-form" onClick={() => CreatePlayer()}>
          Create Account
        </button>
      </form>
      </div>
    );
}

export default AccountLandingPanel;