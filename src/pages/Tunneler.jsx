import React, { Component } from 'react'
import Header from '../components/UI/header';
import HeaderNavigator from '../components/UI/headerNavigator';
import AnchorView from '../components/UI/anchorView';
import '../CSS/headerNavigator.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import * as Href from '../components/Links';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Tunneler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'Tunneler', // Display for each section title
        }
    }  

    render() {
        window.scrollTo(0, 0);
        
        let headers = [
            {
                backgroundImage: 'http://www.tuyodesign.com/Vektor2_0/img/vektork/parallax/mdf-print-1.jpg',
                title: 'Hva vil dere skal stå her?',
                text: 'Og eventuelt her?',
            },
            {
                backgroundImage: 'http://www.tuyodesign.com/Vektor2_0/img/vektork/parallax/mdf-print-1.jpg',
                title: 'title 2',
                text: 'text 2',
            }
        ];

        let header = 'VEG-OG JERNBANETUNNELER';
        let text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ex nobis itaque voluptas blanditiis rem asperiores illo, placeat ad suscipit veniam iusto labore, autem totam, commodi eaque animi enim ab. Aliquam perferendis, facilis, quaerat vitae quis voluptas cupiditate ut beatae commodi maxime quae id fugit. Officia, at sint. Harum laudantium dolores quasi dicta facere, quas quod illum voluptate architecto voluptates! Maiores pariatur ex dolore quidem vero ratione nulla sint. Quas quisquam odio dolor veniam aliquam ad earum autem dolore omnis aut magni facilis accusantium, iste ducimus quos fugit vel. Error.';
        let buttons = [
            {
                text: 'Vegtunneler',
                link: '#anchorLink-1',
            },
            {
                text: 'Jernbanetunneler',
                link: '#anchorLink-2',
            },
            {
                text: 'Kontakt oss',
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
                        header='Vegtunneler'
                        links={links}
                        anchor="anchorLink-1"
                    />
                    <div className="headerSticky">
                        {this.links}
                        <Link to={Href.Kontakt}>Kontakt oss</Link>
                    </div>

                     <div className="main-content aside">
                        <aside>
                            <ul>
                                <li><a href="#fire">
DØRMERKING
</a></li>
                                <li><a href="#emergency">
STANDARDSKILT
</a></li>
                                <li><a href="#bunker">- Løpende mann</a></li>
                                <li><a href="#isps">- Fare trafikk</a></li>
                                <li><a href="#crew">- Brannhydrantskilt</a></li>
                                <li><a href="#posters">- Etterlysende stripe</a></li>
                                <li><a href="#imo">- Avstandsskilt</a></li>
                                <li><a href="#other">Other Plans</a></li>
                                <li><a href="#consulting">Consulting</a></li>
                                <li><a href="#roll-up">Roll up</a></li>
                                <li><a href="#frame">Frame kit</a></li>
                                <li><a href="#finishing">Finishing</a></li>
                            </ul>
                        </aside>
                        
                        <div className="grid-bg">
                            <section className="main-grid" id="fire">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src='https://via.placeholder.com/450x450' alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Dørmerking</h1>
                                    <p>
                                     Illustrasjon som viser vanlig merking av dører inn til tverrslag og dører
inne i tverrslagene.
Etterlysende stripe rundt dører inn til tverrslag fra kjørefelt er ofte
erstattet med grønn LED stripe.

Etterlysende ramme B=100mm
Bokstavskilt 500x500mm
Brannhydrant 500x500mm
Stripe - Dør 1200x100mm

Skilt over dør: 300x150mm
Fareskilt 500x500mm
Tekstskilt 500x270mm
Stripe - Dør 1200x100mm

Skilt over dør: 300x150mm
Stripe - Dør 1200x100mm

                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="emergency">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="left">Emergency plan</h1>
                                    <p>
                                        Vektor Maritime design, plot and frame
                                        Emergency Plans according to the specifications
                                        of each client and SOLAS regulations.
                                        The Emergency Plans are
                                        created digitally and in full color.

                                        “Muster lists and emergency instructions complying with the requirements of regulation 37 shall be
                                        exhibited in conspicuous places throughout the ship including the navigation bridge, engine-room
                                        and crew accommodation spaces.”
                                        SOLAS Chapter III, Regulation 8

                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="bunker">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Bunker plan</h1>
                                    <p>
                                    Vessels performing bunkering operations within
                                    U.S. waters or under U.S. Flag are required to
                                    keep written procedures for bunker transfer
                                    operations of oil, hazardous material or liquefied
                                    gas as well as drawings and diagrams showing
                                    the before mentioned.
                                    Vektor Maritime has developed a poster
                                    meeting the requirements of CFR 33, part 155
                                    and 156 which we can produce according to
                                    ship specific details.

                                    “The transfer procedures must be legibly printed
                                    in a language or languages understood by
                                    personnel engaged in transfer operations and
                                    permanently posted or available…”
                                    33CFR155
                                    </p>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="isps">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="left">ISPS Packages Restricted Area Plans</h1>
                                    <p>
                                        We supply our clients with documentation that is crucial for CSO’s (Company Security
                                        Officer’s) in their work of mapping restricted areas on board the company’s
                                        vessels.
                                        All our drawings, printed or digital format, are produced according to current
                                        regulations and standards.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="crew">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Crew and Visitors Identification ID Cards</h1>
                                    <p>
                                        With the implementation of the ISPS Code
                                        the need for personal identification cards is
                                        required as a way of confirming the identity of
                                        the person entering a restricted area.
                                        We produce these cards with contents
                                        according to the wishes of each client. The cards
                                        can be delivered as plain cards, with magnet
                                        strips that hold specific information about the
                                        card holder or cards that are equipped with
                                        radio transmitters.

                                        We produce and manage your supply
                                        of visitor cards, stevedore cards, custom crew
                                        cards or any other form of ID card you may
                                        require.
                                    </p>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="posters">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="left">Think Safety Posters</h1>
                                    <p>
                                        Our new think safety posters have quickly become one of our bestselling products
                                        in the category of signs and posters. Tailor made to reinforce the shiping companies
                                        comitment to safety on board or at fixed instalations, these clear and understandable
                                        comunications can also be adapted with logos and unique messages.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="imo">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">IMO Signs and Posted Information</h1>
                                    <p>
                                        As a part of our complete solution for maritime
                                        safety we can supply you with any required signs
                                        and assist with their placement on board.
                                        We also produce and sell signs according to IMO
                                        and ISO regulations in a large variety of media,
                                        among these, after glowing and reflective.
                                        You may browse our complete catalog and
                                        place your orders on-line or contact us for order
                                        booklets.
                                        Custom made signs are also available according
                                        to customer specification. We handle everything
                                        from small replacement orders to complete
                                        packages for new buildings.
                                        We also produce backlit signs pre mounted or as
                                        self adhesive to mount on existing installations.
                                    </p>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="other">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="left">Other Plans</h1>
                                    <p>
                                        We are aware of the different needs and
                                        requirements that apply to our customers and
                                        can assist in the production of most safety
                                        related posters and documentation. We
                                        encourage you to contact us if you have a
                                        problem that may fall under our expertise, and
                                        we will do our best to answer your needs.
                                        Other products we may supply that have not
                                        been mentioned are:
                                        · Gang Way Poster
                                        · Cabin Placards
                                        · Required Placards
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="consulting">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Consulting</h1>
                                    <p>
                                        The many needs and requirements set by a
                                        variety of authorities can make the process of
                                        producing safety related plans at least confusing
                                        for both vessel side and shore side personnel or
                                        departments.
                                        Vektor Maritime has highly trained staff who can
                                        help you through this process and perform on site
                                        revisions and recommendations. Updating plans
                                        and on-board situation according to regulations
                                        at a much more efficient manner, freeing up
                                        personnel and shortening production time.
                                    </p>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="roll-up">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="left">Roll up</h1>
                                    <p>
                                        Both Bridge and ECR Rooms have requirements
                                        to post drawings, diagrams, information posters
                                        and notices that should all deliver a certain
                                        message. This results in little to no extra space
                                        and an overall clutter of information
                                        We offer all of our products as "roll-up" solutions.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="frame">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Frame kit</h1>
                                    <p>
                                        If gluing posters and plans directly on the
                                        bulkhead is not your preference, we also deliver
                                        frame kits for all your needs.
                                        We do not deliver glass and back plate due to
                                        high transportation cost. We recommend 1,5 - 2,0
                                        mm plexiglass in front and 2 - 3 mm plate in back.
                                    </p>
                                </ScrollAnimation>
                            </section>

                            <section className="main-grid" id="finishing">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="left">Finishing</h1>
                                    <p>
                                        When wear and tear requires a little more than
                                        basic paper drawings.
                                        Vektor Maritime has the capacity to produce
                                        drawings, posters and signs on a large variety
                                        of material as well as post processes.
                                        Materials include tear and water resistant paper,
                                        self-adhesive vinyl, vinyl banners, film, backlit film,
                                        textile flag, reflective and after glowing materials.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                            </section>
                        </div>

                    {/* <ShowcaseTall 
                        showcaseImage={"http://www.tuyodesign.com/Vektor2_0/img/maritime/escape_plan_on_rollup.png"} 
                        showcaseTitle="Product features and options" 
                        showcaseSubtitle="We provide a wide array of usable &amp; flexible features." 
                        showcaseColumn={showcase}
                    /> */}

                    </div>
                </main>
            </React.Fragment>
        )
    }
}
