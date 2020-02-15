import React, { Component } from 'react'
import Header from '../components/UI/header';
import HeaderNavigator from '../components/UI/headerNavigator';
import AnchorView from '../components/UI/anchorView';
import '../CSS/headerNavigator.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import * as Href from '../components/Links';

import * as Ship from '../Images/ship.jpg';
import * as Tunnel from '../Images/tunnel.jpg';


export default class Etterlysende extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'Etterlysende',
            animateOnce: true,
        }
    }    
    
    render() {
        window.scrollTo(0, 0);

        let headers = [
            {
                backgroundImage: Ship,
                title: 'Etterlysende produkter',
                text: 'Forstårlig informasjon når liv står på spill.',
                overlay: true
            },
            {
                backgroundImage: Tunnel,
                title: 'title 2',
                text: 'text 2',
                overlay: true
            }
        ];

        
        let header = 'Etterlysende produkter';
        let text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ex nobis itaque voluptas blanditiis rem asperiores illo, placeat ad suscipit veniam iusto labore, autem totam, commodi eaque animi enim ab. Aliquam perferendis, facilis, quaerat vitae quis voluptas cupiditate ut beatae commodi maxime quae id fugit. Officia, at sint. Harum laudantium dolores quasi dicta facere, quas quod illum voluptate architecto voluptates! Maiores pariatur ex dolore quidem vero ratione nulla sint. Quas quisquam odio dolor veniam aliquam ad earum autem dolore omnis aut magni facilis accusantium, iste ducimus quos fugit vel. Error.';
        let buttons = [
            {
                text: 'Våre tjenester',
                link: '#våre-tjenester',
            },
            {
                text: 'Bygg og anlegg',
                link: '#bygg-og-anlegg',
            },
            {
                text: 'Vei- og infrastruktur',
                link: '#vei-og-infrastrukture',
            }
        ]

        this.links = buttons.map((item, key) =>
            <a href={`${item.link}`} key={key}>
                {item.text}
            </a>
        )
        let links = [
            {
                link: '#våre-tjenester',
                text: 'Våre tjenester',
            },
            {
                link: '#bygg-og-anlegg',
                text: 'Bygg og anlegg',
            },
            {
                link: '#vei-og-infrastrukture',
                text: 'Vei- og infrastruktur',
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
                        header='Våre tjenester'
                        links={links}
                        anchor="våre-tjenester"
                    />
                    <div className="headerSticky">
                        {this.links}
                        <Link to={Href.Kontakt}>Kontakt oss</Link>
                    </div>

                    <div className="main-content">
                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="right">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                        </section>

                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="left">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                        </section>

                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="right">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                        </section>

                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="left">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                        </section>
                    </div>




                    <AnchorView 
                        page={this.state.page}
                        header='Bygg og anlegg'
                        links={links}
                        anchor="bygg-og-anlegg"
                    />
                    <div className="redBar"></div>

                    <div className="main-content">
                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="right">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                        </section>

                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="left">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                        </section>

                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="right">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                        </section>
                    </div>



                    <AnchorView 
                        page={this.state.page}
                        header='Vei- og infrastruktur'
                        links={links}
                        anchor="vei-og-infrastrukture"
                    />
                    <div className="redBar"></div>
                    <div className="main-content">
                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="right">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                        </section>

                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="left">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                        </section>

                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="right">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                        </section>

                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="left">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                        </section>

                        <section className="main-grid">
                            <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src="https://via.placeholder.com/450x450" alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                <h1 className="right">Lorem ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo mollitia rerum dolores, iste fugiat eaque. A exercitationem nobis tempora modi. Illum nisi in consectetur molestias enim esse nesciunt exercitationem?Perferendis consequuntur, sapiente exercitationem reiciendis dolore quas minima unde eligendi illo consequatur numquam deserunt ex distinctio, eveniet vel vitae ipsa itaque libero impedit magni reprehenderit quam accusamus. Necessitatibus, cupiditate eaque!</p>
                            </ScrollAnimation>
                        </section>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
