import React, { Component } from 'react'
import Navigation from './components/UI/Navigation';
import Footer from './components/UI/Footer';
import './CSS/styles.css';

export default class App extends Component {

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
