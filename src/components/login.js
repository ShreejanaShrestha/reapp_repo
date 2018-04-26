import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
class login extends Component {
	render () {
		return (
			<div>
				<TextField
				      hintText="Email"
				    /><br />
				<TextField
				      hintText="API Key"
				    /><br />
				    
				<RaisedButton label="Submit" primary={true} style={style} />
			</div>
			)
	}
}
export default login;