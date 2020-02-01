import React, { Component } from 'react'
import '../../CSS/list.css';

export default class List extends Component {
    render() {
        return (
            <div className="list__wrapper">

                <div className="list__content">
                    <h1>{this.props.listHeader}</h1>

                    <span>
                        <ul>
                            {
                                this.props.listLeft.map((data, key) => {
                                    return <li key={key}>{data}</li>
                                })
                            }
                        </ul>
                        
                        
                        <ul>
                            {
                                this.props.listRight.map((data, key) => {
                                    return <li key={key}>{data}</li>
                                })
                            }
                        </ul>
                    </span>
                </div>
                
            </div>
        )
    }
}
