import React, { Component } from 'react';
import {Button} from '@material-ui/core';

import './controls.css'

export default class Controls extends Component {
    state = {
        next: true,
        prev: false,
    };

    render () {
        const {onBack, onNext, counter, maxCounter} = this.props;

        return (
            <section className="controls">
                <Button
                    color="primary"
                    variant="contained"
                    className="button"
                    disabled={(counter === 1)}
                    onClick={ onBack }>Previous</Button>
                <Button
                    color="primary"
                    variant="contained"
                    className="button"
                    disabled={(counter === maxCounter)}
                    onClick={ onNext }>Next</Button>
            </section>
        )
    }
}