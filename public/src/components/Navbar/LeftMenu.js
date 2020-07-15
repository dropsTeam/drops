import React, { Component } from 'react';
import { Input, Dropdown} from 'antd';


const { Search } = Input;

class LeftMenu extends Component {
  render() {
    return (
      

      <Search className="searchbox"
      placeholder="Search for products, brands and more"
      onSearch={value => console.log(value)}    />

      
			
    );
  }
}

export default LeftMenu;