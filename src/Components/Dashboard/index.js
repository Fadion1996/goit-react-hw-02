import React, { Component } from 'react';
import './dashboard.css'
import Balance from './Balance';
import Controls from './Controls';
import TransactionHistory from './TransactionHistory';

export default class MoviePage extends Component {

    render () {
        return (
            <section className="movie-page">
                <Balance/>
                <Controls/>
                <TransactionHistory/>
            </section>
        )
    }
}