import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Authentication() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log('current User, user')

  return (
    <div>
    <img src='https://th.bing.com/th/id/OIP.D6UUVIOCY9ynhMUsXMk77wHaEe?w=222&h=180&c=7&r=0&o=5&pid=1.7' width='50%' height='200%' alt='' style={{}}/>

    <div style={{marginTop:'-15rem'}}>
       
              {isAuthenticated && <h3 style={{color:'gray'}}>Hello {user.name}</h3>}
              {isAuthenticated ? (
                <button style={{padding:'20px',fontSize:'20px',borderRadius:'10px',marginLeft:'55rem',backgroundColor:'#1c1f46',color:'white'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>

              ) : (
                <button style={{padding:'20px',fontSize:'20px',borderRadius:'10px',marginLeft:'55rem',backgroundColor:'#1c1f46',color:'white'}} onClick={() => loginWithRedirect()}>Log In</button>
              )}
             
    </div>
    </div>
  )
}

export default Authentication;
