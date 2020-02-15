import React, { Component } from 'react';
import Header from '../components/UI/header';
import HeaderNavigator from '../components/UI/headerNavigator';
import AnchorView from '../components/UI/anchorView';
import '../CSS/headerNavigator.css';
import ScrollAnimation from 'react-animate-on-scroll';
// import {Link} from 'react-router-dom';
// import * as Href from '../components/Links';
// import ShowcaseTall from '../components/UI/showcase-tall';
import Monster from '../components/UI/monster';
import Iconic from '../components/UI/Iconic';
import List from '../components/UI/list';
import * as firecontrolandsafetyplan from '../Images/fireplan.png';
import * as emergencyplan from '../Images/emergencyplan.png';
import * as bunkerplan from '../Images/bunkerplan.png';
import * as idcards from '../Images/idcards.png';
import * as raplans from '../Images/raplans.png';
import * as imo from '../Images/imo.png';
import * as otherplans from '../Images/otherplans.png';
import * as rollup from '../Images/rollup.png';
import * as ship from '../Images/ship.jpg';



export default class Maritime extends Component {
    constructor(props) {
        super(props);

        this.aside=null;

        this.state = {
            page: 'Vektor aritime', // Display for each section title
            animateOnce: true,
        }
    }  

    updateMenu(navLink){
        const button = this.aside.querySelector(`a[href="${navLink}"]`);
        console.log(button, navLink);
        if (button != null) {

            this.aside.querySelectorAll("a.active").forEach(a=>a.classList.remove("active"));
            button.classList.add("active");
        }
    }

