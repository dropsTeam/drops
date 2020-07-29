import React, { Component } from 'react';
import {mainHttp as axios} from "../../Axios/Axios.js";
import { Input, Dropdown} from 'antd';
const { Search } = Input;


class SearchedList extends Component{

  constructor(props) {
    super(props);
  }

  render(){

    let focus = this.props.focus;
    return (
      <div className={`searched__list`}>
        <ul className={focus ? "" : "show"} >
        <li>cat</li>
        <li>dog</li>
        </ul>
      </div>
    )
  }
}




class LeftMenu extends Component {

  constructor(props) {
    super(props);
    this.state={
       focus : false
    }

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
 


  handleFocus(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    axios.get("/user/searchHistory")
      .then(res=>{
        console.log(res);
     })
    this.setState({focus:true}) 
  }


  
  handleBlur(e) {
    e.preventDefault();
    this.setState({focus:false}) 
  }


  render() {

    return (
      
     <>
      <Search className="searchbox"
          placeholder="Search for products, brands and more"
          onSearch={value => console.log(value)} 
          onFocus={this.handleFocus}  
          onBlur={this.handleBlur} 
       />  

       <SearchedList focus={this.state.focus}/>

			</>
    );
  }
}

export default LeftMenu;