import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return isAuthenticated ? (
    <button class="sign-in-button" onClick={() => logout({ returnTo: window.location.origin })}>Sign In</button>
  ) : (
    <button class="sign-in-button" onClick={() => loginWithRedirect()}>Sign In</button>
  );
};

export default AuthenticationButton;