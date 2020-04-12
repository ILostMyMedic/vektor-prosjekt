import React, { Component } from 'react'
import Header from '../components/UI/header';
import ScrollAnimation from 'react-animate-on-scroll';
import * as Eika from '../Images/eika.jpg';
import * as Sweco from '../Images/sweco.jpg';

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animateOnce: true,
        }
    }

    render() {
        window.scrollTo(0, 0);
        
        let headers = [
            {
                backgroundImage: Eika,
                title: 'Lorem Ipsum - dolor sit amet',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repellendus eaque atque autem nam? Temporibus, accusamus ducimus? Nisi vitae ab facilis maxime aperiam doloribus, eveniet ipsam, necessitatibus, obcaecati optio accusamus.Voluptate praesentium, alias et nemo ut cupiditate? Voluptas, dolorum ipsam! Placeat dolor perspiciatis hic pariatur, modi fugiat temporibus commodi aut sit eum! Laborum aperiam temporibus voluptas maxime quaerat rem quo.',
                overlay: true
            },
            {
                backgroundImage: Sweco,
                title: 'Lorem Ipsum - dolor sit amet',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repellendus eaque atque autem nam? Temporibus, accusamus ducimus? Nisi vitae ab facilis maxime aperiam doloribus, eveniet ipsam, necessitatibus, obcaecati optio accusamus.Voluptate praesentium, alias et nemo ut cupiditate? Voluptas, dolorum ipsam! Placeat dolor perspiciatis hic pariatur, modi fugiat temporibus commodi aut sit eum! Laborum aperiam temporibus voluptas maxime quaerat rem quo.',
                overlay: true
            }
        ];

        return (
            <React.Fragment>
                
                {/* Header / Slideshow */}
                <Header 
                    height='80vh'
                    anchor={true}
                    animateOnce={true}
                    content={[headers]}
                />

                {/* Main content for a page */}
                <main  className="grid">
                    <span id="main" className="anchorId"></span>

                    <ScrollAnimation animateIn="fadeInUp" className="grid-column" animateOnce={this.state.animateOnce}>
                        <span><strong>Etterlysende</strong> produkter</span>
                        <p>
                            Etterlysende skilt og oppmerking for rømning av alle typer bygg og anlegg, vei, jernbaner og den maritime industri.
                            Vi utfører rømningsplaner og leverer alle typer etterlysende produkter for sikker rømning hvor personer har sitt opphold. Vektor Glow er bransjenavnet for alle våre etterlysende produkter.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" className="grid-column" animateOnce={this.state.animateOnce}>
                        <span><strong>Taktile</strong> skilt</span>
                        <p>
                            Skilt for universell utforming skal kunne leses av flest mulig uavhengig av funksjon, språk og persepsjonsevne.
                            Vi levere skilt som skal kunne leses av svaksynte og blinde. Disse utformes med følbar eller taktil tekst. For blinde leveres blindeskrift eller «braille» skilt – opphøyde kuler og linjer som leses med fingrene.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" className="grid-column" animateOnce={this.state.animateOnce}>
                        <span><strong>Vektor</strong> Maritime</span>
                        <p>
                            Vektor Maritime is the department and brand name for all maritime products of Vektor Prosjekt AS. We are a Norwegian Company with more than 20 years of experience in serving the maritime industry with safety products for all types of vessels and offshore constructions.
                            Out goal is to deliver “Understandable information where life matters”
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" className="grid-column" animateOnce={this.state.animateOnce}>
                        <span><strong>Lorem Ipsum</strong> - dolor sit amet</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repellendus eaque atque autem nam? Temporibus, accusamus ducimus? Nisi vitae ab facilis maxime aperiam doloribus, eveniet ipsam, necessitatibus, obcaecati optio accusamus.Voluptate praesentium, alias et nemo ut cupiditate? Voluptas, dolorum ipsam! Placeat dolor perspiciatis hic pariatur, modi fugiat temporibus commodi aut sit eum! Laborum aperiam temporibus voluptas maxime quaerat rem quo.</p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" className="grid-column" animateOnce={this.state.animateOnce}>
                        <span><strong>Lorem Ipsum</strong> - dolor sit amet</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repellendus eaque atque autem nam? Temporibus, accusamus ducimus? Nisi vitae ab facilis maxime aperiam doloribus, eveniet ipsam, necessitatibus, obcaecati optio accusamus.Voluptate praesentium, alias et nemo ut cupiditate? Voluptas, dolorum ipsam! Placeat dolor perspiciatis hic pariatur, modi fugiat temporibus commodi aut sit eum! Laborum aperiam temporibus voluptas maxime quaerat rem quo.</p>
                    </ScrollAnimation>
                </main>
            </React.Fragment>
        )
    }
}
