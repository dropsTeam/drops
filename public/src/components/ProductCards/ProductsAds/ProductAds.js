import React,{Component} from 'react';
import "./ProductAds.css";
import { withRouter } from 'react-router';



class ProductAds extends React.Component {
 constructor(props) {
  super(props);

 }
 
render() {
  return  (
    <div className="ads__container">
       <div className="ads__wrapper">
        {this.props.arr.map((item,index)=>
           <a className="ads__link" key={index}  onClick={()=> this.props.history.push(`/results/tv`)}>
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

export default withRouter(ProductAds);

