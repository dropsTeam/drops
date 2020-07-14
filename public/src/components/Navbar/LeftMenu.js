import React, { Component } from 'react';
import { Input} from 'antd';


const { Search } = Input;

class LeftMenu extends Component {
  render() {
    return (

      <Search className="searchbox"
      placeholder="input search text"
      onSearch={value => console.log(value)}    />
			
    );
  }
}

export default LeftMenu;