import React from 'react';
import  "./ProductCard.css";


class ProductCard extends React.PureComponent {
  constructor(props) {
   super(props);
  }


  
 render() {
  
   return  (
     <li className="nav-item">
       <a className="nav-item__link">
          <div className="product__container">
            <div className="product__wrapper">   
              <div className="image__container">
                <div className="image__wrapper">
                  <img className="image__content"  src={this.props.item.media[0]} alt="Logo" />
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
       </a>
     </li>
   )
  }
}

export default ProductCard;





