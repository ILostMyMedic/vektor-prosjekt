import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../CSS/Footer.css';
import * as Logo from '../../Images/footerVektorProsjektLogo.png';


export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const target    = e.target;
        const name      = target.name;
        const value     = target.value;

        this.setState({[name]: value});
    }
    handleSubmit(event) {
        event.preventDefault();

        let stateDate = `
            Name: ${this.state.name},
            Email: ${this.state.email},
            Message: ${this.state.message}
        `;

        console.log(stateDate);
    }

    render() {
        return (
            <footer>
                <div className="footer__bar">Ta kontakt for en uforpliktende prat. Kontakt oss her!</div>

                <div className="footer__body">
                    <div className="footer__info">
                        {/* Footer information part */}
                        <img src={Logo} alt="Vektor Prosjekt grayscale logo"/>
                        <span>
                            <p className="section__title">Hovedkontor:</p>
                            <p>Raufossvegen 40</p>
                            <p>2826 Gjøvik</p>
                            <p>Postboks 40 2801 Gjøvik</p>
                        </span>

                        <span>
                            <p>Telefon: 61 13 90 00</p>
                            <p>E-post: post@vektorprosjekt.no</p>
                            {/* <p className="section__title">Avdeling Stord:   </p>
                            <p>Bleikjehaugen Bygg B 1.etg</p>
                            <p>5411 Stord</p> */}
                        </span>

                        <span>
                            <p>Telefon Stord: 534 10 243</p>
                            <p>E-post Stord: post@vektorprosjekt.no</p>
                        </span>
                    </div>

                    <div className="footer__form">
                        {/* Footer form, send email */}
                        <form onSubmit={e => e.preventDefault()}>
                            <h4>SEND OSS EN MELDING</h4>

                            <div className="input">
                                <label htmlFor="name">
                                    <i className="fal fa-user"></i>
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" placeholder="Edvard Munch" 
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <div className="input">
                                <label htmlFor="email">
                                    <i className="fal fa-paper-plane"></i>
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" placeholder="edvard.m@gmail.com" 
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>

                            <div className="input">
                                <textarea 
                                    id="message"
                                    name="message" placeholder="50x90cm maleri av deres ypperste kvalitet."
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="input">
                                <button 
                                    className="button" 
                                    onClick={this.handleSubmit}
                                >Send melding</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="footer__bottom">
                    <span className="footer__grid">
                        <p className="footer__left">
                            Copyrights © {(new Date().getFullYear())} All Rights Reserved by Vektor Prosjekt AS
                            <span className="p">
                                <Link to={''}>Terms of user</Link> /
                                <Link to={''}>Privacy Policy</Link>
                            </span>
                        </p>

                        <p className="footer__right">
                            <i className="fal fa-envelope"></i> post@vektorprosjekt.no 
                            &nbsp;
                            <i className="fal fa-phone"></i> +47 611 39 000
                        </p>
                    </span>
                </div>
            </footer>
        )
    }
}
