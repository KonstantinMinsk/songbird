import React, { Component } from 'react';
import './random-bird.css';
import icon from '../../img/bird.jpg';
import birdsData from '../../Service/data';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class RandomBird extends Component {

    bird = birdsData[this.props.numberList][this.props.randomId];

    state = {
        name: '*****',
        image: icon,
        audio: null,
    }

    componentDidMount() {
        this.renderBird();
    }

    componentDidUpdate(prevProps) {
        const { win } = this.props;
        if(this.props.win !== prevProps.win) {
            !win ? this.resetBird() : this.updateBird(); 
        }
    }

    renderBird() {
        const { numberList, randomId } = this.props;
        const bird = birdsData[numberList][randomId];
        this.setState({ 
            audio: bird.audio,
         }) 
    }
      
    updateBird() {
        const { numberList, randomId, birdId } = this.props;
        const bird = birdsData[numberList][randomId];
        if(randomId+1 !== birdId) {
            return
        }
        this.setState({
            name: bird.name,
            image: bird.image,
        })        
    }

    resetBird() {
        this.setState({
            name: '*****',
            image: icon,
            audio: null,
        })        
    }

    render() {
        const { name, image, 
            // audio: audioLink 
        } = this.state;  
        // const { audioLink } = this.props;
        
        const randomBird = (
            <div className="random-bird jumbotron rounded">
                <img className="bird-image" src={ image } alt={ name }></img>
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h3> { name } </h3></li>
                        <li className="list-group-item">
                            { this.props.children }
                            {/* {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, { audioLink })
                                })
                            } */}
                            {/* <AudioPlayer audioLink={ audioLink }>
                                <AudioPlayerRandom />
                            </AudioPlayer> */}
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