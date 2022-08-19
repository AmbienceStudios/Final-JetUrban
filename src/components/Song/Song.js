import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import './Song.scss';

const Song = ({ currentSong, libraryStatus, setLibraryStatus }) => {
    return (

    

        <div className="song-container">
            <img className='cover' src={currentSong.cover} alt={currentSong.name} />            
            <div className='artistInfo'>
            <h2 className='songName'>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
                  
            </div>
            
        </div>
    )
}

Song.propTypes = {
    currentSong: PropTypes.object,
    libraryStatus: PropTypes.bool,
    setLibraryStatus: PropTypes.func
};

export default Song;