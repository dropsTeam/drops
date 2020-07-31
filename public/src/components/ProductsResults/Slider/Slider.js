import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';


class IntegerStep extends React.Component {
  state = {
    priceMin :0,
    priceMax :50
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
          <Slider range defaultValue={[0, 20000]}  
            max={20000}
            onChange={this.onPriceChange.bind(this)}
            value={[this.state.priceMin, this.state.priceMax]}
          />
          </Col>
        </Row>
        <Row>
          <div className="site-input-number-wrapper">
            $<InputNumber 
               min={1} 
               max={20000} 
               defaultValue={3} 
               onChange={this.onChangeMin} 
               value={`${this.state.priceMin}`}
             /> 
             
               
            
            to<InputNumber 
               min={1} 
               max={20000} 
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