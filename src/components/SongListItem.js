import React, {useState, useEffect} from 'react';

const SongListItem = ({song, index, onChooseSong}) => {

    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        setArtist(song["im:artist"].label)
        setTitle(song["im:name"].label)
    }, [])


    return(
        <>
            <tr onClick={() => onChooseSong(index)}>
                <th>{index+1}</th>
                <th>{artist}</th>
                <th>{title}</th>
            </tr>
        </>
    )

}

export default SongListItem;