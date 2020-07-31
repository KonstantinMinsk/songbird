import React, { Component } from 'react';
import './random-bird.css'
import AudioPlayer from '../audio-player/audio-player';

const RandomBird = () => {
        return (
            <div className="random-bird jumbotron rounded">
                <img className="bird-image" src="https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg" alt="Ворон"></img>
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h3>Ворон</h3></li>
                        <li className="list-group-item">
                            <AudioPlayer />
                        </li>
                    </ul>
                </div>
            </div>
        )
}
export default RandomBird;