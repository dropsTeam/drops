import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
const { SubMenu } = Menu;

class SubNav extends React.Component {


  handleClick = (moveTo) => {
    this.props.history.push(`/results/${moveTo}`);
  }

  render() {

    return (
      <Menu mode="horizontal">
        <SubMenu title="Electronics" onTitleClick={() => this.handleClick('Electronics')}>

        </SubMenu>
        <SubMenu title="Mobile" onTitleClick={() => this.handleClick('Mobile')}>

        </SubMenu>
        <SubMenu title=" PC & Laptop " onTitleClick={() => this.handleClick('PC&Laptop')}>

        </SubMenu>
        <SubMenu title="TV & Appliances" onTitleClick={() => this.handleClick('TV&Appliances')}>

        </SubMenu>
        <SubMenu title="Men" onTitleClick={() => this.handleClick('Men')}>

        </SubMenu>
        <SubMenu title="Women" onTitleClick={() => this.handleClick('Women')}>

        </SubMenu>
        <SubMenu title="Baby & Kids" onTitleClick={() => this.handleClick('Kids')}>

        </SubMenu>
        <SubMenu title="Home & Furniture" onTitleClick={() => this.handleClick('Furniture')}>

        </SubMenu>

        <SubMenu title="Sports, Books & More" onTitleClick={() => this.handleClick('Sports')}>

        </SubMenu>


        <SubMenu title="Tools" onTitleClick={() => this.handleClick('Tools')}>

        </SubMenu>

      </Menu>
    );
  }
}

export default withRouter(SubNav);