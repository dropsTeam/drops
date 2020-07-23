import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as authActions from './Redux/Actions/AuthActions';
// import Navbar from './components/Navigationbar';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../src/css/Navbar.css';
import '../src/css/cart.css';
import '../src/css/checkout.css';

import { PrivateRoute } from './utils';

import ProductBlock from "./components/ProductsBlock/ProductsBlock.js";
import ProductResults from "./components/ProductsResults/ProductsResults.js"

import NavBar from './components/Navbar/Navigationbar';
import SubNav from './components/Navbar/subnav';
import Cartcheckout from './container/checkout/checkout';
import Loading from './components/Loading/Loading';
import { Skeleton } from 'antd';
const ProductView = React.lazy(() => import('./container/ProductView/ProductView'));
const Cart = React.lazy(() => import('./container/cart/cart'));
const Checkout = React.lazy(() => import('./container/checkout/checkout'));
const SellerPortal = React.lazy( () => import('./container/sellerPortal/sellerPortal') );


class App extends React.Component {

  isSeller = false;

  componentDidMount() {
    this.props.$setUser();
  }


  render() {

    return (
      <React.Fragment>

        <NavBar />
        <SubNav />

        <Loading/>

        <React.Suspense fallback={<div><Skeleton active /> <br /> <Skeleton active /> <br /> <Skeleton active /> <br /><Skeleton active /> </div>}>
          <Router>
            <Switch>

              <Route path="/card" exact component={ProductBlock} />
              <Route path="/results" exact component={ProductResults} />
              
              <Route path="/cart" exact render={() => <Cart />} />
              <PrivateRoute access={true} path='/checkout' exact component={Cartcheckout} />

              <Route path="/:id" exact render={() => <ProductView />} />

              <PrivateRoute access={true} path='/s/seller' exact component={SellerPortal} />


            </Switch>
          </Router>
        </React.Suspense>

      </React.Fragment>
    );
  }

}

const mapStateToProps = store => {
  return {
    isAuthorised: store.isAuthorised
  }
}

const mapDispatchToProps = dispatch => {
  return {
    $setUser: () => dispatch(authActions.setUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



