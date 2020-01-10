import React, { Component } from 'react'
import '../../CSS/showcase.css';

export default class ShowcaseTall extends Component {
    render() {
        this.showcaseColumn = this.props.showcaseColumn.map((item, key) =>
            <div key={key} className="showcase-column">
                <h2><i className={item.icon}></i> {item.title}</h2>
                <p>{item.text}</p>
            </div>
        )
        return (
            <div className="showcase tall">
                <div className="showcase-header">
                    <h1 className="title">{this.props.showcaseTitle}</h1>
                    <p className="subtitle">{this.props.showcaseSubtitle}</p>
                </div>

                <div className="showcase-column tall">
                    <img src={this.props.showcaseImage} alt=""/>
                </div>

                <div className="showcase-column">
                    <div className="showcase-flex">
                        {this.showcaseColumn}
                    </div>
                </div>
            </div>
        )
    }
}
