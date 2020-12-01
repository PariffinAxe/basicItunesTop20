import React from 'react';
import SongListItem from './SongListItem.js'

const Top20List = ({songs, loaded, onChooseSong}) => {

    if (!loaded){
        return(
            <p>Loading...</p>
        )
    }

    const songNodes = songs.map(song => {
        return(
            <SongListItem song={song} key={songs.indexOf(song)} index={songs.indexOf(song)} onChooseSong={(indexNo) => onChooseSong(indexNo)}/>
        )
    })

    return (
        <table className="top-20-list">
            <tr>
                <th>Position</th>
                <th>Artist</th>
                <th>Song</th>
            </tr>
            {songNodes}
        </table>
    )

}

export default Top20List;