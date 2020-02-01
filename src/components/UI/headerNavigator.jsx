import React, { Component } from 'react';
import '../../CSS/headerNavigator.css';

export default class HeaderNavigator extends Component {
    render() {
        let buttons = this.props.buttons;

        this.buttons = buttons.map((item, key) =>
            <a href={`${item.link}`} className="headerNavigator__button" key={key}>
                {item.text}
            </a>
        )

        return (
            <React.Fragment>
                <div className="headerNavigator">
                    <div className="headerNavigator__content">
                        <h1>{this.props.header}</h1>
                        <i>{this.props.text}</i>
                    </div>

                    <div className="headerNavigator__buttons">
                        {this.buttons}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
