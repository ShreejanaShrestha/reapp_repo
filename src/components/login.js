import React, { Component } from 'react';
import logo from '../assets/logo-blue.svg';

import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

//services
//import RebrandlyApi from '../services/rebrandlyApi';

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
				      hintText="Email" value={this.state.email} onChange={(e) => this.onEmailChange(e)}
				    /><br />
				<TextField
				      hintText="API Key"  type="password" value={this.state.apikey} onChange={(e) => this.onApiKeyChange(e)}
				    /><br />
				</CardText>
<CardActions style={this.floatActionButtonRight}>    
				<RaisedButton label="Submit" primary={true} style={style}onClick={()=> this.onSubmit()} />
				</CardActions>
</Card>
			</div>
			)
	}
	onEmailChange(e) {

		this.setState({email: e.target.value})
	}
	onApiKeyChange(e) {
		this.setState({apikey: e.target.value})
	}
	onSubmit() {
		fetch('https://api.rebrandly.com/v1/account' ,
		{
			headers: {
				apikey: this.state.apikey
			}
		})
		.then(response => {
			if(response.ok) {
				response.json()
					.then(data => {
						console.log(data)
						if(data.email===this.state.email) {
							console.log("Right User")
						}
						else {
							alert("Not Autorized User")
						}
						})
			}
			else
			{
				alert(response.statusText)
			}
		})
		
	}

}
export default login;