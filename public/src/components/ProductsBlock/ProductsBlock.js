import React,{Component} from 'react';
// importing axios
import {mainHttp as axios} from "../../Axios/Axios.js";
// initializing  the redux-------------------------------------
import { connect } from 'react-redux';
// nested components of the product block
import ProductScrollBars from "../ProductCards/ProductScrollBars/ProductScrollBars.js";
import ProductCategories from "../ProductCards/ProductCategories/ProductCategories.js"
import ProductAds from "../ProductCards/ProductsAds/ProductAds.js"
// Nested components of the caraousal ------------------------------------------------------
import {Carousel} from "./ProductBlockComponents/ProductBlockCompoenents.js"

import image1 from "../../media/car1.jpg";
import image2 from "../../media/car2.jpg";
import image3 from "../../media/car3.jpg";
import image4 from "../../media/car4.jpg";

import  "./ProductBlock.scss";
import 'antd/dist/antd.css';


// main rendering block that combines all the blocks and cards----
class ProductBlock extends Component {
  constructor(props) {
    super(props);
    this.state={
      recommendedProducts : [],
      electronicsArr :[],
      homeArr :[],
      newArr :[]
    }
  }



  //  for creating the array in the recommendation scroll bars in  the home page -------------
  // ! error here *********************
 componentDidMount(){
   console.log(this.props)
  //  if(this.props.isAuthorised){
    axios.get("/user/recommendation/")
      .then(res=>{
        console.log({recommendations : res.data.recommendations});  
        return res.data.recommendations
      })
       .then(res=>{
        this.setState({recommendedProducts : res})
       })
  //  }

    axios.get(`/products/search?text=electronics&page=0`)
      .then(res=>{
        console.log({electronicsArr : res.data});  
        return res.data
      })
      .then(res=>{
        this.setState({electronicsArr : res})
      })

    axios.get(`/products/search?text=home&page=0`)
      .then(res=>{
        console.log({homeArr : res.data});  
        return res.data
      })
      .then(res=>{
        this.setState({homeArr : res})
      })

    axios.get(`/products/search?text="tv"&page=`)
      .then(res=>{
        console.log({newArr : res.data});  
        return res.data
      })
      .then(res=>{
        this.setState({newArr : res})
      })
    
  }




  render() {
   
    return (
      <>
       {/* {this.state.recommendedProducts.length > 0   ?  */}
      <div className="main__container">
        {/* carousal  */}
        <Carousel  slides={carouselSlidesData}/>
        
        {/* categories wrapper */}
        <div className="categoryWrapper__container">
          <div className="wrapper">
            {categoriesArr.map((item,i)=>(
              <ProductCategories item={item}  key={i}/>
            ))}
          </div>
        </div>

        {/* product scroll bars */}
        <ProductScrollBars title={"Deals of the Day"} arr={this.state.electronicsArr} /> 

        {/* product scroll bars for the recommended products */}

        {this.props.isAuthorised ? 
            <ProductScrollBars title={"Recommendations"} arr={this.state.recommendedProducts}/>
            : '' 
         }

        {/* product ads */}
        <ProductAds arr={adsArr1} />

         {/* product scroll bars */}
        <ProductScrollBars title={"Electronics"} arr={this.state.electronicsArr} /> 
        <ProductScrollBars title={"Home"} arr={this.state.homeArr} /> 
        <ProductScrollBars title={"New offers"} arr={this.state.newArr} />

        {/* product ads */}
        <ProductAds arr={adsArr2} />
      </div>
       {/* : ""} */}
     </> 

    )

  }

}


// if the user is not authorised don't show   

const mapPropsToState = (store) => {
  return {
      isAuthorised: store.isAuthorised
  }
}

export default connect(mapPropsToState)(ProductBlock)






// product array for categories---
const categoriesArr = [
  {
    id:1,
    title : "Electronics",
    media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"],
    img : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  {
   id:2,
   title : "Deals ",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"],
   img : "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  {
   id:3,
   title : "Shirts",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"],
   img : "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
   },
   {
   id:4,
   title : "Buy Gifts",
   img : "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
   }
 ] 



// Data for carousel
const carouselSlidesData = [
  {
    imgLarge  : image1
  },
  {
    imgLarge : image2
  },
  {
    imgLarge : image3
  },
  {
    imgLarge : image4
  }
];



// ads arr
const adsArr1 = [
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  },
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/28c7953638cece8c.jpg?q=50",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  },
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/d000b651db9b444d.jpg?q=50",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  }
 ]


 const adsArr2 = [
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/b567777004923c82.jpg?q=50",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  },
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/c309954070bd36c6.jpg?q=50",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  },
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/962454c05f209a33.jpg?q=50",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  }
 ]




const scrollArr = [
  {
    id:1,
    title : "Thermometer",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "200",
    media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"],
    img : "https://rukminim1.flixcart.com/image/150/150/k9pynww0/digital-thermometer/2/q/w/four-star-tg818c-infrared-thermometer-original-imafrgd98nqdudax.jpeg?q=70"
  },
  {
   id:2,
   title : "HeadPhones",
   tag : 'Sale 80%',
   brands: " JBL, Sony and more",
   price: "200",
   img : "https://rukminim1.flixcart.com/image/150/150/jucz98w0/headphone/8/c/m/boult-audio-boult-audio-curve-wireless-neckband-magnetic-original-imaff5t9dj9hhjx3.jpeg?q=70",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  },
  {
   id:3,
   title : "Speakers",
   tag : 'Sale 80%',
   brands: " JBL, Sony and more",
   price: "200",
   img : "https://rukminim1.flixcart.com/image/150/150/k3ncakw0pkrrdj/speaker/mobile-tablet-speaker/h/h/y/jbl-jblgo2blk-original-imafh4b8hadqj8s2.jpeg?q=70",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  },
  {
   id:4,
   title : "Phone Cover",
   tag : 'Sale 80%',
   brands: " JBL, Sony and more",
   price: "200",
   img : "https://rukminim1.flixcart.com/image/150/150/kbqu4cw0/screen-guard/edge-to-edge-tempered-glass/a/v/t/flipkart-smartbuy-rn8pro-sg-in-original-imaftyk3sg3urhgy.jpeg?q=70",
   media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
  },
  {
    id:4,
    title : "Phone Cover",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "200",
    img : "https://rukminim1.flixcart.com/image/150/150/kbqu4cw0/screen-guard/edge-to-edge-tempered-glass/a/v/t/flipkart-smartbuy-rn8pro-sg-in-original-imaftyk3sg3urhgy.jpeg?q=70",
    media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
   },
   {
    id:4,
    title : "Phone Cover",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "200",
    img : "https://rukminim1.flixcart.com/image/150/150/kbqu4cw0/screen-guard/edge-to-edge-tempered-glass/a/v/t/flipkart-smartbuy-rn8pro-sg-in-original-imaftyk3sg3urhgy.jpeg?q=70",
    media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
   },{
    id:4,
    title : "Phone Cover",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "200",
    img : "https://rukminim1.flixcart.com/image/150/150/kbqu4cw0/screen-guard/edge-to-edge-tempered-glass/a/v/t/flipkart-smartbuy-rn8pro-sg-in-original-imaftyk3sg3urhgy.jpeg?q=70",
    media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
   }
   ,{
    id:4,
    title : "Phone Cover",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "200",
    img : "https://rukminim1.flixcart.com/image/150/150/kbqu4cw0/screen-guard/edge-to-edge-tempered-glass/a/v/t/flipkart-smartbuy-rn8pro-sg-in-original-imaftyk3sg3urhgy.jpeg?q=70",
    media : ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]
   }
  
 ]