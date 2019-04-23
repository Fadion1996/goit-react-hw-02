import React, { Component } from 'react';

import './controls.scss'

export default class Controls extends Component {
    render () {
        return (
            <section className="controls">
                <button className="button" onClick={ () => this.handleBack() }>Previous</button>
                <button className="button" onClick={ () => this.handleNext() }>Next</button>
            </section>
        )
    }

    handleBack = () => {
        console.log(this.props);
    };
    handleNext = () => {
        // this.props.counter++
    }
}