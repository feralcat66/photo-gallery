import React, { Component } from 'react';

export default class Container extends Component {
    render() {
        return <li>
            <div className="title-container">
                <h2>{this.props.image.title}</h2>
                <p className="description-container">{this.props.image.description}</p>
                <p className="horns-container">number of horns: {this.props.image.horns}</p>
            </div>
        <div className="image-container">
            <img
            alt={this.props.image.url}
            src={this.props.image.url} />
        </div>
        </li>
    }
}