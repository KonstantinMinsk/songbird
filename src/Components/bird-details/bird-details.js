import React, { Component } from 'react';
import './bird-details.css'
import AudioPlayer from '../audio-player/audio-player';
import birdsData from '../../Service/data';

export default class BirdDetails extends Component {

    state = {
        bird: null,
        loading: true,
    }

    componentDidMount() {
        this.updateBird();
    }

    componentDidUpdate(prevProps) {
        if(this.props.birdId !== prevProps.birdId) {
          this.setState({
            loading: true
          })
          this.updateBird();
        }
      }

    updateBird() {
        const { birdId } = this.props;
        const bird = birdsData[0][birdId-1];
        this.setState({ 
            bird: bird,
            loading: false
         })        
      }

    render() {
        
        const { bird } = this.state;
        const content = !bird ? <Info /> : <ViewBird bird={bird} />
        return (
            <div className='col-md-6'>
                <div className="bird-details card">
                    { content }
                </div>
            </div>
        )
    }
}

const ViewBird = ({ bird }) => {
       
    const { id, name, species, description, image, audio } = bird
    
    return (
        <div className="bird-details card">
            <div className='d-flex flex-wrap'>
                <img className="bird-image" src={ image } alt={ name }/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h4> { name } </h4></li>
                    <li className="list-group-item"><span> { species } </span></li>
                    <li className="list-group-item">
                        <AudioPlayer audio={ audio } name={ name } />
                    </li>
                </ul>
            </div>
            <span className="bird-description">
                { description } 
            </span>
        </div>
    )
}

const Info = () => {
    return (
        <div className='info'>
            <h4> Послушайте плеер. </h4>
            <h6> Выберите птицу из списка, пение которой Вы услышали! </h6>
        </div>    
    )
}