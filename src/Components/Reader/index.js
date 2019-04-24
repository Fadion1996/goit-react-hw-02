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
                <Publication publications = {this.publications}/>
                <Counter counter = {this.state.counter}/>
                <Controls
                    onNext = { () => {
                        this.setState({counter: this.state.counter + 1});
                        console.log(this.state.counter);
                    }}
                    onBack = { () => {
                        this.setState({counter: this.state.counter - 1});
                        console.log(this.state.counter);
                    }}
                />
            </div>
        )
    }

}