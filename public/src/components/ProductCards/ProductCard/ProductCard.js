import React from 'react';
import  "./ProductCard.css";


class ProductCard extends React.Component {
  constructor(props) {
   super(props);
  }


  
 render() {
   return  (
     <li className="nav-item">
      <div className="product__container">
       <div className="product__wrapper">
         <div className="image__container">
           <div className="image__wrapper">
            <img className="image__content" src={this.props.item.img} alt="Logo" />
           </div>
         </div>
         <div className="product__title">
           <p>{this.props.item.title}</p>
           </div>
         <div className="product__price">
           <p>{this.props.item.price}</p>
           </div>
         <div className="product__brands">
           <p>{this.props.item.brands}</p>
           </div>
       </div>
     </div>
     </li>
   )
  }
}

export default ProductCard;


