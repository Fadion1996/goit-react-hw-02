import React, { Component } from 'react';

import './counter.scss'

export default class Counter extends Component {
    render () {
        return (
            <section className="counter">
                <p className="counter-value">{this.props.counter}/10</p>
            </section>
        )
    }
}