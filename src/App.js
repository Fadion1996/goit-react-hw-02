import React, {Component} from 'react';
import './app.scss';
import {AppBar, Tabs, Tab} from '@material-ui/core';

import {Reader, MoviePage, Dashboard} from './Components/';

class App extends Component {

    state = {
        value: 0,
    };

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        });
    };

    render () {
        return (
            <div className="app">
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollButtons="auto"
                        centered
                    >
                        <Tab label="Reader" />
                        <Tab label="MoviePage" />
                        <Tab label="Dashboard" />
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && <Reader/>}
                {this.state.value === 1 && <MoviePage/>}
                {this.state.value === 2 && <Dashboard/>}
        </div>
        )
    };
}

export default App;
