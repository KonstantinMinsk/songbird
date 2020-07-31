import React from 'react';
import Header from '../header/header';
import RandomBird from '../random-bird/random-bird';
import ItemList from '../item-list/item-list';
import BirdDetails from '../bird-details/bird-details';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <RandomBird />
            <div className='row'>
                <ItemList />
                <BirdDetails />
            </div>
        </React.Fragment>
    )
}

export default App