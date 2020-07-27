import React,{Component} from 'react';
import  "../ProductResults.css";
import ResultsCard from "../ResultsCard/ResultsCard";


class ResultsBlock extends Component{

 constructor(props) {
   super(props);
 }

 render(){


   return (
     <div className="d-flex bd-highlight flex-row flex-wrap  align-content-end">
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