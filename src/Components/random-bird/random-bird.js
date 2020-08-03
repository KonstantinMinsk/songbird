import React, { Component } from 'react';
import './random-bird.css'
import AudioPlayer from '../audio-player/audio-player';
import birdsData from '../../Service/data';

export default class RandomBird extends Component {

    state = {
        id: 4,
        name: null,
        image: null,
    }

    componentDidMount() {
        this.updateBird();
    }

      
    updateBird() {
        const { id } = this.state;
        const bird = birdsData[4][id];
        this.setState({
            name: bird.name,
            image: bird.image,
        })        
      }

    render() {
        const { name, image, audio } = this.state;        
        return (
            <div className="random-bird jumbotron rounded">
                <img className="bird-image" src={ image } alt={ name }></img>
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h3> { name } </h3></li>
                        <li className="list-group-item">
                            <AudioPlayer />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}