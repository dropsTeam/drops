import React from 'react';
import { Badge, Button, Row} from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { connect, useDispatch } from 'react-redux';
import { deleteCartItem, } from '../../Redux/Actions/CartActions';


const ButtonGroup = Button.Group;





class PlusMinusCart extends React.Component {
  state = {
    count: 0,
    show: true,
  };

  increase = () => {
    const count = this.props.cartItems[0].quantity + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.props.cartItems[0] - 1;
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
              <Badge count={this.props.cartItems[0].quantity} style={{width:45,height:25,borderRadius:0,backgroundColor: '#ffffff', color:'#000000', position: "relative", top:1, textAlign:"center",fontSize:17, border:'solid', borderStyle:'none'}}>
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
                <a onClick={this.props.deleteCartItem}> REMOVE</a>
            </div>
          </div>  
        </Row> 
      )
        
    
  }
}

const mapPropsToState = (store) => {
  return {
      cartItems: store.cartItems,
      user: store.user,
      isAuthorised: store.isAuthorised,

  }
}


export default connect(mapPropsToState, null)(PlusMinusCart);