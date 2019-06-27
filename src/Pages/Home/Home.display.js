import React from 'react'
import SongList from '../../components/SongList/SongList.display'
import { Page, Header, Button, Container, PageLink } from './Home.styles'

export default () => {
  const [page, setPage] = React.useState('setlist')

  return (
    <Page>
      <Header>
        <h2>Setlist</h2>
        <Button>Generate Setlist</Button>
      </Header>
      <Container>
        <PageLink enabled={page === 'setlist'} onClick={() => setPage('setlist')}>Setlist</PageLink>
        <PageLink enabled={page === 'songs'} onClick={() => setPage('songs')}>Songs</PageLink>
        {page === 'setlist' && <div>setlist</div>}
        {page === 'songs' && <SongList />}
      </Container>
    </Page>
  )
}
