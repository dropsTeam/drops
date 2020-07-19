import React,{Component} from 'react';
import "./ProductAds.css";



class ProductAds extends React.Component {
 constructor(props) {
  super(props);
 }


 
render() {
  return  (
    <div className="ads__container">
       <div className="ads__wrapper">
        <a className="ads__link">
          <div className="ads__content">
           <img src="https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50"></img>
          </div>
        </a>
        <a className="ads__link">
          <div className="ads__content">
            <img src="https://rukminim1.flixcart.com/flap/480/480/image/28c7953638cece8c.jpg?q=50"></img>
          </div>
        </a>
        <a className="ads__link">
          <div className="ads__content">
          <img src="https://rukminim1.flixcart.com/flap/480/480/image/d000b651db9b444d.jpg?q=50"></img>
          </div>
        </a>
      </div>  
    </div>
  )
 }
}

export default ProductAds;