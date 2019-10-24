import React from 'react';

const Welcome = ({ user, onSignOut }) => {
  return(
    <div>
      <p className="paragraph">
        Welcome <strong>{ user.username }</strong>!
      </p>
      <button className="button" onClick={ onSignOut } >Sign Out</button>
    </div>
  )
}

export default Welcome;