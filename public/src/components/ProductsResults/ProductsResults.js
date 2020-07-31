import React, { PureComponent } from 'react';
import  "./ProductResults.css";
// import ResultsCard from "../ProductsResults/ResultsCard/ResultsCard.js";
import ResultsBlock from "./ResultsBlock/ResultsBlock.js"

import {App,Sider} from "./FiltersMenu/FiltersMenu"
// importing axios
import {mainHttp as axios} from "../../Axios/Axios.js";



// filters block
class Filters extends PureComponent {
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
class Results extends React.PureComponent {

  constructor(props) {
    super(props);
  }

 render() {
   console.log(this.props)
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
class ProductResults extends React.PureComponent {
  constructor(props) {
   super(props);

   this.state={
     results :''
   }
  }

  componentDidMount(){
    const text = this.props;
     this.setState({ results : this.props.location.params.results  })
  }


  componentDidUpdate(props){
      if(props.location.text !== this.props.location.text){
        console.log("state changed")
        this.setState({results : this.props.location.params.results})
      }

  }

 
  

 render() {
   console.log('yo')
   return  (
    <div className="resultsView__container">
     <div className="resultsView__wrapper">
       <Filters />
       <Results numbers={this.state.results } />
     </div>
    </div>
   )
  }
}


export default ProductResults;



