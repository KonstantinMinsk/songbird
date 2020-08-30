import React from 'react';

const AudioTrack = ({ audioLink }) => {
    return (
        <audio 
            src={ audioLink } 
            hidden=""
            id="player">
        </audio>
    )
}
export default AudioTrack