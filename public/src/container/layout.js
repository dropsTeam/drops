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
        </Navbar.Header>
        <Navbar.Body className="navdirect">
          <Nav onSelect={onSelect} activeKey={activeKey} className="navbottom" >
            <InputGroup size="xs" inside style={{ width: 750 }} className="searchbox">
                <Input placeholder="Default Input"  />
                <InputGroup.Button>
                <Icon icon="search" />
                </InputGroup.Button>
            </InputGroup>
            <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
              Home
            </Nav.Item>
            <Nav.Item eventKey="2">News</Nav.Item>
            <Nav.Item eventKey="3">Products</Nav.Item>
            <Dropdown title="About">
              <Dropdown.Item eventKey="4">Company</Dropdown.Item>
              <Dropdown.Item eventKey="5">Team</Dropdown.Item>
              <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav pullRight>
            <Nav.Item className="item-nav" icon={<Icon icon="cog" />} >Cart</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item className="item-nav" ><h6>You'r</h6> prime</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item className="item-nav" ><h6>Returns</h6> & Orders</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item  className="item-nav"><h6>Accounts</h6> & Lists</Nav.Item>
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