import React,{Component} from 'react';
import  "./ProductResults.css";
import ResultsCard from "../ProductsResults/ResultsCard/ResultsCard.js";

import { Menu , Radio} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;



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





class Filters extends Component {
 render() {
   return (
     <div className="filters__container">
      <div className="filters__wrapper">
        <div className="filters__title">
         <h6>Filters</h6>
        </div>
        <div className="filters__block">
          <Sider />
        </div>
      </div>
     </div>
   );
 }
}


class Results extends Component {
 render() {
   return (
     <div className="results__container">
      <div className="results__wrapper">
        <div className="results__title">
          <h6>Results</h6>
        </div>
        <div className="results__filterNavbar">filters navbar</div>
        <div className="results__block">
         <div className="results__block--inner">
              {numbers.map((item,index)=>
                <ResultsCard id={item.id}  key={index} />
              )}
         </div>
        </div>
      </div>
     </div>
   );
 }
}


// main particular searched product results container---------------------------------------------------------------
class ProductResults extends React.Component {
  constructor(props) {
   super(props);
  }

 render() {
   return  (
    <div className="resultsView__container">
     <div className="resultsView__wrapper">
       <Filters />
       <Results />
     </div>
    </div>
   )
  }
}


export default ProductResults;



const numbers = [
 {
  id:1
 },
 {
  id:2
 },
 {
  id:3
 },
 {
  id:4
 },
 {
  id:5
 },
 {
  id:6
 },
 {
  id:7
 },
 {
  id:8
 }
]