    render() {
        window.scrollTo(0, 0);
        
        let headers = [
            {
                backgroundImage: 'http://www.tuyodesign.com/Vektor2_0/img/maritime/parallax/mar1.jpg',
                title: 'UNDERSTANDABLE INFORMATION WHEN LIFE MATTERS',
                text: '',
                overlay: true
            },
            {
                backgroundImage: ship,
                title: 'UNDERSTANDABLE INFORMATION WHEN LIFE MATTERS',
                text: '',
                overlay: true
            },
            {
                backgroundImage: raplans,
                title: 'UNDERSTANDABLE INFORMATION WHEN LIFE MATTERS',
                text: '',
                overlay: true
            }

        ];

        let header = 'VEKTOR MARITIME';
        let text = `
        Vektor Maritime is the department and brand name for all maritime products of Vektor Prosjekt AS, a Norwegian company with more than 15 years of experience in serving the marine industry. Developing and revising safety documentation and signs for all types of vessels and offshore constructions.
        We have aquired an unparralelled knowledge in the field and offer the complete consultation, design, production and update of a large variety of products all customized to the individual requirements of our customers.
        `;

        let buttons = [
            {
                text: 'Services & Products',
                link: '#services',
            },
            {
                text: 'About Vektor Maritime',
                link: '#about',
            },
            {
                text: 'Contact us',
                link: '#contact',
            },
        ]

        this.links = buttons.map((item, key) =>
            <a href={`${item.link}`} key={key}>
                {item.text}
            </a>
        )
        let links = [
            {
                link: '#services',
                text: 'Products & services',
            },
            {
                link: '#about',
                text: 'About us',
            },
            {
                link: '#contact',
                text: 'Contact us',
            }
        ]

        // let showcase = [
        //     {
        //         icon: 'fal fa-layer-group',
        //         title: 'Waterproof PP foil',
        //         text: 'All our plans are direct printed on high quality 500 micron waterproof PP foil, with additional paper copies for archive use. Other media options are available upon request.',
        //     },
        //     {
        //         icon: 'fal fa-eye',
        //         title: 'Hight resolution graphics',
        //         text: 'All our products are made scalable for crisp representation in any size and format, both digital and printed.',
        //     },
        //     {
        //         icon: 'fal fa-anchor',
        //         title: 'Space saving solutions',
        //         text: 'Our roll-up system keep all printed plans at hand while neatly stood away when not in use. Ideal for the bridge or engine control room where space is critical.',
        //     },
        //     {
        //         icon: 'fal fa-repeat',
        //         title: 'Planed revisions',
        //         text: 'We offer maintenance contracts to ensure all drawings and plans produced by us are kept up to date and current. Combined with a signage plan all changes will digital check for possible missing signs and markings.',
        //     },
        //     {
        //         icon: 'fal fa-cloud',
        //         title: 'Modern workflow',
        //         text: 'Optional cloud project spaces keep all progress and history available while avoiding e-mail size limited on board bu sharing documents as links.',
        //     },
        //     {
        //         icon: 'fal fa-power-off',
        //         title: 'Always on',
        //         text: 'Quick turn arounds and good connections with authorities makes us the perfect companion where delays can result in large loss.',
        //     },
        // ]


        const listLeft =[
            'Barber Ship Management - Norway',
            'BW Gas - Norway',
            'BW Offshore - Norway',
            'Bergshav Management - Norway',
            'Bergesen DY - Norway',
            'Borgestad Shipmanagement- Norway',
            'Bukser og Berging - Norway',
            'Dorian Hellas - Greece',
            'Executive Ship Management - Singapore',
            'Fred Olsen Cruise Line - Norway',
            'Golden Union - Greece',
            'Greieg Shipping - Norway',
            'Höegh Auto Liners - Norway',
            'Höegh LNG - Norway',
            'IUM Shipmanagement A.S. - Norway',
            'Jahre-Wallem A.S. - Norway',
            'Jo Tankers - Norway',
        ];
        const listRight =[
            'Mowinckel Ship Management - Norway',
            'Kr. G. Jebsen Skipsrederi A.S. - Norway',
            'Klaveness - Norway',
            'Masterbulk - Singapore',
            'Odfjell ASA - Norway',
            'Odfjell - Singapore',
            'OSG Shipmanagement (GR) Ltd. - Greece',
            'Primera Maritime (Hellas) Ltd. - Greece',
            'Sea Trans AS - Norway',
            'Subsea 7 - Norway',
            'Teekay - Norway',
            'J.J. Ugland Companies - Norway',
            'Utkilen AS - Norway',
            'V. Ships Ship Management - Norway',
            'Westfall-Larsen - Norway',
            'Wilson Ship Management - Norway',
            'World Management – Greece',

        ];

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
                        header='PRODUCTS AND SERVICES'
                        links={links}
                        anchor="services"
                    />
                    <div className="headerSticky">
                        {this.links}
                    </div>

                    <div className="main-content aside left" ref={a=>{this.aside=a}}>
                        <aside>
                            <ul>
                                <li><a href="#fire">Fire control <br />and safety plan</a></li>
                                <li><a href="#emergency">Emergency plan</a></li>
                                <li><a href="#bunker">Bunker plan</a></li>
                                <li><a href="#isps">ISPS Packages <br />Restricted Area Plans</a></li>
                                <li><a href="#crew">CREW AND VISITOR <br />IDENTIFICATION ID-CARDS</a></li>
                                <li><a href="#posters">Think Safety Posters</a></li>
                                <li><a href="#imo">IMO SIGNS POSTED <br />INFORMATION</a></li>
                                <li><a href="#other">Other Plans</a></li>
                                <li><a href="#consulting">Consulting</a></li>
                                <li><a href="#roll-up">Roll up</a></li>
                                <li><a href="#frame">Frame kit</a></li>
                                <li><a href="#finishing">Finishing</a></li>
                            </ul>
                        </aside>
                        
                        <div className="grid-bg">
                            

                        <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#fire")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="fire"></div>
                                    <img src={firecontrolandsafetyplan} alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Fire control and safety plan</h1>
                                    <p>
                                        Our Fire Control and Safety Plans are in
                                        compliance with the latest IMO / SOLAS
                                        regulations. We update your
                                        existing Fire Control and Safety Plans, or we can
                                        create completely new Plans from scratch. <p></p><br></br>
                                        Vektor Maritime take the full responsibility for
                                        the entire production, thus avoiding the problem
                                        of the tying up of personnel in your office. We
                                        guarantee full compliance with regulations or
                                        authorities as specified that may be related
                                        to your cruise ship, cargo vessel or offshore
                                        construction.
                                    </p>
                                </ScrollAnimation>
                        </ScrollAnimation>


                        <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#emergency")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="emergency"></div>
                                    <h1 className="left">Emergency plan</h1>
                                    <p>
                                        Vektor Maritime design, plot and frame
                                        Emergency Plans according to the specifications
                                        of each client and SOLAS regulations.
                                        The Emergency Plans are
                                        created digitally and in full color.
                                    <p><br></br></p>
                                        <i>“Muster lists and emergency instructions complying with the requirements of regulation 37 shall be
                                        exhibited in conspicuous places throughout the ship including the navigation bridge, engine-room
                                        and crew accommodation spaces.”</i><p></p>
                                        SOLAS Chapter III, Regulation 8

                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src={emergencyplan}  alt="" />
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#bunker")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="bunker"></div>
                                    <img src={bunkerplan}  alt="" />
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
                                    <p><br></br></p>
                                    <i>“The transfer procedures must be legibly printed
                                    in a language or languages understood by
                                    personnel engaged in transfer operations and
                                    permanently posted or available…”</i> <p></p>
                                    33CFR155
                                    </p>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#isps")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="isps"></div>
                                    <h1 className="left">ISPS Packages Restricted Area Plans</h1>
                                    <p>
                                        We supply our clients with documentation that is crucial for CSO’s (Company Security
                                        Officer’s) in their work of mapping restricted areas on board the company’s
                                        vessels.<p><br></br></p>
                                        All our drawings, printed or digital format, are produced according to current
                                        regulations and standards.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src={raplans}  alt="" />
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#crew")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="crew"></div>
                                    <img src={idcards}  alt="" />
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
                                        <p><br></br></p>
                                        We produce and manage your supply
                                        of visitor cards, stevedore cards, custom crew
                                        cards or any other form of ID card you may
                                        require.
                                    </p>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#posters")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="posters"></div>
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
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#imo")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="imo"></div>
                                    <img src={imo}  alt="" />
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
                                        booklets.<p><br></br></p>
                                        Custom made signs are also available according
                                        to customer specification. We handle everything
                                        from small replacement orders to complete
                                        packages for new buildings.
                                        We also produce backlit signs pre mounted or as
                                        self adhesive to mount on existing installations.
                                    </p>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#other")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="other"></div>
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
                                    <img src={otherplans}  alt="" />
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#consulting")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="consulting"></div>
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
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#roll-up")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="roll-up"></div>
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
                                    <img src={rollup}  alt="" />
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#frame")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="frame"></div>
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
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#finishing")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="finishing"></div>
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
                            </ScrollAnimation>
                        </div>

                    {/* <ShowcaseTall 
                        showcaseImage={"http://www.tuyodesign.com/Vektor2_0/img/maritime/escape_plan_on_rollup.png"} 
                        showcaseTitle="Product features and options" 
                        showcaseSubtitle="We provide a wide array of usable &amp; flexible features." 
                        showcaseColumn={showcase}
                    /> */}

                    </div>



                    <AnchorView 
                            page={this.state.page}
                            header='About us'
                            links={links}
                            anchor="about"
                        />
                        <div className="redBar"></div>

                        <div className="main-content">
                            <Monster />
                            <Iconic />
                            <List 
                                listHeader="Vektor maritime have earned the trust and business of leading shipowners internationally"
                                listLeft={listLeft}
                                listRight={listRight}
                            />
                        </div>
                </main>
            </React.Fragment>
        )
    }
}
