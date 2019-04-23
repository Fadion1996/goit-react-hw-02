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
                <Controls counter = {this.state.counter}/>
            </div>
        )
    }
}