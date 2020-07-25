import React,{Component} from 'react';
import  "./ProductResults.css";
import ResultsCard from "../ProductsResults/ResultsCard/ResultsCard.js";
import {App,Sider} from "./FiltersMenu/FiltersMenu"


// filters block
class Filters extends Component {
 render() {
   return (
     <div className="filters__container">
      <div className="filters__wrapper">
        <div className="filters__title">
         <h6>Filters</h6>
        </div>
        <div className="filters__block">
          <div className="filters__block--vertical">
            <Sider />
          </div>
          <div className="filters__block--horizontal">
            <App />
          </div>
        </div>
      </div>
     </div>
   );
 }
}


// resulst block
class Results extends Component {
 render() {
   return (
     <div className="results__container">
      <div className="results__wrapper">
        <div className="results__title">
          <h6>Results</h6>
        </div>
        <div className="results__filterNavbar">
          {/* <Demo /> */}
        </div>
        

        <div className="d-flex bd-highlight flex-row flex-wrap  align-content-end">
           {numbers.map((item,index)=>
                <ResultsCard 
                   id={item.id} 
                   title={item.title}
                   price={item.price} 
                   img={item.img}  
                   key={index} 
                   flipkartImg="http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png"
                 />
              )}
       </div>

      </div>
     </div>
   );
 }
}


// main  searched product results container---------------------------------------------------------------
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



// fake products array---
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
  price : "150"
 },
 {
  id:7,
  img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
  title : "T-Shirt",
  price : "250"
 },
 {
  id:8,
  img:"https://rukminim1.flixcart.com/image/309/371/k5txifk0/t-shirt/h/z/v/m-43-celebrino-original-imafzf8hxqsznvw5.jpeg?q=50",
  title : "T-Shirt",
  price : "450"
 }
]