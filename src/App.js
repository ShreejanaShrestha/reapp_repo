import React, { Component } from 'react';

//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//components
import Header from './components/Header'

//components
import Body from './components/Body'

import Login from './components/login'
 
 class App extends Component {
  render () {
    return (
        <MuiThemeProvider>
         
          
          <Login />
        </MuiThemeProvider>
      )
  }
 }
 export default App;

