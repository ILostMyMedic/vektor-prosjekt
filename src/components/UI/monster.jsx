import React, { Component } from 'react';
import '../../CSS/monster.css';

export default class Monster extends Component {
    render() {
        return (
            <div className="monster__wrap">
                <div className="monster__content">
                    <h1>Who are we?</h1>
                    <p>
                        Vektor Maritime is the department and brand name for all maritime products of Vektor Prosjekt AS, a Norwegian company with more than 15 years of experience in serving the marine industry. Developing and revising safety documentation and signs for all types of vessels and offshore constructions. In 2009 we changed our name form Prosjektkopi AS, a respected name in the norwegian maritime industry, to focus even stronger on this market. We have aquired an unparralelled knowledge in the field and offer the complete consultation, design, production and update of a large variety of products all customized to the individual requirements of our customers. 
                    </p>
                    <p>
                    All our work is performed according to IMO, SOLAS, USCG, DNV, Martime Classification Societies, Canadian National Regulations and any other authorities that may be related to your cruise ship, cargo vessel or offshore constuction. We also assist you through the DNV or other approval of the plan. 
                    </p>
                </div>
            </div>
        )
    }
}
