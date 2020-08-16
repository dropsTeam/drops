import React,{Component} from 'react';
import  "./ResultsCard.css";
import {withRouter} from "react-router-dom"



class ResultsCard extends React.Component {
 constructor(props) {
  super(props);
  
  this.multiply = this.multiply.bind(this);
 }

 multiply = (a, b) => a * b;


render() {

  let discountPercent = 0.2;
  let aPrice = this.props.price;
  let dPrice = aPrice+this.multiply(discountPercent,aPrice);
// for calculating emi based on price
  const emiArr = ["EMI avalaible","No EMI avalaible"];
  let emi = emiArr[Math.floor(Math.random() *2) ];

  // parsing title
  const itemTitle = this.props.title;
  let parsedTitle = itemTitle.split("").slice(0,20);


  return  (
     <div className={`p-2  bd-highlight resultsCard__container `} >
      <div className="resultsImage__container">
        <a  onClick={()=> this.props.history.push(`/view/${this.props.id}`)}><img src={this.props.img}></img></a>
      </div>
      <div className="resultsCard__content">
       <div className="resultsCard__title">
        <span className="resultsCard__heading" >{parsedTitle}</span>
        <p>
          <span style={{ textAlign: 'center' }} > <span className="badge badge-success">{this.props.rating} &#9734;</span> </span>
          <span className="review__count">({this.props.totalReviews > 0 ? this.props.totalReviews : "No Reviews"})</span>
          <span><img className="assured__tag" src={this.props.flipkartImg} ></img></span>
        </p>
       </div>
       <div className="resultsCard__price">
         <span className="resultsCard__dPrice price">${aPrice}</span>
         <span className="resultsCard__aPrice price">${dPrice}</span>
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

export default withRouter(ResultsCard);