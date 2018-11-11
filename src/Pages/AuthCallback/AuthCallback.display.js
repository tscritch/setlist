import React from 'react'
import { Page, Container, Link } from './Login.styles'

export default () => {
  console.log('<- callback page')
  return (
    <Page>
      <Container>
        <h1>Auth Callback</h1>
      </Container>
    </Page>
  )
}