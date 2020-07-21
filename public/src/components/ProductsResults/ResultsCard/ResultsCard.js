import React,{Component} from 'react';
import  "./ResultsCard.css";


class ResultsCard extends React.Component {
 constructor(props) {
  super(props);

  this.multiply = this.multiply.bind(this);
 }

 multiply = (a, b) => a * b;


render() {

  let discountPercent = 0.2;
  let aPrice = this.props.price;
  let dPrice = aPrice-this.multiply(discountPercent,aPrice);
  
  return  (
   <div className="resultsCard__container">
    <div className="resultsCard__wrapper">
      <div className="image__container">
       <div className="image__wrapper">
        <a><img src={this.props.img}></img></a>
       </div>
      </div>
      <div className="resultsCard__content">
       <div className="resultsCard__title">
        <span>{this.props.title}</span>
       </div>
       <div className="resultsCard__price">
         <span className="resultsCard__dPrice price">${dPrice}</span>
         <span className="resultsCard__aPrice price">${aPrice}</span>
         <span className="resultsCard__dPercent price">{discountPercent*100}% off</span>
       </div>
       <div className="resultsCard__sizes">
        <span >Size :</span><span> S,M,L,XL</span>
       </div>
      </div>
    </div>
   </div>
  )
 }
}

export default ResultsCard;