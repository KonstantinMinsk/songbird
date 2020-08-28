import React, { Component } from 'react';
import './app.css'

import Header from '../header/header';
import RandomBird from '../random-bird/random-bird';
import ItemList from '../item-list/item-list';
import BirdDetails from '../bird-details/bird-details';
import ErrorBoundary from '../error-boundary/error-boundary';
import GameOver from '../the-end/the-end';
import AudioTrackRandom from '../audio-track-random/audio-track--random';
import birdsData from '../../Service/data';
import AudioPlayerRandom from '../audio-player-random/audio-player-random';


export default class App extends Component {

    state = {
        selectedBird: null,
        numberList: 0,
        randomId: Math.floor(Math.random()*6),
        score: 0,
        s: 5,
        disabled: true,
        win: false,
        activeNavItem: 0,
    }
    
    onCurrentScore = (id, e) => {
        const { randomId, score, s, win } = this.state;
        if(randomId+1 !== id) {
            if (!e.target.classList.contains('success') && !e.target.classList.contains('error')) {
                this.setState({
                    s: s-1,
                })
            }
        } else {
            if(!win){
                this.setState({
                    score: score+s,
                    disabled: false,
                    win: true
                })
            }
        }
    }

    onBirdSelected = (id, e) => {
        const { randomId, win } = this.state;
        
        const spanColor = !win ? ((randomId+1 === id) ? 'success' : 'error') : null;
        const btnColor  = (randomId+1 === id) ? 'btn-next' : null;

        this.onCurrentScore(id, e);

        this.setState({
            selectedBird: id,
        })

        document.querySelectorAll('.li-child-color')[id-1].classList.add(`${spanColor}`);
        document.querySelector('.btn').classList.add(`${btnColor}`);
    }

    onNextStep = () => {
        const { score, numberList, activeNavItem } = this.state;        
        let n = numberList+1;
        let active = activeNavItem +1;

        document.querySelectorAll('.li-child-color').forEach( li => li.classList.remove('error', 'success'));
        document.querySelector('.btn').classList.toggle('btn-next');
        this.setState({
            selectedBird: null,
            numberList: n,
            randomId: Math.floor(Math.random()*6),
            score,
            s: 5,
            disabled: true,
            win: false,
            activeNavItem: active
        })
    }

    repeatGame = () => {
        this.setState({
            selectedBird: null,
            numberList: 0,
            randomId: Math.floor(Math.random()*6),
            score: 0,
            s: 6,
            disabled: true,
            win: false,
            activeNavItem: 0
        })
    }

    render() {

        const { 
            selectedBird, numberList, randomId, score, disabled, win, activeNavItem,
        } = this.state;

        const audioLink = numberList<6 
                            ? (!win ? birdsData[numberList][randomId].audio : 'https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3')
                            : null;        

        if(numberList === 6) { return (
            <React.Fragment>
                <Header score={ score } active={ activeNavItem } />
                <GameOver score={ score }>
                    <button className="btn btn-game-over" onClick={ () => this.repeatGame() } >
                        Попробовать еще раз!
                    </button>
                </GameOver>
            </React.Fragment>
        )} 

        return (
            <React.Fragment>
                <Header score={ score } active={ activeNavItem } />
                <RandomBird numberList={ numberList } 
                            randomId={ randomId }  
                            birdId={ selectedBird }
                            win={ win }
                >
                    <AudioPlayerRandom audioLink={ audioLink } >
                        <AudioTrackRandom win={ win } />
                    </AudioPlayerRandom>
                </RandomBird>
                <div className='row'>
                    <ItemList onItemSelected={ this.onBirdSelected } numberList={ numberList } />
                    <BirdDetails birdId={ selectedBird } numberList={ numberList } >
                        {/* <AudioPlayer >
                            <AudioTrack />
                        </AudioPlayer> */}
                    </BirdDetails>
                </div>
                <ErrorBoundary>
                    <button className="btn" 
                            onClick={ () => this.onNextStep() }
                            disabled={ disabled } 
                        > Next Level
                    </button>
                </ErrorBoundary>
            </React.Fragment>
        )
    }
}
