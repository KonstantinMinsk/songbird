import React from 'react';

const AudioTrackRandom = (props) => {
    const { audioLink, win } = props;
    
    return (
        <audio 
            src={ audioLink } 
            hidden=""
            id="playerRandom"
            autoPlay={ win }    
        >
        </audio>
    )
}
export default AudioTrackRandom