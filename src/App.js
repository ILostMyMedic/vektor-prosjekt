import React, { Component } from 'react'
import Navigation from './components/UI/Navigation';
import Footer from './components/UI/Footer';
import './CSS/styles.css';

export default class App extends Component {
  /** 
   * @author Martin Johansen <martin.johansen.98@outlook.com> 
   * @author Sara Løkken <saraloekken@gmail.com> 
   * @version 1.0.0
   */

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <React.Fragment>
          {this.props.children}
        </React.Fragment>

        <Footer />
      </React.Fragment>
    )
  }
}
