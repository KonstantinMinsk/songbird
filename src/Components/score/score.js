import React, { Component } from 'react';

class Score extends Component {

    componentDidUpdate(prevProps) {
        if(this.props.score !== prevProps.score ) {
            this.render();
          }
    }

    render() {
        const { score } = this.props;

        return (
            <h3>Score: <span className='score'> { score } </span></h3>
        )
    }
}

export default Score