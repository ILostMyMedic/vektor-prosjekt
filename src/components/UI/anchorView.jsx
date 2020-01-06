import React, { Component } from 'react'
import '../../CSS/headerNavigator.css';


export default class AnchorView extends Component {
    render() {
        this.links = this.props.links.map((item, key) =>
            <a href={item.link} key={key}>
                {item.text}
            </a>
        )
        return (
            <React.Fragment>
                <div className="anchorView">
                    <span id={this.props.anchor} className="anchorId"></span>

                    <div className="anchorView__titles">
                        <h2 className="anchorView__page">{this.props.page}</h2>
                        <h1 className="anchorView__header">{this.props.header}</h1>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
