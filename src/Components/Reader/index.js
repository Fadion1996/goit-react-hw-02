import React, { Component } from 'react';

import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';



export default class Reader extends Component {

    state = {
        counter: 1,
    };

    publications = require('../../Data/publications/publications.json');

    render () {
        return (
            <div className="reader">
                <Publication
                    publications = {this.publications}
                    counter = {this.state.counter - 1}
                />
                <Counter
                    counter = {this.state.counter}
                    maxCounter = {this.publications.length}
                />
                <Controls
                    counter = {this.state.counter}
                    maxCounter = {this.publications.length}
                    onNext = { () =>
                        this.state.counter < this.publications.length &&
                            this.setState({counter: this.state.counter + 1})
                    }
                    onBack = { () =>
                        this.state.counter > 1 &&
                        this.setState({counter: this.state.counter - 1})
                    }
                />
            </div>
        )
    }

}