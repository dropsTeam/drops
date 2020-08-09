import React from 'react';
import { Menu, Tabs } from 'antd';
import { Radio, Input } from 'antd';
import { mainHttp as axios } from  "../../../Axios/Axios.js"

// import IntegerStep from "../Slider/Slider"
import { Slider, InputNumber, Row, Col , Divider } from 'antd';

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



  render() {

    // console.log(this.props)

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    const { value } = this.state;
    const {value2} = this.state;
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
              onAfterChange={(event) => this.props.onPriceAfterChange(event)}
              onChange={(event) => this.props.onPriceChange(event)}
              value={[this.props.priceMin, this.props.priceMax]}
            />
            </Col>
         </Row>
         <Row>
          <div className="site-input-number-wrapper">
            $<InputNumber 
               min={10} 
               max={5000} 
               defaultValue={3} 
               onChange={(event)=> this.props.onChangeMin(event)} 
               value={this.props.priceMin}
             /> 
             
            
            to<InputNumber 
               min={1000} 
               max={5000} 
               defaultValue={50} 
               onChange={(event) => this.props.onChangeMax(event)} 
               value={this.props.priceMax}
             />
           </div>
          </Row>
         </div>
        </div>

{/* price ranger ends */}

{/* radio groupd for sort by and sort order */}
    <div className="filters__option--inner">
      
      <Menu
        style={{ width: 256 , border : 'none'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
    
      <SubMenu  style={{ color : "black" , fontWeight : '500' }}  key="sub1"  title="SORT BY">
        <Radio.Group className="filters__radio" onChange={(event) =>  this.props.onChangeSortBy(event)} value1={value}>
          <Radio style={radioStyle} value={"timeStamp"}>
            By Date
          </Radio>
          <Radio style={radioStyle} value={"aveageRaing"}>
            Average Rating
          </Radio>
          <Radio style={radioStyle} value={"totalReview"}>
            Total Reviews
          </Radio>
          <Radio style={radioStyle} value={"price"}>
            Price
          </Radio>
        </Radio.Group>
       </SubMenu>

      </Menu>


      {/* Menu for Categories------------ */}
        <Menu
          style={{ width: 256 , border : 'none'}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          >
        
          <SubMenu  style={{ color : "black" , fontWeight : '500'}}   key="sub2"  title="CATEGORIES">
            <Radio.Group  className="filters__radio" onChange={(event) =>  this.props.onChangeCategory(event)} value1={value}>
              <Radio style={radioStyle} value={"Mobile"}>
                Mobile
              </Radio>
              <Radio style={radioStyle} value={"Electronics"}>
                Electronics
              </Radio>
            </Radio.Group>
          </SubMenu>
        
        </Menu>

     {/* Radio group by sort by ---- order-- */}
      <Divider plain>Sort Order</Divider>

      <Radio.Group className="filters__radio" onChange={(e) => this.props.onChangeSortOrder(e) } value2={value}>
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
     
          <RadioGroup  {...this.props} />
      
    );
  }
}



export { Sider };




