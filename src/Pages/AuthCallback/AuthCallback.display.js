import React from 'react'
import { Page, Container } from './AuthCallback.styles'

export default class AuthCallback extends React.Component {
  componentDidMount () {
    const code = this.props.history.location.search.replace(/\?code=/i, '')
    const redirect_uri = process.env.NODE_ENV === 'production' ? `https://setlist.tadscritchfield.com/auth/success` : 'http://localhost:3007/auth/success'
    const body = {
      grant_type: 'authorization_code',
      code,
      client_id: process.env.REACT_APP_PC_CLIENT_ID,
      client_secret: process.env.REACT_APP_PC_SECRET,
      redirect_uri
    }
    console.log(body, '<- body')
    const options = {
      method: 'POST',
      body: JSON.stringify(body)
    }
    fetch('https://setlist.tadscritchfield.com/.netlify/functions/get_token', options).then((res) => res).then((token) => {
      console.log(token, '<- token')
      // window.localStorage.setItem('token', JSON.stringify(token))
    }).catch((e) => {
      console.log(e, '<- error')
    })
  }

  render () {
    return (
      <Page>
        <Container>
          <h1>Auth Callback</h1>
        </Container>
      </Page>
    )
  }
}
