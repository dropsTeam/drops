import React,{Component} from 'react';
import  "../ProductResults.css";
import ResultsCard from "../ResultsCard/ResultsCard";

import {mainHttp as axios} from "../../../Axios/Axios.js";
import { Pagination , Empty , Spin } from 'antd';


class ResultsBlock extends Component{



 render(){

  // console.log(this.props)


   return (

    <Spin spinning={this.props.loading}  size="large"> 
     {this.props.numbers ? 
       <>
       <div className={`d-flex bd-highlight flex-row flex-wrap  .align-content-sm-around align-content-around `}>
        {this.props.numbers.length >0  ? 
          <>
            {this.props.numbers.map((item,index)=>
              <ResultsCard 
                id={item._id} 
                title={item.title}
                price={item.price} 
                img={item.media[0]}  
                key={index} 
                rating={item.aveageRaing}
                totalReviews={item.totalReview}
                flipkartImg="http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png"
              />
             )}
            </>
          : 
           <Empty className="empty__container"  description={"No Results Found"}/>
          }
       </div>

       <div className="pagination__container">
          <Pagination
          onChange={(page)=>this.props.onPageChange(page)}
          defaultCurrent={1}
          total={50}
        />
       </div>
       
      </>
      : 
     ""
    }
    </Spin>
   )
 }
}


export default ResultsBlock;