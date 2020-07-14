import React from 'react';
import styles from "./ProductCard.module.css";


class ProductCard extends React.Component {
  constructor(props) {
   super(props);
  }


  
 render() {
   return  (
    
     <div className={styles.product__container}>
       <div className={styles.product__wrapper}>
         <h1 className={styles.image__title}>{this.props.item.title}</h1>
         <div className={styles.image__container}>
           <img src={this.props.item.img} alt="Logo" />
         </div>
       </div>
     </div>

   )
  }
}

export default ProductCard;


