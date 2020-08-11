import React, { Component } from 'react';
import LeftMenu from './LeftMenu';

import RightMenu from './RightMenu';
import {Avatar } from 'antd';
import flipkart from '../../media/flipkart3.png';
// import SubNav from './subnav';

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
        <nav className="menuBar" >
        	<div className="logo">
        		<a href="/"><Avatar style={{ width: 130, height: 40, top:-10, left:30 }} shape="square" src={flipkart}></Avatar></a>
          
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