import React, { Component } from 'react';
import Header from '../header/header';
import RandomBird from '../random-bird/random-bird';
import ItemList from '../item-list/item-list';
import BirdDetails from '../bird-details/bird-details';

export default class App extends Component {

    state = {
        selectedBird: null,
        numberList: 0,
        randomId: Math.floor(Math.random()*6),
        spanColor: '',
    }

    addColor = (event) => {
        const { spanColor } = this.state;
        console.log(spanColor);
        
        const li = document.querySelector('.li-btn');
        if(event.target === li && !(li.classList.contains('error') || li.classList.contains('success'))) {
            li.firstElementChild.classList.add(spanColor)
        }
    }

    onBirdSelected = (id) => {

        const { randomId } = this.state;
        const spanColor = (randomId+1 == id) ? 'success' : 'error'
        this.setState({
            selectedBird: id,
            spanColor
        })
        document.querySelectorAll('.li-btn')[id-1].classList.add(`${spanColor}`)
    }

    render() {

        const { selectedBird, numberList, randomId, spanColor } = this.state;
        
        return (
            <React.Fragment>
                <Header />
                <RandomBird numberList={ numberList } randomId={randomId} />
                <div className='row'>
                    <ItemList onItemSelected={this.onBirdSelected} spanColor={spanColor} />
                    <BirdDetails birdId={selectedBird} numberList={ numberList } />
                </div>
            </React.Fragment>
        )
    }
}
