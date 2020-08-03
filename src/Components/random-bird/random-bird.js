import React, { Component } from 'react';
import './random-bird.css';
import icon from './bird.jpg';
import AudioPlayer from '../audio-player/audio-player';
import birdsData from '../../Service/data';

export default class RandomBird extends Component {

    state = {
        name: '*****',
        image: icon,
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