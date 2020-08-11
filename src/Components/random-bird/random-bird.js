import React, { Component } from 'react';
import './random-bird.css';
import icon from '../../img/bird.jpg';
import AudioPlayer from '../audio-player/audio-player';
import birdsData from '../../Service/data';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class RandomBird extends Component {

    bird = birdsData[this.props.numberList][this.props.randomId];

    state = {
        name: '*****',
        image: icon,
        audio: this.bird.audio,
    }

    componentDidMount() {
        // this.updateBird();
    }

    componentDidUpdate(prevProps) {
        if(this.props.birdId !== prevProps.birdId ) {
          this.updateBird();
        }
      }

      
    updateBird() {
        
        const { numberList, randomId, birdId } = this.props;
        if(randomId+1 !== birdId) {
            return
        }

        this.setState({
            name: this.bird.name,
            image: this.bird.image,
        })        
      }

    render() {
        const { name, image, audio } = this.state;  
        
        const randomBird = (
            <div className="random-bird jumbotron rounded">
                <img className="bird-image" src={ image } alt={ name }></img>
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h3> { name } </h3></li>
                        <li className="list-group-item">
                            <AudioPlayer 
                                audioLink={ audio } 
                                />
                        </li>
                    </ul>
                </div>
            </div>
        )
        
        return (
            <ErrorBoundary>
                { randomBird }
            </ErrorBoundary>
        )
    }
}