import React, {Component, Fragment} from 'react';
import MovieGridItem from './MovieGridItem'
import './movie-grid.css'

export default class MovieGrid extends Component {

    movies = require('../../../Data/movies/movies');

    render () {
        const {searchValue} = this.props;
        let checkSearch;
        let flagSearch = false;
        return (
            <Fragment>
                <div className='movie-grid'>
                    {this.movies.map((movie) => {
                        if (searchValue) {
                            checkSearch = (movie.title.toLowerCase().search(searchValue.toLowerCase()) !== -1);
                            if (checkSearch) {
                                flagSearch = true;
                                return (
                                    <MovieGridItem movie={movie} key={movie.id}/>
                                )
                            } else {
                                return null
                            }
                        } else {
                            return (
                                <MovieGridItem movie={movie} key={movie.id}/>
                            )
                        }
                    })}
                </div>
                {(!flagSearch && searchValue !== '') &&
                    <p>No matching results!</p>
                }
            </Fragment>
        );

    }
}