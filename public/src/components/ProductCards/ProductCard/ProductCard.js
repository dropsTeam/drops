import React from 'react';
import  "./ProductCard.css";
import { withRouter } from 'react-router';


class ProductCard extends React.PureComponent {
  constructor(props) {
   super(props);

   this.multiply = this.multiply.bind(this);
  }
 
  multiply = (a, b) => a * b;

  
 render() {

  let discountPercent = 0.2;
  let aPrice = this.props.item.price;
  let dPrice = aPrice+this.multiply(discountPercent,aPrice);

    // parsing title
    const itemTitle = this.props.item.title;
    let parsedTitle = itemTitle.split("").slice(0,20);

   return  (
     <li className="nav-item">
       <a  onClick={()=> this.props.history.push(`/view/${this.props.item._id}`)} className="nav-item__link"  >
          <div className="product__container">
            <div className="product__wrapper">   
              <div className="image__container">
                <div className="image__wrapper">
                  <img className="image__content"  src={this.props.item.media[0]} alt="Logo" />
                </div>
              </div>
              <div className="product__title">
                {parsedTitle}
              </div>
              <div className="product__price">
                {/* <p>{this.props.item.price}</p> */}
                <span className="productCard__dPrice price">${aPrice}</span>
                <span className="productCard__aPrice price">${dPrice}</span>
                <span className="productCard__dPercent price">{discountPercent*100}% off</span>
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

export default withRouter(ProductCard);





