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
              <Sider {...this.props} />
            </div>
            {/* mobile */}
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
      results: [],
      sortby: "aveageRaing",
      sortorder : "INC",
      priceMin :10,
      priceMax :4000
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


  // for fetching by SORTBY
  fetchBy = async(sortby) =>{
    let url = window.location.href;
    let arr = url.split("/");
    let arrLen = arr.length;
    let range = `${this.state.priceMin}`+"-"+`${this.state.priceMax}`;
    await axios.get(`/products/search?text=${arr[arrLen-1]}&sortby=${sortby}&sortorder=${this.state.sortorder}&range=${range}`)
        .then(res=>{
          this.setState({results : res.data})
        })
     }

// for fetching by SORTORDER
    fetchOrder = async(sortorder) =>{
      let url = window.location.href;
      let arr = url.split("/");
      let arrLen = arr.length;
      let range = `${this.state.priceMin}`+"-"+`${this.state.priceMax}`;
      await axios.get(`/products/search?text=${arr[arrLen-1]}&sortby=${this.state.sortby}&sortorder=${sortorder}&range=${range}`)
        .then(res=>{
          this.setState({results : res.data})
        })
    }

  // for fetching by Price Range
  fetchRange = async(range1,range2) =>{
    let url = window.location.href;
    let arr = url.split("/");
    let arrLen = arr.length;
    let range = `${range1}`+"-"+`${range2}`;
    console.log(range);
    await axios.get(`/products/search?text=${arr[arrLen-1]}&sortby=${this.state.sortby}&sortorder=${this.state.sortorder}&range=${range}`)
        .then(res=>{
          this.setState({results : res.data})
        })

    }


  // functions for fetching requests on changing filteres
  onChangeSortBy = e => {
    this.setState({
      sortby: e.target.value
    });
    this.fetchBy(e.target.value)
  };


  onChangeSortOrder = e => {
      this.setState({
        sortorder: e.target.value,
      });
      this.fetchOrder(e.target.value)
    };

  onPriceChange = (values) => {
    console.log([values[0],values[1]])
    this.setState({
      priceMin: values[0],
      priceMax: values[1],
    });
    this.fetchRange(values[0],values[1])
  }

  onChangeMin = value => {
    this.setState({
      priceMin: value,
    });
    this.fetchRange(value,this.state.priceMax)
  };

  onChangeMax = value => {
    this.setState({
      priceMax: value,
    });
    this.fetchRange(this.state.priceMin,value)
  };

  // fetch for results-----main

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
          <Filters  
             onChangeSortBy={this.onChangeSortBy} 
             onChangeSortOrder={this.onChangeSortOrder}
             onPriceChange={this.onPriceChange}
             onChangeMax={this.onChangeMax}
             onChangeMin={this.onChangeMin}
             priceMax={this.state.priceMax}
             priceMin={this.state.priceMin}
             />
          <Results numbers={this.state.results} />
        </div>
      </div>
    )
  }
}


export default ProductResults;



