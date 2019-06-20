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
        <h4>Song Choices</h4>
        <SongList />
      </Container>
    </Page>
  )
}