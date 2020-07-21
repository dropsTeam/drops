import React,{Component} from 'react';
import  "./ProductResults.css";
import ResultsCard from "../ProductsResults/ResultsCard/ResultsCard.js";

import { Menu , Tabs} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

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
        <div className="results__filterNavbar">
          <Demo />
        </div>
        <div className="results__block">
         <div className="results__block--inner">
              {numbers.map((item,index)=>
                <ResultsCard 
                   id={item.id} 
                   title={item.title}
                   price={item.price} 
                   img={item.img}  
                   key={index} 
                 />
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
  id:1,
  img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
  title : "T-Shirt",
  price : "450"
 },
 {
  id:2,
  img:"https://rukminim1.flixcart.com/image/309/371/k7531jk0/t-shirt/z/c/a/s-rh-roundnck-x-hlfslv-blk-org-skin-rockhard-original-imafpfvkgtxeuz77.jpeg?q=50",
  title : "Striped Men Routine Wear",
  price : "450"
 },
 {
  id:3,
  img:"https://rukminim1.flixcart.com/image/309/371/jtn9bww0/t-shirt/5/g/g/m-hm-1001-black-red-helmont-original-imafdfvvr8hqdu65.jpeg?q=50",
  title : "T-Shirt",
  price : "450"
 },
 {
  id:4,
  img:"https://rukminim1.flixcart.com/image/309/371/k30h8y80/t-shirt/u/z/s/s-shp275282-shapphr-original-imafjvg4nngzwrfw.jpeg?q=50",
  title : "T-Shirt",
  price : "450"
 },
 {
  id:5,
  img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
  title : "T-Shirt",
  price : "450"
 },
 {
  id:6,
  img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
  title : "T-Shirt",
  price : "450"
 },
 {
  id:7,
  img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
  title : "T-Shirt",
  price : "450"
 },
 {
  id:8,
  img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
  title : "T-Shirt",
  price : "450"
 }
]