import React, { Component } from 'react';
import MovieGridItem from 'MovieGridItem'
import './movie-grid.css'

export default class MovieGrid extends Component {
    render () {
        return (
            <div className="movie-grid">
                <MovieGridItem/>
            </div>
        )
    }
}