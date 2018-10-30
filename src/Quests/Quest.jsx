import React, { Component } from 'react';

export default class Quest extends Component {
    render() {
        return (
            <div>
                <h2>Quest: {this.props.title}</h2>
                <p>{this.props.description}</p>
                <br></br>
                <p>Reward: {this.props.reward}</p>
                <p>Contact: {this.props.contact}</p>
            </div>
        );
    }
}