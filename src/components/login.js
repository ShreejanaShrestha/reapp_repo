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
						value={this.state.email}
						onChange={ (e) => this.onChangeEmail(e) }
					/><br />
					<TextField 
						type="password" 
						fullWidth={true} 
						floatingLabelText="Api Key"
						value={this.state.apikey}
						onChange={ (e) => this.onChangeApiKey(e)}
					/><br />
				</CardText>
				<CardActions style={this.floatActionButtonRight}>    
					<RaisedButton label="Submit" primary={true} 
					style={ style }
					onClick={ () => this.submitForm() }/>
				</CardActions>
			</Card>
		</div>
		)
	}
	onChangeEmail(e) {
		this.setState({
			email: e.target.value
		})
	}

	onChangeApiKey(e) {
		this.setState({
			apikey: e.target.value
		})
	}

	submitForm() {
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
                            this.props.history.push('/dashboard')
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
	componentWillMount() {
    	  const savedApikey = sessionStorage.getItem('apikey',this.state.apikey)
    	    if(savedApikey) {
		      console.log("yes")
          		this.props.history.push('/dashboard')
        		}
     	 }	


}

export default login;