import React from 'react';
import { Badge, Button, Row} from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

const ButtonGroup = Button.Group;

class PlusMinusCart extends React.Component {
  state = {
    count: 5,
    show: true,
  };

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  onChange = show => {
    this.setState({ show });
  };

  render() {
    return (
        <Row className="b-row-plusminus">
          <ButtonGroup>
              <Button className="plusminus-btn-1-x" onClick={this.decline}>
                  <MinusCircleOutlined />
              </Button>
              <Badge count={this.state.count} style={{width:45,height:25,borderRadius:0,backgroundColor: '#ffffff', color:'#000000', position: "relative", top:1, textAlign:"center",fontSize:17, border:'solid', borderStyle:'none'}}>
              </Badge>
              <Button className="plusminus-btn-1-x" onClick={this.increase} >
                  <PlusCircleOutlined />
              </Button>
          </ButtonGroup>
          <div className="rbsv">
            <div className="rbsvu">
                <a>SAVE FOR LATER</a>
            </div>
            <div className="rbsvu">
                <a>REMOVE</a>
            </div>
          </div>
           
        </Row>
    );
  }
}

export default (PlusMinusCart);