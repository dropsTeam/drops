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
        {this.props.arr.map((item,index)=>
           <a className="ads__link" key={index}>
             <div className="ads__content">
               <img src={item.img} ></img>
             </div>
           </a>
        )}
      </div>  
    </div>
  )
 }
}

export default ProductAds;

