import React, { Component } from 'react';
import './movie-page.css'
import MovieGrid from "./MovieGrid";
import SearchBar from "./SearchBar";

export default class MoviePage extends Component {

    state = {
        searchValue: '',
    };

    render () {
        return (
            <section className="movie-page">
                <SearchBar
                    searchValue = {this.state.searchValue}
                    onChangeSearch = {this.setSearchText}
                />
                <MovieGrid searchValue = {this.state.searchValue}/>
            </section>
        )
    }

    setSearchText = (e) => {
        this.setState({searchValue: e.target.value});
    }
}