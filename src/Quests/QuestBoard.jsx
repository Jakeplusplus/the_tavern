import React, { Component } from 'react';
import Quest from './Quest.jsx';
import './QuestBoard.css';

export default class QuestBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [
                {
                    title: "Test Quest",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum tellus ut leo consectetur, et pellentesque nibh efficitur. Proin mattis sapien est, et sodales purus laoreet id. Quisque massa ligula, gravida in mauris nec, varius accumsan elit. Maecenas vehicula, ligula quis feugiat aliquet, lacus ligula mollis arcu, sit amet eleifend lacus ligula id leo. Vestibulum nec sollicitudin quam, vel pellentesque diam. Pellentesque semper nisi orci, eget fermentum neque posuere vel. Ut ac dictum ante. Aliquam feugiat aliquam metus a ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id posuere nulla.",
                    reward: "100g",
                    contact: "Northwest Ridge"
                },
                {
                    title: "Test Quest 2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum tellus ut leo consectetur, et pellentesque nibh efficitur. Proin mattis sapien est, et sodales purus laoreet id. Quisque massa ligula, gravida in mauris nec, varius accumsan elit. Maecenas vehicula, ligula quis feugiat aliquet, lacus ligula mollis arcu, sit amet eleifend lacus ligula id leo. Vestibulum nec sollicitudin quam, vel pellentesque diam. Pellentesque semper nisi orci, eget fermentum neque posuere vel. Ut ac dictum ante. Aliquam feugiat aliquam metus a ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id posuere nulla.",
                    reward: "200g",
                    contact: "Northwest Ridge"
                },
                {
                    title: "Test Quest 3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum tellus ut leo consectetur, et pellentesque nibh efficitur. Proin mattis sapien est, et sodales purus laoreet id. Quisque massa ligula, gravida in mauris nec, varius accumsan elit. Maecenas vehicula, ligula quis feugiat aliquet, lacus ligula mollis arcu, sit amet eleifend lacus ligula id leo. Vestibulum nec sollicitudin quam, vel pellentesque diam. Pellentesque semper nisi orci, eget fermentum neque posuere vel. Ut ac dictum ante. Aliquam feugiat aliquam metus a ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id posuere nulla.",
                    reward: "300g",
                    contact: "Northwest Ridge"
                }
            ]
        };
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