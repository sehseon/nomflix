import React, { Component } from 'react';
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faStar);

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    )
  }
}

export default App;
