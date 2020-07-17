import React,{Component} from 'react';
import ProductCard from "../ProductCard/ProductCard.js"
import "./ProductScrollBars.scss"





class TitleBar extends Component {
  render() {
    return (
      <>
        <div className="title__container">
          <div className="title__wrapper">
            <p className="title__content">Deals of the Day</p>
          </div>
        </div>
      </>
    )
  }
}





class Scroll extends Component {
  render() {
    return (
      <>
        <div className="scroll">
          <div className="scrolling__cards vertical-align-middle">
              {productArr.map((item,i)=>(
                <ProductCard item={item}  key={i}/>
              ))}
          </div>
        </div>
      </>
    )
  }
}





class ProductScrollBars extends React.Component {
  constructor(props) {
   super(props);
  }



 render() {
   return  (
   <div className="scroll__container"> 
    <div className="scroll__wrapper">
     <TitleBar />
     <Scroll />
    </div>
    </div> 
   )
  }
}

export default ProductScrollBars;



const productArr = [
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
   title : "HeadPhones",
   tag : 'Sale 80%',
   brands: " JBL, Sony and more",
   price: "$200",
   img : "https://rukminim1.flixcart.com/image/150/150/k9pynww0/digital-thermometer/2/q/w/four-star-tg818c-infrared-thermometer-original-imafrgd98nqdudax.jpeg?q=70"
  },
  {
   id:4,
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
 