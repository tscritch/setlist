import React from 'react'
import { Page, Container, Link } from './Login.styles'

export default () => {
  const PC_CLIENT_ID = process.env.PC_CLIENT_ID
  const callback = process.env.NODE_ENV === 'production' ? `https://setlist.tadscritchfield.com/auth/success` : 'localhost:3000/auth/success'
  const loginUrl = `https://api.planningcenteronline.com/oauth/authorize?client_id=${PC_CLIENT_ID}&redirect_uri=${callback}&response_type=code&scope=people%20services`
  return (
    <Page>
      <Container>
        <Link href={loginUrl}>Login</Link>
      </Container>
    </Page>
  )
}