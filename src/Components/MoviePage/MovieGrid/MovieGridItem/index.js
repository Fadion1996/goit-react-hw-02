import React, { Component } from 'react';

import './movie-grid-item.css'

export default class MovieGridItem extends Component {
    render () {
        const { movie } = this.props;
        return (
            <div className="movie-card">
                <img src={movie.posterUrl} alt=""/>
                <div className="content">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
        )
    }
}