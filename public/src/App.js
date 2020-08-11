import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as authActions from './Redux/Actions/AuthActions';
import * as cartActions from './Redux/Actions/CartActions';

// import Navbar from './components/Navigationbar';
import 'antd/dist/antd.css';
import '../src/css/Navbar.css';
import '../src/css/cart.css';
import '../src/css/checkout.css';

import { PrivateRoute } from './utils';
import { Skeleton, BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';


import  NavBar from './components/Navbar/Navigationbar';
import SubNav from './components/Navbar/subnav';

import Loading from './components/Loading/Loading';

const ProductResults = React.lazy(() => import("./components/ProductsResults/ProductsResults.js"));
const ProductBlock = React.lazy( () => import("./components/ProductsBlock/ProductsBlock.js"));
const ProductView = React.lazy(() => import('./container/ProductView/ProductView'));
const Cart = React.lazy(() => import('./container/cart/cart'));
const Checkout = React.lazy(() => import('./container/checkout/checkout'));
const SellerPortal = React.lazy(() => import('./container/sellerPortal/sellerPortal'));


class App extends React.Component {

  isSeller = false;

  componentDidMount() {
    this.props.$setUser();
  }


  render() {

    this.props.$loadCart(this.props.isAuthorised)

    return (
      <React.Fragment>


        <BackTop>
          <div className='btn pb-2 btn-primary'><ArrowUpOutlined /></div>
        </BackTop>

        {this.props.view.loading && <Loading />}


        <React.Suspense fallback={<div><Skeleton active /> <br /> <Skeleton active /> <br /> <Skeleton active /> <br /><Skeleton active /> </div>}>
          <Router>

            <NavBar />
           
            <SubNav />

            <Switch>

              <Route path="/" exact component={ProductBlock} />
              <Route path="/results/:text" exact component={ProductResults} />

              <Route path="/cart/:id?" exact component={Cart} />
              <PrivateRoute access={true} path='/checkout' exact component={Checkout} />

              <Route path="/view/:id" exact component={ProductView} />

              <PrivateRoute access={this.props.user.isSeller} path='/s/seller' exact component={SellerPortal} />


            </Switch>
          </Router>
        </React.Suspense>

      </React.Fragment>
    );
  }

}

const mapStateToProps = store => {
  return {
    isAuthorised: store.isAuthorised,
    view: store.view,
    user: store.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    $setUser: () => dispatch(authActions.setUser()),
    $loadCart: (isAuthorised) => dispatch(cartActions.loadCart(isAuthorised))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



