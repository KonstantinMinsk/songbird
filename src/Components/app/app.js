import React, { Component } from 'react';
import Header from '../header/header';
import RandomBird from '../random-bird/random-bird';
import ItemList from '../item-list/item-list';
import BirdDetails from '../bird-details/bird-details';

export default class App extends Component {

    state = {
        selectedBird: null,

    }

    onBirdSelected = (id) => {
        this.setState({
            selectedBird: id,
        })
    }

    render() {

        const { selectedBird } = this.state;
        return (
            <React.Fragment>
                <Header />
                <RandomBird />
                <div className='row'>
                    <ItemList onItemSelected={this.onBirdSelected} />
                    <BirdDetails birdId={selectedBird} />
                </div>
            </React.Fragment>
        )
    }
}
