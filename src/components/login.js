import React, { Component } from 'react';
import logo from '../assets/logo-blue.svg';

import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';


const style = {
  margin: 12,
};

class login extends Component {
	 alignCenter = {
    height: "100vh",          
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  cardWidth = {
    width: "500px"
  }

  floatActionButtonRight = {
    float: "right"
	}
	constructor (props) {
		super(props)
		this.state= {
			email: '',
			apikey: ''
		}
	}
	 
	render () {
		return (
			<div style={this.alignCenter}>
				<Card style={this.cardWidth}>
					<CardHeader
					  title="Rebrandly"
					  subtitle="View on your rebrandly resource!!!"
					  avatar={logo}
					/>
          <CardTitle title="Login"/>
			<CardText>
				<TextField
				      type="email"
					  fullWidth={true}
					  floatingLabelText="Email Address"
				    /><br />
				<TextField 
					  type="password" 
					  fullWidth={true} 
					  floatingLabelText="Api Key"
					  
				    /><br />
			</CardText>
			<CardActions style={this.floatActionButtonRight}>    
				<RaisedButton label="Submit" primary={true} />
				</CardActions>
			</Card>
			</div>
			)
	}
	


}
export default login;