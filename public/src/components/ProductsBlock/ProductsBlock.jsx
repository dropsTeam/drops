import React,{Component} from 'react';
import ProductScrollBars from "../ProductCards/ProductScrollBars/ProductScrollBars.js";

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
        <Carousel  slides={carouselSlidesData}/>

        <ProductScrollBars /> 
      </div>
     </>

    )
  }

}


export default ProductBlock;





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