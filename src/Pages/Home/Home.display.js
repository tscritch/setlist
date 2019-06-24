import React from 'react'
import SongList from '../../components/SongList/SongList.display'
import { Page, Header, Button, Container } from './Home.styles'

export default () => {
  return (
    <Page>
      <Header>
        <h2>Setlist</h2>
        <Button>Generate Setlist</Button>
      </Header>
      <Container>
        <SongList />
      </Container>
    </Page>
  )
}
