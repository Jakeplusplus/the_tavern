import React, { Component } from 'react';
import Quest from './Quest';
import './QuestBoard.css';
import API from '../API/API';

export default class QuestBoard extends Component {
    constructor(props) {
        super(props);
        let api = new API();
        this.state = {
            listings: api.fetchData("quest")
        }
    }

    render() {
        let questListings = this.state.listings.map((questListing) =>
            <li className="questListing">
                <Quest
                    title={questListing.title}
                    description={questListing.description}
                    reward={questListing.reward}
                    contact={questListing.contact}
                />
            </li>
        );
        return (
            <div>
                <ul className="questListings">
                    {questListings}
                </ul>
            </div>
        );
    }
}