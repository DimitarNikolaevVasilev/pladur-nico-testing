import React from 'react';

import css from './Button.module.css';

export default class Button extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <button className={css.button} style={this.props.style}>
                {this.props.children}
            </button>
        );
    }
}
