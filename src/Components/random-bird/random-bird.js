import React, { Component } from 'react';
import './random-bird.css'
import AudioPlayer from '../audio-player/audio-player';
import birdsData from '../../Service/data';

export default class RandomBird extends Component {

    state = {
        name: null,
        image: null,
    }

    componentDidMount() {
        this.updateBird();
    }

      
    updateBird() {
        const { numberList, randomId } = this.props;
        const bird = birdsData[numberList][randomId];
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
                            {/* <AudioPlayer /> */}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}