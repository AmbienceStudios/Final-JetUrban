import React from 'react';
import PropTypes from 'prop-types';

import './Song.scss';

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img className='cover' src={currentSong.cover} alt={currentSong.name} />
            <h2 className='songName'>{currentSong.name}</h2>
            <div className='artistlink'>
            <h3><a target="_blank" rel="noopener noreferrer" href={currentSong.shareLink}> {currentSong.artist} </a></h3>
            </div>
        </div>
    )
}

Song.propTypes = {
    currentSong: PropTypes.object
};

export default Song;