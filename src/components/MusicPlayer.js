import React, { useState } from 'react';

import Player from './Player/Player';
import Song from './Song/Song';
import Library from './Library/Library';
import Nav from './Nav/Nav';

import musicData from '../utils/data';

import './MusicPlayer.css';

const MusicPlayer = () => {
    const [songs, setSongs] = useState(musicData().map((song, index) => {return {...song, active: index === 0 ? true : false}}));
    const [isPlaying, setIsPlaying] = useState(false);
    const [libraryStatus, setLibraryStatus] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [isInFavorites, setIsInFavorites] = useState(false);
    const currentSong = songs[songs.findIndex(song => song.active)];
    const favoriteSongs = favorites.length > 0 ? songs.filter(song => favorites.some(fav => fav.favoriteId === song.id)) : [];
    return (
        <div className={`${libraryStatus ? 'library-active' : ''}`}>
            
            <Nav className="navBarContainer"
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus} />
            <Song className="songContainer"
                currentSong={currentSong} />
            <Player className="trackContainer"
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong} 
                songs={songs}
                favoriteSongs={favoriteSongs}
                setSongs={setSongs}
                favorites={favorites}
                isInFavorites={isInFavorites}
                setFavorites={setFavorites} />
            <Library 
                songs={songs} 
                setSongs={setSongs}
                libraryStatus={libraryStatus}
                favoriteSongs={favoriteSongs}
                setIsInFavorites={setIsInFavorites}
                setLibraryStatus={setLibraryStatus} />
                </div>
       
    )
}

export default MusicPlayer;
