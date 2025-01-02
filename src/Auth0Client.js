import { createAuth0Client } from '@auth0/auth0-spa-js'

export async function initAuth0() {
  return await createAuth0Client({
    domain: 'dev-4dbkhni0tlnfoylr.jp.auth0.com',
    clientId: '6rhDqNimGsGmWgoAVtfuPKn65clleXAH'
  })
}
