import React from 'react';
// import ReactDOM from 'react-dom';
import amazonlogo from '../media/amazon.png';
import { Navbar, Nav, Dropdown, Icon, Avatar,Input, InputGroup} from 'rsuite';
import '../css/navbar.css';
// import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/index.less';


const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props} className="navmain">
        <Navbar.Header className="amalogo">
            <Avatar  size="md" src={amazonlogo} className="amazonlogo" >
                
            </Avatar>
            <InputGroup size="xs" inside style={{ width: 700 }} className="searchbox">
                <Input placeholder="Default Input"  />
                <InputGroup.Button>
                <Icon icon="search" />
                </InputGroup.Button>
            </InputGroup>
        </Navbar.Header>
        <Navbar.Body className="navdirect">
            
          
            <Nav pullRight>
                <Nav.Item className="item-nav" icon={<Icon size="2x" icon="shopping-cart" />} >Cart</Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item className="item-nav" ><h6>You'r</h6> prime</Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item className="item-nav" ><h6>Returns</h6>  & Orders</Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item  className="item-nav"><h6>Accounts</h6>& Lists</Nav.Item>
            </Nav>
            <Nav stacked="True" onSelect={onSelect} activeKey={activeKey} className="navbottom" >
                
                <Nav.Item className="list-small" eventKey="1" icon={<Icon icon="home" />}>
                Navjot Store
                </Nav.Item>
                <Nav.Item className="list-small" eventKey="2">Best Sellers</Nav.Item>
                <Nav.Item className="list-small" eventKey="3">Electronics</Nav.Item>
                <Nav.Item className="list-small" eventKey="4">Deals Store</Nav.Item>
                <Nav.Item className="list-small" eventKey="5">Buy Again</Nav.Item>
                <Nav.Item className="list-small" eventKey="6">Help</Nav.Item>
                <Nav.Item className="list-small" eventKey="7">Gift Ideas</Nav.Item>
                <Nav.Item className="list-small" eventKey="8">New Releases</Nav.Item>
                <Nav.Item className="list-small" eventKey="9">Home</Nav.Item>
                <Nav.Item className="list-small" eventKey="10">Gift Cards</Nav.Item>
                <Nav.Item className="list-small" eventKey="11">Coupons</Nav.Item>
                <Nav.Item className="list-small" eventKey="11">Coupons</Nav.Item>
                <Nav.Item className="list-small" eventKey="11">Coupons</Nav.Item>
                <Dropdown title="About">
                <Dropdown.Item eventKey="12">Company</Dropdown.Item>
                <Dropdown.Item eventKey="13">Team</Dropdown.Item>
                <Dropdown.Item eventKey="14">Contact</Dropdown.Item>
                </Dropdown>
            </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: null
    };
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const { activeKey } = this.state;
    return (
      <div className="nav-wrapper">
        <NavBarInstance activeKey={activeKey} onSelect={this.handleSelect} />
        
      </div>
    );
  }
}
  
export default (Demo);