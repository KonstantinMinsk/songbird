import React from 'react';
import './the-end.css';

const GameOver = ({ score, children }) => {

    // const { score } = this.props;    // Error because function arrow React component 
    return (
        <div className="jumbotron game-over">
            <h1 className="display-3 text-center">Поздравляем!</h1>
            <p className="lead text-center">Вы прошли викторину и набрали { score } из 30 возможных баллов</p>
            <hr className="my-4"/>
            {/* <button className="btn btn-next btn-game-over">Попробовать еще раз!</button> */}
            {
                children
            }
        </div>
    )
}

export default GameOver;