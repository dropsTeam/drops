import React,{Component} from 'react';
import  "./ProductResults.css";
// import ResultsCard from "../ProductsResults/ResultsCard/ResultsCard.js";
import ResultsBlock from "./ResultsBlock/ResultsBlock.js"

import {App,Sider} from "./FiltersMenu/FiltersMenu"
// importing axios
import {mainHttp as axios} from "../../Axios/Axios.js";



// filters block
class Filters extends Component {
 render() {
   return (
     <div className="filters__container">
      <div className="filters__wrapper">
        <div className="filters__title">
         <h6>Filters</h6>
        </div>
        <div className="filters__block">
          <div className="filters__block--vertical">
            <Sider />
          </div>
          <div className="filters__block--horizontal">
            <App />
          </div>
        </div>
      </div>
     </div>
   );
 }
}



// resulst block
class Results extends Component {

  constructor(props) {
    super(props);
  }

 render() {

   return (
     <div className="results__container">
      <div className="results__wrapper">
        <div className="results__title">
          <h6>Results</h6>
        </div>
        <div className="results__filterNavbar">
          {/* <Demo /> */}
        </div>
      
          <ResultsBlock numbers={this.props.numbers} />

      </div>
     </div>
   );
 }
}


// and here is the whole block of results containing the filters and resulting products block

// main  searched product results container---------------------------------------------------------------
class ProductResults extends React.Component {
  constructor(props) {
   super(props);

   this.state={
     results :''
   }
  }

 

  componentDidMount(){
    console.log(this.props)
    axios.get("/products/search?text=Apple")
      .then(res=>{
        console.log(res);  
        return  res;
      })
       .then(res=>{
        this.setState({results : res})
       })
  }

 render() {

     
   return  (
    <div className="resultsView__container">
     <div className="resultsView__wrapper">
       <Filters />
       <Results numbers={this.state.results} />
     </div>
    </div>
   )
  }
}


export default ProductResults;



