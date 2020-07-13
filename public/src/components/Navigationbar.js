import React, { Component } from 'react';
import LeftMenu from './Navbar/LeftMenu'
import RightMenu from './Navbar/RightMenu'
import { Drawer, Button } from 'antd';

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <nav className="menuBar">
        	<div className="logo">
        		<a href="">logo</a>
        	</div>
        	<div className="menuCon">
        		<div className="leftMenu">
	        		<LeftMenu />
				    </div>
				    <div className="rightMenu">
	        			<RightMenu />
				    </div>
				    
				    

        	</div>
        </nav>
    );
  }
}

export default Navbar;