import React, { PureComponent } from 'react';
import "./ProductResults.css";
// import ResultsCard from "../ProductsResults/ResultsCard/ResultsCard.js";
import ResultsBlock from "./ResultsBlock/ResultsBlock.js"
import { mainHttp } from '../../Axios/Axios';
import { App, Sider } from "./FiltersMenu/FiltersMenu"
// importing axios
import { mainHttp as axios } from "../../Axios/Axios.js";



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

    this.state = {
      results: []
    }

  }


  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.text !== prevProps.match.params.text) {
      this.fetch();
    }
  }


  fetch = async () => {
    try {
      const results = await mainHttp.get(`/products/search?text=${this.props.match.params.text}`)

      const newArr = [...results.data];
      this.setState({ ...this.state, results: [...newArr] });

    } catch (err) {
      console.log(err)
      alert('error occured laoding th results')
    }
  }


  render() {

    return (
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



