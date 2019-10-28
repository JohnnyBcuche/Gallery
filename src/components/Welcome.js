import React from 'react';

const Welcome = ({ user, pass, onSignOut }) => {
  return(
    <div>
      <p className="paragraph">
        Welcome <strong>{ user.username }</strong>! Your password is: <strong>{ pass.password }</strong>
      </p>
      <button className="button" onClick={ onSignOut } >Sign Out</button>
    </div>
  )
}

export default Welcome;
