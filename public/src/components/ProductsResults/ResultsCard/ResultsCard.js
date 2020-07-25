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
// for calculating emi based on price
  const emiArr = ["EMI avalaible","No EMI avalaible"]
  let emi = emiArr[Math.floor(Math.random() *2) ]

  return  (
     <div className="p-2 flex-fill bd-highlight resultsCard__container ">
      <div className="resultsImage__container">
        <a><img src={this.props.img}></img></a>
      </div>
      <div className="resultsCard__content">
       <div className="resultsCard__title">
        <span className="resultsCard__heading" >{this.props.title}</span>
        <p>
          <span style={{ textAlign: 'center' }} > <span className="badge badge-success">{4.5} &#9734;</span> </span>
          <span className="review__count">({345})</span>
          <span><img className="assured__tag" src={this.props.flipkartImg} ></img></span>
        </p>
       </div>
       <div className="resultsCard__price">
         <span className="resultsCard__dPrice price">${dPrice}</span>
         <span className="resultsCard__aPrice price">${aPrice}</span>
         <span className="resultsCard__dPercent price">{discountPercent*100}% off</span>
       </div>
       <div className="results__emi">
         <span>{dPrice > 300 ? emi : ""}</span>
      </div>
    </div>
   </div>
  )
 }
}

export default ResultsCard;