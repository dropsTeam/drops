import React,{Component,componentDidMount} from 'react';
import  "../ProductResults.css";
import ResultsCard from "../ResultsCard/ResultsCard";

import {mainHttp as axios} from "../../../Axios/Axios.js";






class ResultsBlock extends Component{

 constructor(props) {
   super(props);
 }

 componentDidMount(){
   axios.get("/products/search?text=Mobile&category=Mobile")
      .then(res=>{
        console.log(res);
        console.log("search request")
     })
 }


 render(){
   return (
     <div className={`d-flex bd-highlight flex-row flex-wrap  .align-content-sm-around align-content-around `}>
      {this.props.numbers.map((item,index)=>
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
   )
 }
}


export default ResultsBlock;