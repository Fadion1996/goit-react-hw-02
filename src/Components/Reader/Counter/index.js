import React, { Component } from 'react';

import './counter.scss'

export default class Counter extends Component {
    render () {
        const {counter, maxCounter} = this.props;
        return (
            <section className="counter">
                <p className="counter-value">{counter}/{maxCounter}</p>
            </section>
        )
    }
}