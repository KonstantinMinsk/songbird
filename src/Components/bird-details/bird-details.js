import React, { Component } from 'react';
import './bird-details.css'
import AudioPlayer from '../audio-player/audio-player';
import birdsData from '../../Service/data';
import ErrorBoundary from '../error-boundary/error-boundary';
import AudioTrack from '../audio-track/audio-track';

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
        const { birdId, numberList } = this.props;
        const bird = birdsData[numberList][birdId-1];
        this.setState({ 
            bird: bird,
            loading: false
         })        
      }

    render() {
        const { bird } = this.state;
        // const audioLink = !bird ? null : bird.audio
        // const viewBird = !bird
        //                  ? null 
        //                  : ( 
        //     <ErrorBoundary>
        //         <div className="bird-details card">
        //             <div className='d-flex flex-wrap'>
        //                 <img className="bird-image" src={ bird['image'] } alt={ bird.name }/>
        //                 <ul className="list-group list-group-flush">
        //                     <li className="list-group-item"><h4> { bird.name } </h4></li>
        //                     <li className="list-group-item"><span> { bird.species } </span></li>
        //                     <li className="list-group-item">
        //                     </li>
        //                 </ul>
        //             </div>
        //             {
        //                 React.Children.map(this.props.children, child => {
        //                     return React.cloneElement(child)
        //                 })
        //             }
        //             <span className="bird-description">
        //                 { bird.description } 
        //             </span>
        //         </div>
        //     </ErrorBoundary>
        //     )

        const content = !bird 
                            ? <Info /> 
                            : <ViewBird bird={bird} />
                            // : { viewBird }
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
    const { name, species, description, image, audio: audioLink } = bird;
    // console.log(audioLink);
    
    return (
        <ErrorBoundary>
            <div className="bird-details card">
                <div className='d-flex flex-wrap'>
                    <img className="bird-image" src={ image } alt={ name }/>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h4> { name } </h4></li>
                        <li className="list-group-item"><span> { species } </span></li>
                        <li className="list-group-item">
                        </li>
                    </ul>
                </div>
                <AudioPlayer audioLink={ audioLink } >
                    <AudioTrack />
                </AudioPlayer>
                {/* {
                    React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, { audioLink })
                    })
                } */}
                <span className="bird-description">
                    { description } 
                </span>
            </div>
        </ErrorBoundary>
    )
}

const Info = () => {
    return (
        <div className='info'>
            <h4> Послушайте плеер. </h4>
            <h6> Выберите из списка птицу, пение которой Вы услышали! </h6>
        </div>    
    )
}