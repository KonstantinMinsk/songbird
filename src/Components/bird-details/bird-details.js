import React, { Component } from 'react';
import './bird-details.css'
import AudioPlayer from '../audio-player/audio-player';

export default class BirdDetails extends Component {

    render() {
        return (
            <div className='col-md-6'>
                <div className="bird-details card">
                    {/* <p className="instruction">
                        <span>Послушайте плеер.</span>
                        <span>Выберите птицу из списка</span>
                    </p> */}
                    <div className="bird-details card">
                        <img className="bird-image" src="https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg" alt="Козодой"/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h4>Козодой</h4></li>
                            <li className="list-group-item"><span>Caprimulgus europaeus</span></li>
                            <li className="list-group-item">
                                <AudioPlayer />
                            </li>
                        </ul>
                        <span className="bird-description">
                            Козодой – неприметная птица, известная благодаря своему голосу. 
                            Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. 
                            Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. 
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}