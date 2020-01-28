import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../CSS/Footer.css';
import * as Logo from '../../Images/footerVektorProsjektLogo.png';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backToTop: true,
            name: '',
            email: '',
            message: '',

            sent: false,
            errStatus: false,
            error: 'En feil har oppstått',
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

    handleSubmit = () => {
        const {name, email, message} = this.state;

        fetch('http://mail-vektor.nxtbanks.com/mailer.php', { // URL fetch (post request to PHP)
            method: 'POST',
            header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
            body: JSON.stringify({
				// we will pass our input data to server
                name: name,
                email: email,
                message: message
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.status === true){
                this.setState({sent: true});
                console.log(responseJson);
            } else {
                this.setState({errStatus: true, error: responseJson.error});
            }
        })
        .catch((error)=>{
            console.error(error);
        })
    }

    closeSent = (e) => {
        const target    = e.target;
        const name      = target.getAttribute('data-close');
        this.setState({[name]: false});
    }

    backToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <footer>
                {
                    this.state.backToTop ? (
                        <div className="backToTop">
                            <span className="fal fa-angle-up" onClick={this.backToTop}></span>
                        </div>
                    ) : (null)
                }


                {/* <div className="footer__bar">Ta kontakt for en uforpliktende prat. Kontakt oss her!</div> */}

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
                        </span>
                    </div>

                    <div className="footer__form">
                        {/* Footer form, send email */}
                        <form onSubmit={e => e.preventDefault()}>
                            <h4>SEND OSS EN MELDING</h4>

                            {
                                this.state.sent ? (
                                    <div className="kontakt-status success">
                                        <i className="fal fa-times" data-close="sent" onClick={this.closeSent}></i>
                                        <h5>Meldingen er sendt.</h5>
                                        <p>Takk for at du har tatt kontakt med oss!</p>
                                    </div>
                                ) : (null)
                            }
                            {
                                this.state.errStatus ? (
                                    <div className="kontakt-status error">
                                        <i className="fal fa-times" data-close="errStatus" onClick={this.closeSent}></i>
                                        <h5>Meldingen ble ikke sendt.</h5>
                                        {/* {this.state.error.map((item,i) => <p key={i}>{item}</p>)} */}
                                        <p>Feilmelding.</p>
                                    </div>
                                ) : (null)
                            }

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
                                <Link to={'#'}>Terms of user</Link> /
                                <Link to={'#'}>Privacy Policy</Link>
                            </span>
                        </p>

                        <p className="footer__right">
                            <a href="mailto:post@vektorprosjekt.no"><i className="fal fa-envelope"></i> post@vektorprosjekt.no</a>
                            &nbsp;
                            <a href="tel:+4761139000"><i className="fal fa-phone"></i> +47 611 39 000</a>
                        </p>
                    </span>
                </div>
            </footer>
        )
    }
}
