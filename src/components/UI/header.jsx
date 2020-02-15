import React, { Component } from 'react'
import Slider from "react-slick";
import '../../CSS/Header.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Header extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            arrows: true,
            adaptiveHeight: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,

            lazyLoad: true,
            className: 'slides'
        };

        this.content = this.props.content[0].map((item, key) =>
            <div className="slide__page" key={key}>
                <div className={item.overlay ? ('slide__bg__overlay slide__bg') : ("slide__bg")} style={{backgroundImage: `url(${item.backgroundImage})`}}>
                    <div className="slide__content">
                    <ScrollAnimation animateIn="fadeInDown" duration={2} animateOnce={this.props.animateOnce}>
                        <h1 className="slide__title">{item.title}</h1>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInDown" duration={1} animateOnce={this.props.animateOnce}>
                        <p className="slide__text">{item.text}</p>
                    </ScrollAnimation>
                    </div>
                </div>
            </div>
        );




        return (
            <React.Fragment>
                <header style={{height: this.props.height}}>
                    <Slider {...settings}>
                        {this.content}
                    </Slider>
                </header>

                {
                    this.props.anchor ? (
                        <div className="header__anchor">
                            <a href="#main">
                                <i className="fas fa-arrow-alt-down"></i>
                            </a>
                        </div>
                    ) : ( null )
                }
            </React.Fragment>
        );
    }
}
