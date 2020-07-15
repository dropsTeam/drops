import React from 'react';
import ProductCard from "../ProductCards/ProductCard/ProductCard";
import ProductCategories from "../ProductCards/ProductCategories/ProductCategories";
import ProductScrollBars from "../ProductCards/ProductScrollBars/ProductScrollBars";

import image1 from "../../media/car1.jpg";
import image2 from "../../media/car2.jpg";
import image3 from "../../media/car3.jpg";
import image4 from "../../media/car4.jpg";

import styles from "./ProductsBlock.module.css";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

console.log(styles)


class ProductBlock extends React.Component {
  constructor(props) {
   super(props);

   this.onChange = this.onChange.bind(this);
  }


  onChange(a, b, c) {
    console.log(a, b, c);
  }


  componentDidMount() {

    let aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = "./utils/test.js";
    document.head.appendChild(aScript);

  }

 render() {
   return  (
    <div>

       <Carousel >
          <div className={styles.image__carousel}>
            {/* <img src={image1}></img>/ */}
            <img src="https://rukminim1.flixcart.com/flap/3376/560/image/7c8b92479310ea67.jpg?q=50"></img>
          </div>
          <div className={styles.image__carousel}>
            <img src={image2} ></img>
          </div>
          <div className={styles.image__carousel}>
          <img src={image3} ></img>
          </div>
          <div className={styles.image__carousel}>
          <img src={image4} ></img>
          </div>
      </Carousel>

      

      <div className={styles.container}>
        <div className={styles.wrapper}>
          {productArr.map((item,i)=>(
            <ProductCard item={item}  key={i}/>
          ))}
        </div>
      </div>
     <ProductCategories />
     <ProductScrollBars />
   </div>
   )
  }
}

export default ProductBlock;


const productArr = [
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