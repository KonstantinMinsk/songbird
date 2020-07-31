import React, { Component } from 'react';
import './audio-player.css'

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
    s < 10 ? (s = `0${s}`) : s = s
    return { m: `0${m}`, s: `${s}`}
    return `0${m} : ${s}`
}

export default class AudioPlayer extends Component {

    state = {
        playMode: true,
        lengthTimeBar: null,
        songDuration: { m: '00', s: '00'},
    }

    play = () => {
        const player = document.querySelector('#player');
        const lengthTimeBar = document.querySelector('.timebar-bar').offsetWidth;
        const songDuration = time(Math.floor(player.duration));
        const { playMode } = this.state;        
        playMode === true ? player.play() : player.pause();
        console.log({songDuration});
        
        this.setState({
            playMode: !playMode,
            lengthTimeBar,
            songDuration,
        })        
    }

    render() {
        
        const { playMode } = this.state;  
        const { m, s } = this.state.songDuration;  
        const playButtonSVG = playMode 
                                ? <svg viewBox="-200 0 1200 1000"><path fill="#00bc8c" d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"></path></svg>
                                :  <svg viewBox="0 0 47.607 47.607"><path fill="#00bc8c" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"></path></svg>
        const timeBarStyle = { 
            background: 'linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) 0%, rgb(115, 115, 115) 0%, rgb(115, 115, 115) 100%)'
        };

        return (
            <div className="audio-player">
                <audio 
                    src="https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3" 
                    hidden=""
                    id="player">
                </audio>
                <div className="controls">
                    <div className="playback-button"
                         onClick={this.play}>
                            { playButtonSVG }
                    </div>
                    <div className="timebar">
                        <div className="timebar-bar" style={timeBarStyle}></div>
                        <div className="timebar-circle"></div>
                        <div className="timebar-time-info">
                            <div>00:00</div>
                            <div> { m } : { s } </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}