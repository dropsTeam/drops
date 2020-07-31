import React, { Component } from 'react';
// import Countries from "./Country"
import {mainHttp as axios} from "../../Axios/Axios.js";
import { Input, Dropdown} from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
const { Search } = Input;

const Countries =[
  "T-Shirts",
  "Lipsticks",
  "Home Decor",
  "Electronics",
  "Men'wear",
  "Kids Clothes"
]


class AutoCompletedText extends React.Component{
 constructor(props){
   super(props);
   this.state={
     suggestions:Countries,
     text:'',
     focus:false
   }
   this.onTextChange = this.onTextChange.bind(this.onTextChange)
   this.handleFocus = this.handleFocus.bind(this);
   this.handleBlur = this.handleBlur.bind(this);
 }


//  componentDidMount(){
//   axios.get("/user/recommendation/")
//      .then(res=>{
//        console.log(res);
//        console.log("search request")
//     })
// }




 onTextChange=(e) => {
  let suggestions = Countries;
  let value = e.target.value;
  if(value.length > 0){
    let patt = new RegExp(`^${value}`,'i')
    suggestions = Countries.filter(v => patt.test(v));
  }

   this.setState({
     text:e.target.value,
     suggestions : suggestions
   })
 }
 

 selectedItem = (value) =>{
  this.setState({
    text:value,
    suggestions:Countries,
    focus:true
  })
  this.setState({focus:false})
}


handleFocus(e) {
  e.preventDefault();
  console.log('The link was clicked.');
  axios.get("/user/searchHistory/")
    .then(res=>{
      console.log(res);
   })
  this.setState({focus:true}) 
}



handleBlur(e) {
  e.preventDefault();
  this.renderSuggestions()
  setTimeout(()=>this.setState({focus:false}) ,200) 
}

 renderSuggestions = () => {
   if(this.state.suggestions.length == 0){
     return null;
   }
   else{
     return (
       <ul className={this.state.focus ? "show" : "hide"}>
         {
           this.state.suggestions.map((item,index)=>
          //  there should be no brackets here*****
           <li key={index}  onClick={() => this.selectedItem(item)}>
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





render(){
  const {suggestions,text} = this.state;
   return(
      <>
        <Search
          enterButton
          size="medium"
          value={text}
          onSearch={value => console.log(value)}
          onChange={this.onTextChange} 
          onFocus={this.handleFocus}  
          onBlur={this.handleBlur} 
        />
      {this.renderSuggestions()}
      </>
   )
 }
}


class LeftMenu extends Component{

  constructor(props) {
    super(props);
  }


  render(){
    let focus = this.props.focus;
    return (
       <div className={`searched__list`}>
          <AutoCompletedText />
       </div>
    )
  }
}



export default LeftMenu;