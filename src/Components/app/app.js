import React, { Component } from 'react';
import './app.css'

import Header from '../header/header';
import RandomBird from '../random-bird/random-bird';
import ItemList from '../item-list/item-list';
import BirdDetails from '../bird-details/bird-details';
import ErrorBoundary from '../error-boundary/error-boundary';


export default class App extends Component {

    state = {
        selectedBird: null,
        numberList: 0,
        randomId: Math.floor(Math.random()*6),
        score: 0,
        s: 5,
        disabled: true,
    }
    
    onCurrentScore = (id) => {
        const { randomId, s } = this.state;
        if (randomId+1 !== id) {
            this.setState({
                s: s-1,
            })
        } else {
            this.setState({
                score: s,
                disabled: false
            })
        }
    }

    onBirdSelected = (id) => {
        const { randomId } = this.state;
        
        const spanColor = (randomId+1 == id) ? 'success' : 'error';
        const btnColor  = (randomId+1 == id) ? 'btn-next' : null;
        this.onCurrentScore(id)
        this.setState({
            selectedBird: id,
        })
        document.querySelectorAll('.li-btn')[id-1].classList.add(`${spanColor}`);
        document.querySelector('.btn').classList.add(`${btnColor}`)
    }

    onNextQuiz = () => {
        const { score, numberList } = this.state;
        let s = score+5;
        let n = numberList+1;
        this.setState({
            numberList: n,
            s: s,
        })
    }

    render() {

        const { selectedBird, numberList, randomId, score, disabled } = this.state;

        return (
            <React.Fragment>
                <Header score={ score } />
                <RandomBird numberList={ numberList } 
                            randomId={ randomId }  
                            birdId={ selectedBird }/>
                <div className='row'>
                    <ItemList onItemSelected={ this.onBirdSelected } />
                    <BirdDetails birdId={ selectedBird } numberList={ numberList } />
                </div>
                <ErrorBoundary>
                    <button className="btn" 
                            id="btn"
                            onClick={ () => this.onNextQuiz() }
                            disabled={ disabled } 
                        > Next Level
                    </button>
                </ErrorBoundary>
            </React.Fragment>
        )
    }
}
