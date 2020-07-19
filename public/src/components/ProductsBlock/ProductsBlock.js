import React,{Component} from 'react';
import ProductScrollBars from "../ProductCards/ProductScrollBars/ProductScrollBars.js";
import ProductCategories from "../ProductCards/ProductCategories/ProductCategories.js"
import ProductAds from "../ProductCards/ProductsAds/ProductAds.js"

import image1 from "../../media/car1.jpg";
import image2 from "../../media/car2.jpg";
import image3 from "../../media/car3.jpg";
import image4 from "../../media/car4.jpg";

import  "./ProductBlock.scss";
import 'antd/dist/antd.css';




// const carouselContainer = document.querySelector(".carousel-container");

class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}


class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}



class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
        
      >
        <img  className="carousal__image"  src={this.props.slide.img} ></img>
      </li>
    );
  }
}





// Carousel wrapper component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>
    
        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
      </div>
    );
  }
}


// main rendering block

class ProductBlock extends Component {
  constructor(props) {
    super(props);
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
            {productArr.map((item,i)=>(
              <ProductCategories item={item}  key={i}/>
            ))}
          </div>
        </div>
        {/* product scroll bars */}
        <ProductScrollBars /> 

        {/* product ads */}
        <ProductAds />
      </div>
     </>

    )
  }

}


export default ProductBlock;


// product array for categories---
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



// Data for carousel
const carouselSlidesData = [
  {
    img  : image1
  },
  {
    img : image2
  },
  {
    img  : image3
  },
  {
    img : image4
  }
];