import React,{Component} from 'react';
import { Menu , Tabs} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import IntegerStep from "../Slider/Slider"


const { SubMenu } = Menu;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="SortBy" disabled key="1">
      {/* SortBy */}
    </TabPane>
    <TabPane tab="Popularity" key="2">
      Popularity
    </TabPane>
    <TabPane tab="Price -- Low To High" key="3">
      Price -- Low To High
    </TabPane>
    <TabPane tab="Price -- High To Low" key="4">
      Price -- High To Low
    </TabPane>
    <TabPane tab="Newest First" key="5">
    
    </TabPane>
  </Tabs>
);




class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <div className="slider__container">
           <h6>PRICES</h6>
            <IntegerStep />
        </div>
        <SubMenu
          key="sub1"
          title={
            <span >
              <span className="filters__option" >COLORS</span>
            </span>
          }
        >
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label htmlFor="vehicle1" className="radio__label">Red</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label htmlFor="vehicle1" className="radio__label"> Blue</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label htmlFor="vehicle1" className="radio__label"> green</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label htmlFor="vehicle1" className="radio__label"> purple</label><br></br>
          </p>
          
        </SubMenu>
        <SubMenu key="sub2" className="filters__option"  title="CUSTOMER RATINGS">
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label htmlFor="vehicle1" className="radio__label"> 4* Rating</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label htmlFor="vehicle1" className="radio__label"> 3* Rating</label><br></br>
          </p>
        </SubMenu>

      </Menu>
    );
  }
}





class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="inline">
        <div className="slider__container">
           <h6>PRICES</h6>
            <IntegerStep />
        </div>   
        <SubMenu
          key="sub1"
          title={
            <span >
              <span className="filters__option" >COLORS</span>
            </span>
          }
        >
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label">Red</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label"> Blue</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label"> green</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label"> purple</label><br></br>
          </p>
          
        </SubMenu>
        <SubMenu key="sub2" className="filters__option"  title="CUSTOMER RATINGS">
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label"> 4* Rating</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label"> 3* Rating</label><br></br>
          </p>
        </SubMenu>
        <SubMenu key="sub4" className="filters__option"  title="PRICES">
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label"> I have a bike</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label"> I have a bike</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label"> I have a bike</label><br></br>
          </p>
          <p className="radio__input">
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
           <label for="vehicle1" className="radio__label"> I have a bike</label><br></br>
          </p>
        </SubMenu>
      </Menu>
    );
  }
}


export {Sider,App};




