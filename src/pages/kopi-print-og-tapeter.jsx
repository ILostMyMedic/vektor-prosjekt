import React, { Component } from 'react'
import Header from '../components/UI/header';
import HeaderNavigator from '../components/UI/headerNavigator';
import AnchorView from '../components/UI/anchorView';
import '../CSS/headerNavigator.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import * as Href from '../components/Links';


export default class Kopi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'Kopi, print, og tapeter', // Display for each section title
        }
    }  

    render() {
        window.scrollTo(0, 0);
        
        let headers = [
            {
                backgroundImage: 'http://www.tuyodesign.com/Vektor2_0/img/vektork/parallax/mdf-print-1.jpg',
                title: 'title 1',
                text: 'text 1',
                overlay: true
            },
            {
                backgroundImage: 'http://www.tuyodesign.com/Vektor2_0/img/vektork/parallax/mdf-print-1.jpg',
                title: 'title 2',
                text: 'text 2',
                overlay: true
            }
        ];

        let header = 'Page Title';
        let text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ex nobis itaque voluptas blanditiis rem asperiores illo, placeat ad suscipit veniam iusto labore, autem totam, commodi eaque animi enim ab. Aliquam perferendis, facilis, quaerat vitae quis voluptas cupiditate ut beatae commodi maxime quae id fugit. Officia, at sint. Harum laudantium dolores quasi dicta facere, quas quod illum voluptate architecto voluptates! Maiores pariatur ex dolore quidem vero ratione nulla sint. Quas quisquam odio dolor veniam aliquam ad earum autem dolore omnis aut magni facilis accusantium, iste ducimus quos fugit vel. Error.';
        let buttons = [
            {
                text: 'Button text 1',
                link: '#anchorLink-1',
            },
            {
                text: 'Button text 2',
                link: '#anchorLink-2',
            },
            {
                text: 'Button text 3',
                link: '#anchorLink-3',
            },
        ]

        this.links = buttons.map((item, key) =>
            <a href={`${item.link}`} key={key}>
                {item.text}
            </a>
        )
        let links = [
            {
                link: '#anchorLink-1',
                text: 'text link 1',
            },
            {
                link: '#anchorLink-2',
                text: 'text link 2',
            },
            {
                link: '#anchorLink-3',
                text: 'text link 3',
            }
        ]

        return (
            <React.Fragment>
                
                {/* Header / Slideshow */}
                <Header 
                    height='55vh'
                    anchor={false}
                    animateOnce={true}
                    content={[headers]}
                />

                {/* Main content for a page */}
                <main>
                    <span id="main" className="anchorId"></span>

                    <HeaderNavigator header={header} text={text} buttons={buttons} />
                    <AnchorView 
                        page={this.state.page}
                        header='Section title'
                        links={links}
                        anchor="anchorLink-1"
                    />
                    <div className="headerSticky">
                        {this.links}
                        <Link to={Href.Kontakt}>Kontakt oss</Link>
                    </div>

                    <div className="main-content">



                    </div>
                </main>
            </React.Fragment>
        )
    }
}
