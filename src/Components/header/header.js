import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='top-panel'>
                <div className='logo'></div>
                <h3>Score: <span className='score'>0</span></h3>
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

export default Header