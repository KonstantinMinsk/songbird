import React, { Component } from 'react';
import './item-list.css'
import birdsData from '../../Service/data';
import Spinner from '../spinner/spinner'
import ErrorBoundary from '../error-boundary/error-boundary';
export default class ItemList extends Component {
    
    state = {
        birdsList: null,
        loading: true,
    }

    componentDidMount() {
        this.updateBirdList();
    }
    componentDidUpdate(prevProps) {
        if(this.props.numberList !== prevProps.numberList) {
          this.setState({
            loading: true
          })
          this.updateBirdList();
        }
    }

    updateBirdList() {
        const { numberList } = this.props;
        const birdsList = birdsData[numberList];
        this.setState({ 
            birdsList,
            loading: false
         })        
      }

    renderItem(arr) {
        return arr.map(bird => {
            const { id, name } = bird;

            return (
                <li className="list-group-item li-child-color" 
                    id={id}
                    key={id} 
                    onClick={ (e) => this.props.onItemSelected(id, e) }
                >
                    <span className={`li-btn`}></span>
                    { name }
                </li>
            )
        })
    }

    render() {
        const { birdsList, loading } = this.state;        
        if(loading) {
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