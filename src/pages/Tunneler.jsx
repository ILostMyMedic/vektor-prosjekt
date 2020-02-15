import React, { Component } from 'react'
import Header from '../components/UI/header';
import HeaderNavigator from '../components/UI/headerNavigator';
import AnchorView from '../components/UI/anchorView';
import '../CSS/headerNavigator.css';
import * as tunnelLys from '../Images/tunnel/tunnelLys.png';
import ScrollAnimation from 'react-animate-on-scroll';
import * as firecontrolandsafetyplan from '../Images/fireplan.png';
import * as emergencyplan from '../Images/emergencyplan.png';
import * as bunkerplan from '../Images/bunkerplan.png';
import * as raplans from '../Images/raplans.png';
import * as imo from '../Images/imo.png';
import * as rollup from '../Images/rollup.png';
import * as lopende from '../Images/1.png';
import * as bokstav from '../Images/3.png';
import * as fare from '../Images/6.png';
import * as brann from '../Images/4.png';



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
                backgroundImage: tunnelLys,

                title: 'VEG- OG JERNBANETUNNELER',
                text: 'Vil dere ha noen forklarende tekst her?',
                overlay: false

            }
        ];

            let header = 'Veg- og jernbanetunneler';
        let text = `
        Donec pellentesque diam vitae nibh auctor, id aliquet nisl dictum. Nam ut arcu lorem. Donec pharetra, justo non porta tincidunt, lacus ligula accumsan augue, sit amet suscipit urna risus vitae ante. Aenean placerat posuere metus ac lobortis. Pellentesque cursus in velit eu elementum. Donec porta pretium tortor et tincidunt. Ut non purus id magna finibus euismod eget non ipsum.
        `;

        let buttons = [
            {
                text: 'Vegtunneler',
                link: '#services',
            },
            {
                text: 'Jernbanetunneler',
                link: '#about',
            },
            {
                text: 'Kontakt oss',
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
                        anchor="services"
                    />
                    <div className="headerSticky">
                        {this.links}
                    </div>

                    <div className="main-content aside left" ref={a=>{this.aside=a}}>
                        <aside>
                            <ul>
                                <li><a href="#merking">DØRMERKING</a></li>
                                <li><a href="#standardskilt">STANDARDSKILT</a></li>
                                <li><a href="#mann" className="aside__sub">-Løpende mann</a></li>
                                <li><a href="#trafikk" className="aside__sub">-Fare trafikk</a></li>
                                <li><a href="#brannhydrant" className="aside__sub">-Brannhydrantskilt</a></li>
                                <li><a href="#etterlysendestriper" className="aside__sub">-Etterlysende stripe</a></li>
                                <li><a href="#avstandsskilt" className="aside__sub">-Avstandsskilt</a></li>
                                <li><a href="#bokstavskilt" className="aside__sub">-Bokstavskilt</a></li>
                                <li><a href="#tekstilt" className="aside__sub">-Tekstskilt</a></li>
                                <li><a href="#trekantskilt" className="aside__sub">-Trekantskilt</a></li>
                                <li><a href="#profilnummerskilt" className="aside__sub">-Profilnummerskilt</a></li>
                                <li><a href="#etterlysendeskilter">ETTERLYSENDE SKILTER</a></li>
                            </ul>
                        </aside>
                        
                        <div className="grid-bg">
                            

                        <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#merking")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="merking"></div>
                                    <img src={firecontrolandsafetyplan} alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Dørmerking</h1>
                                    <p>
                                        Donec pellentesque diam vitae nibh auctor, id aliquet nisl dictum. Nam ut arcu lorem. Donec pharetra, justo non porta tincidunt, lacus ligula accumsan augue, sit amet suscipit urna risus vitae ante. Aenean placerat posuere metus ac lobortis. Pellentesque cursus in velit eu elementum. Donec porta pretium tortor et tincidunt. Ut non purus id magna finibus euismod eget non ipsum.
                                    </p>
                                </ScrollAnimation>
                        </ScrollAnimation>


                        <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#standardskilt")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="standardskilt"></div>
                                    <h1 className="left">Standardskilt</h1>
                                    <p>
                                        Donec pellentesque diam vitae nibh auctor, id aliquet nisl dictum. Nam ut arcu lorem. Donec pharetra, justo non porta tincidunt, lacus ligula accumsan augue, sit amet suscipit urna risus vitae ante. Aenean placerat posuere metus ac lobortis. Pellentesque cursus in velit eu elementum. Donec porta pretium tortor et tincidunt. Ut non purus id magna finibus euismod eget non ipsum.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src={emergencyplan}  alt="" />
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#mann")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="mann"></div>
                                    <img src={lopende}  alt="" />
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Løpende mann</h1>
                                    <p>
                                        Løpende mann over dør inne i tverrslag,
                                        størrelse 300 x 150mm. Leveres med 4
                                        monteringshull, syrefast stål type 316L
                                        eller type 304, silketrykket med kraftig
                                        klarlakk.
                                    </p>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#trafikk")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="trafikk"></div>
                                    <h1 className="left">Fare trafikk</h1>
                                    <p>
                                        Fare trafikk (4 språk), størrelse 500 x
                                        270mm. Leveres med 3M 300 LSE lim på
                                        bakside for montering direkte på ståldør,
                                        syrefast stål type 316L eller type 304,
                                        silketrykket med kraftig klarlakk.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src={fare}  alt="" />
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#brannhydrant")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="brannhydrant"></div>
                                    <img src={brann}  alt="" />
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Brannhydrantskilt</h1>
                                    <p>
                                        Brannhydrantskilt størrelse 400 x 400
                                        eller 500 x 500mm. Leveres med 3M
                                        300 LSE lim på bakside for montering
                                        direkte på ståldør, syrefast stål type 316L
                                        eller type 304, silketrykket med kraftig
                                        klarlakk.
                                    </p>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#etterlysendestriper")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="etterlysendestriper"></div>
                                    <h1 className="left">Etterlysende stripe</h1>
                                    <p>
                                        Etterlysende stripe med løpende
                                        mann, størrelse 100 X 1200mm. Leveres
                                        med 3M 300 LSE lim på bakside for
                                        montering direkte på ståldør, syrefast
                                        stål type 316L eller type 304, silketrykket
                                        med kraftig klarlakk.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#avstandsskilt")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="avstandsskilt"></div>
                                    <img src={imo}  alt="" />
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Avstandsskilt</h1>
                                    <p>
                                        Avstandsskilt, skilt nr. 570.2V, størrelse
                                        715 x 208, 825 x 240 eller 1100 x 320mm.
                                        Leveres med 6 monteringshull, syrefast
                                        stål type 316L eller type 304, silketrykket
                                        med kraftig klarlakk. Monteres hver 25m
                                        sammen med skilt 570.2H/570.2V.
                                    </p>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#bokstavskilt")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="bokstavskilt"></div>
                                    <h1 className="left">Bokstavskilt</h1>
                                    <p>
                                        Bokstavskilt, størrelse 500 x 500 eller
                                        850 x 500mm (en eller to bokstaver).
                                        Leveres med 3M 300 LSE lim på bakside
                                        for montering direkte på ståldør, syrefast
                                        stål type 316L eller type 304, silketrykket
                                        med kraftig klarlakk.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src={bokstav}  alt="" />
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#tekstilt")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="tekstilt"></div>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Tekstskilt</h1>
                                    <p>
                                        Tekstskilt (4 språk: norsk, engelsk,
                                        tysk og fransk) for kiosker etc. som
                                        er adskilt fra tunnelrommet med dør,
                                        størrelse 500 x 500mm. Tekst: Dette
                                        rommet er ikke sikkert ved brann, følg
                                        skilt til nødutganger. Leveres med 4
                                        monteringshull, syrefast stål type 316L
                                        eller type 304, silketrykket med kraftig
                                        klarlakk.
                                    </p>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#trekantskilt")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="trekantskilt"></div>
                                    <h1 className="left">Trekantskilt</h1>
                                    <p>
                                        Trekantskilt, størrelse 500 x 438mm.
                                        Leveres med 3M 300 LSE lim på bakside
                                        for montering direkte på ståldør, syrefast
                                        stål type 316L eller type 304, silketrykket
                                        med kraftig klarlakk.
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src={rollup}  alt="" />
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#profilnummerskilt")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="profilnummerskilt"></div>
                                    <img src="https://via.placeholder.com/450x450" alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Profilnummerskilt</h1>
                                    <p>
                                        Profilnummerskilt, størrelse varierer etter
                                        behov og plassering. Leveres i syrefast
                                        stål 316L med sorte / røde bokstaver og
                                        med 2 monteringshull.
                                    </p>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#etterlysendeskilter")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="etterlysendeskilter"></div>
                                    <h1 className="left">Etterlysende ramme</h1>
                                    <p>
                                        Etterlysende ramme rund dør fra
                                        kjørebane og inn til tverrslag, størrelse B=
                                        1000mm L= avhengig av dørstørrelse.
                                        Leveres med monteringshull, syrefast
                                        stål type 316L eller type 304, silketrykket
                                        med kraftig klarlakk.
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
                            header='Jernbanetunneler'
                            links={links}
                            anchor="about"
                        />
                        <div className="redBar"></div>

                        <div className="main-content aside right" ref={a=>{this.aside=a}}>
                        <aside>
                            <ul>
                                <li><a href="#bakplate">AVSTANDSSKILT MED BAKPLATE</a></li>
                                <li><a href="#belysning">NØDBELYSNING</a></li>
                                <li><a href="#koblingsbokser">FUNKSJONSSIKRE KOBLINGSBOKSER</a></li>
                                <li><a href="#Håndløper">HÅNDLØPER</a></li>
                            </ul>
                        </aside>
                        
                        <div className="grid-bg grid50">
                            

                        <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#bakplate")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="bakplate"></div>
                                    <img src={firecontrolandsafetyplan} alt=""/>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Avstandsskilt med bakplate, belysning av skilt og koblingsboks</h1>
                                    <p>
                                        <p>Skiltet vil være godt lesbart i over 1 time etter at all strøm og belysning er borte.</p>
                                        <br /><p>Både bakplate og skilt er produsert i syrefast stål ASI 316 L</p>
                                        <br /><p>Skilt informasjon er silketrykket og dekket med en kraftig klar lakk som tåler høytrykksspyling.</p>
                                    </p>
                                </ScrollAnimation>
                        </ScrollAnimation>


                        <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#belysning")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="belysning"></div>
                                    <h1 className="left">Nødbelysning-Armatur med innebygd koblingsboks</h1>
                                    <p>
                                        <p>LED belysning, 6W, IP66, montert 75 til 100 cm over skinnegang og med innbyrdes avstand på 10m vil gangbanen ha en min. belysning på ca. 3lux.</p>
                                        <br /><p>Produsert i syrefast stål type ASI 316L.</p>
                                        <br /><p>Alle komponenter er funksjonssikre i 180min.</p>
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src={emergencyplan}  alt="" />
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#koblingsbokser")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="koblingsbokser"></div>
                                    <img src={bunkerplan}  alt="" />
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <h1 className="right">Funksjonssikre koblingsbokser i komposittmateriale samt funksjonssikre kabler</h1>
                                    <p>
                                        <p>Leveres med glassikringer, keramiske koblinger og eventuell bakplate i rustfritt stål type ASI 316L for montering i råsprengt tunnel. </p>
                                        <br /><p>Monteres vanligvis hver 200m.</p>
                                    </p>
                                </ScrollAnimation>
                            </ScrollAnimation>



                            <ScrollAnimation duration={0} initiallyVisible={true} afterAnimatedIn={()=> this.updateMenu("#Håndløper")} animateIn="fadeInLeft" className="main-grid">
                                <ScrollAnimation animateIn="fadeInLeft" className="main-grid__column text" animateOnce={this.state.animateOnce}>
                                    <div className="gridAnchor" id="Håndløper"></div>
                                    <h1 className="left">Håndløper med lys</h1>
                                    <p>
                                        Syrefast stål med innlagt LED lys leveres i 3 meter lengder komplett med lys og festemidler. 48 Volt VOC <br />– IP klasse: IP 67
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInRight" className="main-grid__column" animateOnce={this.state.animateOnce}>
                                    <img src={raplans}  alt="" />
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
                        
                        
                </main>
            </React.Fragment>
        )
    }
}
