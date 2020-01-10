import React, { Component } from 'react'
import Header from '../components/UI/header';
import HeaderNavigator from '../components/UI/headerNavigator';
import AnchorView from '../components/UI/anchorView';
import '../CSS/headerNavigator.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import * as Href from '../components/Links';
import ShowcaseTall from '../components/UI/showcase-tall';


export default class Maritime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'Maritime', // Display for each section title
        }
    }  

    render() {
        window.scrollTo(0, 0);
        
        let headers = [
            {
                backgroundImage: 'http://www.tuyodesign.com/Vektor2_0/img/vektork/parallax/mdf-print-1.jpg',
                title: 'title 1',
                text: 'text 1',
            },
            {
                backgroundImage: 'http://www.tuyodesign.com/Vektor2_0/img/vektork/parallax/mdf-print-1.jpg',
                title: 'title 2',
                text: 'text 2',
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

        let showcase = [
            {
                icon: 'fal fa-layer-group',
                title: 'Waterproof PP foil',
                text: 'All our plans are direct printed on high quality 500 micron waterproof PP foil, with additional paper copies for archive use. Other media options are available upon request.',
            },
            {
                icon: 'fal fa-eye',
                title: 'Hight resolution graphics',
                text: 'All our products are made scalable for crisp representation in any size and format, both digital and printed.',
            },
            {
                icon: 'fal fa-anchor',
                title: 'Space saving solutions',
                text: 'Our roll-up system keep all printed plans at hand while neatly stood away when not in use. Ideal for the bridge or engine control room where space is critical.',
            },
            {
                icon: 'fal fa-repeat',
                title: 'Planed revisions',
                text: 'We offer maintenance contracts to ensure all drawings and plans produced by us are kept up to date and current. Combined with a signage plan all changes will digital check for possible missing signs and markings.',
            },
            {
                icon: 'fal fa-cloud',
                title: 'Modern workflow',
                text: 'Optional cloud project spaces keep all progress and history available while avoiding e-mail size limited on board bu sharing documents as links.',
            },
            {
                icon: 'fal fa-power-off',
                title: 'Always on',
                text: 'Quick turn arounds and good connections with authorities makes us the perfect companion where delays can result in large loss.',
            },
        ]

        return (
            <React.Fragment>
                
                {/* Header / Slideshow */}
                <Header 
                    height='55vh'
                    anchor={false}
                    
                    content={[headers]}
                />

                {/* Main content for a page */}
                <main id="main">
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

                    <ShowcaseTall 
                        showcaseImage={"http://www.tuyodesign.com/Vektor2_0/img/maritime/escape_plan_on_rollup.png"} 
                        showcaseTitle="Product features and options" 
                        showcaseSubtitle="We provide a wide array of usable &amp; flexible features." 
                        showcaseColumn={showcase}
                    />

                    </div>
                </main>
            </React.Fragment>
        )
    }
}
