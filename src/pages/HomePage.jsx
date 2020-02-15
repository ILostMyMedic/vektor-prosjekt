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
                        <span><strong>Lorem Ipsum</strong> - dolor sit amet</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repellendus eaque atque autem nam? Temporibus, accusamus ducimus? Nisi vitae ab facilis maxime aperiam doloribus, eveniet ipsam, necessitatibus, obcaecati optio accusamus.Voluptate praesentium, alias et nemo ut cupiditate? Voluptas, dolorum ipsam! Placeat dolor perspiciatis hic pariatur, modi fugiat temporibus commodi aut sit eum! Laborum aperiam temporibus voluptas maxime quaerat rem quo.</p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" className="grid-column" animateOnce={this.state.animateOnce}>
                        <span><strong>Lorem Ipsum</strong> - dolor sit amet</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repellendus eaque atque autem nam? Temporibus, accusamus ducimus? Nisi vitae ab facilis maxime aperiam doloribus, eveniet ipsam, necessitatibus, obcaecati optio accusamus.Voluptate praesentium, alias et nemo ut cupiditate? Voluptas, dolorum ipsam! Placeat dolor perspiciatis hic pariatur, modi fugiat temporibus commodi aut sit eum! Laborum aperiam temporibus voluptas maxime quaerat rem quo.</p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" className="grid-column" animateOnce={this.state.animateOnce}>
                        <span><strong>Lorem Ipsum</strong> - dolor sit amet</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repellendus eaque atque autem nam? Temporibus, accusamus ducimus? Nisi vitae ab facilis maxime aperiam doloribus, eveniet ipsam, necessitatibus, obcaecati optio accusamus.Voluptate praesentium, alias et nemo ut cupiditate? Voluptas, dolorum ipsam! Placeat dolor perspiciatis hic pariatur, modi fugiat temporibus commodi aut sit eum! Laborum aperiam temporibus voluptas maxime quaerat rem quo.</p>
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
