import React from 'react';
import Song from '../components/Song.js'

const SongContainer = ({song, loaded}) => {

    if (!loaded){
        return(
            <p>loading...</p>
        )
    } 

    return (
        <Song song={song} />
    )

}

export default SongContainer;