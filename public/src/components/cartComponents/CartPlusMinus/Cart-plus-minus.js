import React from 'react';
import { Badge, Button, Row } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

const ButtonGroup = Button.Group;





class PlusMinusCart extends React.Component {



  render() {

    let reduxIndex = (this.props.isAuthorised) ? this.props.cartId : this.props.index;

    return (

      <Row className="b-row-plusminus">
        <ButtonGroup>
          <Button className="plusminus-btn-1-x" onClick={() => this.props.$editCart(this.props.quantity - 1, reduxIndex)}>
            <MinusCircleOutlined />
          </Button>

          <Badge count={this.props.quantity} style={{ width: 45, height: 25, borderRadius: 0, backgroundColor: '#ffffff', color: '#000000', position: "relative", top: 1, textAlign: "center", fontSize: 17, border: 'solid', borderStyle: 'none' }}>
          </Badge>


          <Button className="plusminus-btn-1-x" onClick={() => this.props.$editCart(this.props.quantity + 1, reduxIndex)} >
            <PlusCircleOutlined />
          </Button>
        </ButtonGroup>
        <div className="rbsv">
          <div className="rbsvu">
            <a>SAVE FOR LATER</a>
          </div>
          <div className="rbsvu">
            <a onClick={() => this.props.$deleteCartItem(reduxIndex)}>REMOVE</a>
          </div>
        </div>
      </Row>
    )


  }
}


export default PlusMinusCart;