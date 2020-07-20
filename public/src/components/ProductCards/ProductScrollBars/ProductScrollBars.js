import React,{Component} from 'react';
import ProductCard from "../ProductCard/ProductCard.js"
import "./ProductScrollBars.scss"





class TitleBar extends Component {
  render(props) {
    return (
      <>
        <div className="title__container">
          <div className="title__wrapper">
            <p className="title__content">{this.props.title}</p>
          </div>
        </div>
      </>
    )
  }
}





class Scroll extends Component {
  render(props) {

    return (
      <>
        <div className="scroll">
          <div className="scrolling__cards vertical-align-middle">
              {this.props.arr.map((item,i)=>(
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
     <TitleBar title={this.props.title} />
     <Scroll arr={this.props.arr} />
    </div>
    </div> 
   )
  }
}

export default ProductScrollBars;


