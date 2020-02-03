import React, { Component } from 'react'
import Header from '../components/UI/header';
import HeaderNavigator from '../components/UI/headerNavigator';
import AnchorView from '../components/UI/anchorView';
import '../CSS/headerNavigator.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import * as Href from '../components/Links';
import ScrollAnimation from 'react-animate-on-scroll';
import * as firecontrolandsafetyplan from '../Images/fireplan.png';
import * as emergencyplan from '../Images/emergencyplan.png';
import * as bunkerplan from '../Images/bunkerplan.png';
import * as jernbanetunell from '../Images/jernbanetunell.jpg';

export default class Tunneler extends Component {
    constructor(props) {
        super(props);

        this.aside=null;

        this.state = {
            page: 'Tunneler', // Display for each section title
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
                backgroundImage: `url(${jernbanetunell})`,
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
                text: 'Veitunneler',
                link: '#anchorLink-1',
            },
            {
                text: 'Jernbanetuneller',
                link: '#anchorLink-2',
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
                        header='Veitunneler'
                        links={links}
                        anchor="anchorLink-1"
                    />
                    <div className="headerSticky">
                        {this.links}
                        <Link to={Href.Kontakt}>Kontakt oss</Link>
                    </div>

                    <div className="main-content">
                    <div className="main-content aside" ref={a=>{this.aside=a}}>
                        <aside>
                            <ul>
                                <li><a href="#fire">Dørmerking</a></li>
                                <li><a href="#emergency">Standarsskilt</a></li>
                                <li><a href="#bunker">- Løpende mann</a></li>
                                <li><a href="#isps">- Fare trafikk</a></li>
                                <li><a href="#crew">- Brannhydrantskilt</a></li>
                                <li><a href="#posters">- Etterlysende stripe</a></li>
                                <li><a href="#imo">- Avstandsskilt 1</a></li>
                                <li><a href="#other">- Avstandsskilt 2</a></li>
                                <li><a href="#consulting">- Bokstavskilt</a></li>
                                <li><a href="#roll-up">- Tekstskilt</a></li>
                                <li><a href="#frame">- Trekantskilt</a></li>
                                <li><a href="#finishing">- Profilnummerskilt</a></li>
                                <li><a href="#finishing">- Etterlysende ramme</a></li>
                                <li><a href="#finishing">SKILTKVALITET</a></li>
                                <li><a href="#finishing">- Etterlysende skilter</a></li>
                            </ul>
                        </aside>
                        
                        <div className="grid-bg">
                        <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#fire")} animateIn="fadeInLeft">
                            <section className="main-grid" id="fire">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src={firecontrolandsafetyplan} />
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Dørmerking</h1>
                                    <p>
                                    Illustrasjon som viser vanlig merking av dører inn til tverrslag og dører inne i tverrslagene. 
                                    Etterlysende stripe rundt dører inn til tverrslag fra kjørefelt er ofte erstattet med grønn LED stripe.


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

                                    </p>
                                </ScrollAnimation>
                            </section>
                        </ScrollAnimation>

                        <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#emergency")} animateIn="fadeInLeft">
                            <section className="main-grid" id="emergency">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="left">Emergency plan</h1>
                                    <p>
                                    Løpende mann over dør inne i tverrslag,
størrelse 300 x 150mm. Leveres med 4
monteringshull, syrefast stål type 316L
eller type 304, silketrykket med kraftig
klarlakk.


                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src={emergencyplan} />
                                </ScrollAnimation>
                            </section>
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#bunker")} animateIn="fadeInLeft">
                            <section className="main-grid" id="bunker">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                <img src={bunkerplan} />
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Bunker plan</h1>
                                    <p>
                                    Fare trafikk (4 språk), størrelse 500 x
270mm. Leveres med 3M 300 LSE lim på
bakside for montering direkte på ståldør,
syrefast stål type 316L eller type 304,
silketrykket med kraftig klarlakk.

                                    </p>
                                </ScrollAnimation>
                            </section>
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#isps")} animateIn="fadeInLeft">
                            <section className="main-grid" id="isps">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="left">ISPS Packages Restricted Area Plans</h1>
                                    <p>
                                    Brannhydrantskilt størrelse 400 x 400
eller 500 x 500mm. Leveres med 3M
300 LSE lim på bakside for montering
direkte på ståldør, syrefast stål type 316L
eller type 304, silketrykket med kraftig
klarlakk.

                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                            </section>
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#crew")} animateIn="fadeInLeft">
                            <section className="main-grid" id="crew">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Crew and Visitors Identification ID Cards</h1>
                                    <p>
                                    Etterlysende stripe med løpende
mann, størrelse 100 X 1200mm. Leveres
med 3M 300 LSE lim på bakside for
montering direkte på ståldør, syrefast
stål type 316L eller type 304, silketrykket
med kraftig klarlakk.

                                    </p>
                                </ScrollAnimation>
                            </section>
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#posters")} animateIn="fadeInLeft">
                            <section className="main-grid" id="posters">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="left">Think Safety Posters</h1>
                                    <p>
                                    Avstandsskilt, skilt nr. 570.2V, størrelse
715 x 208, 825 x 240 eller 1100 x 320mm.
Leveres med 6 monteringshull, syrefast
stål type 316L eller type 304, silketrykket
med kraftig klarlakk. Monteres hver 25m
sammen med skilt 570.2H.

                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                            </section>
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#imo")} animateIn="fadeInLeft">
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
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#other")} animateIn="fadeInLeft">
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
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#consulting")} animateIn="fadeInLeft">
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
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#roll-up")} animateIn="fadeInLeft"> 
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
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#frame")} animateIn="fadeInLeft"> 
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
                            </ScrollAnimation>

                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#finishing")} animateIn="fadeInLeft"> 
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
                            </ScrollAnimation>
                            
                        </div>

                    {/* <ShowcaseTall 
                        showcaseImage={"http://www.tuyodesign.com/Vektor2_0/img/maritime/escape_plan_on_rollup.png"} 
                        showcaseTitle="Product features and options" 
                        showcaseSubtitle="We provide a wide array of usable &amp; flexible features." 
                        showcaseColumn={showcase}
                    /> */}

                    </div>


                    </div>
                </main>
            </React.Fragment>
        )
    }
}
