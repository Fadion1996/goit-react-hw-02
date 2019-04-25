import React, { Component } from 'react';

import './publication.scss'

export default class Publication extends Component {

    render () {
        const { counter, publications } = this.props;
        return (
            <section key={publications[counter].id} className="publication">
                <h2>{publications[counter].title}</h2>
                <p>
                    {publications[counter].text}
                </p>
            </section>
        )
    }
}