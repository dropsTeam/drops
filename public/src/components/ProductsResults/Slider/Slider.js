import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';


class IntegerStep extends React.Component {
  state = {
    priceMin :10,
    priceMax :4000
  };

 
  onChangeMin = value => {
    this.setState({
      priceMin: value,
    });
  };

  onChangeMax = value => {
    this.setState({
      priceMax: value,
    });
  };

  onPriceChange(values) {
    console.log([values[0],values[1]])
    this.setState({
      priceMin: values[0],
      priceMax: values[1],
    });
  }

  render() {
   
    return (
      <>
        <Row>
          <Col span={22}>
          <Slider range defaultValue={[10, 4000]}  
            max={5000}
            onChange={this.onPriceChange.bind(this)}
            value={[this.state.priceMin, this.state.priceMax]}
          />
          </Col>
        </Row>
        <Row>
          <div className="site-input-number-wrapper">
            $<InputNumber 
               min={10} 
               max={5000} 
               defaultValue={3} 
               onChange={this.onChangeMin} 
               value={`${this.state.priceMin}`}
             /> 
             
               
            
            to<InputNumber 
               min={4000} 
               max={5000} 
               defaultValue={50} 
               onChange={this.onChangeMax} 
               value={`${this.state.priceMax}`}
             />
          </div>
       </Row>
       </>
    );
  }
}

export default IntegerStep;