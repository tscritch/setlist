import React from 'react'

export default function SongList() {
    const [songs, changeSongs] = React.useState([{ name: 'Lion and the Lamb' }])

    const Songs = songs.length > 0 ? songs.map((s, i) => {
        return <div>{s.name}</div>
    }) : []

    return (
        <div>
            {Songs}        
        </div>
    )
}
