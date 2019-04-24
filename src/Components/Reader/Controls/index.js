import React, { Component } from 'react';

import './controls.scss'

export default class Controls extends Component {
    render () {
        const {onBack, onNext} = this.props;
        return (
            <section className="controls">
                <button className="button" onClick={ onBack }>Previous</button>
                <button className="button" onClick={ onNext }>Next</button>
            </section>
        )
    }
}