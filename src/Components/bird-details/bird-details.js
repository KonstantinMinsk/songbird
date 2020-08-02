import React, { Component } from 'react';
import './bird-details.css'
import AudioPlayer from '../audio-player/audio-player';
import birdsData from '../../Service/data';

export default class BirdDetails extends Component {

    state = {
        bird: {
            id: 0,
            name: null,
            species: null,
            description: null,
            image: null,
            audio: null
        }
    }

    componentDidMount() {
        this.updateBird();
    }

      
    updateBird() {
        const { id } = this.state;
        const bird = birdsData[0][1];
        this.setState({ bird: bird })        
      }

    render() {

        const { bird: {id, name, species, description, image, audio} } = this.state;

        return (
            <div className='col-md-6'>
                <div className="bird-details card">
                    {/* <p className="instruction">
                        <span>Послушайте плеер.</span>
                        <span>Выберите птицу из списка</span>
                    </p> */}
                    <div className="bird-details card">
                        <div className='d-flex flex-wrap'>
                            <img className="bird-image" src={ image } alt={ name }/>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><h4> { name } </h4></li>
                                <li className="list-group-item"><span> { species } </span></li>
                                <li className="list-group-item">
                                    <AudioPlayer />
                                </li>
                            </ul>
                        </div>
                        <span className="bird-description">
                            { description } 
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}