import React, { Component } from 'react';

import './search-bar.css'

export default class SearchBar extends Component {
    render () {
        const { searchValue, onChangeSearch } = this.props;

        return (
            <div className="movie-search">
                <input
                    value={searchValue}
                    type="text"
                    className="input"
                    onChange={ onChangeSearch }
                />
            </div>
        )
    }
}