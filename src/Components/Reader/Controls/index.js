import React, { Component } from 'react';
import {Button} from '@material-ui/core';

import './controls.scss'

export default class Controls extends Component {
    render () {
        const {onBack, onNext} = this.props;
        return (
            <section className="controls">
                <Button
                    color="primary"
                    variant="contained"
                    className="button"
                    onClick={ onBack }>Previous</Button>
                <Button
                    color="primary"
                    variant="contained"
                    className="button"
                    onClick={ onNext }>Next</Button>
            </section>
        )
    }
}