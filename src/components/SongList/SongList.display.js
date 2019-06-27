import React from 'react'
import ListItem from '../ListItem/ListItem.display'
import { List, AddSongButton } from './SongList.styles'



export default function SongList () {
  const initialSongs = JSON.parse(localStorage.getItem('songs')) || [{ 'title': 'Have It All', 'speed': 'slow', 'tags': ['sacrifice', 'surrender'] }, { 'title': 'Cannons', 'speed': 'fast', 'tags': ['praise', 'honor', 'glory'] }, { 'title': 'Nothing is Holding Me Back', 'speed': 'medium', 'tags': ['surrender'] }, { 'title': 'Desert Song', 'speed': 'medium', 'tags': ['praise', 'victory', 'storm'] }, { 'title': 'Fall Afresh', 'speed': 'medium', 'tags': ['holy spirit', 'welcome'] }, { 'title': 'Heartbeats', 'speed': 'medium', 'tags': ['praise', 'passion'] }, { 'title': 'High Above It All', 'speed': 'medium', 'tags': ['storm', 'victory'] }, { 'title': 'I Am Set Free', 'speed': 'slowest', 'tags': ['freedom', 'grace'] }, { 'title': 'Jesus Paid It All', 'speed': 'slowest', 'tags': ['sacrifice', 'debt', 'cross'] }, { 'title': 'Jesus We Love You', 'speed': 'medium', 'tags': ['anthem', 'love', 'grace'] }, { 'title': 'King Of My Heart', 'speed': 'medium', 'tags': ['goodness', 'anchor', 'hope'] }, { 'title': 'Lion and The Lamb', 'speed': 'fast', 'tags': ['sacrifce', 'freedom', 'power'] }, { 'title': 'My All In All', 'speed': 'medium', 'tags': ['hope', 'storm', 'passion'] }, { 'title': 'Resurrecting', 'speed': 'medium', 'tags': ['resurrection', 'sacrifice', 'praise'] }, { 'title': 'Scandal Of Grace', 'speed': 'medium', 'tags': ['hope', 'sacrifice', 'grace'] }, { 'title': 'Sinking Deep', 'speed': 'slow', 'tags': ['love', 'surrender'] }, { 'title': 'Sing Out', 'speed': 'fast', 'tags': ['praise', 'holy', 'worthy'] }, { 'title': 'The One We Love', 'speed': 'fast', 'tags': ['praise', 'truth', 'freedom'] }, { 'title': 'This Is Amazing Grace', 'speed': 'fast', 'tags': ['grace', 'sacrifice', 'praise'] }, { 'title': 'We Lift You High', 'speed': 'medium', 'tags': ['praise', 'surrender'] }, { 'title': 'What A Beautiful Name', 'speed': 'slow', 'tags': ['worthy', 'power', 'truth'] }, { 'title': 'Your Glory', 'speed': 'slowest', 'tags': ['surrender', 'sin', 'glory'] }]
  const [songs, changeSongs] = React.useState(initialSongs)

  const addSong = () => {
    const newSongs = [{ title: '', speed: 'slow', tags: [] }, ...songs]
    changeSongs(newSongs)
    localStorage.setItem('songs', JSON.stringify(newSongs))
  }

  const updateSong = (index, item) => {
    const tmp = [...songs]
    tmp.splice(index, 1, item)
    changeSongs(tmp)
    localStorage.setItem('songs', JSON.stringify(tmp))
  }

  const removeSong = (index) => {
    const tmp = [...songs]
    tmp.splice(index, 1)
    changeSongs(tmp)
    localStorage.setItem('songs', JSON.stringify(tmp))
  }

  const Songs = songs.length > 0 ? songs.map((s, i) => {
    return <ListItem key={`song-${i}`} item={s} id={i} removeItem={removeSong} updateItem={updateSong} />
  }) : []

  return (
    <div>
      <AddSongButton onClick={addSong}>+ Add Song</AddSongButton>
      <List>
        {Songs}
      </List>
    </div>
  )
}
