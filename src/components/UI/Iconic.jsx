import React, { Component } from 'react'
import '../../CSS/Iconic.css';

export default class Iconic extends Component {
    render() {
        return (
            <div className="iconic__wrapper">
                <div className="iconic">
                    <i className="fas fa-question-circle"></i>
                    <h1 className="iconic__header">WHY CHOOSE US</h1>
                    <span className="iconic__sub">Because we are accurate.</span>
                    <p className="iconic__p">
                        We take great care in producing accurate information in our safety products. By working closely with our clients and their vessels crew we assure that our plans and posted information is according to the actual situation and applicable regulations.
                    </p>
                </div>


                <div className="iconic">
                    <i className="fas fa-comments"></i>
                    <h1 className="iconic__header">OUR MISSION</h1>
                    <span className="iconic__sub">To make it understandable.</span>
                    <p className="iconic__p">
                    For any plan or posted information to be effective it is of most importance to keep it clean and understandable. By applying principles of design and simplicity our goal is to produce products easily understandable for every one involved.
                    </p>
                </div>


                <div className="iconic">
                    <i className="fas fa-check-circle"></i>
                    <h1 className="iconic__header">QUALITY ASSURANCE</h1>
                    <span className="iconic__sub">By keeping up to date.</span>
                    <p className="iconic__p">
                    Our consultants and technicians are always kept up to date on the latest rules and regulations. We also include designers experienced with issues related to the design and layout of infographics as well as production of quality prints.
                    </p>
                </div>
            </div>
        )
    }
}
