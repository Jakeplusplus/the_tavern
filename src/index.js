import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quest from './Quest/Quest.jsx';

ReactDOM.render(
    <Quest
        title="Test Quest"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum tellus ut leo consectetur, et pellentesque nibh efficitur. Proin mattis sapien est, et sodales purus laoreet id. Quisque massa ligula, gravida in mauris nec, varius accumsan elit. Maecenas vehicula, ligula quis feugiat aliquet, lacus ligula mollis arcu, sit amet eleifend lacus ligula id leo. Vestibulum nec sollicitudin quam, vel pellentesque diam. Pellentesque semper nisi orci, eget fermentum neque posuere vel. Ut ac dictum ante. Aliquam feugiat aliquam metus a ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id posuere nulla."
        reward="100g"
        contact="Northwest Ridge"
    />, document.getElementById('root'));