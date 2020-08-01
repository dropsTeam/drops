import React from 'react';
import { Menu, Tabs } from 'antd';
import { Radio, Input } from 'antd';
import { mainHttp as axios } from  "../../../Axios/Axios.js"

import IntegerStep from "../Slider/Slider"
import { Slider, InputNumber, Row, Col } from 'antd';

const { SubMenu } = Menu;
const { TabPane } = Tabs;




// sort by radio group
class RadioGroup extends React.Component {
  state = {
    sortby: "aveageRaing",
    sortorder : "INC",
    priceMin :10,
    priceMax :4000
  };

  // for fetching by SORTBY
   fetchBy = async(sortby) =>{
    let url = window.location.href;
    let arr = url.split("/");
    let arrLen = arr.length;
    await axios.get(`/products/search?text=${arr[arrLen-1]}&sortby=${sortby}&sortorder=${this.state.sortorder}`)
        .then(res=>{
          console.log(res)
          console.log(arr[arrLen-1])
          console.log(this.state)
        })
     }

// for fetching by SORTORDER
    fetchOrder = async(sortorder) =>{
    let url = window.location.href;
    let arr = url.split("/");
    let arrLen = arr.length;
    await axios.get(`/products/search?text=${arr[arrLen-1]}&sortby=${this.state.sortby}&sortorder=${sortorder}`)
        .then(res=>{
          console.log(res)
          console.log(arr[arrLen-1])
          console.log(this.state)
        })
    }

  // for fetching by Price Range
  fetchRange = async(range1,range2) =>{
    let url = window.location.href;
    let arr = url.split("/");
    let arrLen = arr.length;
    let range = `${range1}`+"-"+`${range2}`;
    console.log(range);
    await axios.get(`/products/search?text=${arr[arrLen-1]}&sortby=${this.state.sortby}&sortorder=${this.state.sortorder}&range=${range}`)
        .then(res=>{
          console.log(res)
          console.log(arr[arrLen-1])
          console.log(this.state)
        })
    }


  // functions for fetching requests on changing filteres
  onChangeSortBy = e => {
    console.log(e.target.value);
    this.setState({
      sortby: e.target.value
    });
    console.log("sortby :"+e.target.value)
    this.fetchBy(e.target.value)
  };


  onChangeSortOrder = e => {
      console.log(e.target.value);
      this.setState({
        sortorder: e.target.value,
      });
      console.log("sortorder :"+e.target.value)
      this.fetchOrder(e.target.value)
    };

  



// functions for price ranger
    onChangeMin = value => {
      this.setState({
        priceMin: value,
      });
    };
  
    onChangeMax = value => {
      this.setState({
        priceMax: value,
      });
    };
  
    onPriceChange(values) {
      console.log([values[0],values[1]])
      this.setState({
        priceMin: values[0],
        priceMax: values[1],
      });
      this.fetchRange(values[0],values[1])
    }


  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { value } = this.state;
    return (
      <>
        {/* price ranger */}
        <div>
          <div className="slider__container">
          <h6>PRICES</h6>
          <Row>
            <Col span={22}>
            <Slider range defaultValue={[10, 4000]}  
              max={5000}
              onChange={this.onPriceChange.bind(this)}
              value={[this.state.priceMin, this.state.priceMax]}
            />
            </Col>
         </Row>
         <Row>
          <div className="site-input-number-wrapper">
            $<InputNumber 
               min={10} 
               max={5000} 
               defaultValue={3} 
               onChange={this.onChangeMin} 
               value={`${this.state.priceMin}`}
             /> 
             
            
            to<InputNumber 
               min={4000} 
               max={5000} 
               defaultValue={50} 
               onChange={this.onChangeMax} 
               value={`${this.state.priceMax}`}
             />
           </div>
          </Row>
         </div>
        </div>

{/* price ranger ends */}

{/* radio groupd for sort by and sort order */}
    <div className="filters__option--inner">
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

      <Radio.Group onChange={this.onChangeSortOrder} value={value}>
        <Radio style={radioStyle}  value={"INC"}>
          High-To-Low
        </Radio>
        <Radio style={radioStyle}  value={"DEC"}>
          Low-To-High
        </Radio>
      </Radio.Group>
    </div>

     </>
    );
  }
}






// Two different components for different screen sizes---------------------
//  DESKTOP SIZES :
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

        <SubMenu key="sub1" className="filters__option" title="SORT BY">
          <RadioGroup />
        </SubMenu>

      </Menu>
    );
  }
}



// MOBILE 
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




