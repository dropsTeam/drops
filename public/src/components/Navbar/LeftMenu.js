import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import categories from "./Country"
import { mainHttp as axios } from "../../Axios/Axios.js";
import { Input, Dropdown } from 'antd';
// initialising redux for checking authorised users----
import { connect } from 'react-redux';
const { Search } = Input;



//  the autocomplete component for searching  the products----
class AutoCompletedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: this.props.searchedCategories,
      text: '',
      focus: false,
      results: []
    }
    this.onTextChange = this.onTextChange.bind(this.onTextChange)
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }





  handleFocus(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    axios.get("/user/searchHistory/")
      .then(res => {
        this.setState({ suggestions: res.data })
      })
    this.setState({ focus: true })
  }



  handleBlur(e) {
    e.preventDefault();
    this.renderSuggestions()
    setTimeout(() => this.setState({ focus: false }), 200)
  }




  onTextChange = (e) => {
    let suggestions = this.state.suggestions;
    let value = e.target.value;
    if (value.length > 0) {
      let patt = new RegExp(`^${value}`, 'i')
      suggestions = suggestions.filter(v => patt.test(v));
    }

    this.setState({
      text: e.target.value,
      suggestions: suggestions
    })
  }


  selectedItem = (value) => {
    console.log({ "categories on  selection": this.state.suggestions })
    this.setState({
      text: value,
      suggestions: this.state.suggestions,
      focus: true
    })
    this.setState({ focus: false })
  }


  renderSuggestions = () => {
    if (this.state.suggestions.length == 0) {
      return null;
    }
    else {
      return (
        <ul className={this.state.focus ? "show" : "hide"}>
          {
            this.state.suggestions.map((item, index) =>
              //  there should be no brackets here*****
              <li key={index} onClick={() => this.selectedItem(item)}>
                <span>
                  <img className="recentSearch__image" src="https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/321e89f8-9ffa-47a7-a9d4-731da9bde6c4.png?q=90"></img>
                </span>
                {item}
              </li>
            )
          }
        </ul>
      )
    }
  }


  //  searching the product and redirecting to the results page-----
  handleSearch(value) {
    this.props.history.push({
      pathname: `/results/${value}`
    })
  }


  render() {
    const { text } = this.state;
    return (
      <>
        <Search
          enterButton
          size="medium"
          value={text}
          placeholder='Search For Products, Brands and more'
          onSearch={value => this.handleSearch(value)}
          onChange={this.onTextChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}

        />
        {this.renderSuggestions()}
      </>
    )
  }
}



// the main left menu component------
class LeftMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let defaultHistory = ["Mens Clothes", "Women Clothes", "Electronics", "Handbags", "Mobile", "Home & Decor"];
    return (
      <div className={`searched__list`}>
        <AutoCompletedText history={this.props.history} searchedCategories={this.props.isAuthorised ? '' : defaultHistory} />
      </div>
    )
  }
}

const mapPropsToState = (store) => {
  return {
    isAuthorised: store.isAuthorised
  }
}


export default connect(mapPropsToState)(withRouter(LeftMenu))


