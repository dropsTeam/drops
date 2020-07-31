import React,{Component} from 'react';
// importing axios
import {mainHttp as axios} from "../../Axios/Axios.js";
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
      recommendedProducts : ''
    }
  }



  //  for creating the array in the recommendation scroll bars in  the home page -------------
 componentDidMount(){
  axios.get("/user/recommendation/")
     .then(res=>{
       console.log({recommendations : res.data.recommendations});
       this.setState({recommendedProducts : res.data.recommendations})
    })
  }


  render() {
    return (
      <>
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
        <ProductScrollBars title={"Deals of the Day"} arr={scrollArr} /> 
        {/* product scroll bars for the recommended products */}
        <ProductScrollBars title={"Recommendations"} arr={this.props.recommendedProducts > 0 ? this.props.recommendedProducts : 
              [{
                id:1,
                title : "Thermometer",
                tag : 'Sale 80%',
                brands: " JBL, Sony and more",
                price: "$200",
                img : "https://rukminim1.flixcart.com/image/150/150/k9pynww0/digital-thermometer/2/q/w/four-star-tg818c-infrared-thermometer-original-imafrgd98nqdudax.jpeg?q=70"
              }] 
            } />

        {/* product ads */}
        <ProductAds arr={adsArr1} />

         {/* product scroll bars */}
        <ProductScrollBars title={"Electronics"} arr={scrollArr} /> 
        <ProductScrollBars title={"Home"} arr={scrollArr} /> 
        <ProductScrollBars title={"New offers"} arr={scrollArr} /> 

        {/* product ads */}
        <ProductAds arr={adsArr2} />
      </div>
     </>

    )
  }

}


export default ProductBlock;




// product array for categories---
const categoriesArr = [
  {
    id:1,
    title : "Electronics",
    img : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  {
   id:2,
   title : "Deals ",
   img : "https://images.unsplash.com/photo-1547833604-dd82cc8805ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
  },
  {
   id:3,
   title : "Shirts",
   img : "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
   },
   {
   id:4,
   title : "Buy Gifts",
   img : "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80"
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
   img : "https://rukminim1.flixcart.com/flap/480/480/image/14350e3cddda3144.jpg?q=50"
  },
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/28c7953638cece8c.jpg?q=50"
  },
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/d000b651db9b444d.jpg?q=50"
  }
 ]


 const adsArr2 = [
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/b567777004923c82.jpg?q=50"
  },
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/c309954070bd36c6.jpg?q=50"
  },
  {
   id:1,
   img : "https://rukminim1.flixcart.com/flap/480/480/image/962454c05f209a33.jpg?q=50"
  }
 ]




const scrollArr = [
  {
    id:1,
    title : "Thermometer",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "$200",
    img : "https://rukminim1.flixcart.com/image/150/150/k9pynww0/digital-thermometer/2/q/w/four-star-tg818c-infrared-thermometer-original-imafrgd98nqdudax.jpeg?q=70"
  },
  {
   id:2,
   title : "HeadPhones",
   tag : 'Sale 80%',
   brands: " JBL, Sony and more",
   price: "$200",
   img : "https://rukminim1.flixcart.com/image/150/150/jucz98w0/headphone/8/c/m/boult-audio-boult-audio-curve-wireless-neckband-magnetic-original-imaff5t9dj9hhjx3.jpeg?q=70"
  },
  {
   id:3,
   title : "Speakers",
   tag : 'Sale 80%',
   brands: " JBL, Sony and more",
   price: "$200",
   img : "https://rukminim1.flixcart.com/image/150/150/k3ncakw0pkrrdj/speaker/mobile-tablet-speaker/h/h/y/jbl-jblgo2blk-original-imafh4b8hadqj8s2.jpeg?q=70"
  },
  {
   id:4,
   title : "Phone Cover",
   tag : 'Sale 80%',
   brands: " JBL, Sony and more",
   price: "$200",
   img : "https://rukminim1.flixcart.com/image/150/150/kbqu4cw0/screen-guard/edge-to-edge-tempered-glass/a/v/t/flipkart-smartbuy-rn8pro-sg-in-original-imaftyk3sg3urhgy.jpeg?q=70"
  },
  {
    id:3,
    title : "Phones",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "$200",
    img : "https://rukminim1.flixcart.com/image/150/150/kar44280/computer/m/g/3/asus-na-thin-and-light-laptop-original-imafs92skhtaehcq.jpeg?q=70"
   },
   {
    id:3,
    title : "Egg cooker",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "$200",
    img : "https://rukminim1.flixcart.com/image/150/150/k4lmv0w0/egg-poacher/h/u/q/electric-egg-boiler-doodle-original-imafmm9qyfpkqpbh.jpeg?q=70"
   },
   {
    id:3,
    title : "HeadPhones",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "$200",
    img : "https://rukminim1.flixcart.com/image/150/150/k9pynww0/digital-thermometer/2/q/w/four-star-tg818c-infrared-thermometer-original-imafrgd98nqdudax.jpeg?q=70"
   },
   {
    id:3,
    title : "HeadPhones",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "$200",
    img : "https://rukminim1.flixcart.com/image/150/150/k9pynww0/digital-thermometer/2/q/w/four-star-tg818c-infrared-thermometer-original-imafrgd98nqdudax.jpeg?q=70"
   },
   {
    id:3,
    title : "HeadPhones",
    tag : 'Sale 80%',
    brands: " JBL, Sony and more",
    price: "$200",
    img : "https://rukminim1.flixcart.com/image/150/150/k9pynww0/digital-thermometer/2/q/w/four-star-tg818c-infrared-thermometer-original-imafrgd98nqdudax.jpeg?q=70"
   }
 ]