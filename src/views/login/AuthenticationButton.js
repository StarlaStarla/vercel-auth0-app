import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import configJson from '../../../src/auth_config.json'

const AuthenticationButton = () => {
  const { isAuthenticated, logout, auth0Client } = useAuth0()

  const login = async (event) => {
    const url = `https://${configJson.domain}/oauth/token`

    const payload = {
      grant_type: 'password',
      username: '1280942160@qq.com',
      password: 'm01m01**',
      client_id: configJson.clientId
    }

    try {
      const response = await axios.post(url, payload)
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('id_token', response.data.id_token)
      // Redirect user or show user logged in state
    } catch (error) {
      console.error('Login Failed: ' + error.response.data.error_description)
    }
  }
  const loginWithAuth0 = async () => {
    await auth0Client.loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
    //logged in. you can get the user profile like this:
    const user = await auth0Client.getUser()
    console.log(user)
  }

  return isAuthenticated ? (
    <button class='sign-in-button' onClick={() => logout({ returnTo: window.location.origin })}>
      Sign In
    </button>
  ) : (
    <button class='sign-in-button' onClick={() => loginWithAuth0()}>
      Sign In
    </button>
  )
}

export default AuthenticationButton
