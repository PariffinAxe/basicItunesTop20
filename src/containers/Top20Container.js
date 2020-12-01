import React, {useState, useEffect} from 'react';
import SongContainer from './SongContainer.js'
import Top20List from '../components/Top20List';


const Top20Container = () => {

    const [top20, setTop20] = useState([])
    const [song, setSong] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        console.log("getting songs");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setTop20(data.feed.entry))
        .then(() => setLoaded(true));
    };

    useEffect(() => {
        getSongs();
    }, []);

    useEffect(() => {
        setSong(top20[0]);
    }, [top20])

    const chooseSong = (indexNo) => {
        setSong(top20[indexNo]);
    }

    return(
        <>
            <h1>Itunes Top 20 Hits</h1>
            <div className="div-seperator">
                <Top20List songs={top20} loaded={loaded} onChooseSong={(indexNo) => chooseSong(indexNo)}/>
                <div className="column-seperator" />
                <SongContainer song={song} loaded={loaded} />
            </div>
        </>
    )

}

export default Top20Container;