import React, { Component } from 'react';
import './app.css'

import Header from '../header/header';
import RandomBird from '../random-bird/random-bird';
import ItemList from '../item-list/item-list';
import BirdDetails from '../bird-details/bird-details';


export default class App extends Component {

    state = {
        selectedBird: null,
        numberList: 0,
        randomId: Math.floor(Math.random()*6),
    }
    
    onBirdSelected = (id) => {
        const { randomId } = this.state;
        const spanColor = (randomId+1 == id) ? 'success' : 'error';
        const btnColor  = (randomId+1 == id) ? 'btn-next' : null;
        this.setState({
            selectedBird: id,
        })
        document.querySelectorAll('.li-btn')[id-1].classList.add(`${spanColor}`);
        document.querySelector('.btn').classList.add(`${btnColor}`)
    }

    render() {

        const { selectedBird, numberList, randomId } = this.state;
        
        return (
            <React.Fragment>
                <Header />
                <RandomBird numberList={ numberList } 
                            randomId={ randomId }  
                            birdId={ selectedBird }/>
                <div className='row'>
                    <ItemList onItemSelected={ this.onBirdSelected } />
                    <BirdDetails birdId={ selectedBird } numberList={ numberList } />
                </div>
                <button className="btn" id="btn">Next Level</button>
            </React.Fragment>
        )
    }
}
