import React, { Component } from 'react';

//material-ui components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {

  constructor(props) {
    super(props)
    this.state={
    	sideBarOpen : false
    }
    
  }
	render () {
		return(
				<div>
					<AppBar
						title="Sagarmatha" 
						onLeftIconButtonClick = {()=> this.setState({sideBarOpen: !this.state.sideBarOpen}) }
					/>
					<Drawer open = {this.state.sideBarOpen }
					docked={false}
					onRequestChange = { ()=> this.toggleSidebar()}
					>
						<MenuItem>Menu1</MenuItem>
						<MenuItem>Menu2</MenuItem>
					</Drawer>
				</div>
			)
	}
	toggleSidebar() {
		this.setState({ sideBarOpen: !this.state.sideBarOpen})
	}
}
export default Header;