import React, { Component } from 'react';

import './movie-grid.css'

export default class MovieGrid extends Component {
    render () {
        return (
            <div className="movie-search">
                <input type="text" className="input"/>
            </div>
        )
    }
}