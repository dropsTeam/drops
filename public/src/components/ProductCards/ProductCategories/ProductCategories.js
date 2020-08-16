import React from 'react';
import "./ProductCategories.css";
import { withRouter } from 'react-router';


class ProductCategories extends React.Component {
  constructor(props) {
   super(props);
  }



 render() {

   return  (
 
     <div className="categories__container">
       <a className="categories__link"  onClick={()=> this.props.history.push(`/results/${this.props.item.title}`)}>
        <div className="categories__wrapper">
          <h1 className="categories__title">{this.props.item.title}</h1>
          <div className="imageCategories__container">
            <img src={this.props.item.img} alt="Logo" />
          </div>
        </div>
       </a>
     </div>


   )
  }
}

export default withRouter(ProductCategories);