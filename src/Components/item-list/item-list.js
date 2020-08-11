import React, { Component } from 'react';
import './item-list.css'
import birdsData from '../../Service/data';
import Spinner from '../spinner/spinner'
import ErrorBoundary from '../error-boundary/error-boundary';
export default class ItemList extends Component {

    state = {
        idList: 0,
        birdsList: null,
    }

    componentDidMount() {
        const { idList } = this.state;
        const birds = birdsData[idList]
        this.setState({
            birdsList: birds,
        })
    }

    renderItem(arr) {
        return arr.map(bird => {
            const { id, name } = bird;

            return (
                <li className="list-group-item" 
                    id={id}
                    key={id} 
                    onClick={ () => this.props.onItemSelected(id) }
                >
                    <span className={`li-btn`}></span>
                    { name }
                </li>
            )
        })
    }

    render() {
        const { birdsList } = this.state;        
        if(!birdsList) {
            return <Spinner />
        }
        const birds = this.renderItem(birdsList);

        return (
            <ErrorBoundary>
                <div className="col-md-6">
                    <ul className="item-list list-group">
                    { birds }
                    </ul>
                </div>
            </ErrorBoundary>
        )
    }
}