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

          <ResultsBlock {...this.props}  />

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
      category : '',
      priceMin :10,
      priceMax :4000,
      page :0,
      range : "0-2000"
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

  // fetch by page change
  fetchPage = async(page) =>{
    let url = window.location.href;
    let arr = url.split("/");
    let arrLen = arr.length;
    try{
      await axios.get(`/products/search?text=${arr[arrLen-1]}&page=${page}&sortby=${this.state.sortby}&sortorder=${this.state.sortorder}&range=${this.state.range}`)
        .then(res=>{
          this.setState({results : res.data})
          console.log(res)
        })
    }
    catch(err){
      console.log(err)
    }
  }


  // fetch for results-----main

  fetch = async () => {
    try {
      const results = await mainHttp.get(`/products/search?text=${this.props.match.params.text}&page=${this.props.page}`)

      const newArr = [...results.data];
      this.setState({ ...this.state, results: [...newArr] });
      
      // console.log(results)
    } catch (err) {
      console.log(err)
      alert('error occured laoding the results')
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
          console.log(res)
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


    // for fetching by Category
    fetchCategory = async(category) =>{
      let url = window.location.href;
      let arr = url.split("/");
      let arrLen = arr.length;
      let range = `${this.state.priceMin}`+"-"+`${this.state.priceMax}`;

      let query;
      if(category){
         query = `/products/search?text=${arr[arrLen-1]}&sortby=${this.state.sortby}&sortorder=${this.state.sortorder}&range=${range}&category=${category}`;
      }
      else{
        query = `/products/search?text=${arr[arrLen-1]}&sortby=${this.state.sortby}&sortorder=${this.state.sortorder}&range=${range}`;
      }
      // finally query---------------------------------------------
      await axios.get(query)
        .then(res=>{
          this.setState({results : res.data})
          console.log(res)
        })
    }

  // for fetching by Price Range
  fetchRange = async(range1,range2) =>{
    let url = window.location.href;
    let arr = url.split("/");
    let arrLen = arr.length;
    let range = `${range1}`+"-"+`${range2}`;
    console.log("range requested");
    await axios.get(`/products/search?text=${arr[arrLen-1]}&sortby=${this.state.sortby}&sortorder=${this.state.sortorder}&range=${range}`)
        .then(res=>{
          this.setState({results : res.data})
        })

    }


  onPageChange = (page) =>{
    console.log(page);
    this.setState({
        page: page-1
      });
      this.fetchPage(page-1)
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

  onChangeCategory = e => {
      this.setState({
        category: e.target.value,
      });
      console.log(e.target.value)
      this.fetchCategory(e.target.value)
      console.log("category change working ....")
    }; 


  onPriceChange = (values) => {
    console.log([values[0],values[1]])
    this.setState({
      priceMin: values[0],
      priceMax: values[1],
    });
    setTimeout(()=>console.log("2s"),2000)
    setTimeout(()=>this.fetchRange(values[0],values[1]),2000)
  }

  onChangeMin = value => {
    this.setState({
      priceMin: value,
    });
    // this.fetchRange(value,this.state.priceMax)
    setTimeout(()=>this.fetchRange(value,this.state.priceMax),2000)
  };

  onChangeMax = value => {
    this.setState({
      priceMax: value,
    });
    // this.fetchRange(this.state.priceMin,value)
    setTimeout(()=>this.fetchRange(this.state.priceMin,value),2000)
  };



  


  render() {

    return (
      <div className="resultsView__container">
        <div className="resultsView__wrapper">

          <Filters  
             onChangeSortBy={this.onChangeSortBy} 
             onChangeSortOrder={this.onChangeSortOrder}
             onPriceChange={this.onPriceChange}
             onChangeCategory={this.onChangeCategory}
             onChangeMax={this.onChangeMax}
             onChangeMin={this.onChangeMin}
             priceMax={this.state.priceMax}
             priceMin={this.state.priceMin}
             />

          <Results 
              numbers={this.state.results} 
              onPageChange={this.onPageChange}
           />
        </div>
      </div>
    )
  }
}


export default ProductResults;



