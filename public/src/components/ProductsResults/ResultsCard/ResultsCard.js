import React,{Component} from 'react';
import  "./ResultsCard.css";


class ResultsCard extends React.Component {
 constructor(props) {
  super(props);
 }

render() {
  return  (
   <div className="resultsCard__container">
    <div className="resultsCard__wrapper">
      {this.props.id}
    </div>
   </div>
  )
 }
}

export default ResultsCard;