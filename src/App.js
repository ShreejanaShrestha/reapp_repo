import React, { Component } from 'react';

//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//components
//import Header from './components/Header'

//components
//import Body from './components/Body';

import Login from './components/login' ;


import Dashboard from './components/Dashboard';

import { BrowserRouter, Switch } from 'react-router-dom';
import Route from 'react-router/Route';

 
 class App extends Component {
  render () {
    return (
        <MuiThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={ Login }/>
               
              <Route path="/dashboard" component={ Dashboard }/>
            </Switch>
         </BrowserRouter>

          
        </MuiThemeProvider>
      )
  }
 }
 export default App;

