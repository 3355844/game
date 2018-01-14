import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Grid extends React.Component {
    render(){
        return(
            <div>
                Grid
            </div>
        );
    }
}

class Main extends React.Component {

    constructor() {
        super();
        this.state= {
            generation: 0

        }
    }

    render() {
        return (
            <div className="">
                <h1>Game of life</h1>
                <Grid />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root'));
