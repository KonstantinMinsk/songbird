import React, { Component } from 'react';
import ErrorBoundary from '../error-boundary/error-boundary';

class Score extends Component {

    componentDidUpdate(prevProps) {
        if(this.props.score !== prevProps.score ) {
            this.render();
          }
    }

    render() {
        const { score } = this.props;

        return (
            <ErrorBoundary>
                <h3>Score: <span className='score'> { score } </span></h3>
            </ErrorBoundary>
        )
    }
}

export default Score