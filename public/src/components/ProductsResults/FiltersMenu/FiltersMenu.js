import React from 'react';
import { Menu, Tabs } from 'antd';
import { Radio, Input } from 'antd';
import { mainHttp as axios } from  "../../../Axios/Axios.js"

import IntegerStep from "../Slider/Slider"

const { SubMenu } = Menu;
const { TabPane } = Tabs;




class RadioGroup extends React.Component {
  state = {
    sortby: "aveageRaing",
    sortorder : "INC"
  };

   fetch = async() =>{
    let url = window.location.href;
    let arr = url.split("/");
    let arrLen = arr.length;
    const data = await axios.get(`/products/search?text=${arr[arrLen-1]}&sortby=${this.state.sortby}&sortorder=${this.state.sortorder}`)
             .then(res=>{
               console.log(res)
               console.log(arr[arrLen-1])
             })
     }

  onChangeSortBy = e => {
    console.log(e.target.value);
    this.setState({
      sortby: e.target.value,
    });

    this.fetch()
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { value } = this.state;
    return (
      <Radio.Group onChange={this.onChangeSortBy} value={value}>
        <Radio style={radioStyle} value={"timeStamp"}>
          By Date
        </Radio>
        <Radio style={radioStyle} value={"aveageRaing"}>
          Average Rating
        </Radio>
        <Radio style={radioStyle} value={"totalReview"}>
          Total Reviews
        </Radio>
      </Radio.Group>

    );
  }
}


// radio group for prices
class RadioGroupPrices extends React.Component {
  state = {
    sortby: "aveageRaing",
    sortorder : "INC"
  };


  fetch = async(sortorder) =>{
    let url = window.location.href;
    let arr = url.split("/");
    let arrLen = arr.length;
    console.log("param :"+sortorder)
    const data = await axios.get(`/products/search?text=${arr[arrLen-1]}&sortby=${this.state.sortby}&sortorder=${sortorder}`)
             .then(res=>{
               console.log(res)
               console.log(arr[arrLen-1])
             })
     }


  onChangeSortOrder = e => {
    console.log(e.target.value);
    this.setState({
      sortorder: e.target.value,
    });

    this.fetch(e.target.value)
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { value } = this.state;
    return (
      <Radio.Group onChange={this.onChangeSortOrder}  defaultValue={"DEC"}>
        <Radio style={radioStyle} value={"DEC"}>
          High-To-Low
        </Radio>
        <Radio style={radioStyle} value={"INC"}>
          Low-To-High
        </Radio>
      </Radio.Group>

    );
  }
}





// Two different components for different screen sizes---------------------

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
        defaultOpenKeys={['sub1','sub2']}
        style={{ width: 256 }}
      >
        <div className="slider__container">
          <h6>PRICES</h6>
          <IntegerStep />
        </div>

        {/* radi group for --- */}

        <SubMenu key="sub1" className="filters__option" title="SORT BY">
          <RadioGroup />
        </SubMenu>

        <SubMenu key="sub2" className="filters__option" title="SORTING ORDER">
          <RadioGroupPrices />
        </SubMenu>


      </Menu>
    );
  }
}




// smaller screen sizes
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
        <SubMenu key="sub2" className="filters__option" title="CUSTOMER RATINGS">
          <p className="radio__input">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1" className="radio__label"> 4* Rating</label><br></br>
          </p>
          <p className="radio__input">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1" className="radio__label"> 3* Rating</label><br></br>
          </p>
        </SubMenu>

      </Menu>
    );
  }
}


export { Sider, App };




