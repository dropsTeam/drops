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
import { Skeleton } from 'antd';
import { connect } from 'react-redux';

import ProductBlock from "./components/ProductsBlock/ProductsBlock.js";
import ProductResults from "./components/ProductsResults/ProductsResults.js"

import NavBar from './components/Navbar/Navigationbar';
import SubNav from './components/Navbar/subnav';

import Loading from './components/Navbar/Loading/Loading';

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


        {this.props.view.loading && <Loading />}


        <React.Suspense fallback={<div><Skeleton active /> <br /> <Skeleton active /> <br /> <Skeleton active /> <br /><Skeleton active /> </div>}>
          <Router>

            <NavBar />
            <SubNav />

            <Switch>

              <Route path="/card" exact component={ProductBlock} />
              <Route path="/results" exact component={ProductResults} />

              <Route path="/cart" exact render={() => <Cart />} />
              <PrivateRoute access={true} path='/checkout' exact component={Checkout} />

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
    isAuthorised: store.isAuthorised,
    view: store.view
  }
}

const mapDispatchToProps = dispatch => {
  return {
    $setUser: () => dispatch(authActions.setUser()),
    $loadCart: (isAuthorised) => dispatch(cartActions.loadCart(isAuthorised))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



