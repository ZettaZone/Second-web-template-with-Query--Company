import React,{ Component } from 'react';

import Home from './../Home';
import About from './../About';
import Profile from './../Profile';
import Work from './../Work';
import Portfolio from './../Portfolio';
import Contact from './../Contact';
import Footer from './../Footer';

class Index extends Component {
  render(){
    return (
      <div>
        < Home />
        < Work />
        < Portfolio />
        < Profile />
        < About />
        < Contact />
        < Footer />
      </div>
    );
  }
 
}

export default Index;
