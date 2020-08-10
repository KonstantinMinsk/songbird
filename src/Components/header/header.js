import React, { Component } from 'react';
import './header.css'
import Score from '../score/score';
import { render } from '@testing-library/react';

class Header extends Component {

    render() {
        const { score } = this.props;

        return (
            <div className='header'>
                <div className='top-panel'>
                    <div className='logo'></div>
                    <Score score={ score } />
                </div>
                <ul className='pagination'>
                    <li className='page-item active'>
                        <a className='page-link' href='#'> Разминка </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href='#'> Воробьиные </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href='#'> Лесные птицы </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href='#'> Певчие птицы </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href='#'> Хищные птицы </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href='#'> Морские птицы </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header