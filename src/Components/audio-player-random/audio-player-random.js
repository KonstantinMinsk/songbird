import React, { Component } from 'react';
import './audio-player.css'
import ErrorBoundary from '../error-boundary/error-boundary';

const time = (duration) => {
    let m = 0;
    let s = 0;
    while(duration>0) {
        if(duration >= 60){
            m+=1;
            duration-=60;
        } else {
            s += duration;
            duration-=duration;
        }
    }
    (s < 10) ? (s = `0${s}`) : (s+=0);
    (m >= 10) ? (m+=0) : (m = `0${m}`);
    return { m: `${m}`, s: `${s}`}
}

export default class AudioPlayerRandom extends Component {

    state = {
        player: null,
        playMode: true,
        lengthTimeBar: null,
        currentTimePlayer: null,
        songDuration: { m: '00', s: '00'},
        playPercent: 0,
        currentTime: { m: '00', s: '00'},
    }

    componentDidMount()  {
        this.setState({
            player: document.querySelector('#playerRandom'),
        })
    }

    componentDidUpdate(prevProps) {
        if( this.props.name !== prevProps.name || 
            this.props.audioLink !== prevProps.audioLink) {
                this.setState({
                    playMode: true,
                    lengthTimeBar: null,
                    currentTimePlayer: null,
                    songDuration: { m: '00', s: '00'},
                    playPercent: 0,
                    currentTime: { m: '00', s: '00'},
                })
        }

        const { playMode, player, playPercent } = this.state;
        if(!playMode) {
            this.timePlayOneSecond = setTimeout(() => {
                player.addEventListener('timeupdate', 
                                        this.timeUpdate(player.currentTime, player.duration),
                                        false)
            }, 1);
        }
        if(playPercent === 100) {
            this.setState({
                playMode: true,
                playPercent: 0,
            })
        }
    }

    componentWillMount() {
        clearInterval(this.timePlayOneSecond)
    }

    timeUpdate = (currentTime, duration) => {
        let playPercent = 100 * (currentTime / duration);
        this.setState({
            currentTime: time(Math.floor(currentTime)),
            playPercent,
        })
    }

    playAudio = () => {
        const { player, playMode } = this.state;
        
        const lengthTimeBar = document.querySelector('.timebar-bar').offsetWidth; // ?
        const songDuration = time(Math.floor(player.duration));
        playMode === true ? player.play() : player.pause();
        
        this.setState({
            playMode: !playMode,
            lengthTimeBar,
            songDuration
        })        
    }

    render() {
        const { playMode, playPercent: p, songDuration: { m, s }, currentTime: { m : M, s: S } } = this.state;  
        
        const playButtonSVG = playMode 
                                ? <svg viewBox="-200 0 1200 1000"><path fill="#00bc8c" d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"></path></svg>
                                :  <svg viewBox="0 0 47.607 47.607"><path fill="#00bc8c" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"></path></svg>

        const { audioLink } = this.props;
        const audioPlayerRandom = (
            <div className="audio-player">
                {/* <audio 
                    src={ audioLinkRandom } 
                    hidden=""
                    id="player-random">
                </audio> */}
                {
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, { audioLink })
                    })
                }
                {/* { this.props.children } */}
                <div className="controls">
                    <div className="playback-button"
                         onClick={this.playAudio}>
                            { playButtonSVG }
                    </div>
                    <div className="timebar">
                        <div className="timebar-bar" style={{
                            background: `linear-gradient(to right, rgb(0, 188, 140) 0%, 
                        rgb(61, 133, 140) ${p}%, rgb(115, 115, 115) ${p}%, rgb(115, 115, 115) 100%)`
                        }}></div>
                        <div className="timebar-circle" style={{left: `${p}%`}}></div>
                        <div className="timebar-time-info">
                            <div> { M } : { S } </div>
                            <div> { m } : { s } </div>
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            <ErrorBoundary>
                { audioPlayerRandom }
            </ErrorBoundary>
        )
    }
}