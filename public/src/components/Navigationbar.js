import React, { Component } from 'react';
import LeftMenu from './Navbar/LeftMenu'
import RightMenu from './Navbar/RightMenu'
import {Avatar } from 'antd';
import amazon from '../media/amazon.png';

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
        		<a><Avatar style={{ width: 100, height: 40 }} shape="square" src={amazon}></Avatar></a>
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