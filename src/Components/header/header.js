import React, { Component } from 'react';
import './header.css'
import Score from '../score/score';
import { render } from '@testing-library/react';
import ErrorBoundary from '../error-boundary/error-boundary';

class Header extends Component {

    state = {
        linkName: ['Разминка',  'Воробьиные', 'Лесные птицы', 'Певчие птиц', 'Хищные птицы', 'Морские птицы'],
    }

    renderMenuItemActive(arr) {
        return arr.map( (name, i) => {
                const { active } = this.props;
                const classes = (active == i) ? 'page-item active' : 'page-item';
                return(
                    <li className={ classes } key={i+1}>
                        <a className='page-link' href='#'> { name } </a>
                    </li>
                )
            })
    }

    render() {
        const { score, active } = this.props;
        const { linkName } = this.state;
        // console.log(navMenu.props.children[0].props);

        const navMenu = this.renderMenuItemActive(linkName);
        
        return (
            <ErrorBoundary>
                <div className='header'>
                    <div className='top-panel'>
                        <div className='logo'></div>
                        <Score score={ score } />
                    </div>
                    <ul className='pagination'>
                        {/* <li className='page-item active'>
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
                        </li> */}
                        { navMenu }
                    </ul>
                </div>
            </ErrorBoundary>
        )
    }
}

export default Header