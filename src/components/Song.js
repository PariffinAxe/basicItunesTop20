import React, {useState, useEffect} from 'react';

const Song = ({song}) => {

    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [artist, setArtist] = useState("");

    useEffect(() => {
        setTitle(song["im:name"].label)
        setArtist(song["im:artist"].label)
        setImageUrl(song["im:image"][0].label)
    }, [song])

    return(
        <div className="single-song">
            <img src={imageUrl} className="song-image"/>
            <h2>{artist}</h2>
            <h3>{title}</h3>
        </div>
    )

}

export default Song;